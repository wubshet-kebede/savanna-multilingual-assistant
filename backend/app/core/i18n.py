"""
Internationalization (i18n) Engine for Savanna Multilingual Assistant.
Provides zero-latency, deterministic localization for buttons, headers, citations,
and system commands across English, Amharic, Afaan Oromoo, Tigrinya, Somali, and Arabic.
"""

STRINGS = {
    "en": {
        "listen_btn": "🔊 Listen to Answer",
        "mentor_btn": "🆘 Talk to Mentor",
        "jobs_btn": "💼 View Inclusive Jobs",
        "lang_btn": "🌐 Language",
        "acc_btn": "♿ Accommodations",
        "a11y_btn": "♿ Accessibility Guide",
        "simple_toggle_btn": "🧠 Toggle Simple Mode",
        "voice_toggle_btn": "🔊 Toggle Auto-Voice",
        "voice_on": "🔊 <b>Auto-Voice Mode (Hands-Free):</b> ON All future answers will automatically include spoken audio voice notes!",
        "voice_off": "🔊 <b>Auto-Voice Mode:</b> OFF Audio is now on-demand using the [🔊 Listen] button.",
        
        "citation_header": "📚 Verified Course Citation:",
        "course_source": "📌 Course Source:",
        "lesson_anchor": "🔗 Lesson Anchor:",
        "rag_engine": "⚡ RAG Engine:",
        "engine_cloud": "Gemini 3.8 AI",
        "engine_local": "Savanna Vector Store",

        "select_lang": "🌐 <b>Select your preferred learning language:</b>",
        "lang_updated": "✅ Language updated to <b>{name}</b>. All future answers, citations, and menus will be in this language.",
        
        "simple_on": "♿ <b>Cognitive Simple Mode (WCAG 3.1.5):</b> ON (Plain language explanations enabled)",
        "simple_off": "♿ <b>Cognitive Simple Mode (WCAG 3.1.5):</b> OFF (Standard technical detail)",
        
        "audio_generating": "Generating audio read-aloud...",
        "audio_unavailable": "Audio read-aloud is currently unavailable for this snippet.",
        "audio_caption": "🔊 Audio Read-Aloud",
        
        "voice_heard": "🎙️ <i>Heard: \"{query}\"</i>",
        "voice_error": "⚠️ <i>Sorry, I couldn't transcribe your voice note clearly. Please speak closer to the mic or type your question.</i>",
        
        "jobs_header": "💼 <b>Verified Inclusive Job Opportunities:</b>\n",
        "jobs_none": "No jobs currently available for this cohort.",
        "acc_label": "♿ <b>Certified Accommodations:</b>",
        "align_label": "🎯 <b>Curriculum Alignment:</b>",
        
        "mentor_title": "🆘 <b>Human Mentor Alerted!</b>\n\n",
        "mentor_name": "<b>Assigned Mentor:</b> {mentor}\n",
        "mentor_session": "<b>Session ID:</b> <code>{session_id}</code>\n",
        "mentor_status": "<b>Status:</b> {status}\n\n",
        "mentor_desc": "Your mentor has received your question context and will contact you directly.",
        
        "help_text": (
            "ℹ️ <b>How the Savanna RAG Tutor Works</b>\n\n"
            "1. <b>Zero Hallucinations:</b> Every response is strictly grounded in the Savanna "
            "curriculum using high-dimensional vector embeddings (pgvector) and hybrid title re-ranking.\n\n"
            "2. <b>Verifiable Citations:</b> Each answer includes the exact module heading "
            "and section anchor so you can verify the content in your learning dashboard.\n\n"
            "3. <b>Commands:</b>\n"
            "• /a11y - Accessibility and screen reader guide\n"
            "• /simple - Toggle cognitive plain-language mode (WCAG 3.1.5)\n"
            "• /jobs - View remote roles with certified accommodations\n"
            "• /mentor - Request live human mentor assistance\n"
            "• /lang - Change preferred response language\n\n"
            "Simply type or speak your question to begin!"
        ),

        "acc_info": (
            "♿ <b>Standardized Interview Accommodations:</b>\n\n"
            "Savanna partners guarantee non-discriminatory interviews. Available certified accommodations include:\n"
            "• <b>Screen Reader Compatible Testing:</b> Full NVDA / TalkBack testing environments.\n"
            "• <b>Extended Evaluation Time:</b> 25% - 50% additional time for assessments.\n"
            "• <b>Flexible Interview Formats:</b> Camera-Optional or Written Q&A format.\n\n"
            "You can request these with one click through /jobs or in the web Career Gateway."
        ),

        "a11y_info": (
            "♿ <b>Savanna Accessibility & Assistive Features (WCAG 2.2 AA)</b>\n\n"
            "This bot is engineered to provide equal access for students with diverse abilities:\n\n"
            "👁️ <b>Blind & Low-Vision Learners:</b>\n"
            "• <b>Audio Read-Aloud:</b> Tap <code>[🔊 Listen to Answer]</code> on any response to hear natural speech.\n"
            "• <b>Voice Input:</b> Hold the Telegram microphone button and send a voice note — the bot will answer in speech!\n"
            "• <b>Screen Reader Optimized:</b> Tested for TalkBack (Android), VoiceOver (iOS), and NVDA/JAWS (Desktop). No repetitive ASCII dividers.\n\n"
            "🧠 <b>Cognitive & Neurodivergent Learners:</b>\n"
            "• <b>Plain Language Mode (WCAG 3.1.5):</b> Type /simple to toggle concise explanations with everyday analogies and bullet points.\n\n"
            "💼 <b>Standardized Interview Accommodations:</b>\n"
            "• Type /jobs to browse certified roles with Screen Reader Compatibility, 25-50% Extended Test Time, and Camera-Optional interviews."
        )
    },

    "am": {
        "listen_btn": "🔊 መልሱን ያዳምጡ",
        "mentor_btn": "🆘 ከአማካሪ ጋር ይነጋገሩ",
        "jobs_btn": "💼 አካታች የሥራ ዕድሎች",
        "lang_btn": "🌐 ቋንቋ ቀይር",
        "acc_btn": "♿ የተስማሚነት ድጋፎች",
        "a11y_btn": "♿ የተደራሽነት መመሪያ",
        "simple_toggle_btn": "🧠 ቀላል ሁነታን ቀይር",
        "voice_toggle_btn": "🔊 ራስ-ሰር ድምፅን ቀይር",
        "voice_on": "🔊 <b>ራስ-ሰር የድምፅ ሁነታ:</b> በርቷል ከእንግዲህ ሁሉም መልሶች በድምፅ ተነበው በቀጥታ ይላካሉ!",
        "voice_off": "🔊 <b>ራስ-ሰር የድምፅ ሁነታ:</b> ጠፍቷል መልሶች በጽሑፍ እና በ[🔊 መልሱን ያዳምጡ] አዝራር ይቀርባሉ።",
        
        "citation_header": "📚 የተረጋገጠ የትምህርት ጥቅስ፡",
        "course_source": "📌 የትምህርት ምንጭ፡",
        "lesson_anchor": "🔗 የትምህርት ማገናኛ፡",
        "rag_engine": "⚡ የፍለጋ ሞተር፡",
        "engine_cloud": "Gemini 3.8 AI",
        "engine_local": "Savanna Vector Store",

        "select_lang": "🌐 <b>እባክዎ የሚፈልጉትን የመማሪያ ቋንቋ ይምረጡ፡</b>",
        "lang_updated": "✅ ቋንቋ ወደ <b>{name}</b> ተቀይሯል። ከእንግዲህ ሁሉም መልሶች፣ ማገናኛዎች እና አዝራሮች በዚህ ቋንቋ ይቀርባሉ።",
        
        "simple_on": "♿ <b>ቀላል የአቀራረብ ሁነታ (WCAG 3.1.5):</b> በርቷል (ቀላል ቃላት እና አጫጭር ዓረፍተ ነገሮች)",
        "simple_off": "♿ <b>ቀላል የአቀራረብ ሁነታ (WCAG 3.1.5):</b> ጠፍቷል (መደበኛ ዝርዝር መረጃ)",
        
        "audio_generating": "የድምፅ ንባብ እየተዘጋጀ ነው...",
        "audio_unavailable": "የድምፅ ንባብ ለዚህ ጽሑፍ ለጊዜው አይገኝም።",
        "audio_caption": "🔊 የድምፅ ንባብ",
        
        "voice_heard": "🎙️ <i>የተሰማው ጥያቄ፡ \"{query}\"</i>",
        "voice_error": "⚠️ <i>ይቅርታ፣ የድምፅ መልዕክትዎ በግልጽ አልተሰማም። እባክዎ እንደገና ይናገሩ ወይም ጥያቄዎን በጽሑፍ ይላኩ።</i>",
        
        "jobs_header": "💼 <b>የተረጋገጡ አካታች የሥራ ዕድሎች፡</b>\n",
        "jobs_none": "በአሁኑ ጊዜ ለዚህ ቡድን ክፍት የሥራ ዕድል የለም።",
        "acc_label": "♿ <b>የተረጋገጡ ድጋፎች፡</b>",
        "align_label": "🎯 <b>የትምህርት ትስስር፡</b>",
        
        "mentor_title": "🆘 <b>የሰው አማካሪ ተመድቧል!</b>\n\n",
        "mentor_name": "<b>የተመደበ አማካሪ፡</b> {mentor}\n",
        "mentor_session": "<b>የክፍለ ጊዜ መለያ፡</b> <code>{session_id}</code>\n",
        "mentor_status": "<b>ሁኔታ፡</b> {status}\n\n",
        "mentor_desc": "አማካሪዎ የጥያቄዎን ይዘት ተቀብሏል፤ በቀጥታ ያነጋግርዎታል።",
        
        "help_text": (
            "ℹ️ <b>የሳቫና AI አስጠኚ እንዴት እንደሚሰራ</b>\n\n"
            "1. <b>ዜሮ የተፈበረከ መረጃ (Zero Hallucinations):</b> እያንዳንዱ መልስ በከፍተኛ ጥራት ቬክተር ፍለጋ (pgvector) ከሳቫና ይፋዊ ሥርዓተ-ትምህርት ብቻ የተገኘ ነው።\n\n"
            "2. <b>ሊረጋገጡ የሚችሉ ጥቅሶች:</b> እያንዳንዱ መልስ ትክክለኛውን የትምህርት ርዕስ እና ማገናኛ ያካትታል፤ በትምህርት ዳሽቦርድዎ ላይ ማረጋገጥ ይችላሉ።\n\n"
            "3. <b>ትዕዛዞች:</b>\n"
            "• /a11y - የተደራሽነት እና የስክሪን አንባቢ መመሪያ\n"
            "• /simple - ቀላል የአቀራረብ ሁነታ (WCAG 3.1.5)\n"
            "• /jobs - አካታች የሥራ ዕድሎችን መመልከቻ\n"
            "• /mentor - የቀጥታ የሰው አማካሪ ድጋፍ መጠየቂያ\n"
            "• /lang - የመማሪያ ቋንቋ መቀየሪያ\n\n"
            "ለመጀመር ጥያቄዎን በጽሑፍ ይላኩ ወይም በድምፅ ይናገሩ!"
        ),

        "acc_info": (
            "♿ <b>መደበኛ የፈተና እና የቃለ-መጠይቅ ድጋፎች፡</b>\n\n"
            "የሳቫና አጋር ቀጣሪዎች አድልዎ የሌለበት ቅጥር ዋስትና ይሰጣሉ፡\n"
            "• <b>የስክሪን አንባቢ ምቹ ፈተና፡</b> ሙሉ የNVDA እና TalkBack ድጋፍ።\n"
            "• <b>ተጨማሪ የፈተና ጊዜ፡</b> ከ25% እስከ 50% ተጨማሪ የማሰብያ ጊዜ።\n"
            "• <b>ተለዋዋጭ የቃለ-መጠይቅ ቅርጸት፡</b> ካሜራን ማጥፋት ወይም በጽሑፍ መመለስ።\n\n"
            "እነዚህን በ/jobs ወይም በዌብሳይቱ በኩል በአንድ ጠቅታ መጠየቅ ይችላሉ።"
        ),

        "a11y_info": (
            "♿ <b>የሳቫና የተደራሽነት እና አጋዥ ቴክኖሎጂዎች (WCAG 2.2 AA)</b>\n\n"
            "ይህ ቦት ለማንኛውም ዓይነት ውስንነት ላለባቸው ተማሪዎች እኩል ዕድል ይሰጣል፡\n\n"
            "👁️ <b>ማየት ለተሳናቸው ተማሪዎች፡</b>\n"
            "• <b>የድምፅ ንባብ፡</b> በማንኛውም መልስ ላይ <code>[🔊 መልሱን ያዳምጡ]</code> የሚለውን በመንካት ንግግሩን ያዳምጡ።\n"
            "• <b>የድምፅ ግቤት፡</b> የማይክሮፎን ምልክቱን በመጫን ጥያቄዎን በድምፅ ይጠይቁ — ቦቱ በድምፅ ይመልስልዎታል!\n"
            "• <b>ለስክሪን አንባቢ ምቹ፡</b> በTalkBack፣ VoiceOver እና NVDA የተረጋገጠ ንጹህ አቀራረብ።\n\n"
            "🧠 <b>የመረዳት ድጋፍ ለሚያስፈልጋቸው፡</b>\n"
            "• <b>ቀላል የአቀራረብ ሁነታ፡</b> አጫጭር ዓረፍተ ነገሮችን እና ምሳሌዎችን ለማግኘት /simple ብለው ይላኩ።\n\n"
            "💼 <b>የቅጥር ድጋፍ፡</b>\n"
            "• ምቹ የፈተና ሁኔታዎችን ለማግኘት /jobs ብለው ይላኩ።"
        )
    },

    "om": {
        "listen_btn": "🔊 Deebii Dhaggeeffadhaa",
        "mentor_btn": "🆘 Gorsaa Waliin Haasawaa",
        "jobs_btn": "💼 Carraawwan Hojii",
        "lang_btn": "🌐 Afaan Jijjiiraa",
        "acc_btn": "♿ Qophiilee Tajaajilaa",
        "a11y_btn": "♿ Qajeelfama Tajaajilaa",
        "simple_toggle_btn": "🧠 Haala Salphaa",
        "voice_toggle_btn": "🔊 Haala Sagalee",
        "voice_on": "🔊 <b>Haala Sagalee Ofiin:</b> BANI Fuulduratti deebiiwwan hundi ofiin sagaleen dubbifamanii ergamu!",
        "voice_off": "🔊 <b>Haala Sagalee Ofiin:</b> DHAAMSI Deebiiwwan barreeffamaafi qabduu sagaleetiin dhiyaatu.",
        
        "citation_header": "📚 Ragaa Barnootaa Mirkanaa'e:",
        "course_source": "📌 Madda Barnootaa:",
        "lesson_anchor": "🔗 Qubsuma Barnootaa:",
        "rag_engine": "⚡ Mootora RAG:",
        "engine_cloud": "Gemini 3.8 AI",
        "engine_local": "Savanna Vector Store",

        "select_lang": "🌐 <b>Afaan barumsaa filadhaa:</b>",
        "lang_updated": "✅ Afaan gara <b>{name}</b>tti jijjiirameera. Fuulduratti deebiiwwan, wabiiwwan fi qabduuleen hundi afaan kanaan ta'u.",
        
        "simple_on": "♿ <b>Haala Salphaa (WCAG 3.1.5):</b> BANI (Ibsa salphaa fi ifa ta'e)",
        "simple_off": "♿ <b>Haala Salphaa (WCAG 3.1.5):</b> DHAAMSI (Ibsa bal'aa teeknikaa)",
        
        "audio_generating": "Sagaleen qophaa'aa jira...",
        "audio_unavailable": "Waraabbiin sagalee yeroof hin jiru.",
        "audio_caption": "🔊 Sagaleen Dubbisuu",
        
        "voice_heard": "🎙️ <i>Kan dhaga'ame: \"{query}\"</i>",
        "voice_error": "⚠️ <i>Dhiifama, sagaleen keessan ifatti hin dhaga'amne. Mee ammas irra deebiaatii dubbadhaa.</i>",
        
        "jobs_header": "💼 <b>Carraawwan Hojii Mirkanaa'an:</b>\n",
        "jobs_none": "Yeroo ammaa carraan hojii banaa hin jiru.",
        "acc_label": "♿ <b>Gargaarsa Mirkanaa'e:</b>",
        "align_label": "🎯 <b>Walitti Dhufeenya Barnootaa:</b>",
        
        "mentor_title": "🆘 <b>Gorsaan Namaa Qophaa'eera!</b>\n\n",
        "mentor_name": "<b>Gorsaa Ramadame:</b> {mentor}\n",
        "mentor_session": "<b>Waraqaa Eenyummaa:</b> <code>{session_id}</code>\n",
        "mentor_status": "<b>Haala:</b> {status}\n\n",
        "mentor_desc": "Gorsaan keessan gaaffii keessan argeera; battalatti isin qunnama.",
        
        "help_text": (
            "ℹ️ <b>Barsiisaan Savanna AI Akkamitti Hojjeta</b>\n\n"
            "1. <b>Zero Hallucinations:</b> Deebiin hundi sirna qabiyyee barnootaa Savanna irraa kallattiin argama.\n\n"
            "2. <b>Wabii Mirkanaa'e:</b> Deebiin hundi mata-duree barnootaafi qubsuma ifa ta'e of keessaa qaba.\n\n"
            "3. <b>Ajajawwan:</b>\n"
            "• /a11y - Qajeelfama tajaajila addaa\n"
            "• /simple - Haala afaan salphaa (WCAG 3.1.5)\n"
            "• /jobs - Carraawwan hojii ilaaluuf\n"
            "• /mentor - Gorsaa namaa gaafachuuf\n"
            "• /lang - Afaan barnootaa jijjiiruuf\n\n"
            "Jalqabuuf gaaffii keessan barreessaa ykn sagaleen ergaa!"
        ),

        "acc_info": (
            "♿ <b>Qophiilee Tajaajila Qormaataa fi Gaaffiifi Deebii:</b>\n\n"
            "Hojjachiistonni Savanna waliin hojjetan dorgommii haqa qabeessa taasisaniiru:\n"
            "• <b>Qormaata Screen Reader:</b> Tajaajila NVDA fi TalkBack guutuu.\n"
            "• <b>Yeroo Dabalataa:</b> Qormaataaf yeroo dabalataa 25% - 50%.\n"
            "• <b>Haala Gaaffiifi Deebii Mijaawaa:</b> Kaameeraa malee ykn barreeffamaan.\n\n"
            "Kanneen /jobs fayyadamuun gaafachuu dandeessu."
        ),

        "a11y_info": (
            "♿ <b>Tajaajiloota Addaa Savanna (WCAG 2.2 AA)</b>\n\n"
            "Botiin kun barattoota hundumaaf dandeettii isaaniitiin tajaajila qixa kenna:\n\n"
            "👁️ <b>Barattoota Ijaan Hin Argineef:</b>\n"
            "• <b>Sagaleen Dhaggeeffachuu:</b> <code>[🔊 Deebii Dhaggeeffadhaa]</code> cuqaasaa.\n"
            "• <b>Ergaa Sagalee:</b> Maayikroofoonii Telegram qabdanii sagaleen gaafadhaa.\n"
            "• <b>Screen Reader:</b> TalkBack fi VoiceOver waliin qoratamee kan mirkanaa'e.\n\n"
            "🧠 <b>Haala Hubannaa Salphaa:</b>\n"
            "• <b>Afaan Salphaa:</b> Himoota gaggabaaboo argachuuf /simple ergaa.\n\n"
            "💼 <b>Qophii Hojii:</b>\n"
            "• Tajaajila qormaataa argachuuf /jobs ergaa."
        )
    },

    "ti": {
        "listen_btn": "🔊 መልሲ ስምዑ",
        "mentor_btn": "🆘 ምስ መካሪ ተዘራረቡ",
        "jobs_btn": "💼 ስራሕ ዕድላት ርአይ",
        "lang_btn": "🌐 ቋንቋ ቀይር",
        "acc_btn": "♿ ናይ ተስማዕማዕነት ደገፍ",
        "a11y_btn": "♿ መምርሒ ተበጻሕነት",
        "simple_toggle_btn": "🧠 ቀሊል ኣገባብ",
        "voice_toggle_btn": "🔊 ናይ ድምጺ ኣገባብ",
        "voice_on": "🔊 <b>ናይ ድምጺ ኣገባብ:</b> በርዩ ኣሎ ዝቕጽሉ መልስታት ብድምጺ ክልኣኹ እዮም!",
        "voice_off": "🔊 <b>ናይ ድምጺ ኣገባብ:</b> ጠፊኡ ኣሎ",
        
        "citation_header": "📚 ዝተረጋገጸ ናይ ትምህርቲ ጥቕሲ፡",
        "course_source": "📌 ናይ ትምህርቲ ምንጪ፡",
        "lesson_anchor": "🔗 መላገቢ ትምህርቲ፡",
        "rag_engine": "⚡ ናይ ምድላይ ሞተር፡",
        "engine_cloud": "Gemini 3.8 AI",
        "engine_local": "Savanna Vector Store",

        "select_lang": "🌐 <b>ዝመረጽኩምዎ ናይ ትምህርቲ ቋንቋ ምረጹ፡</b>",
        "lang_updated": "✅ ቋንቋ ናብ <b>{name}</b> ተቐዪሩ ኣሎ።",
        "simple_on": "♿ <b>ቀሊል ኣገባብ (WCAG 3.1.5):</b> በርዩ ኣሎ",
        "simple_off": "♿ <b>ቀሊል ኣገባብ (WCAG 3.1.5):</b> ጠፊኡ ኣሎ",
        "audio_caption": "🔊 ናይ ድምጺ ንባብ",
        "voice_heard": "🎙️ <i>ዝተሰምዐ፡ \"{query}\"</i>",
        "voice_error": "⚠️ <i>ይቕሬታ ድምጽኹም ብንጹር ኣይተሰምዐን።</i>",
        "jobs_header": "💼 <b>ዝተረጋገጹ ናይ ስራሕ ዕድላት፡</b>\n",
        "jobs_none": "ህጹጽ ናይ ስራሕ ዕድል የለን።",
        "acc_label": "♿ <b>ዝተረጋገጹ ደገፋት፡</b>",
        "align_label": "🎯 <b>ምትእስሳር ትምህርቲ፡</b>",
        "mentor_title": "🆘 <b>ናይ ሰብ መካሪ ተመዲቡ!</b>\n\n",
        "mentor_name": "<b>ዝተመደበ መካሪ፡</b> {mentor}\n",
        "mentor_session": "<b>መፍለዪ ክፍለ-ጊዜ፡</b> <code>{session_id}</code>\n",
        "mentor_status": "<b>ኩነታት፡</b> {status}\n\n",
        "mentor_desc": "መካሪኹም ብቐጥታ ክረኽበኩም እዩ።",
        "help_text": "ℹ️ <b>ሳቫና AI መምህር ብኸመይ ይሰርሕ</b>\nኩሉ መልሲ ካብ ትምህርቲ ጥራይ ዝተረጋገጸ እዩ።",
        "acc_info": "♿ <b>ናይ ፈተናን ቃለ-መሕትትን ደገፋት፡</b>\nScreen Reader ምቹእ ፈተናታትን ተወሳኺ ግዜን።",
        "a11y_info": "♿ <b>ናይ ሳቫና ተበጻሕነት ደገፋት (WCAG 2.2 AA)</b>\nድምጺ ንምስማዕ [🔊 መልሲ ስምዑ] ጠውቑ።"
    },

    "so": {
        "listen_btn": "🔊 Dhagayso Jawaabta",
        "mentor_btn": "🆘 La Hadal La-taliye",
        "jobs_btn": "💼 Eeg Shaqooyinka",
        "lang_btn": "🌐 Luuqadda",
        "acc_btn": "♿ Fududeynta",
        "a11y_btn": "♿ Hagaha Helitaanka",
        "simple_toggle_btn": "🧠 Hab Fudud",
        "voice_toggle_btn": "🔊 Habka Codka",
        "voice_on": "🔊 <b>Habka Codka Tooska ah:</b> SHIDAN Dhammaan jawaabaha toos ayaa cod ahaan loogu soo diri doonaa!",
        "voice_off": "🔊 <b>Habka Codka Tooska ah:</b> DAMISAN",
        
        "citation_header": "📚 Xigasho Manhajka La Xaqiijiyey:",
        "course_source": "📌 Isha Manhajka:",
        "lesson_anchor": "🔗 Xiriiriyaha Casharka:",
        "rag_engine": "⚡ Matoorka RAG:",
        "engine_cloud": "Gemini 3.8 AI",
        "engine_local": "Savanna Vector Store",

        "select_lang": "🌐 <b>Fadlan dooro luuqaddaada:</b>",
        "lang_updated": "✅ Luuqadda waxaa loo beddelay <b>{name}</b>.",
        "simple_on": "♿ <b>Habka Fudud (WCAG 3.1.5):</b> SHIDAN",
        "simple_off": "♿ <b>Habka Fudud (WCAG 3.1.5):</b> DAMISAN",
        "audio_caption": "🔊 Akhrinta Codka",
        "voice_heard": "🎙️ <i>La maqlay: \"{query}\"</i>",
        "voice_error": "⚠️ <i>Waan ka xunnahay, codkaaga si cad looma maqal.</i>",
        "jobs_header": "💼 <b>Fursadaha Shaqo ee La Xaqiijiyey:</b>\n",
        "jobs_none": "Ma jiraan shaqooyin banaan hadda.",
        "acc_label": "♿ <b>Fududeynta La Xaqiijiyey:</b>",
        "align_label": "🎯 <b>Ku Habboonaanta Manhajka:</b>",
        "mentor_title": "🆘 <b>La-taliye Aadanaha Diyaar ah!</b>\n\n",
        "mentor_name": "<b>La-taliyaha:</b> {mentor}\n",
        "mentor_session": "<b>Aqoonsiga Kalfadhiga:</b> <code>{session_id}</code>\n",
        "mentor_status": "<b>Xaaladda:</b> {status}\n\n",
        "mentor_desc": "La-taliyahaaga ayaa kula soo xiriiri doona.",
        "help_text": "ℹ️ <b>Sida uu u Shaqeeyo Macalinka Savanna AI</b>\nDhammaan jawaabaha waxay toos uga yimaadaan manhajka.",
        "acc_info": "♿ <b>Fududeynta Imtixaanka:</b>\nScreen Reader iyo waqti dheeri ah.",
        "a11y_info": "♿ <b>Tilmaamaha Helitaanka (WCAG 2.2 AA)</b>\nTaabo [🔊 Dhagayso Jawaabta] si aad cod ugu dhagaysato."
    },

    "ar": {
        "listen_btn": "🔊 استمع إلى الإجابة",
        "mentor_btn": "🆘 تحدث مع المرشد",
        "jobs_btn": "💼 وظائف شاملة",
        "lang_btn": "🌐 تغيير اللغة",
        "acc_btn": "♿ التسهيلات والتيسيرات",
        "a11y_btn": "♿ دليل إمكانية الوصول",
        "simple_toggle_btn": "🧠 تبديل الوضع البسيط",
        "voice_toggle_btn": "🔊 وضع الصوت التلقائي",
        "voice_on": "🔊 <b>وضع الصوت التلقائي:</b> مفعّل ستتم قراءة جميع الإجابات المستقبلية وإرسالها كمقاطع صوتية تلقائيًا!",
        "voice_off": "🔊 <b>وضع الصوت التلقائي:</b> معطّل ستصلك الإجابات كنصوص مع زر الاستماع عند الطلب.",
        
        "citation_header": "📚 مرجع الدورة المعتمد:",
        "course_source": "📌 مصدر الدرس:",
        "lesson_anchor": "🔗 رابط الدرس المباشر:",
        "rag_engine": "⚡ محرك البحث الذكي:",
        "engine_cloud": "Gemini 3.8 AI",
        "engine_local": "Savanna Vector Store",

        "select_lang": "🌐 <b>يرجى تحديد لغة التعلم المفضلة لديك:</b>",
        "lang_updated": "✅ تم تحديث اللغة إلى <b>{name}</b>. ستكون جميع الإجابات والقوائم بهذه اللغة من الآن فصاعدًا.",
        
        "simple_on": "♿ <b>وضع التبسيط المعرفي (WCAG 3.1.5):</b> مفعّل (جمل قصيرة وتوضيحات مبسطة)",
        "simple_off": "♿ <b>وضع التبسيط المعرفي (WCAG 3.1.5):</b> معطّل (تفاصيل تقنية عادية)",
        
        "audio_generating": "جارٍ إنشاء المقطع الصوتي...",
        "audio_unavailable": "القراءة الصوتية غير متوفرة لهذا المقطع حاليًا.",
        "audio_caption": "🔊 قراءة صوتية",
        
        "voice_heard": "🎙️ <i>تم الاستماع: \"{query}\"</i>",
        "voice_error": "⚠️ <i>عذرًا، لم نتمكن من نسخ رسالتك الصوتية بوضوح. يرجى التحدث بالقرب من الميكروفون أو كتابة سؤالك.</i>",
        
        "jobs_header": "💼 <b>فرص العمل المعتمدة الدامجة:</b>\n",
        "jobs_none": "لا توجد وظائف متاحة لهذه الدفعة حاليًا.",
        "acc_label": "♿ <b>التسهيلات المعتمدة:</b>",
        "align_label": "🎯 <b>التوافق مع المنهج:</b>",
        
        "mentor_title": "🆘 <b>تم تنبيه المرشد البشري!</b>\n\n",
        "mentor_name": "<b>المرشد المعين:</b> {mentor}\n",
        "mentor_session": "<b>معرف الجلسة:</b> <code>{session_id}</code>\n",
        "mentor_status": "<b>الحالة:</b> {status}\n\n",
        "mentor_desc": "تلقى المرشد سياق سؤالك وسيتواصل معك مباشرة.",
        
        "help_text": (
            "ℹ️ <b>كيف يعمل معلم Savanna بالذكاء الاصطناعي</b>\n\n"
            "1. <b>انعدام الهلوسة:</b> كل إجابة مستندة بدقة إلى منهج Savanna الرسمي "
            "باستخدام تقنية البحث المتجهي عالية الأبعاد وإعادة الترتيب الهجين.\n\n"
            "2. <b>اقتباسات موثقة:</b> تتضمن كل إجابة عنوان الوحدة ورابط الدرس حتى تتمكن من التحقق منها.\n\n"
            "3. <b>الأوامر المتاحة:</b>\n"
            "• /a11y - دليل إمكانية الوصول وقارئات الشاشة\n"
            "• /simple - وضع التبسيط المعرفي (WCAG 3.1.5)\n"
            "• /jobs - عرض الوظائف الدامجة مع التسهيلات\n"
            "• /mentor - طلب المساعدة من مرشد بشري\n"
            "• /lang - تغيير لغة الاستجابة المفضلة\n\n"
            "اكتب أو تحدث بسؤالك للبدء!"
        ),

        "acc_info": (
            "♿ <b>تسهيلات المقابلات والتقييمات المعتمدة:</b>\n\n"
            "يضمن شركاء Savanna مقابلات غير تمييزية للمتقدمين من ذوي الإعاقة:\n"
            "• <b>اختبارات متوافقة مع قارئات الشاشة:</b> بيئات NVDA وTalkBack كاملة.\n"
            "• <b>وقت تقييم إضافي:</b> من 25% إلى 50% وقت إضافي.\n"
            "• <b>صيغ مقابلات مرنة:</b> خيار إيقاف الكاميرا أو الأسئلة المكتوبة.\n\n"
            "يمكنك طلب هذه التسهيلات بنقرة واحدة عبر /jobs."
        ),

        "a11y_info": (
            "♿ <b>ميزات إمكانية الوصول والتقنيات المساعدة (WCAG 2.2 AA)</b>\n\n"
            "تم تصميم هذا المساعد ليوفر تكافؤ الفرص لجميع المتعلمين:\n\n"
            "👁️ <b>للمكفوفين وضعاف البصر:</b>\n"
            "• <b>القراءة الصوتية:</b> انقر على <code>[🔊 استمع إلى الإجابة]</code> للاستماع بصوت طبيعي.\n"
            "• <b>الإدخال الصوتي:</b> اضغط مطولاً على ميكروفون تليجرام لإرسال سؤالك صوتيًا.\n"
            "• <b>متوافق مع قارئات الشاشة:</b> تم اختباره مع TalkBack وVoiceOver وNVDA.\n\n"
            "🧠 <b>لذوي الاحتياجات المعرفية:</b>\n"
            "• <b>لغة بسيطة (WCAG 3.1.5):</b> اكتب /simple للحصول على شروحات مبسطة.\n\n"
            "💼 <b>تسهيلات التوظيف المعتمدة:</b>\n"
            "• اكتب /jobs لتصفح الوظائف الدامجة."
        )
    }
}

def t(key: str, lang: str = "en", **kwargs) -> str:
    """
    Retrieves localized string for key and language with automatic fallback to English.
    Interpolates any dynamic variables passed in kwargs.
    """
    lang_dict = STRINGS.get(lang, STRINGS["en"])
    val = lang_dict.get(key)
    if val is None:
        val = STRINGS["en"].get(key, "")
    
    if kwargs and isinstance(val, str):
        try:
            return val.format(**kwargs)
        except Exception:
            return val
    return val
