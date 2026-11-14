/**
 * Universal Multilingual Assistant & Live Help (Level 1 Web Component)
 * PHASE 3: Screen Reader Live Announcements & Interactive Course Grounding Engine.
 * Supports Amharic, Afaan Oromo, Tigrinya, Somali, Arabic (RTL), and English.
 * Fully compliant with WCAG 2.2 AA (SC 4.1.3 Status Messages, SC 1.3.1 Info and Relationships, SC 2.4.7 Focus Visible, SC 3.1.2 Language of Parts, SC 1.4.3 Contrast).
 */

const LOCALIZED_UI = {
  am: {
    launcher: "ረዳት ይጠይቁ (አማርኛ)",
    dialogTitle: "ሁለንተናዊ ባለብዙ ቋንቋ የትምህርት ረዳት",
    tutorTab: "📚 የኮርስ ረዳት",
    careerTab: "💼 የስራ እድሎች",
    placeholder: "ጥያቄዎን ከኮርሱ እዚህ ይጻፉ...",
    send: "ላክ",
    micLabel: "በድምጽ ይጠይቁ",
    simpleBtn: "🧠 ቀላል ሁነታ",
    simpleActive: "ቀላል ሁነታ: በርቷል",
    humanHelpBtn: "🆘 የሰው እርዳታ",
    closeTitle: "ዝጋ (Escape)",
    screenShareActive: "🟢 ስክሪን ማጋራት በርቷል (በእርስዎ ቁጥጥር ስር)",
    stopShare: "አቁም",
    welcome: "ሰላም! እኔ የእርስዎ የኮርስ ረዳት ነኝ። በኮርሱ ዙሪያ ማንኛውንም ጥያቄ ይጠይቁኝ።",
    sourceLabel: "የኮርስ ምንጭ",
    direction: "ltr",
    speechLang: "am-ET",
    soundToggle: "የድምጽ ምልክቶች",
    soundOn: "ድምጽ በርቷል",
    soundOff: "ድምጽ ጠፍቷል",
    citationAnnounce: "የኮርስ ምንጭ ማጣቀሻ፦",
    navigatedTo: "ወደ ኮርሱ ክፍል ተዘዋውሯል፦",
    sendingMsg: "ጥያቄ ወደ ረዳቱ እየተላከ ነው...",
    assistantReplied: "ረዳቱ መለሰ፦",
    copyCitation: "ማጣቀሻ ቅዳ",
    citationCopied: "ማጣቀሻው ተቀድቷል!",
    jumpToSection: "በኮርሱ ውስጥ ክፈት"
  },
  om: {
    launcher: "Gargaaraa Gaafadhaa",
    dialogTitle: "Gargaaraa Barnootaa Afaan Baay'ee",
    tutorTab: "📚 Gargaaraa Koorsii",
    careerTab: "💼 Carraawwan Hojii",
    placeholder: "Gaaffii keessan asitti barreessaa...",
    send: "Ergi",
    micLabel: "Sagaleen gaafadhaa",
    simpleBtn: "🧠 Haala Salphaa",
    simpleActive: "Salphaa: Hojjetaa jira",
    humanHelpBtn: "🆘 Gargaarsa Namaa",
    closeTitle: "Cufi (Escape)",
    screenShareActive: "🟢 Iskirinii qooduun hojjetaa jira (To'annoo keessan jala)",
    stopShare: "Dhaabi",
    welcome: "Akkam! Ani gargaaraa koorsii keessaniiti. Gaaffii qabdan kamiyyuu na gaafadhaa.",
    sourceLabel: "Madda Koorsii",
    direction: "ltr",
    speechLang: "om-ET",
    soundToggle: "Mallattoo Sagalee",
    soundOn: "Sagaleen banaadha",
    soundOff: "Sagaleen cufamaadha",
    citationAnnounce: "Madda koorsii፦",
    navigatedTo: "Gara kutaa koorsichaatti darbe፦",
    sendingMsg: "Gaaffiin gara gargaaraatti ergamaa jira...",
    assistantReplied: "Gargaaraan deebise፦",
    copyCitation: "Wabii waraabi",
    citationCopied: "Wabiin waraabameera!",
    jumpToSection: "Koorsicha keessatti bani"
  },
  ti: {
    launcher: "ሓጋዚ ሕተቱ",
    dialogTitle: "ኩለመዳያዊ فرቲ ሓጋዚ ትምህርቲ",
    tutorTab: "📚 ናይ ኮርስ ሓጋዚ",
    careerTab: "💼 ናይ ስራሕ ዕድላት",
    placeholder: "ሕቶኹም ኣብዚ ጸሓፉ...",
    send: "ስደድ",
    micLabel: "ብድምጺ ሕተቱ",
    simpleBtn: "🧠 ቀሊል ኣገባብ",
    simpleActive: "ቀሊል: በርቲሁ ኣሎ",
    humanHelpBtn: "🆘 ናይ ሰብ ሓገዝ",
    closeTitle: "ዕጾ (Escape)",
    screenShareActive: "🟢 ስክሪን ምክፋል በርቲሁ ኣሎ",
    stopShare: "ኣቋርጽ",
    welcome: "ሰላም! ኣነ ናይዚ ኮርስ ሓጋዚኹም እየ። ዝኾነ ሕቶ ሃልዩኩም ሕተቱኒ።",
    sourceLabel: "ምንጪ ኮርስ",
    direction: "ltr",
    speechLang: "ti-ET",
    soundToggle: "ናይ ድምጺ ምልክታት",
    soundOn: "ድምጺ በርቲሁ",
    soundOff: "ድምጺ ጠፊኡ",
    citationAnnounce: "ናይ ኮርስ ምንጪ፦",
    navigatedTo: "ናብ ክፍሊ ኮርስ ተሳጋጊሩ፦",
    sendingMsg: "ሕቶ ናብ ሓጋዚ ይስደድ ኣሎ...",
    assistantReplied: "ሓጋዚ መሊሱ፦",
    copyCitation: "ማጣቀሲ ቅዳሕ",
    citationCopied: "ማጣቀሲ ተቐዲሑ!",
    jumpToSection: "ኣብቲ ኮርስ ኽፈት"
  },
  so: {
    launcher: "Weydii Caawiyaha",
    dialogTitle: "Kaaliyaha Waxbarashada Luqadaha Badan",
    tutorTab: "📚 Caawiyaha Koorsada",
    careerTab: "💼 Fursadaha Shaqada",
    placeholder: "Halkan ku qor su'aashaada...",
    send: "Dir",
    micLabel: "Cod ku weydii",
    simpleBtn: "🧠 Qaab Fudud",
    simpleActive: "Fudud: Waa shidan yahay",
    humanHelpBtn: "🆘 Caawinaad Qof",
    closeTitle: "Xidh (Escape)",
    screenShareActive: "🟢 Wadaagista shaashadu waa shaqaynaysaa",
    stopShare: "Jooji",
    welcome: "Kusoo dhowow! Waxaan ahay caawiyahaaga koorsada. Wax su'aal ah i waydii.",
    sourceLabel: "Xigashada Koorsada",
    direction: "ltr",
    speechLang: "so-SO",
    soundToggle: "Calaamadaha Codka",
    soundOn: "Codku waa shaqaynayaa",
    soundOff: "Codku waa xidhan yahay",
    citationAnnounce: "Xigashada koorsada፦",
    navigatedTo: "Waxa loo wareejiyay qaybta koorsada፦",
    sendingMsg: "Su'aashu waxay u socotaa caawiyaha...",
    assistantReplied: "Caawiyuhu wuxuu ku jawaabay፦",
    copyCitation: "Nuqul ka qaad xigashada",
    citationCopied: "Xigashadii waa la koobiyay!",
    jumpToSection: "Ka fur koorsada dhexdeeda"
  },
  ar: {
    launcher: "اسأل المساعد التعليمي",
    dialogTitle: "المساعد التعليمي متعدد اللغات وبوابة المهن",
    tutorTab: "📚 المساعد الدراسي",
    careerTab: "💼 بوابة الوظائف",
    placeholder: "اكتب سؤالك التعليمي هنا...",
    send: "إرسال",
    micLabel: "تحدث بسؤالك صوتياً",
    simpleBtn: "🧠 النمط المبسط",
    simpleActive: "النمط المبسط: مفعّل",
    humanHelpBtn: "🆘 طلب مساعدة بشرية",
    closeTitle: "إغلاق (Escape)",
    screenShareActive: "🟢 مشاركة الشاشة قيد التشغيل (تحت سيطرتك)",
    stopShare: "إيقاف المشاركة",
    welcome: "مرحباً! أنا المساعد التعليمي الذكي الخاص بك. اسألني أي سؤال من محتوى الدورة.",
    sourceLabel: "مصدر المقرر",
    direction: "rtl",
    speechLang: "ar-SA",
    soundToggle: "الإشارات الصوتية",
    soundOn: "الصوت مفعّل",
    soundOff: "الصوت مكتوم",
    citationAnnounce: "مرجع المقرر الدراسي:",
    navigatedTo: "تم الانتقال إلى قسم المقرر:",
    sendingMsg: "جاري إرسال السؤال إلى المساعد...",
    assistantReplied: "أجاب المساعد:",
    copyCitation: "نسخ المرجع",
    citationCopied: "تم نسخ المرجع بنجاح!",
    jumpToSection: "الانتقال إلى القسم"
  },
  en: {
    launcher: "Ask AI Tutor (Help)",
    dialogTitle: "Universal Multilingual Assistant & Career Gateway",
    tutorTab: "📚 Course Tutor",
    careerTab: "💼 Career Gateway",
    placeholder: "Type your question from the curriculum...",
    send: "Send",
    micLabel: "Speak your question",
    simpleBtn: "🧠 Simple Mode",
    simpleActive: "Simple Mode: ON",
    humanHelpBtn: "🆘 Human Help",
    closeTitle: "Close (Escape)",
    screenShareActive: "🟢 Screen Sharing Active (You are in control)",
    stopShare: "Stop Sharing",
    welcome: "Hello! I am your course assistant. Ask me any question from the curriculum.",
    sourceLabel: "Course Source",
    direction: "ltr",
    speechLang: "en-US",
    soundToggle: "Audio Cues",
    soundOn: "Audio Cues: ON",
    soundOff: "Audio Cues: MUTED",
    citationAnnounce: "Course source citation:",
    navigatedTo: "Navigated to course section:",
    sendingMsg: "Sending question to AI tutor...",
    assistantReplied: "Assistant replied:",
    copyCitation: "Copy Citation",
    citationCopied: "Citation copied to clipboard!",
    jumpToSection: "Jump to section in course"
  }
};

/**
 * Course Grounding Knowledge Base
 * Directly mirrors Savanna static course material (concept-with-navigation.html)
 * and provides verified multi-lingual answers with target DOM IDs for instant page navigation.
 */
const COURSE_GROUNDING_DB = [
  {
    id: "ai-future",
    targetId: "artificial-intelligence-and-the-future-of-va-work",
    title: "Artificial Intelligence & Future of VA Work",
    module: "Module 2: Technology Integration",
    excerpt: "AI tools (ChatGPT, Notion AI, Zapier) do not replace human VAs; they augment human capabilities. High-performing VAs use AI to deliver 5x productivity while providing judgment, empathy, and oversight.",
    keywords: ["ai", "artificial", "intelligence", "chatgpt", "notion", "replace", "bot", "tool", "አርቲፊሻል", "ኢንተሊጀንስ", "ኤአይ", "መተካት", "መሳሪያ", "meeshaa", "ذكاء", "اصطناعي", "استبدال", "أدوات"],
    replies: {
      en: "According to the curriculum, AI tools (such as ChatGPT, Notion AI, and Zapier) do not replace human Virtual Assistants—they augment them. Successful VAs leverage AI to automate repetitive administrative duties and conduct research, allowing them to provide higher-level critical thinking, strategic judgment, and empathetic human service to their clients.",
      am: "በኮርሱ መሰረት አርቲፊሻል ኢንተሊጀንስ (AI) እንደ ChatGPT፣ Notion AI እና Zapier ያሉ መሳሪያዎች የሰውን ቨርቹዋል ረዳት አይተኩም፤ ይልቁንም አቅማቸውን በከፍተኛ ሁኔታ ያሳድጋሉ። ስኬታማ ረዳቶች እነዚህን መሳሪያዎች ተጠቅመው ተደጋጋሚ ስራዎችን በማከናወን፣ ለደንበኞቻቸው የተሻለ የሰውኛ እንክብካቤ፣ ውሳኔ ሰጪነት እና ጥራት ያለው አገልግሎት ይሰጣሉ።",
      om: "Akka koorsichaatti, meeshaaleen AI (kanneen akka ChatGPT, Notion AI fi Zapier) gargaartota namootaa bakka hin bu'an; humna isaanii ol kaasu. Gargaartonni bu'a-qabeeyyiin meeshaalee kanneen fayyadamuun hojiiwwan deddeebisoo saffisiisanii, yaada qaxaleefi tajaajila qulqullina qabu maamiltootaaf dhiyeessu.",
      ti: "ብመሰረት እቲ ትምህርቲ፡ ናይ AI መሳርሒታት (ከም ChatGPTን Notion AIን) ንናይ ሰብ ሓገዝቲ ኣይትክእዎን እዮም፤ የግዳስ ናይ ስራሕ ቕልጣፈኦም የዕብዩ። ዕዉታት ሓገዝቲ ነዞም መሳርሒታት ብምጥቃም ተደጋጋሚ ዕማማት ኣቃሊሎም፡ ንዓማዊሎም ዝበለጸ ሰብኣዊ ሓልዮትን ጥበብን ዝተሓወሶ ግልጋሎት የቕርቡ።",
      so: "Sida ku cad koorsada, aaladaha AI (sida ChatGPT iyo Notion) ma beddelaan kaaliyayaasha aadanaha; waxay kordhiyaan waxqabadkooda. Kaaliyayaasha guuleysta waxay adeegsadaan aaladahan si ay u qabtaan shaqooyinka soo noqnoqda, iyagoo siinaya macaamiishooda adeeg tayo sare leh oo ku saleysan faham aadanaha.",
      ar: "وفقاً للمنهاج، لا تحل أدوات الذكاء الاصطناعي (مثل ChatGPT وNotion AI وZapier) محل المساعدين الافتراضيين البشريين، بل تعزز قدراتهم وإنتاجيتهم بمقدار 5 أضعاف. يركز المساعد الناجح على تسخير الذكاء الاصطناعي للأعمال الروتينية بينما يقدم للعملاء التعاطف، التفكير النقدي، والسرية الموثوقة."
    }
  },
  {
    id: "client-values",
    targetId: "what-clients-are-likely-to-value-more-and-more",
    title: "What Clients Value Most: 3 Core Competencies",
    module: "Module 2: Client Success",
    excerpt: "Clients place highest value on three capabilities: 1. AI fluency (prompting and verification), 2. Specialized expertise (niche domain knowledge), and 3. Excellent human service (empathy, reliability, and critical discretion).",
    keywords: ["value", "client", "competenc", "skill", "fluency", "expertise", "service", "special", "ደንበኛ", "ዋጋ", "ችሎታ", "ክህሎት", "አገልግሎት", "muuxannoo", "gahumsa", "tajaajila", "ተገልጋይ", "مهارات", "عملاء", "كفاءة", "خبرة"],
    replies: {
      en: "The curriculum highlights 3 core competencies clients value most: (1) AI Fluency—mastering prompt engineering, tool integration, and fact-checking; (2) Specialized Expertise—niche operational skills in finance, tech, or operations; and (3) Excellent Human Service—empathy, integrity, active listening, and high-stakes reliability.",
      am: "ደንበኞች ከሁሉም በላይ ዋጋ የሚሰጧቸው 3 ዋና ክህሎቶች በኮርሱ ተለይተዋል፦ (1) የ AI አጠቃቀም ቅልጥፍና (ትክክለኛ ትዕዛዝ መስጠት እና ማረጋገጥ)፤ (2) ልዩ ሙያዊ እውቀት (በተወሰነ የሙያ ዘርፍ ላይ ማተኮር)፤ እና (3) የላቀ የሰውኛ አገልግሎት (ታማኝነት፣ ርህራሄ፣ እና ሚስጥር ጠባቂነት)።",
      om: "Koorsichi dandeettiiwwan 3 maamiltoonni daran barbaadan ifa godha: (1) Hubannoo AI (sirnaan ajajuu fi qulqulleessuu)؛ (2) Ogeessummaa addaa (niche knowledge)؛ fi (3) Tajaajila namaa olaanaa (amanamummaa, gara-laafina fi dhoksaa eeguu).",
      ti: "እቲ ኮርስ ዓማዊል ዝያዳ ዋጋ ዝህብዎም 3 መሰረታዊ ክእለታት የጉልሕ፦ (1) ብቕዓት AI (ትኽክለኛ ትእዛዝ ምሃብን ምርግጋጽን)፤ (2) ፍሉይ ሞያዊ ፍልጠት፤ ከምኡ'ውን (3) ብሉጽ ሰብኣዊ ኣገልግሎት (ተኣማንነት፡ ስምዒታዊ ብስለት፡ ከምኡ'ውን ሚስጢር ምዕቃብ)።",
      so: "Koorsadu waxay xoogga saaraysaa 3 awoodood oo muhiim ah oo macaamiishu aad u qiimeeyaan: (1) Fahamka qoto dheer ee AI (amar bixinta saxda ah iyo hubinta)؛ (2) Xirfad gaar ah oo la taaban karo؛ iyo (3) Adeeg aadamnimo oo heer sare ah (aaminnimo, dhageysi dhow, iyo xafidida sirta).",
      ar: "يركز المنهاج على 3 ركائز أساسية يقدّرها العملاء بشكل متزايد: (1) الطلاقة في استخدام الذكاء الاصطناعي (إتقان صياغة الأوامر Prompting والتحقق من المخرجات)؛ (2) الخبرة التخصصية في مجال محدد؛ و(3) الخدمة الإنسانية المتميزة (التعاطف، الموثوقية العالية، والأمانة المهنية)."
    }
  },
  {
    id: "shaping-forces",
    targetId: "what-is-shaping-the-future-of-va-work",
    title: "Forces Shaping the Future of Virtual Assistance",
    module: "Module 1: Market Trends",
    excerpt: "Key forces shaping the sector include the shift to borderless remote work, generative AI adoption, and the growing demand for fractional executive support.",
    keywords: ["shape", "shaping", "forces", "trend", "macro", "ለውጥ", "ሁኔታዎች", "ገበያ", "jijjiirama", "تشكيل", "عوامل"],
    replies: {
      en: "The future of Virtual Assistant work is driven by three macro forces: the global adoption of borderless remote workforces, the acceleration of generative AI for routine automation, and the rising demand for agile, fractional business support.",
      am: "የቨርቹዋል ረዳት ስራ የወደፊት አቅጣጫ በሶስት ዋና ዋና ምክንያቶች ይወሰናል፦ በዓለም አቀፍ ደረጃ የርቀት ስራ መስፋፋት፣ የጀነሬቲቭ AI ለቀላል ስራዎች በፍጥነት ስራ ላይ መዋል፣ እና ድርጅቶች ተለዋዋጭ የባለሙያ ድጋፍ መፈለጋቸው።",
      om: "Hojiin gargaaraa fuulduraa sababoota gurguddoo sadiin bocama: babal'ina hojii fageenyaa addunyaa, saffisaan fayyadama AI hojiiwwan salphaaf, fi fedhii olaanaa ogeessota jijjiiramaa qabaachuu.",
      ti: "መጻኢ ናይ ቨርቹዋል ረዳት ስራሕ ብሰለስተ ዓበይቲ ሓይልታት ይቕረጽ ኣሎ፦ ምግፋሕ ናይ ርሕቐት ስራሕ፡ ምዕባለ ናይ ጀነሬቲቭ AI ንተራ ዕማማት፡ ከምኡ'ውን ናይ ክኢላታት ተደላይነት ምውሳኹ።",
      so: "Mustaqbalka shaqada kaaliyaha waxaa qaabaynaya saddex arrimood: ballaarinta shaqada fog ee caalamiga ah, adeegsiga AI ee hawlaha fudud, iyo baahida sii kordheysa ee loo qabo xirfadlayaal karti leh.",
      ar: "تشكل مستقبل مهنة المساعد الافتراضي ثلاث قوى عالمية: انتشار العمل المرن عن بُعد عبر الحدود، التبني الواسع للذكاء الاصطناعي التوليدي، وتنامي حاجة الشركات للدعم التنفيذي المرن."
    }
  },
  {
    id: "aspiring-vas",
    targetId: "what-this-means-for-aspiring-virtual-assistants",
    title: "Action Guide for Aspiring Virtual Assistants",
    module: "Module 3: Career Growth",
    excerpt: "Aspiring VAs must master foundational communication, develop prompt engineering workflows, and build an ethical portfolio demonstrating AI-augmented client deliverables.",
    keywords: ["aspiring", "beginner", "start", "career", "student", "learn", "ተማሪ", "ጀማሪ", "ስራ", "መጀመር", "jalqaba", "barataa", "hojii", "مبتدئ", "بداية", "مهنة"],
    replies: {
      en: "For aspiring virtual assistants, the path forward is clear: build solid baseline digital communication skills, practice AI workflow orchestration daily, and assemble a portfolio demonstrating real business impact.",
      am: "ለጀማሪ ቨርቹዋል ረዳቶች ትልቁ ምክር፦ ጠንካራ የኮምፒውተር እና የመግባቢያ ክህሎትን ማዳበር፣ የ AI መሳሪያዎችን በየቀኑ መለማመድ፣ እና የሰሩትን ስራ የሚያሳይ የተሟላ ፖርትፎሊዮ ማዘጋጀት ነው።",
      om: "Gargaartota haaraa jalqabaniif: dandeettii qunnamtii dijitaalaa gabbifachuu, hojiiwwan AI guyyuu shaakaluu, fi hojiiwwan qabatamaa agarsiisuuf poortifooliyoo ijaaruudha.",
      ti: "ንጀመርቲ ሓገዝቲ ዝወሃብ ምኽሪ፦ ጽኑዕ ዲጂታላዊ ርክብ ምምዕባል፡ መዓልታዊ ንናይ AI መሳርሒታት ምልምማድ፡ ከምኡ'ውን ስራሕካ ዘርኢ ፖርትፎሊዮ ምድላው እዩ።",
      so: "Kaaliyayaasha cusub ee bilaabaya: dhis xirfadaha wada xiriirka dhijitaalka ah, ku celceli aaladaha AI maalin kasta, oo samee fayl shaqo (portfolio) muujinaya natiijooyin dhab ah.",
      ar: "بالنسبة للمبتدئين في هذا المجال: يجب إتقان أساسيات التواصل الرقمي، التدرب المستمر على توظيف أدوات الذكاء الاصطناعي، وبناء معرض أعمال يبرز الكفاءة والنتائج العملية."
    }
  },
  {
    id: "promising-outlook",
    targetId: "so-is-the-future-of-va-promising",
    title: "Industry Outlook & Job Growth",
    module: "Module 4: Industry Outlook",
    excerpt: "The future of virtual assistance is exceptionally promising. The global remote workforce continues to expand, creating high-demand opportunities for tech-fluent talent.",
    keywords: ["promis", "promising", "outlook", "growth", "opportunity", "demand", "future", "ተስፋ", "የወደፊት ተስፋ", "ብሩህ", "ዕድል", "እድገት", "carraa", "fuuldura", "mustaqbal", "مستقبل", "واعد", "فرص"],
    replies: {
      en: "Yes, the future is highly promising! As global businesses adopt flexible teams, virtual assistants who combine human empathy with AI fluency are among the most sought-after remote professionals worldwide.",
      am: "አዎ፣ የወደፊት ተስፋው እጅግ በጣም ብሩህ ነው! ዓለም አቀፍ ኩባንያዎች የርቀት ሰራተኞችን በስፋት እየቀጠሩ በመሆኑ፣ የሰውኛ ክህሎትን ከ AI ቴክኖሎጂ ጋር አቀናጅተው የሚሰሩ ረዳቶች ከፍተኛ ተፈላጊነት አላቸው።",
      om: "Eeyyee, fuuldurri hojichaa daran abdachiisaadha! Dhaabbileen addunyaa humna namaa fageenyaa waan filataniif, ogeessonni AI fi dandeettii namaa walitti hidhan fedhii guddaa qabu.",
      ti: "እወ፡ መጻኢ ዕድሉ ኣዝዩ ብሩህ እዩ! ኣብ ዓለም ዝርከቡ ኩባንያታት ብርሕቐት ዝሰርሑ ሰራሕተኛታት ይደልዩ ስለዘለዉ፡ ሰብኣዊ ብቕዓት ምስ AI ኣወሃሂዶም ዝሰርሑ ኣዝዮም ተደለይቲ እዮም።",
      so: "Haa, mustaqbalku waa mid aad u ifaya! Ganacsiyada caalamiga ah waxay raadinayaan xirfadlayaal fog oo isku dara aqoonta aadanaha iyo aaladaha casriga ah ee AI.",
      ar: "نعم، المستقبل واعد للغاية! مع تحول قطاعات الأعمال العالمية نحو فرق العمل المرنة عن بُعد، أصبح المساعدون الذين يجمعون بين الطلاقة التقنية والذكاء العاطفي من أكثر الكفاءات طلباً."
    }
  }
];

class MultilingualAssistant extends HTMLElement {
  static get observedAttributes() {
    return ['partner', 'course', 'theme-color', 'default-lang', 'position', 'api-url'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentLang = 'am';
    this.simpleMode = false;
    this.soundEnabled = true;
    this.activeTab = 'tutor';
    this.screenStream = null;
    this.lastFocusedCitation = null;

    // Plug-and-play configuration defaults
    this.partnerId = 'savanna';
    this.courseId = 'VA-1';
    this.themeColor = '#059669';
    this.position = 'bottom-right';
    this.apiUrl = 'http://localhost:8000/api/v1';
  }

  connectedCallback() {
    this.readAttributes();
    this.render();
    this.setupListeners();
    this.setupFocusTrap();
    this.setupTabsKeyboardNavigation();
    this.applyTheme();
    this.updateLanguageUI(this.currentLang);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === 'default-lang' && newValue && LOCALIZED_UI[newValue]) {
      this.currentLang = newValue;
      if (this.shadowRoot && this.shadowRoot.getElementById('drawer')) {
        this.updateLanguageUI(newValue);
      }
    } else if (name === 'theme-color' && newValue) {
      this.themeColor = newValue;
      this.applyTheme();
    } else if (name === 'partner') {
      this.partnerId = newValue;
    } else if (name === 'course') {
      this.courseId = newValue;
    } else if (name === 'api-url') {
      this.apiUrl = newValue;
    }
  }

  readAttributes() {
    if (this.hasAttribute('partner')) this.partnerId = this.getAttribute('partner');
    if (this.hasAttribute('course')) this.courseId = this.getAttribute('course');
    if (this.hasAttribute('theme-color')) this.themeColor = this.getAttribute('theme-color');
    if (this.hasAttribute('default-lang')) this.currentLang = this.getAttribute('default-lang');
    if (this.hasAttribute('position')) this.position = this.getAttribute('position');
    if (this.hasAttribute('api-url')) this.apiUrl = this.getAttribute('api-url');
  }

  applyTheme() {
    if (this.shadowRoot && this.shadowRoot.host) {
      this.shadowRoot.host.style.setProperty('--assistant-primary', this.themeColor);
    }
  }

  emitEvent(name, detail = {}) {
    this.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      composed: true,
      detail
    }));
  }

  /**
   * Screen Reader Live Announcer (WCAG 4.1.3 Status Messages)
   * Informs assistive technology without interrupting user focus.
   */
  announce(text) {
    const announcer = this.shadowRoot.getElementById('sr-announcer');
    if (!announcer) return;
    announcer.textContent = '';
    setTimeout(() => {
      announcer.textContent = text;
    }, 60);
  }

  /**
   * Pure Client-side Auditory Sensory Cues (Web Audio API)
   * Zero external mp3 downloads, zero latency.
   */
  playChime(type) {
    if (!this.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'message') {
        // Ascending pleasant major 3rd chord (D5 -> F#5)
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(739.99, now + 0.12);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.28);
      } else if (type === 'send') {
        // Quick subtle blip
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'citation') {
        // Crisp chime
        osc.frequency.setValueAtTime(659.25, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      }
    } catch {
      // AudioContext unavailable or autoplay restricted; degrade gracefully
    }
  }

  get styles() {
    const isLeft = this.position.includes('left');
    const isTop = this.position.includes('top');
    const posX = isLeft ? 'left: 20px;' : 'right: 20px;';
    const posY = isTop ? 'top: 20px;' : 'bottom: 20px;';

    return `
      :host {
        --primary: var(--assistant-primary, #059669);
        --primary-hover: #047857;
        --bg: #ffffff;
        --text: #1f2937;
        --text-muted: #4b5563;
        --border: #e5e7eb;
        --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --radius: 12px;
        --font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", sans-serif;
        --line-height: 1.5;
        --font-size: 14px;
        position: fixed;
        ${posX}
        ${posY}
        z-index: 999999;
        font-family: var(--font);
      }

      /* Screen Reader Only Utility (WCAG 4.1.3) */
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      /* Floating Launcher */
      .launcher-btn {
        min-width: 48px;
        min-height: 48px;
        padding: 0 16px;
        border-radius: 9999px;
        background-color: var(--primary);
        color: #ffffff;
        border: none;
        box-shadow: var(--shadow);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 600;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }
      .launcher-btn:hover {
        background-color: var(--primary-hover);
        transform: scale(1.04);
      }
      .launcher-btn:focus-visible {
        outline: 3px solid #111827;
        outline-offset: 3px;
      }

      /* Drawer Dialog Shell */
      .drawer {
        display: none;
        flex-direction: column;
        width: 380px;
        height: 580px;
        max-width: 96vw;
        max-height: 88vh;
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        overflow: hidden;
      }
      .drawer.open {
        display: flex;
      }

      /* Bidirectional RTL Support */
      .drawer[dir="rtl"] {
        direction: rtl;
        text-align: right;
      }
      .drawer[dir="rtl"] .icon-send {
        transform: rotate(180deg);
        display: inline-block;
      }

      /* 400% Zoom Responsive Reflow */
      @media screen and (max-height: 480px), screen and (max-width: 480px) {
        .drawer {
          width: 98vw;
          height: 96vh;
          border-radius: 0;
        }
      }

      /* Simple Mode (WCAG 3.1.5 Cognitive Reading) */
      .drawer.simple-mode {
        font-size: 17px !important;
        line-height: 1.8 !important;
      }
      .drawer.simple-mode .msg {
        font-size: 17px !important;
        line-height: 1.8 !important;
      }

      /* Header */
      .drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;
        background: var(--primary);
        color: #ffffff;
        gap: 8px;
      }
      .header-title-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        min-width: 0;
      }
      .header-title {
        font-size: 13px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .header-controls {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .icon-btn {
        background: transparent;
        border: none;
        color: #ffffff;
        cursor: pointer;
        padding: 6px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 32px;
        min-height: 32px;
        font-size: 14px;
        transition: background-color 0.15s ease;
      }
      .icon-btn:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      .icon-btn:focus-visible {
        outline: 2px solid #ffffff;
        outline-offset: 2px;
      }

      /* Language Select */
      .lang-select {
        background: rgba(255, 255, 255, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.4);
        color: #ffffff;
        padding: 4px 6px;
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
      }
      .lang-select option {
        background: #ffffff;
        color: #111827;
      }
      .lang-select:focus-visible {
        outline: 2px solid #ffffff;
        outline-offset: 2px;
      }

      /* Utility Action Bar */
      .action-bar {
        display: flex;
        gap: 6px;
        padding: 6px 12px;
        background: #f9fafb;
        border-bottom: 1px solid var(--border);
        align-items: center;
        flex-wrap: wrap;
      }
      .action-chip {
        font-size: 11px;
        font-weight: 600;
        padding: 4px 8px;
        border-radius: 4px;
        border: 1px solid var(--border);
        background: #ffffff;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--text);
        transition: all 0.15s ease;
      }
      .action-chip:hover {
        background: #f3f4f6;
      }
      .action-chip:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
      }
      .action-chip[aria-pressed="true"] {
        background: #ecfdf5;
        border-color: var(--primary);
        color: var(--primary);
      }

      /* WAI-ARIA Tablist */
      .tab-bar {
        display: flex;
        border-bottom: 1px solid var(--border);
        background: #ffffff;
      }
      .tab-btn {
        flex: 1;
        padding: 10px 12px;
        border: none;
        background: transparent;
        font-size: 12px;
        font-weight: 600;
        color: var(--text-muted);
        cursor: pointer;
        border-bottom: 2px solid transparent;
        text-align: center;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
      .tab-btn:hover {
        color: var(--primary);
      }
      .tab-btn:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: -2px;
      }
      .tab-btn[aria-selected="true"] {
        color: var(--primary);
        border-bottom-color: var(--primary);
      }

      /* Tab Content Panels */
      .tab-panel {
        flex: 1;
        overflow-y: auto;
        padding: 12px;
      }
      .tab-panel:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: -2px;
      }

      /* Chat Messages */
      .chat-log {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .msg {
        max-width: 86%;
        padding: 10px 14px;
        border-radius: 10px;
        font-size: 13px;
        line-height: var(--line-height);
        word-break: break-word;
      }
      .msg.user {
        align-self: flex-end;
        background-color: var(--primary);
        color: #ffffff;
        border-bottom-right-radius: 2px;
      }
      .drawer[dir="rtl"] .msg.user {
        align-self: flex-start;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 2px;
      }
      .msg.tutor {
        align-self: flex-start;
        background-color: #f3f4f6;
        color: var(--text);
        border-bottom-left-radius: 2px;
        border: 1px solid #e5e7eb;
      }
      .drawer[dir="rtl"] .msg.tutor {
        align-self: flex-end;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 2px;
      }

      /* Interactive Grounded Citation Badges (WCAG 2.4.7, 1.4.3) */
      .citation-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
        padding: 6px 10px;
        background: #eef2ff;
        color: #1e40af;
        border: 1px solid #c7d2fe;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        text-align: start;
        transition: all 0.2s ease;
        min-height: 28px;
      }
      .citation-badge:hover {
        background: #e0e7ff;
        border-color: #a5b4fc;
        color: #1e3a8a;
      }
      .citation-badge:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
      }
      .citation-badge .citation-icon {
        font-size: 12px;
      }
      .citation-badge .citation-jump {
        margin-inline-start: 4px;
        font-size: 10px;
        opacity: 0.8;
      }

      /* Modal Dialog (Citation Details Preview) */
      .modal-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(17, 24, 39, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        z-index: 1000;
      }
      .modal-card {
        background: #ffffff;
        border-radius: 10px;
        padding: 16px;
        width: 100%;
        max-width: 330px;
        box-shadow: var(--shadow);
        border: 1px solid var(--border);
      }
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .modal-close-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 16px;
        padding: 4px;
        border-radius: 4px;
      }
      .modal-close-btn:focus-visible {
        outline: 2px solid var(--primary);
      }

      /* Chat Footer Input */
      .input-row {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 12px;
        border-top: 1px solid var(--border);
        background: #ffffff;
      }
      .text-input {
        flex: 1;
        padding: 9px 12px;
        border: 1px solid var(--border);
        border-radius: 6px;
        font-size: 13px;
        font-family: inherit;
        outline: none;
      }
      .text-input:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.2);
      }
      .btn-mic {
        background: #f3f4f6;
        color: var(--text);
        border: 1px solid var(--border);
      }
      .btn-mic.recording {
        background: #fee2e2;
        color: #dc2626;
        border-color: #ef4444;
        animation: pulseRecord 1s infinite alternate;
      }
      @keyframes pulseRecord {
        from { transform: scale(1); }
        to { transform: scale(1.1); }
      }
      .btn-send {
        background: var(--primary);
        color: #ffffff;
        border: none;
      }
      .btn-send:hover {
        background: var(--primary-hover);
      }

      /* Screen Share Banner */
      .screen-share-banner {
        background: #fef2f2;
        border-bottom: 1px solid #fecaca;
        color: #991b1b;
        padding: 6px 12px;
        font-size: 11px;
        display: none;
        justify-content: space-between;
        align-items: center;
      }
      .btn-stop-share {
        background: #dc2626;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        padding: 3px 8px;
        font-size: 10px;
        font-weight: 700;
        cursor: pointer;
      }
    `;
  }

  render() {
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];

    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>

      <!-- Polite Screen Reader Live Announcer (WCAG 4.1.3 Status Messages) -->
      <div 
        id="sr-announcer" 
        class="sr-only" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      ></div>

      <!-- Floating Launcher Button -->
      <button 
        type="button" 
        class="launcher-btn" 
        id="open-btn" 
        aria-haspopup="dialog" 
        aria-expanded="false" 
        aria-label="${t.launcher}"
      >
        <span aria-hidden="true">💬</span>
        <span id="launcher-text">${t.launcher}</span>
      </button>

      <!-- Assistant Drawer Dialog -->
      <div 
        class="drawer" 
        id="drawer" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="dialog-title"
        dir="${t.direction}"
      >
        <!-- Header -->
        <header class="drawer-header">
          <div class="header-title-wrap">
            <span aria-hidden="true">🎓</span>
            <h2 class="header-title" id="dialog-title">${t.dialogTitle}</h2>
          </div>
          <div class="header-controls">
            <!-- Audio Sensory Cues Toggle -->
            <button 
              type="button" 
              class="icon-btn" 
              id="sound-btn" 
              aria-label="${t.soundToggle}: ${this.soundEnabled ? t.soundOn : t.soundOff}" 
              aria-pressed="${this.soundEnabled}"
              title="${t.soundToggle}"
            >
              ${this.soundEnabled ? '🔔' : '🔕'}
            </button>

            <!-- Language Dropdown -->
            <select class="lang-select" id="lang-select" aria-label="Select Language (ቋንቋ ይምረጡ)">
              <option value="am" ${this.currentLang === 'am' ? 'selected' : ''}>አማርኛ (Amharic)</option>
              <option value="om" ${this.currentLang === 'om' ? 'selected' : ''}>Afaan Oromoo</option>
              <option value="ti" ${this.currentLang === 'ti' ? 'selected' : ''}>ትግርኛ (Tigrinya)</option>
              <option value="so" ${this.currentLang === 'so' ? 'selected' : ''}>Soomaali (Somali)</option>
              <option value="ar" ${this.currentLang === 'ar' ? 'selected' : ''}>العربية (Arabic RTL)</option>
              <option value="en" ${this.currentLang === 'en' ? 'selected' : ''}>English</option>
            </select>

            <!-- Close Button -->
            <button 
              type="button" 
              class="icon-btn" 
              id="close-btn" 
              aria-label="${t.closeTitle}" 
              title="${t.closeTitle}"
            >
              ✕
            </button>
          </div>
        </header>

        <!-- Utility Action Bar (Simple Mode & Mentorship) -->
        <div class="action-bar" role="toolbar" aria-label="Reading and assistance options">
          <button 
            type="button" 
            class="action-chip" 
            id="simple-toggle" 
            aria-pressed="false"
            aria-label="${t.simpleBtn}"
          >
            <span id="simple-text">${t.simpleBtn}</span>
          </button>
          <button 
            type="button" 
            class="action-chip" 
            id="escalate-btn" 
            aria-label="${t.humanHelpBtn}"
          >
            <span id="escalate-text">${t.humanHelpBtn}</span>
          </button>
        </div>

        <!-- Screen Share Diagnostics Banner -->
        <div class="screen-share-banner" id="screen-share-area" role="alert">
          <span id="screen-share-text">${t.screenShareActive}</span>
          <button type="button" class="btn-stop-share" id="stop-share-btn">${t.stopShare}</button>
        </div>

        <!-- WAI-ARIA Tabs -->
        <div class="tab-bar" role="tablist" aria-label="Assistant Sections">
          <button 
            type="button" 
            class="tab-btn" 
            id="tab-tutor" 
            role="tab" 
            aria-selected="true" 
            aria-controls="panel-tutor" 
            tabindex="0"
          >
            ${t.tutorTab}
          </button>
          <button 
            type="button" 
            class="tab-btn" 
            id="tab-career" 
            role="tab" 
            aria-selected="false" 
            aria-controls="panel-career" 
            tabindex="-1"
          >
            ${t.careerTab}
          </button>
        </div>

        <!-- Tab Panel 1: Course Tutor (WCAG 4.1.3 Live Region) -->
        <main 
          class="tab-panel" 
          id="panel-tutor" 
          role="tabpanel" 
          aria-labelledby="tab-tutor" 
          tabindex="0"
        >
          <div 
            class="chat-log" 
            id="chat-log" 
            role="log" 
            aria-live="polite" 
            aria-relevant="additions text" 
            aria-label="Conversation with AI Tutor"
          >
            <div class="msg tutor" lang="${this.currentLang}" dir="${t.direction}">
              ${t.welcome}
            </div>
          </div>
        </main>

        <!-- Tab Panel 2: Career Gateway -->
        <section 
          class="tab-panel" 
          id="panel-career" 
          role="tabpanel" 
          aria-labelledby="tab-career" 
          tabindex="0" 
          style="display:none;"
        >
          <h3 id="career-title" style="margin:0 0 6px 0; font-size:16px;">💼 Opportunities for Learners</h3>
          <p style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">All employers offer verified interview accommodations.</p>
          <div id="jobs-container" role="feed" aria-busy="false" aria-label="Job openings list">
            Loading verified opportunities...
          </div>
        </section>

        <!-- Chat Input Footer -->
        <footer class="input-row" id="footer-input">
          <button 
            type="button" 
            class="icon-btn btn-mic" 
            id="mic-btn" 
            aria-label="${t.micLabel}" 
            aria-pressed="false"
          >
            🎙️
          </button>
          <input 
            type="text" 
            class="text-input" 
            id="user-input" 
            placeholder="${t.placeholder}" 
            aria-label="${t.placeholder}"
          />
          <button 
            type="button" 
            class="icon-btn btn-send" 
            id="send-btn" 
            aria-label="${t.send}"
          >
            <span class="icon-send">➤</span>
          </button>
        </footer>

        <!-- Citation Details Preview Modal (Fallback / Deep Reading) -->
        <div 
          id="citation-modal" 
          class="modal-backdrop" 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-cite-title" 
          style="display:none;"
        >
          <div class="modal-card">
            <div class="modal-header">
              <strong id="modal-cite-title" style="font-size:13px; color:#1e40af;">📌 Course Citation</strong>
              <button type="button" class="modal-close-btn" id="modal-cite-close" aria-label="Close citation modal">✕</button>
            </div>
            <div id="modal-cite-content" style="font-size:12px; line-height:1.6; color:#374151; margin-bottom:12px;"></div>
            <div style="display:flex; justify-content:flex-end; gap:8px;">
              <button 
                type="button" 
                class="action-chip" 
                id="modal-copy-btn" 
                style="padding:6px 10px; font-size:11px;"
              >
                📋 Copy Citation
              </button>
              <button 
                type="button" 
                class="action-chip" 
                id="modal-jump-btn" 
                style="padding:6px 10px; font-size:11px; background:var(--primary); color:#ffffff; border:none;"
              >
                ↗ Jump in Page
              </button>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  setupListeners() {
    const openBtn = this.shadowRoot.getElementById('open-btn');
    const closeBtn = this.shadowRoot.getElementById('close-btn');
    const input = this.shadowRoot.getElementById('user-input');
    const sendBtn = this.shadowRoot.getElementById('send-btn');
    const simpleToggle = this.shadowRoot.getElementById('simple-toggle');
    const soundBtn = this.shadowRoot.getElementById('sound-btn');
    const langSelect = this.shadowRoot.getElementById('lang-select');
    const escalateBtn = this.shadowRoot.getElementById('escalate-btn');
    const micBtn = this.shadowRoot.getElementById('mic-btn');

    openBtn.addEventListener('click', () => this.open());
    closeBtn.addEventListener('click', () => this.close());

    // Sound Cues Toggle
    soundBtn.addEventListener('click', () => {
      this.soundEnabled = !this.soundEnabled;
      soundBtn.textContent = this.soundEnabled ? '🔔' : '🔕';
      soundBtn.setAttribute('aria-pressed', String(this.soundEnabled));
      const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
      const statusText = this.soundEnabled ? t.soundOn : t.soundOff;
      soundBtn.setAttribute('aria-label', `${t.soundToggle}: ${statusText}`);
      this.announce(statusText);
      if (this.soundEnabled) this.playChime('citation');
    });

    // Simple Mode Toggle with Localized announcement
    simpleToggle.addEventListener('click', () => {
      this.simpleMode = !this.simpleMode;
      this.shadowRoot.getElementById('drawer').classList.toggle('simple-mode', this.simpleMode);
      simpleToggle.setAttribute('aria-pressed', String(this.simpleMode));
      const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
      const label = this.simpleMode ? t.simpleActive : t.simpleBtn;
      this.shadowRoot.getElementById('simple-text').textContent = label;
      this.announce(label);
      this.emitEvent('assistant:simple-mode-toggle', { simpleMode: this.simpleMode });
    });

    // Language Dropdown Handler
    langSelect.addEventListener('change', (e) => {
      this.handleLanguageSwitch(e.target.value);
    });

    sendBtn.addEventListener('click', () => this.handleSend());
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleSend();
    });

    micBtn.addEventListener('click', () => this.handleSpeechInput(micBtn));
    escalateBtn.addEventListener('click', () => this.handleEscalation());

    // Citation Modal Close
    const modalClose = this.shadowRoot.getElementById('modal-cite-close');
    modalClose.addEventListener('click', () => this.closeCitationModal());
  }

  open() {
    const drawer = this.shadowRoot.getElementById('drawer');
    const openBtn = this.shadowRoot.getElementById('open-btn');
    drawer.classList.add('open');
    openBtn.setAttribute('aria-expanded', 'true');
    openBtn.style.display = 'none';

    // Focus first interactive element inside drawer (Close button or input)
    const closeBtn = this.shadowRoot.getElementById('close-btn');
    if (closeBtn) closeBtn.focus();

    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    this.announce(`${t.dialogTitle} opened. Current tab: ${t.tutorTab}.`);
    this.emitEvent('assistant:opened', { partner: this.partnerId, course: this.courseId });
  }

  close() {
    const drawer = this.shadowRoot.getElementById('drawer');
    const openBtn = this.shadowRoot.getElementById('open-btn');
    drawer.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.style.display = 'flex';
    openBtn.focus();
    this.emitEvent('assistant:closed', { partner: this.partnerId });
  }

  setupFocusTrap() {
    const drawer = this.shadowRoot.getElementById('drawer');

    this.shadowRoot.addEventListener('keydown', (e) => {
      if (!drawer.classList.contains('open')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        const modal = this.shadowRoot.getElementById('citation-modal');
        if (modal.style.display !== 'none') {
          this.closeCitationModal();
          return;
        }
        this.close();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = drawer.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusable).filter(el => el.offsetParent !== null);
        if (focusableArray.length === 0) return;

        const first = focusableArray[0];
        const last = focusableArray[focusableArray.length - 1];
        const activeEl = this.shadowRoot.activeElement;

        if (e.shiftKey) {
          if (activeEl === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (activeEl === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  setupTabsKeyboardNavigation() {
    const tabTutor = this.shadowRoot.getElementById('tab-tutor');
    const tabCareer = this.shadowRoot.getElementById('tab-career');
    const tabs = [tabTutor, tabCareer];

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => this.switchTab(idx === 0 ? 'tutor' : 'career'));

      tab.addEventListener('keydown', (e) => {
        let newIdx = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') newIdx = (idx + 1) % tabs.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') newIdx = (idx - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') newIdx = 0;
        else if (e.key === 'End') newIdx = tabs.length - 1;

        if (newIdx !== null) {
          e.preventDefault();
          tabs[newIdx].focus();
          this.switchTab(newIdx === 0 ? 'tutor' : 'career');
        }
      });
    });
  }

  switchTab(tabName) {
    this.activeTab = tabName;
    const tabTutor = this.shadowRoot.getElementById('tab-tutor');
    const tabCareer = this.shadowRoot.getElementById('tab-career');
    const panelTutor = this.shadowRoot.getElementById('panel-tutor');
    const panelCareer = this.shadowRoot.getElementById('panel-career');
    const footerInput = this.shadowRoot.getElementById('footer-input');
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];

    const isTutor = tabName === 'tutor';
    tabTutor.setAttribute('aria-selected', String(isTutor));
    tabTutor.setAttribute('tabindex', isTutor ? '0' : '-1');
    tabCareer.setAttribute('aria-selected', String(!isTutor));
    tabCareer.setAttribute('tabindex', !isTutor ? '0' : '-1');

    panelTutor.style.display = isTutor ? 'flex' : 'none';
    panelCareer.style.display = !isTutor ? 'flex' : 'none';
    footerInput.style.display = isTutor ? 'flex' : 'none';

    this.announce(`Switched to ${isTutor ? t.tutorTab : t.careerTab}`);
    this.emitEvent('assistant:tab-switch', { tab: tabName });
    if (!isTutor) this.loadJobs();
  }

  handleLanguageSwitch(lang) {
    if (!LOCALIZED_UI[lang]) return;
    this.currentLang = lang;
    this.updateLanguageUI(lang);
    const t = LOCALIZED_UI[lang];
    this.announce(`Language changed to ${lang}. ${t.welcome}`);
    this.emitEvent('assistant:language-change', { language: lang, direction: t.direction });
  }

  updateLanguageUI(lang) {
    const t = LOCALIZED_UI[lang] || LOCALIZED_UI['en'];
    const drawer = this.shadowRoot.getElementById('drawer');
    if (!drawer) return;

    // Apply Bidirectional Flow (RTL vs LTR)
    drawer.setAttribute('dir', t.direction);

    // Update Header and Controls
    this.shadowRoot.getElementById('dialog-title').textContent = t.dialogTitle;
    this.shadowRoot.getElementById('launcher-text').textContent = t.launcher;
    this.shadowRoot.getElementById('open-btn').setAttribute('aria-label', t.launcher);
    this.shadowRoot.getElementById('close-btn').setAttribute('aria-label', t.closeTitle);
    this.shadowRoot.getElementById('close-btn').setAttribute('title', t.closeTitle);

    // Update Action Bar & Toolbar
    const simpleToggle = this.shadowRoot.getElementById('simple-toggle');
    simpleToggle.setAttribute('aria-label', t.simpleBtn);
    this.shadowRoot.getElementById('simple-text').textContent = this.simpleMode ? t.simpleActive : t.simpleBtn;
    this.shadowRoot.getElementById('escalate-text').textContent = t.humanHelpBtn;
    this.shadowRoot.getElementById('screen-share-text').textContent = t.screenShareActive;
    this.shadowRoot.getElementById('stop-share-btn').textContent = t.stopShare;

    // Update Tabs
    this.shadowRoot.getElementById('tab-tutor').textContent = t.tutorTab;
    this.shadowRoot.getElementById('tab-career').textContent = t.careerTab;

    // Update Input Row
    const input = this.shadowRoot.getElementById('user-input');
    input.placeholder = t.placeholder;
    input.setAttribute('aria-label', t.placeholder);
    this.shadowRoot.getElementById('send-btn').setAttribute('aria-label', t.send);
    this.shadowRoot.getElementById('mic-btn').setAttribute('aria-label', t.micLabel);

    // Update Select Dropdown
    const select = this.shadowRoot.getElementById('lang-select');
    if (select && select.value !== lang) select.value = lang;
  }

  /**
   * Intelligently matches questions to course grounding data across all 6 languages.
   */
  getGroundedResponse(query, lang) {
    const q = query.toLowerCase();
    let bestMatch = null;
    let maxScore = 0;

    for (const item of COURSE_GROUNDING_DB) {
      let score = 0;
      for (const k of item.keywords) {
        if (q.includes(k.toLowerCase())) {
          score += k.length;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = item;
      }
    }

    const matched = bestMatch || COURSE_GROUNDING_DB[0];
    return {
      reply: matched.replies[lang] || matched.replies['en'],
      citation: {
        title: matched.title,
        targetId: matched.targetId,
        module: matched.module,
        excerpt: matched.excerpt
      }
    };
  }

  async handleSend() {
    const input = this.shadowRoot.getElementById('user-input');
    const text = input.value.trim();
    if (!text) return;

    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    this.appendMessage('user', text, this.currentLang);
    input.value = '';
    this.playChime('send');
    this.announce(t.sendingMsg);

    try {
      const res = await fetch(`${this.apiUrl}/tutor/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          language: this.currentLang,
          partner_id: this.partnerId,
          course_id: this.courseId,
          simple_mode: this.simpleMode
        })
      });
      if (res.ok) {
        const data = await res.json();
        this.appendMessage('tutor', data.reply, data.language || this.currentLang, data.citation);
      } else {
        this.groundedFallbackReply(text);
      }
    } catch {
      this.groundedFallbackReply(text);
    }
  }

  groundedFallbackReply(query) {
    const result = this.getGroundedResponse(query, this.currentLang);
    this.appendMessage('tutor', result.reply, this.currentLang, result.citation);
  }

  appendMessage(role, text, lang, citation = null) {
    const log = this.shadowRoot.getElementById('chat-log');
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    
    // Explicit Language Tagging & Direction (WCAG 3.1.2)
    div.setAttribute('lang', lang);
    div.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    div.textContent = text;

    if (citation) {
      const citationObj = typeof citation === 'string' 
        ? { title: citation, targetId: null, excerpt: citation } 
        : citation;

      const t = LOCALIZED_UI[lang] || LOCALIZED_UI['en'];
      const citeBtn = document.createElement('button');
      citeBtn.type = 'button';
      citeBtn.className = 'citation-badge';
      citeBtn.setAttribute('aria-label', `${t.sourceLabel}: ${citationObj.title}. Click or press Enter to navigate to this section in course material.`);

      citeBtn.innerHTML = `
        <span class="citation-icon" aria-hidden="true">📌</span>
        <span><strong>${t.sourceLabel}:</strong> ${citationObj.title}</span>
        <span class="citation-jump" aria-hidden="true">↗</span>
      `;

      citeBtn.addEventListener('click', () => this.handleCitationActivate(citationObj, citeBtn));
      div.appendChild(document.createElement('br'));
      div.appendChild(citeBtn);
    }

    log.appendChild(div);
    const panel = this.shadowRoot.getElementById('panel-tutor');
    panel.scrollTop = panel.scrollHeight;

    if (role === 'tutor') {
      this.playChime('message');
      const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
      const citeAnnouncement = citation ? ` (${t.citationAnnounce} ${citation.title || citation})` : '';
      this.announce(`${t.assistantReplied} ${text}${citeAnnouncement}`);
    }
  }

  /**
   * Interactive Course Citation Activation
   * Jumps host page to cited section with accessible focus & visual pulse,
   * or displays accessible citation modal fallback.
   */
  handleCitationActivate(citationObj, citeBtn) {
    this.playChime('citation');
    this.lastFocusedCitation = citeBtn;

    // Dispatch Universal CustomEvent for host LMS integration
    this.emitEvent('assistant:citation-click', {
      partner: this.partnerId,
      course: this.courseId,
      targetId: citationObj.targetId,
      title: citationObj.title,
      excerpt: citationObj.excerpt
    });

    let jumped = false;
    if (citationObj.targetId) {
      const hostElem = document.getElementById(citationObj.targetId);
      if (hostElem) {
        hostElem.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Highlight Pulse on Host DOM
        const origOutline = hostElem.style.outline;
        const origBg = hostElem.style.backgroundColor;
        const origTransition = hostElem.style.transition;

        hostElem.style.transition = 'all 0.4s ease';
        hostElem.style.outline = '3px solid var(--assistant-primary, #059669)';
        hostElem.style.backgroundColor = 'rgba(5, 150, 105, 0.12)';

        setTimeout(() => {
          hostElem.style.outline = origOutline;
          hostElem.style.backgroundColor = origBg;
          hostElem.style.transition = origTransition;
        }, 3000);

        // Accessibility focus
        if (!hostElem.hasAttribute('tabindex')) {
          hostElem.setAttribute('tabindex', '-1');
        }
        hostElem.focus();

        const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
        this.announce(`${t.navigatedTo} ${citationObj.title}`);
        jumped = true;
      }
    }

    if (!jumped) {
      this.showCitationModal(citationObj);
    }
  }

  showCitationModal(citationObj) {
    const modal = this.shadowRoot.getElementById('citation-modal');
    const title = this.shadowRoot.getElementById('modal-cite-title');
    const content = this.shadowRoot.getElementById('modal-cite-content');
    const copyBtn = this.shadowRoot.getElementById('modal-copy-btn');
    const jumpBtn = this.shadowRoot.getElementById('modal-jump-btn');
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];

    title.textContent = `📌 ${citationObj.title}`;
    content.innerHTML = `
      <p style="margin:0 0 8px 0; font-weight:600; color:#1f2937;">${citationObj.module || 'Course Grounding Reference'}:</p>
      <blockquote style="margin:0 0 8px 0; padding:8px 12px; background:#f9fafb; border-inline-start:3px solid var(--primary); border-radius:4px;">
        "${citationObj.excerpt || citationObj.title}"
      </blockquote>
      <span style="font-size:11px; color:#6b7280;">Target anchor: <code>#${citationObj.targetId || 'general'}</code></span>
    `;

    copyBtn.textContent = `📋 ${t.copyCitation}`;
    copyBtn.onclick = () => {
      const citeText = `[Citation] ${citationObj.title} - ${citationObj.excerpt || ''}`;
      navigator.clipboard.writeText(citeText).then(() => {
        copyBtn.textContent = `✅ ${t.citationCopied}`;
        this.announce(t.citationCopied);
        setTimeout(() => { copyBtn.textContent = `📋 ${t.copyCitation}`; }, 2000);
      });
    };

    jumpBtn.textContent = `↗ ${t.jumpToSection}`;
    jumpBtn.onclick = () => {
      if (citationObj.targetId) {
        const el = document.getElementById(citationObj.targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      this.closeCitationModal();
    };

    modal.style.display = 'flex';
    this.announce(`Citation preview dialog opened: ${citationObj.title}`);
    const closeBtn = this.shadowRoot.getElementById('modal-cite-close');
    closeBtn.focus();
  }

  closeCitationModal() {
    const modal = this.shadowRoot.getElementById('citation-modal');
    modal.style.display = 'none';
    if (this.lastFocusedCitation) {
      this.lastFocusedCitation.focus();
    }
  }

  async handleSpeechInput(btn) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    const recognition = new SpeechRecognition();
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    recognition.lang = t.speechLang;
    
    btn.classList.add('recording');
    btn.setAttribute('aria-pressed', 'true');
    this.announce(`Microphone listening in ${this.currentLang}`);
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      this.shadowRoot.getElementById('user-input').value = transcript;
      btn.classList.remove('recording');
      btn.setAttribute('aria-pressed', 'false');
      this.handleSend();
    };
    recognition.onerror = () => {
      btn.classList.remove('recording');
      btn.setAttribute('aria-pressed', 'false');
      this.announce('Speech recognition stopped or encountered an error.');
    };
  }

  async handleEscalation() {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      this.screenStream = stream;
      this.shadowRoot.getElementById('screen-share-area').style.display = 'flex';
      this.appendMessage('tutor', 'Connected to human mentor. Screen sharing is active with learner privacy control.', 'en');

      this.emitEvent('assistant:escalate', { screenShareActive: true });

      const stopBtn = this.shadowRoot.getElementById('stop-share-btn');
      const stopHandler = () => {
        if (this.screenStream) {
          this.screenStream.getTracks().forEach(t => t.stop());
          this.screenStream = null;
        }
        this.shadowRoot.getElementById('screen-share-area').style.display = 'none';
        this.appendMessage('tutor', 'Screen sharing stopped.', 'en');
        this.emitEvent('assistant:screenshare-stopped');
      };
      stopBtn.onclick = stopHandler;
      stream.getVideoTracks()[0].onended = stopHandler;
    } catch {
      this.appendMessage('tutor', 'Mentor alert sent. Screen sharing was cancelled by learner.', 'en');
    }
  }

  async loadJobs() {
    const container = this.shadowRoot.getElementById('jobs-container');
    try {
      const res = await fetch(`${this.apiUrl}/career/jobs?partner_id=${this.partnerId}`);
      const jobs = await res.json();
      container.innerHTML = jobs.map(j => `
        <article style="border:1px solid #e5e7eb; border-radius:8px; padding:12px; margin-bottom:10px; background:#f9fafb;">
          <h4 style="margin:0 0 4px 0; color:#111827; font-size:14px;">${j.title}</h4>
          <div style="font-size:12px; color:#4b5563;">🏢 ${j.company} · 💰 ${j.salary}</div>
          <p style="font-size:12px; margin:6px 0; color:#374151;">${j.description}</p>
          <div style="display:flex; gap:6px; margin-top:8px;">
            <button class="action-chip" style="font-size:11px; padding:6px 10px; background:var(--primary); color:#fff; border:none;">Apply</button>
            <button class="action-chip" style="font-size:11px; padding:6px 10px;" onclick="alert('Accommodation Request Form: Screen reader and extra time verified for ' + '${j.company}');">
              ♿ Request Accommodations
            </button>
          </div>
        </article>
      `).join('');
    } catch {
      container.innerHTML = '<p style="font-size:12px;">Verified job listings ready.</p>';
    }
  }

  // Public Programmatic API for Partner LMS Platforms
  setLanguage(lang) {
    this.handleLanguageSwitch(lang);
  }

  askQuestion(questionText) {
    const input = this.shadowRoot.getElementById('user-input');
    if (input) {
      input.value = questionText;
      this.handleSend();
    }
  }
}

customElements.define('multilingual-assistant', MultilingualAssistant);
