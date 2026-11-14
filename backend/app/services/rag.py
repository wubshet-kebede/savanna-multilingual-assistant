import json
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data', 'courses')

def get_partner_course_context(partner_id: str = "savanna", course_id: str = "VA-1") -> dict:
    file_path = os.path.join(DATA_DIR, f"{partner_id}_{course_id.lower().replace('-', '')}.json")
    if not os.path.exists(file_path):
        # Fallback to savanna_va1.json
        file_path = os.path.join(DATA_DIR, "savanna_va1.json")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def find_relevant_section(query: str, partner_id: str = "savanna", course_id: str = "VA-1") -> dict:
    data = get_partner_course_context(partner_id, course_id)
    query_lower = query.lower()
    
    for module in data.get("modules", []):
        for section in module.get("sections", []):
            # Check keywords in heading or text
            words = section["heading"].lower().split()
            if any(w in query_lower for w in words if len(w) > 3):
                return section
    
    # Default to first section as baseline
    first_module = data["modules"][0]
    return first_module["sections"][0]
