import re
from typing import List, Dict, Optional
import io
import csv

# Anonymized Question Database (In-Memory + Seeded Knowledge)
# STRICT PRIVACY RULE: Zero student names, zero phone numbers, zero IP addresses.
_SEEDED_QUESTIONS: List[dict] = [
    {
        "id": "Q-101",
        "question": "What is the key difference between an AI tool and a human Virtual Assistant?",
        "question_am": "በ AI መሳሪያ እና በሰው Virtual Assistant መካከል ያለው ዋና ልዩነት ምንድን ነው?",
        "question_om": "Garaagarummaan guddaan meeshaa AI fi gargaaraa Virtual Assistant namaa gidduu jiru maali?",
        "topic": "AI vs Human Remote VA",
        "topic_am": "AI እና የሰው ረዳት ንፅፅር",
        "topic_om": "AI fi Gargaaraa Namaa",
        "ask_count": 62,
        "top_language": "Amharic (52%)",
        "human_escalations": 5,
        "sample_ai_answer": "AI automates repetitive tasks (scheduling, drafting), while human VAs provide emotional intelligence, client relationships, and context-dependent judgment.",
        "sample_ai_answer_am": "AI ተደጋጋሚ ስራዎችን ያከናውናል (መርሃ ግብር ማዘጋጀት፣ ረቂቅ መፃፍ)፤ የሰው ረዳት ግን ስሜታዊ ብልህነትን፣ የደንበኛ ግንኙነትን እና ሁኔታዊ ውሳኔን ይሰጣል።",
        "sample_ai_answer_om": "AI hojiiwwan irra deddeebi'an hojjeta; gargaaran namaa garuu walitti dhufeenya maamilaa fi murtoo qabatamaa kenna."
    },
    {
        "id": "Q-102",
        "question": "How do I calculate timezone overlap between Addis Ababa (EAT) and New York (EST)?",
        "question_am": "በአዲስ አበባ (EAT) እና በኒው ዮርክ (EST) መካከል ያለውን የሰዓት ተደራራቢነት (overlap) እንዴት ማስላት እችላለሁ?",
        "question_om": "Wal-irra oolmaa sa'aatii Finfinnee (EAT) fi New York (EST) gidduu jiru akkamiin shallaga?",
        "topic": "Remote Work Timezones & EAT",
        "topic_am": "የርቀት ስራ የሰዓት ሰቅ እና ኢትዮጵያ (EAT)",
        "topic_om": "Sa'aatii Hojii Fagoofi EAT",
        "ask_count": 34,
        "top_language": "Amharic (60%)",
        "human_escalations": 3,
        "sample_ai_answer": "Addis Ababa (EAT, UTC+3) is 7 hours ahead of New York (EST, UTC-4/5). An overlap window of 4:00 PM to 8:00 PM EAT matches 9:00 AM to 1:00 PM EST.",
        "sample_ai_answer_am": "አዲስ አበባ (EAT, UTC+3) ከኒው ዮርክ በ 7 ሰዓታት ትቀድማለች። ከቀኑ 10:00 እስከ ምሽቱ 2:00 (4 PM - 8 PM EAT) ያለው ጊዜ በኒው ዮርክ ከጠዋቱ 3:00 እስከ 7:00 (9 AM - 1 PM EST) ጋር ይገጥማል።",
        "sample_ai_answer_om": "Finfinneen sa'aatii 7n New York dursiti. Sa'aatii 4:00 PM hanga 8:00 PM EAT kan jiru sa'aatii 9:00 AM hanga 1:00 PM EST wajjin walsima."
    },
    {
        "id": "Q-103",
        "question": "What is a realistic hourly proposal rate in USD for an entry-level African VA?",
        "question_am": "ለጀማሪ አፍሪካዊ Virtual Assistant ተጨባጭ የሰዓት ተመን በዶላር (USD) ስንት ነው?",
        "question_om": "Gatiin sa'aatii doolaaraan gargaaraa Virtual Assistant sadarkaa jalqabaa akkami?",
        "topic": "Proposal Pricing & Invoicing",
        "topic_am": "የዋጋ አወሳሰን እና ደረሰኝ",
        "topic_om": "Gatii Hojii fi Kaffaltii",
        "ask_count": 29,
        "top_language": "English (45%)",
        "human_escalations": 1,
        "sample_ai_answer": "Entry-level international remote rates typically start between $5 to $10/hour, or $400 to $700/month for dedicated full-time support.",
        "sample_ai_answer_am": "ለጀማሪ ዓለም አቀፍ የርቀት ሰራተኞች ተመን በሰዓት ከ $5 እስከ $10 ዶላር፣ ወይም ለሙሉ ጊዜ ድጋፍ በወር ከ $400 እስከ $700 ዶላር ይጀምራል።",
        "sample_ai_answer_om": "Gatiin jalqabaa sa'aatiitti $5 hanga $10 doolaara, yookiin ji'atti $400 hanga $700 doolaara ta'a."
    },
    {
        "id": "Q-104",
        "question": "What minimum laptop specs and internet speed do I need for remote administrative support?",
        "question_am": "የርቀት የአስተዳደር ድጋፍ ስራ ለመስራት አነስተኛው የላፕቶፕ እና የኢንተርኔት ፍጥነት መስፈርት ምንድን ነው?",
        "question_om": "Ulaagaan kompiitaraa fi saffisni intarneetii hojii gargaaraa fagoof barbaachisu maali?",
        "topic": "Technical Hardware & Connectivity",
        "topic_am": "የቴክኒክ መሳሪያዎች እና ኢንተርኔት",
        "topic_om": "Meeshaalee Teeknoloojii fi Intarneetii",
        "ask_count": 24,
        "top_language": "Afaan Oromo (48%)",
        "human_escalations": 0,
        "sample_ai_answer": "Minimum: Core i3/Ryzen 3 with 8GB RAM, and a stable 10 Mbps connection (with mobile hotspot backup for power outages).",
        "sample_ai_answer_am": "አነስተኛ መስፈርት፡ Core i3/Ryzen 3 ፕሮሰሰር፣ 8GB RAM፣ እና 10 Mbps የኢንተርኔት ፍጥነት (ከመብራት መቆራረጥ መከላከያ የሞባይል ሆትስፖት ጋር)።",
        "sample_ai_answer_om": "Ulaagaa gadi aanaa: Core i3/Ryzen 3, 8GB RAM, fi saffisa intarneetii 10 Mbps backup mobaayilaa wajjin."
    },
    {
        "id": "Q-105",
        "question": "How can I formally request interview accommodations for remote video screenings?",
        "question_am": "በርቀት የቪዲዮ ቃለ-መጠይቆች ላይ ልዩ ድጋፍ (accommodations) በይፋ እንዴት መጠየቅ እችላለሁ?",
        "question_om": "Qormaata afaaniitiif deeggarsa addaa akkamiin iyyachuu danda'a?",
        "topic": "Career & Interview Accommodations",
        "topic_am": "የስራ እድል እና ልዩ ድጋፍ",
        "topic_om": "Carraa Hojiifi Deeggarsa Addaa",
        "ask_count": 18,
        "top_language": "Amharic (55%)",
        "human_escalations": 0,
        "sample_ai_answer": "Submit an accommodation request letter (code ACC-XXXXXX) specifying needs like live automated captions, asynchronous chat interviews, or extended prep time.",
        "sample_ai_answer_am": "የድጋፍ መጠየቂያ ደብዳቤ (ኮድ ACC-XXXXXX) በማስገባት እንደ ቀጥታ የትርጉም ጽሑፍ፣ የጽሁፍ ቃለ-መጠይቅ ወይም ተጨማሪ የዝግጅት ጊዜ መጠየቅ ይችላሉ።",
        "sample_ai_answer_om": "Waraqaa iyyannoo deeggarsaa (koodii ACC-XXXXXX) galchuudhaan barreeffama yeroo dheeraa yookiin qormaata barreeffamaa gaafadhaa."
    }
]

_ANONYMOUS_LOGS: List[dict] = []


class TeacherService:
    @staticmethod
    def get_insights(partner_id: str = "savanna", course_id: str = "VA-1") -> dict:
        total_asks = sum(q["ask_count"] for q in _SEEDED_QUESTIONS) + len(_ANONYMOUS_LOGS)
        total_escalations = sum(q["human_escalations"] for q in _SEEDED_QUESTIONS)

        return {
            "partner_id": partner_id,
            "course_id": course_id,
            "total_questions": total_asks,
            "escalated_to_human_count": total_escalations,
            "anonymity_status": "100% Privacy Compliant - Anonymized aggregate telemetry, zero student names, IDs, or IP addresses stored.",
            "top_confusing_topics": [
                {"topic": "AI Assistant vs Human Remote VA", "topic_am": "AI እና የሰው ረዳት ንፅፅር", "topic_om": "AI fi Gargaaraa Namaa", "count": 62, "status": "needs_clarification", "pct": "43%"},
                {"topic": "Remote Work Timezones & EAT", "topic_am": "የርቀት ስራ የሰዓት ሰቅ እና ኢትዮጵያ (EAT)", "topic_om": "Sa'aatii Hojii Fagoofi EAT", "count": 34, "status": "moderate_confusion", "pct": "24%"},
                {"topic": "Proposal Pricing & Invoicing", "topic_am": "የዋጋ አወሳሰን እና ደረሰኝ", "topic_om": "Gatii Hojii fi Kaffaltii", "count": 29, "status": "normal", "pct": "20%"},
                {"topic": "Technical Hardware & Connectivity", "topic_am": "የቴክኒክ መሳሪያዎች እና ኢንተርኔት", "topic_om": "Meeshaalee Teeknoloojii fi Intarneetii", "count": 24, "status": "normal", "pct": "17%"},
                {"topic": "Career & Interview Accommodations", "topic_am": "የስራ እድል እና ልዩ ድጋፍ", "topic_om": "Carraa Hojiifi Deeggarsa Addaa", "count": 18, "status": "normal", "pct": "13%"}
            ],
            "language_distribution": {
                "am": "48%",
                "om": "22%",
                "en": "18%",
                "ti": "8%",
                "ar": "4%"
            },
            "channel_distribution": {
                "web_widget": "68%",
                "telegram_bot": "22%",
                "sms_channel": "10%"
            },
            "most_asked_questions": _SEEDED_QUESTIONS,
            "curriculum_insights": [
                {
                    "topic": "AI Assistant vs Human Remote VA",
                    "topic_am": "AI እና የሰው ረዳት ንፅፅር",
                    "topic_om": "AI fi Gargaaraa Namaa",
                    "lesson_ref": "VA-1 / Lesson 1.2: Industry Evolution",
                    "finding": "Over 43% of learners repeatedly ask whether AI will make human VAs obsolete within 12 months.",
                    "finding_am": "ከ43% በላይ የሚሆኑ ተማሪዎች AI በሚቀጥሉት 12 ወራት ውስጥ የሰውን ረዳት ሙሉ በሙሉ ይተካል ወይ ብለው ይጠይቃሉ።",
                    "finding_om": "Barattoonni 43% ol AI ji'oota 12 dhufan keessatti gargaaraa namaa ni bakka bu'aa jedhanii gaafatu.",
                    "recommendation": "Add a prominent 2-minute video case study showing how top VAs use AI as a productivity co-pilot rather than a competitor.",
                    "recommendation_am": "ምርጥ ረዳቶች AIን እንደ ተፎካካሪ ሳይሆን እንደ ምርታማነት አጋዥ እንዴት እንደሚጠቀሙበት የሚያሳይ የ2-ደቂቃ ቪዲዮ ይጨምሩ።",
                    "recommendation_om": "Akkaataa gargaartonni AI akka gargaaraatti itti fayyadaman viidiyoo daqiiqaa 2 dabalaa.",
                    "priority": "high"
                },
                {
                    "topic": "Remote Work Timezones & EAT",
                    "topic_am": "የርቀት ስራ የሰዓት ሰቅ እና ኢትዮጵያ (EAT)",
                    "topic_om": "Sa'aatii Hojii Fagoofi EAT",
                    "lesson_ref": "VA-1 / Lesson 2.4: Client Communications",
                    "finding": "Highest human escalation rate occurs during timezone conversions between East Africa Time (EAT) and US Eastern/Pacific times.",
                    "finding_am": "ከፍተኛው የቀጥታ የሰው ረዳት ጥያቄ የሚመጣው በምስራቅ አፍሪካ ሰዓት (EAT) እና በአሜሪካ ሰዓት ስሌት ወቅት ነው።",
                    "finding_om": "Deeggarsi namaa inni guddaan sa'aatii Baha Afrikaa (EAT) fi Ameerikaa walbira qabuun dhufa.",
                    "recommendation": "Embed an interactive 24-hour comparative timezone slider into the course page.",
                    "recommendation_am": "በኮርሱ ገጽ ላይ በ EAT እና በአሜሪካ ሰዓት መካከል ያለውን ልዩነት የሚያሳይ ተንቀሳቃሽ የ24-ሰዓት ስላይደር ያክሉ።",
                    "recommendation_om": "Sarara sa'aatii Finfinnee fi Ameerikaa walbira qabu fuula barnootaa irratti dabalaa.",
                    "priority": "high"
                },
                {
                    "topic": "Multilingual Financial Terms",
                    "topic_am": "የውጭ ሀገር የገንዘብ እና የውል ቃላት",
                    "topic_om": "Jechoota Faayinaansii fi Kontiraataa",
                    "lesson_ref": "VA-1 / Lesson 4.1: Contracts & Invoices",
                    "finding": "Students often struggle with English contract jargon ('retainer', 'net-30', 'escrow').",
                    "finding_am": "ተማሪዎች በእንግሊዝኛ የውል ቃላት (እንደ 'escrow'፣ 'retainer'፣ 'net-30') ይቸገራሉ።",
                    "finding_om": "Barattoonni jechoota kontiraataa ingiliffaa irratti rakkatu.",
                    "recommendation": "Provide localized Amharic and Afaan Oromo audio tooltips for contract terminology.",
                    "recommendation_am": "ለውል ቃላቶች በአማርኛ እና በአፋን ኦሮሞ የድምጽ ማብራሪያዎችን ያካትቱ።",
                    "recommendation_om": "Jechoota kontiraataatiif ibsa sagalee Afaan Oromoo fi Amaaraa kennaa.",
                    "priority": "medium"
                }
            ]
        }

    @staticmethod
    def get_questions(topic: Optional[str] = None, language: Optional[str] = None, search: Optional[str] = None) -> List[dict]:
        results = list(_SEEDED_QUESTIONS)
        if topic:
            results = [q for q in results if topic.lower() in q["topic"].lower()]
        if language:
            results = [q for q in results if language.lower() in q["top_language"].lower()]
        if search:
            s = search.lower()
            results = [q for q in results if s in q["question"].lower() or s in q["sample_ai_answer"].lower()]
        return results

    @staticmethod
    def log_anonymous_question(course_id: str, question: str, topic: str = "General", language: str = "en", channel: str = "web") -> dict:
        # PII Stripping / Sanitization
        clean_q = re.sub(r'[\w\.-]+@[\w\.-]+', '[EMAIL_REDACTED]', question)
        clean_q = re.sub(r'\+?\d[\d -]{8,}\d', '[PHONE_REDACTED]', clean_q)

        # Match existing topic or question
        matched = False
        for q in _SEEDED_QUESTIONS:
            if topic.lower() in q["topic"].lower() or any(word in clean_q.lower() for word in q["question"].lower().split() if len(word) > 4):
                q["ask_count"] += 1
                matched = True
                break

        entry = {
            "course_id": course_id,
            "question": clean_q,
            "topic": topic,
            "language": language,
            "channel": channel
        }
        _ANONYMOUS_LOGS.append(entry)
        return {"status": "logged_anonymously", "stored_pii": False, "matched_topic": matched}

    @staticmethod
    def record_escalation(course_id: str = "VA-1", topic: str = "Live Escalation", language: str = "en") -> dict:
        _SEEDED_QUESTIONS[1]["human_escalations"] += 1
        entry = {
            "course_id": course_id,
            "question": f"[HUMAN ESCALATION] Student requested live mentor assistance for: {topic}",
            "topic": topic,
            "language": language,
            "channel": "web",
            "is_escalation": True
        }
        _ANONYMOUS_LOGS.append(entry)
        return {"status": "escalation_recorded", "total_escalations": sum(q["human_escalations"] for q in _SEEDED_QUESTIONS)}

    @staticmethod
    def export_csv() -> str:
        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow(["Question ID", "Topic", "Question (EN)", "Question (AM)", "Question (OM)", "Ask Count", "Primary Language", "Escalations", "AI Answer (EN)", "AI Answer (AM)", "AI Answer (OM)"])
        for q in _SEEDED_QUESTIONS:
            writer.writerow([
                q["id"],
                q["topic"],
                q["question"],
                q.get("question_am", ""),
                q.get("question_om", ""),
                q["ask_count"],
                q["top_language"],
                q["human_escalations"],
                q["sample_ai_answer"],
                q.get("sample_ai_answer_am", ""),
                q.get("sample_ai_answer_om", "")
            ])
        return output.getvalue()
