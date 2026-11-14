# Pluggable Language Registry supporting multiple regional and international languages

SUPPORTED_LANGUAGES = {
    "am": {
        "code": "am",
        "name": "Amharic",
        "native": "አማርኛ",
        "direction": "ltr",
        "speech_code": "am-ET",
        "welcome": "ሰላም! ዛሬ ምን ማወቅ ይፈልጋሉ?"
    },
    "om": {
        "code": "om",
        "name": "Afaan Oromoo",
        "native": "Afaan Oromoo",
        "direction": "ltr",
        "speech_code": "om-ET",
        "welcome": "Akkam! Har'a maal baruu barbaaddu?"
    },
    "ti": {
        "code": "ti",
        "name": "Tigrinya",
        "native": "ትግርኛ",
        "direction": "ltr",
        "speech_code": "ti-ET",
        "welcome": "ሰላም! ሎሚ እንታይ ክትፈልጡ ትደልዩ?"
    },
    "so": {
        "code": "so",
        "name": "Somali",
        "native": "Af-Soomaali",
        "direction": "ltr",
        "speech_code": "so-SO",
        "welcome": "Asc! Maxaad jeclaan lahayd inaad barato maanta?"
    },
    "ar": {
        "code": "ar",
        "name": "Arabic",
        "native": "العربية",
        "direction": "rtl",
        "speech_code": "ar-SA",
        "welcome": "مرحباً! ماذا تود أن تتعلم اليوم؟"
    },
    "en": {
        "code": "en",
        "name": "English",
        "native": "English",
        "direction": "ltr",
        "speech_code": "en-US",
        "welcome": "Hello! What would you like to explore today?"
    }
}

def get_language_metadata(code: str) -> dict:
    return SUPPORTED_LANGUAGES.get(code, SUPPORTED_LANGUAGES["en"])
