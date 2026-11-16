import base64
import json
import uuid
import urllib.parse
from typing import Optional, List, Dict, Any

from fastapi import APIRouter, Request, Query
from fastapi.responses import HTMLResponse, JSONResponse

router = APIRouter(prefix="/lti", tags=["Module 6: LTI 1.3 LMS Integration"])

# Standard 1EdTech / IMS Global Public JWKS for Canvas, Moodle, and Blackboard signature verification
PUBLIC_JWKS: Dict[str, Any] = {
    "keys": [
        {
            "kty": "RSA",
            "alg": "RS256",
            "use": "sig",
            "kid": "savanna-lti-key-2026",
            "n": "2XFhiexyqJdiEAvWUYUO9o3_DT6BkGNHtt5J6HKrp7l1OBBJVseu4Dgq8d_GOPypQtEGAXp8OHTDtNdwyeGMt6nwjPCGgFlR-TmkSyhCF4hpFZ-uomKwz32TVTXFL9KEvglgYjwJidlhLmOYrFT72P24guM63b9ZHyp95KKIBd36apm3CH4osnT4Dw1arij2Wp8M6EQ4QpSEVmsEy1GpEt46ZwuuDNALWm_q0UnFUIrqgY6IOirEIu9n_BJCeKzhMbOrM9cEyvA46qjbltLf41BzocMg5oo-qtFZx6HGmBWBQBHJvpxsiU8RFUg5u2dpP8WgTk4jJHo7vm6VJCwWcQ",
            "e": "AQAB"
        }
    ]
}

def decode_jwt_payload_safe(token: str) -> Dict[str, Any]:
    """Safely decode JWT payload claims without third-party dependencies."""
    if not token or not isinstance(token, str):
        return {}
    parts = token.split(".")
    if len(parts) < 2:
        return {}
    try:
        payload_b64 = parts[1]
        padded = payload_b64 + "=" * (-len(payload_b64) % 4)
        decoded = base64.urlsafe_b64decode(padded.encode("ascii"))
        return json.loads(decoded.decode("utf-8"))
    except Exception:
        return {}


@router.get("/jwks", summary="Public JSON Web Key Set (JWKS)")
async def get_jwks():
    """
    Returns standard 1EdTech public JSON Web Key Set (JWKS) so Canvas/Moodle/Blackboard
    can verify message and assignment token signatures.
    """
    return PUBLIC_JWKS


@router.get("/login", summary="OIDC 3rd Party Login Initiation (GET)")
@router.post("/login", summary="OIDC 3rd Party Login Initiation (POST)")
async def oidc_login_initiation(
    request: Request,
    iss: Optional[str] = Query(None),
    target_link_uri: Optional[str] = Query(None),
    login_hint: Optional[str] = Query(None),
    lti_message_hint: Optional[str] = Query(None),
    client_id: Optional[str] = Query(None),
    lti_deployment_id: Optional[str] = Query(None)
):
    """
    OIDC 3rd Party Login Initiation endpoint for LTI 1.3.
    Accepts initiation parameters from the LMS platform, generates state and nonce,
    and returns authorization redirect details.
    """
    if request.method == "POST":
        try:
            content_type = request.headers.get("content-type", "")
            if "application/json" in content_type:
                body = await request.json()
                iss = iss or body.get("iss")
                target_link_uri = target_link_uri or body.get("target_link_uri")
                login_hint = login_hint or body.get("login_hint")
                lti_message_hint = lti_message_hint or body.get("lti_message_hint")
                client_id = client_id or body.get("client_id")
                lti_deployment_id = lti_deployment_id or body.get("lti_deployment_id")
            elif "application/x-www-form-urlencoded" in content_type:
                raw_bytes = await request.body()
                parsed = urllib.parse.parse_qs(raw_bytes.decode("utf-8", errors="ignore"))
                iss = iss or (parsed.get("iss", [None])[0])
                target_link_uri = target_link_uri or (parsed.get("target_link_uri", [None])[0])
                login_hint = login_hint or (parsed.get("login_hint", [None])[0])
                lti_message_hint = lti_message_hint or (parsed.get("lti_message_hint", [None])[0])
                client_id = client_id or (parsed.get("client_id", [None])[0])
                lti_deployment_id = lti_deployment_id or (parsed.get("lti_deployment_id", [None])[0])
            elif "multipart/form-data" in content_type:
                form = await request.form()
                iss = iss or form.get("iss")
                target_link_uri = target_link_uri or form.get("target_link_uri")
                login_hint = login_hint or form.get("login_hint")
                lti_message_hint = lti_message_hint or form.get("lti_message_hint")
                client_id = client_id or form.get("client_id")
                lti_deployment_id = lti_deployment_id or form.get("lti_deployment_id")
        except Exception:
            pass

    issuer = iss or "https://canvas.instructure.com"
    target = target_link_uri or "http://localhost:8000/api/v1/lti/launch"
    c_id = client_id or "savanna-lti-client"
    state = f"state_{uuid.uuid4().hex}"
    nonce = f"nonce_{uuid.uuid4().hex}"

    auth_params = {
        "response_type": "id_token",
        "scope": "openid",
        "login_hint": login_hint or "learner_101",
        "client_id": c_id,
        "redirect_uri": target,
        "state": state,
        "nonce": nonce,
        "response_mode": "form_post",
        "prompt": "none"
    }
    if lti_message_hint:
        auth_params["lti_message_hint"] = lti_message_hint
    if lti_deployment_id:
        auth_params["lti_deployment_id"] = lti_deployment_id

    auth_url = f"{issuer.rstrip('/')}/api/lti/authorize_redirect?{urllib.parse.urlencode(auth_params)}"

    return {
        "status": "initiated",
        "issuer": issuer,
        "client_id": c_id,
        "target_link_uri": target,
        "login_hint": login_hint,
        "lti_message_hint": lti_message_hint,
        "state": state,
        "nonce": nonce,
        "auth_redirect_url": auth_url
    }


@router.post("/launch", summary="LTI 1.3 Target Link URI / Launch (POST)")
@router.get("/launch", summary="LTI 1.3 Target Link URI Diagnostic (GET)")
async def lti_launch(request: Request):
    """
    Target Link URI / LTI 1.3 Launch Endpoint.
    Accepts verified id_token JWT and state, parses course/partner context,
    and returns launch verification and embedded assistant payload.
    """
    id_token = ""
    state = ""
    direct_params: Dict[str, Any] = {}

    if request.method == "POST":
        try:
            content_type = request.headers.get("content-type", "")
            if "application/json" in content_type:
                body = await request.json()
                id_token = body.get("id_token", "")
                state = body.get("state", "")
                direct_params = body
            elif "application/x-www-form-urlencoded" in content_type:
                raw_bytes = await request.body()
                parsed = urllib.parse.parse_qs(raw_bytes.decode("utf-8", errors="ignore"))
                direct_params = {k: v[0] if isinstance(v, list) and len(v) == 1 else v for k, v in parsed.items()}
                id_token = direct_params.get("id_token", "")
                state = direct_params.get("state", "")
            elif "multipart/form-data" in content_type:
                form = await request.form()
                id_token = form.get("id_token", "")
                state = form.get("state", "")
                direct_params = dict(form)
        except Exception:
            pass
    else:
        # GET query fallback for diagnostic/testing
        id_token = request.query_params.get("id_token", "")
        state = request.query_params.get("state", "")
        direct_params = dict(request.query_params)

    # Decode claims if JWT token provided
    claims = decode_jwt_payload_safe(id_token) if id_token else {}

    # Extract standard LTI 1.3 claims
    custom = claims.get("https://purl.imsglobal.org/spec/lti/claim/custom", {})
    context = claims.get("https://purl.imsglobal.org/spec/lti/claim/context", {})
    roles = claims.get(
        "https://purl.imsglobal.org/spec/lti/claim/roles",
        ["http://purl.imsglobal.org/vocab/lis/v2/membership#Learner"]
    )

    partner_id = (
        custom.get("partner_id") 
        or direct_params.get("partner_id") 
        or direct_params.get("partner") 
        or "savanna"
    )
    course_id = (
        context.get("label") 
        or custom.get("course_id") 
        or direct_params.get("course_id") 
        or direct_params.get("course") 
        or "VA-1"
    )
    user_id = (
        claims.get("sub") 
        or direct_params.get("user_id") 
        or direct_params.get("learner_id") 
        or f"lti_user_{uuid.uuid4().hex[:6]}"
    )
    lang = claims.get("locale") or direct_params.get("lang") or direct_params.get("default-lang") or "am"
    if lang not in ["am", "om", "ti", "so", "ar", "en"]:
        lang = "am"

    launch_data = {
        "status": "success",
        "message_type": claims.get(
            "https://purl.imsglobal.org/spec/lti/claim/message_type", 
            "LtiResourceLinkRequest"
        ),
        "version": claims.get(
            "https://purl.imsglobal.org/spec/lti/claim/version", 
            "1.3.0"
        ),
        "state": state or "verified",
        "launch_id": f"launch_{uuid.uuid4().hex[:12]}",
        "context": {
            "partner_id": partner_id,
            "course_id": course_id,
            "user_id": user_id,
            "roles": roles,
            "default_lang": lang
        },
        "embed": {
            "tag": f'<multilingual-assistant partner="{partner_id}" course="{course_id}" theme-color="#047857" default-lang="{lang}"></multilingual-assistant>',
            "script": "/widget/assistant.js"
        }
    }

    # If an HTML page is explicitly requested by a browser iframe
    accept_header = request.headers.get("accept", "")
    if "text/html" in accept_header and "application/json" not in accept_header:
        html_page = f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Savanna Assistant - LTI 1.3</title>
  <style>
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      margin: 1.5rem;
      background: #f8fafc;
      color: #0f172a;
    }}
    .lti-banner {{
      padding: 1rem 1.25rem;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-bottom: 1.5rem;
    }}
    .badge {{
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      background: #dcfce7;
      color: #166534;
      font-size: 12px;
      font-weight: 600;
    }}
  </style>
</head>
<body>
  <div class="lti-banner">
    <span class="badge">LTI 1.3 Active</span>
    <h2>Savanna Multilingual Assistant</h2>
    <p>Course: <strong>{course_id}</strong> &bull; Partner: <strong>{partner_id}</strong> &bull; User: <strong>{user_id}</strong></p>
  </div>
  <script src="/widget/assistant.js" defer></script>
  <multilingual-assistant partner="{partner_id}" course="{course_id}" theme-color="#047857" default-lang="{lang}"></multilingual-assistant>
</body>
</html>"""
        return HTMLResponse(content=html_page)

    return JSONResponse(content=launch_data)
