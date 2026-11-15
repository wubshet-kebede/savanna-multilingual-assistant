/**
 * Universal Multilingual Assistant & Live Help (Level 1 Web Component)
 * PHASE 5: Career Gateway UI & Inclusive Interview Accommodations Generator Modal
 * Supports Amharic, Afaan Oromo, Tigrinya, Somali, Arabic (RTL), and English.
 * Fully compliant with WCAG 2.2 AA (SC 4.1.3, SC 2.1.1, SC 2.4.7, SC 3.1.2, SC 1.4.3).
 */

const LOCALIZED_UI = {
  am: {
    launcher: "ረዳት ይጠይቁ (አማርኛ)",
    dialogTitle: "ሁለንተናዊ ባለብዙ ቋንቋ የትምህርት ረዳት",
    tutorTab: "የኮርስ ረዳት",
    careerTab: "የስራ እድሎች",
    placeholder: "ጥያቄዎን ከኮርሱ እዚህ ይጻፉ...",
    send: "ላክ",
    micLabel: "በድምጽ ይጠይቁ",
    simpleBtn: "ቀላል ሁነታ",
    simpleActive: "ቀላል ሁነታ: በርቷል",
    humanHelpBtn: "የሰው እርዳታ",
    closeTitle: "ዝጋ (Escape)",
    screenShareActive: "🟢 ስክሪን ማጋራት በርቷል (በእርስዎ ቁጥጥር ስር)",
    stopShare: "አቁም",
    welcome: "ሰላም! እኔ የእርስዎ የኮርስ ረዳት ነኝ። በኮርሱ ዙሪያ ማንኛውንም ጥያቄ ይጠይቁኝ።",
    langChangedAnnouncement: "ቋንቋ ወደ አማርኛ ተቀይሯል። ሰላም! እኔ የእርስዎ የኮርስ ረዳት ነኝ።",
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
    jumpToSection: "በኮርሱ ውስጥ ክፈት",
    micListening: "🎤 ማይክሮፎን በርቷል፤ አሁን ጥያቄዎን ይናገሩ...",
    micStopped: "የድምጽ ቀረጻ ቆሟል።",
    micNotSupported: "በዚህ ብሮውዘር ላይ የድምጽ አገልግሎት አይሰራም። እባክዎ በጽሁፍ ይጠይቁ።",
    micPermissionDenied: "የማይክሮፎን ፈቃድ ተከልክሏል።",
    escalateModalTitle: "🆘 ከአማካሪ ጋር ይገናኙ",
    escalateModalDesc: "ስክሪንዎን በማጋራት ወይም በጽሁፍ መልእክት ከሰው አማካሪ ጋር በቀጥታ መገናኘት ይችላሉ። በማንኛውም ሰዓት ማጋራቱን ማቆም ይችላሉ።",
    shareScreenBtn: "🖥️ ስክሪን ለአማካሪ አጋራ",
    chatHelpOnlyBtn: "💬 በጽሁፍ ብቻ እርዳታ ጠይቅ",
    cancelBtn: "ተመለስ",
    mentorConnected: "ከሰው አማካሪ ጋር ተገናኝተዋል። ስክሪን ማጋራት በርቷል።",
    mentorTicketCreated: "የአማካሪ እርዳታ ጥያቄ ተመዝግቧል (ቲኬት #{id})። አማካሪ በቅርቡ ይመልሳል።",
    screenShareStopped: "ስክሪን ማጋራት ቆሟል። ምስልዎ በግል ቁጥጥር ስር ነው።",
    careerHeading: "💼 የስራ እድሎች እና የቅጥር ድጋፍ",
    careerSubheading: "ሁሉም አሰሪዎች የተረጋገጠ የተደራሽነት እና የፈተና ማመቻቸት (Accommodations) ያቀርባሉ።",
    applyBtn: "አመልክት",
    requestAccBtn: "♿ የፈተና ማመቻቸት ጠይቅ",
    accModalTitle: "የስራ ፈተና ማመቻቸት ቅጽ",
    accModalIntro: "አሰሪው በእርስዎ የችሎታ ማሳያ ወቅት ተገቢውን ድጋፍ እንዲያደርግ የሚያስፈልጉዎትን ማመቻቸቶች ይምረጡ፦",
    optScreenReader: "🖥️ የስክሪን አንባቢ ተኳኋኝነት (NVDA / TalkBack ተደራሽ የፈተና ሲስተም)",
    optExtendedTime: "⏱️ ተጨማሪ የፈተና ጊዜ (ከ 25% እስከ 50% ተጨማሪ ሰዓት)",
    optCameraOptional: "📹 ካሜራ ማብራት ግዴታ ያልሆነበት ወይም የትርጉም ጽሁፍ (Captions)",
    optAdvanceNotice: "📝 የቃለ መጠይቁን ዋና ዋና ርእሶች አስቀድሞ መቀበል",
    optChatInterview: "💬 በጽሁፍ የሚካሄድ ቃለ መጠይቅ አማራጭ",
    customNotesLabel: "ተጨማሪ ማስታወሻ ወይም ፍላጎት (አማራጭ)፦",
    customNotesPlaceholder: "ለምሳሌ፦ ለፈተናው የ Amharic NVDA ስክሪን አንባቢ እጠቀማለሁ...",
    letterPreviewTitle: "📄 ለአሰሪው የሚላክ ይፋዊ ደብዳቤ፦",
    copyLetterBtn: "📋 ደብዳቤውን ቅዳ",
    letterCopied: "ደብዳቤው ተቀድቷል!",
    submitAccBtn: "📨 ከማመልከቻ ጋር ላክ",
    accSubmitted: "የማመቻቸት ጥያቄዎ በተሳካ ሁኔታ ተልኳል!",
    verifiedEmployers: "የተረጋገጡ አሰሪዎች",
    accommodationsReady: "ማመቻቸት ዝግጁ",
    screenReaderOptimized: "ለስክሪን አንባቢ ምቹ",
    searchJobsPlaceholder: "ስራዎችን፣ አሰሪዎችን ወይም መለያዎችን ይፈልጉ...",
    allRolesFilter: "ሁሉም ስራዎች",
    remoteFilter: "የርቀት ስራ",
    srFilter: "ስክሪን አንባቢ",
    flexibleFilter: "ተለዋዋጭ ሰዓት",
    verifiedEmployer: "የተረጋገጠ አሰሪ",
    activelyHiring: "አሁን እየቀጠረ ያለ",
    noJobsFound: "የሚዛመድ ስራ አልተገኘም",
    noJobsFoundDesc: "የመረጡትን ቃል ወይም ፊልተር በመቀየር በድጋሚ ይሞክሩ።",
    resetFiltersBtn: "ሁሉንም ስራዎች አሳይ",
  },
  om: {
    launcher: "Gargaaraa Gaafadhaa",
    dialogTitle: "Gargaaraa Barnootaa Afaan Baay'ee",
    tutorTab: "Gargaaraa Koorsii",
    careerTab: "Carraawwan Hojii",
    placeholder: "Gaaffii keessan asitti barreessaa...",
    send: "Ergi",
    micLabel: "Sagaleen gaafadhaa",
    simpleBtn: "Haala Salphaa",
    simpleActive: "Salphaa: Hojjetaa jira",
    humanHelpBtn: "Gargaarsa Namaa",
    closeTitle: "Cufi (Escape)",
    screenShareActive: "🟢 Iskirinii qooduun hojjetaa jira (To'annoo keessan jala)",
    stopShare: "Dhaabi",
    welcome: "Akkam! Ani gargaaraa koorsii keessaniiti. Gaaffii qabdan kamiyyuu na gaafadhaa.",
    langChangedAnnouncement: "Afaan gara Afaan Oromootti jijjiirameera. Akkam! Ani gargaaraa koorsii keessaniiti.",
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
    jumpToSection: "Koorsicha keessatti bani",
    micListening: "🎤 Waraabbiin banaadha, amma gaaffii keessan dubbadhaa...",
    micStopped: "Waraabbiin sagalee dhaabbateera.",
    micNotSupported: "Barowzariin kun waraabbii sagalee hin deeggaru.",
    micPermissionDenied: "Eeyyamni makarafoonaa dhowrkameera.",
    escalateModalTitle: "🆘 Gorsaa Namaa Waliin Wal Qunnamaa",
    escalateModalDesc: "Iskirinii keessan qooduun ykn barreeffamaan gargaarsa argachuu dandeessu. Yeroo barbaaddanitti dhaabuu dandeessu.",
    shareScreenBtn: "🖥️ Iskirinii Qoodi",
    chatHelpOnlyBtn: "💬 Gargaarsa Barreeffamaa Qofa",
    cancelBtn: "Haqi",
    mentorConnected: "Gorsaa namaa waliin wal qunnamtaniittu. Iskiriniin qoodamaa jira.",
    mentorTicketCreated: "Tikkeetiin gargaarsaa banameera (#{id}). Gorsaan dafee deebisa.",
    screenShareStopped: "Iskirinii qooduun dhaabbateera.",
    careerHeading: "💼 Carraawwan Hojii fi Gargaarsa Qacarrii",
    careerSubheading: "Hojjechiistonni hundi sirna qormaataa mijaawaa ta'e dhiyeessu.",
    applyBtn: "Iyyadhu",
    requestAccBtn: "♿ Gargaarsa Qormaataa Gaafadhaa",
    accModalTitle: "Unka Gaaffii Gargaarsa Qormaataa",
    accModalIntro: "Hojjechiisaan deeggarsa akka taasisuuf fedhii keessan filadhaa፦",
    optScreenReader: "🖥️ Qormaata 'Screen Reader' (NVDA / TalkBack) mijaawaa",
    optExtendedTime: "⏱️ Yeroo dabalataa (25% hanga 50%)",
    optCameraOptional: "📹 Kaameeraan dirqama kan hin taane ykn barreeffama",
    optAdvanceNotice: "📝 Mata-dureewwan qormaataa dursee beekuu",
    optChatInterview: "💬 Qormaata barreeffamaa qofa filachuu",
    customNotesLabel: "Yaada dabalataa (Filannoo)፦",
    customNotesPlaceholder: "Fkn: Qormaataaf Afaan Oromoo NVDA nan fayyadama...",
    letterPreviewTitle: "📄 Xalayaa Hojjechiisaaf dhiyaatu፦",
    copyLetterBtn: "📋 Xalayaa waraabi",
    letterCopied: "Xalayaan waraabameera!",
    submitAccBtn: "📨 Iyyannoo waliin ergi",
    accSubmitted: "Gaaffiin gargaarsaa milkaa'inaan ergameera!",
    verifiedEmployers: "Hojjechiistota Mirkanaa'an",
    accommodationsReady: "Mijaawummaan Qophaa'e",
    screenReaderOptimized: "Screen Reader-f Mijaawaa",
    searchJobsPlaceholder: "Hojiiwwan, dhaabbilee ykn tags barbaadaa...",
    allRolesFilter: "Hojiiwwan Hunda",
    remoteFilter: "Fageenyaa",
    srFilter: "Screen Reader",
    flexibleFilter: "Yeroo Mijaawaa",
    verifiedEmployer: "Hojjechiisaa Mirkanaa'e",
    activelyHiring: "Hojjataa Qacaruutti Jira",
    noJobsFound: "Hojiin walsimu hin argamne",
    noJobsFoundDesc: "Jechoota barbaacha jijjiiruun irra deebi'aa yaalaa.",
    resetFiltersBtn: "Hojiiwwan Hunda Agarsiisi",
  },
  ti: {
    launcher: "ሓጋዚ ሕተቱ",
    dialogTitle: "ኩለመዳያዊ فرቲ ሓጋዚ ትምህርቲ",
    tutorTab: "ናይ ኮርስ ሓጋዚ",
    careerTab: "ናይ ስራሕ ዕድላት",
    placeholder: "ሕቶኹም ኣብዚ ጸሓፉ...",
    send: "ስደድ",
    micLabel: "ብድምጺ ሕተቱ",
    simpleBtn: "ቀሊል ኣገባብ",
    simpleActive: "ቀሊል: በርቲሁ ኣሎ",
    humanHelpBtn: "ናይ ሰብ ሓገዝ",
    closeTitle: "ዕጾ (Escape)",
    screenShareActive: "🟢 ስክሪን ምክፋል በርቲሁ ኣሎ",
    stopShare: "ኣቋርጽ",
    welcome: "ሰላም! ኣነ ናይዚ ኮርስ ሓጋዚኹም እየ። ዝኾነ ሕቶ ሃልዩኩም ሕተቱኒ።",
    langChangedAnnouncement: "ቋንቋ ናብ ትግርኛ ተቐይሩ ኣሎ። ሰላም! ኣነ ናይዚ ኮርስ ሓጋዚኹም እየ።",
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
    jumpToSection: "ኣብቲ ኮርስ ኽፈት",
    micListening: "🎤 ማይክሮፎን በርቲሁ፤ ሕጂ ተዛረቡ...",
    micStopped: "ቀረጻ ድምጺ ተቛሪጹ።",
    micNotSupported: "ናይ ድምጺ ኣገልግሎት ኣብዚ ብሮውዘር ኣይሰርሕን።",
    micPermissionDenied: "ናይ ማይክሮፎን ፍቓድ ተኸልኪሉ።",
    escalateModalTitle: "🆘 ምስ ሰብ ሓጋዚ ተራኸቡ",
    escalateModalDesc: "ስክሪን ብምክፋል ወይ ብጽሑፍ መልእኽቲ ናይ ሰብ ሓገዝ ክትረኽቡ ትኽእሉ ኢኹም።",
    shareScreenBtn: "🖥️ ስክሪን ኣካፍል",
    chatHelpOnlyBtn: "💬 ብጽሑፍ ጥራይ ሓግዙኒ",
    cancelBtn: "ተመለስ",
    mentorConnected: "ምስ ሰብ ሓጋዚ ተራኺብኩም ኣለኹም። ስክሪን ምክፋል በርቲሁ።",
    mentorTicketCreated: "ናይ ሓገዝ ሕቶ ተመዝጊቡ ኣሎ (#{id})።",
    screenShareStopped: "ስክሪን ምክፋል ተቛሪጹ።",
    careerHeading: "💼 ናይ ስራሕ ዕድላትን ናይ ቆጺራ ሓገዝን",
    careerSubheading: "ኩሎም ኣስራሕቲ ዝተረጋገጸ ናይ ፈተና ምቹእነት የቕርቡ።",
    applyBtn: "ኣመልክት",
    requestAccBtn: "♿ ናይ ፈተና ምቹእነት ሕተት",
    accModalTitle: "ቅጥዒ ሕቶ ምቹእነት ፈተና",
    accModalIntro: "እቲ ኣስራሒ ግቡእ ሓገዝ ክገብረልኩም ዘድልየኩም ምቹእነት ምረጹ፦",
    optScreenReader: "🖥️ ብስክሪን ኣንባቢ ዝሰርሕ ፈተና (NVDA / TalkBack)",
    optExtendedTime: "⏱️ ተወሳኺ ናይ ፈተና ግዜ (ካብ 25% ክሳብ 50%)",
    optCameraOptional: "📹 ካሜራ ዘይግድድ ወይ ንኡስ ጽሑፍ (Captions)",
    optAdvanceNotice: "📝 ኣርእስታት ናይቲ ቃለ መሕትት ኣቐዲምካ ምቕባል",
    optChatInterview: "💬 ብጽሑፍ ዝካየድ ቃለ መሕትት",
    customNotesLabel: "ተወሳኺ ድሌት (ኣማራጺ)፦",
    customNotesPlaceholder: "ንኣብነት፦ ናይ ትግርኛ NVDA እጥቀም...",
    letterPreviewTitle: "📄 ናብ ኣስራሒ ዝለኣኽ ደብዳቤ፦",
    copyLetterBtn: "📋 ነቲ መልእኽቲ ቅዳሕ",
    letterCopied: "መልእኽቲ ተቐዲሑ ኣሎ!",
    submitAccBtn: "📨 ምስቲ መመልከቲ ስደድ",
    accSubmitted: "ሕቶ ምቹእነት ብዓወት ተሰዲዱ ኣሎ!",
    verifiedEmployers: "ዝተረጋገጹ ኣስራሕቲ",
    accommodationsReady: "ምቹእነት ድሉው",
    screenReaderOptimized: "ንናይ ስክሪን ኣንባቢ ምቹእ",
    searchJobsPlaceholder: "ስራሕቲ፣ ትካላት ወይ መለለዪታት ሕረዩ...",
    allRolesFilter: "ኩሎም ስራሕቲ",
    remoteFilter: "ናይ ርሕቐት",
    srFilter: "ስክሪን ኣንባቢ",
    flexibleFilter: "ምቹእ ሰዓታት",
    verifiedEmployer: "ዝተረጋገጸ ኣስራሒ",
    activelyHiring: "ሕጂ ዝቖጽር ዘሎ",
    noJobsFound: "ተመሳሳሊ ስራሕ ኣይተረኽበን",
    noJobsFoundDesc: "ቃላት ምድላይ ብምቕያር ደጊምኩም ፈትኑ።",
    resetFiltersBtn: "ኩሉ ስራሕቲ ኣርእይ",
  },
  so: {
    launcher: "Weydii Caawiyaha",
    dialogTitle: "Kaaliyaha Waxbarashada Luqadaha Badan",
    tutorTab: "Caawiyaha Koorsada",
    careerTab: "Fursadaha Shaqada",
    placeholder: "Halkan ku qor su'aashaada...",
    send: "Dir",
    micLabel: "Cod ku weydii",
    simpleBtn: "Qaab Fudud",
    simpleActive: "Fudud: Waa shidan yahay",
    humanHelpBtn: "Caawinaad Qof",
    closeTitle: "Xidh (Escape)",
    screenShareActive: "🟢 Wadaagista shaashadu waa shaqaynaysaa",
    stopShare: "Jooji",
    welcome: "Kusoo dhowow! Waxaan ahay caawiyahaaga koorsada. Wax su'aal ah i waydii.",
    langChangedAnnouncement: "Luqadda waxaa loo beddelay Soomaali. Kusoo dhowow! Waxaan ahay caawiyahaaga koorsada.",
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
    jumpToSection: "Ka fur koorsada dhexdeeda",
    micListening: "🎤 Makarafoonku waa shidan yahay, hadal hadda...",
    micStopped: "Duubista codka waa la joojiyay.",
    micNotSupported: "Kala-bixiyahan ma taageero aqoonsiga codka.",
    micPermissionDenied: "Ogolaanshaha makarafoonka waa la diiday.",
    escalateModalTitle: "🆘 La Xiriir Lataliye Aadanaha",
    escalateModalDesc: "Waxaad la wadaagi kartaa shaashaddaada lataliye ama waxaad heli kartaa caawinaad qoraal ah.",
    shareScreenBtn: "🖥️ Wadaag Shaashadda",
    chatHelpOnlyBtn: "💬 Caawinaad Qoraal Qura",
    cancelBtn: "Jooji",
    mentorConnected: "Waxa lagugu xidhay lataliye aadanaha.",
    mentorTicketCreated: "Tikidhka caawinta waa la diiwaangeliyay (#{id}).",
    screenShareStopped: "Wadaagista shaashadu waa joogsatay.",
    careerHeading: "💼 Fursadaha Shaqada iyo Taageerada Shaqaaleysiinta",
    careerSubheading: "Dhammaan loo-shaqeeyayaashu waxay bixiyaan fursado la xaqiijiyay.",
    applyBtn: "Dalbo",
    requestAccBtn: "♿ Dalbo Fursadaha Gaarka ah",
    accModalTitle: "Foomka Codsiga Fursadaha Gaarka ah",
    accModalIntro: "Dooro fursadaha aad u baahan tahay inta lagu jiro qiimeynta፦",
    optScreenReader: "🖥️ Qiimeyn u shaqeysa Screen Reader (NVDA / TalkBack)",
    optExtendedTime: "⏱️ Waqti dheeraad ah oo loogu talagalay imtixaanka (25% - 50%)",
    optCameraOptional: "📹 Kaamiro aan qasab ahayn ama qoraal toos ah",
    optAdvanceNotice: "📝 Helitaanka mowduucyada waraysiga kahor",
    optChatInterview: "💬 Waraysi ku saleysan qoraal qura",
    customNotesLabel: "Faahfaahin dheeraad ah (Ikhtiyaari)፦",
    customNotesPlaceholder: "Tusaale: Waxaan adeegsadaa NVDA...",
    letterPreviewTitle: "📄 Warqadda loo dirayo shirkadda፦",
    copyLetterBtn: "📋 Nuqul ka qaad warqadda",
    letterCopied: "Warqaddii waa la koobiyay!",
    submitAccBtn: "📨 U dir codsiga shaqada la socota",
    accSubmitted: "Codsigaagii si guul leh ayaa loo diray!",
    verifiedEmployers: "Loo-shaqeeyayaal La Xaqiijiyay",
    accommodationsReady: "U Diyaar Garowga Fursadaha",
    screenReaderOptimized: "Screen Reader U Habaysan",
    searchJobsPlaceholder: "Raadi shaqooyinka, shirkadaha...",
    allRolesFilter: "Dhammaan Shaqooyinka",
    remoteFilter: "Meel Fog (Remote)",
    srFilter: "Screen Reader",
    flexibleFilter: "Waqti Dabacsan",
    verifiedEmployer: "Loo-shaqeeye La Xaqiijiyay",
    activelyHiring: "Hadda Shaqo Bixinaya",
    noJobsFound: "Shaqo u dhiganta lama helin",
    noJobsFoundDesc: "Isku day adoo beddelaya erayada baadhista.",
    resetFiltersBtn: "Muuji Dhammaan Shaqooyinka",
  },
  ar: {
    launcher: "اسأل المساعد التعليمي",
    dialogTitle: "المساعد التعليمي متعدد اللغات وبوابة المهن",
    tutorTab: "المساعد الدراسي",
    careerTab: "بوابة الوظائف",
    placeholder: "اكتب سؤالك التعليمي هنا...",
    send: "إرسال",
    micLabel: "تحدث بسؤالك صوتياً",
    simpleBtn: "النمط المبسط",
    simpleActive: "النمط المبسط: مفعّل",
    humanHelpBtn: "طلب مساعدة بشرية",
    closeTitle: "إغلاق (Escape)",
    screenShareActive: "🟢 مشاركة الشاشة قيد التشغيل (تحت سيطرتك)",
    stopShare: "إيقاف المشاركة",
    welcome: "مرحباً! أنا المساعد التعليمي الذكي الخاص بك. اسألني أي سؤال من محتوى الدورة.",
    langChangedAnnouncement: "تم تغيير اللغة إلى العربية. مرحباً! أنا المساعد التعليمي الذكي الخاص بك.",
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
    jumpToSection: "الانتقال إلى القسم",
    micListening: "🎤 الميكروفون يستمع، تفضل بطرح سؤالك الآن...",
    micStopped: "تم إيقاف التسجيل الصوتي.",
    micNotSupported: "التعرف الصوتي غير مدعوم في هذا المتصفح.",
    micPermissionDenied: "تم رفض الإذن بالوصول للميكروفون.",
    escalateModalTitle: "🆘 التواصل مع مرشد بشري",
    escalateModalDesc: "يمكنك مشاركة شاشتك مع مرشد تعليمي معتمد أو طلب دعم نصي فوري. لديك السيطرة الكاملة لإيقاف المشاركة في أي وقت.",
    shareScreenBtn: "🖥️ بدء مشاركة الشاشة مع المرشد",
    chatHelpOnlyBtn: "💬 طلب مساعدة نصية فقط",
    cancelBtn: "إلغاء",
    mentorConnected: "تم الاتصال بالمرشد البشري. مشاركة الشاشة قيد التشغيل.",
    mentorTicketCreated: "تم فتح تذكرة مساعدة بنجاح (رقم #{id}). سيجيب المرشد قريباً.",
    screenShareStopped: "تم إيقاف مشاركة الشاشة واستعادة الخصوصية.",
    careerHeading: "💼 بوابة الوظائف والدعم المهني الشامل",
    careerSubheading: "جميع أرباب العمل يقدمون تسهيلات تقييم ومقابلات معتمدة وموثوقة.",
    applyBtn: "تقديم طلب",
    requestAccBtn: "♿ طلب تسهيلات المقابلة",
    accModalTitle: "نموذج طلب تسهيلات المقابلة والعمل",
    accModalIntro: "اختر التسهيلات اللازمة لضمان تقييم عادل لقدراتك المهنية:",
    optScreenReader: "🖥️ اختبار متوافق مع قارئات الشاشة (NVDA / TalkBack / JAWS)",
    optExtendedTime: "⏱️ وقت إضافي للاختبارات الفنية (25% إلى 50%)",
    optCameraOptional: "📹 الكاميرا اختيارية أو توفير ترجمة نصية فورية (Captions)",
    optAdvanceNotice: "📝 إشعار مسبق بمحاور وأسئلة المقابلة (قبل 24 ساعة)",
    optChatInterview: "💬 خيار إجراء المقابلة عبر الدردشة النصية",
    customNotesLabel: "ملاحظات واحتياجات إضافية مخصصة (اختياري):",
    customNotesPlaceholder: "مثال: أستخدم قارئ الشاشة باللغة العربية...",
    letterPreviewTitle: "📄 نص الخطاب الرسمي الموجه لفريق التوظيف:",
    copyLetterBtn: "📋 نسخ الخطاب الرسمي",
    letterCopied: "تم نسخ الخطاب بنجاح!",
    submitAccBtn: "📨 إرسال مع طلب التوظيف",
    accSubmitted: "تم إرسال طلب التسهيلات بنجاح إلى فريق التوظيف!",
    verifiedEmployers: "جهات عمل معتمدة وشاملة",
    accommodationsReady: "تسهيلات مقابلة مضمونة",
    screenReaderOptimized: "متوافق 100% مع قارئات الشاشة",
    searchJobsPlaceholder: "ابحث في الوظائف، الشركات، أو المهارات...",
    allRolesFilter: "جميع الوظائف",
    remoteFilter: "عن بُعد",
    srFilter: "قارئ الشاشة",
    flexibleFilter: "ساعات مرنة",
    verifiedEmployer: "جهة عمل موثوقة",
    activelyHiring: "توظيف نشط حالياً",
    noJobsFound: "لم يتم العثور على وظائف مطابقة",
    noJobsFoundDesc: "يرجى تغيير كلمات البحث أو إعادة ضبط خيارات التصفية.",
    resetFiltersBtn: "عرض كافة الوظائف المتاحة",
  },
  en: {
    launcher: "Ask AI Tutor (Help)",
    dialogTitle: "Universal Multilingual Assistant & Career Gateway",
    tutorTab: "Course Tutor",
    careerTab: "Career Gateway",
    placeholder: "Type your question from the curriculum...",
    send: "Send",
    micLabel: "Speak your question",
    simpleBtn: "Simple Mode",
    simpleActive: "Simple Mode: ON",
    humanHelpBtn: "Human Help",
    closeTitle: "Close (Escape)",
    screenShareActive: "🟢 Screen Sharing Active (You are in control)",
    stopShare: "Stop Sharing",
    welcome: "Hello! I am your course assistant. Ask me any question from the curriculum.",
    langChangedAnnouncement: "Language changed to English. Hello! I am your course assistant.",
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
    jumpToSection: "Jump to section in course",
    micListening: "🎤 Microphone listening, please speak your question now...",
    micStopped: "Voice recording stopped.",
    micNotSupported: "Speech recognition is not supported in this browser.",
    micPermissionDenied: "Microphone permission was denied.",
    escalateModalTitle: "🆘 Connect with Human Mentor",
    escalateModalDesc: "You can share your screen with a verified course mentor or request direct chat assistance. You maintain 100% control to end sharing at any time.",
    shareScreenBtn: "🖥️ Share Screen with Mentor",
    chatHelpOnlyBtn: "💬 Request Chat Help Only",
    cancelBtn: "Cancel",
    mentorConnected: "Connected with human mentor. Screen sharing is active.",
    mentorTicketCreated: "Mentor assistance ticket created (#{id}). A mentor will reply shortly.",
    screenShareStopped: "Screen sharing ended. Your display is private.",
    careerHeading: "💼 Inclusive Career Gateway",
    careerSubheading: "All employers offer verified interview accommodations and accessibility support.",
    applyBtn: "Apply",
    requestAccBtn: "♿ Request Accommodations",
    accModalTitle: "Interview Accommodations Generator",
    accModalIntro: "Select the workplace and assessment accommodations you need for an equitable interview:",
    optScreenReader: "🖥️ Screen Reader Compatible Assessment (NVDA / TalkBack / JAWS)",
    optExtendedTime: "⏱️ Extended Assessment Time (25% to 50% extra time)",
    optCameraOptional: "📹 Camera-Optional or Live Closed Captions",
    optAdvanceNotice: "📝 Advance Notice of Interview Topics (24 hours prior)",
    optChatInterview: "💬 Text-based / Asynchronous Interview Option",
    customNotesLabel: "Additional Accommodation Notes (Optional):",
    customNotesPlaceholder: "e.g., I will be completing the assessment using NVDA screen reader...",
    letterPreviewTitle: "📄 Formal Letter to Hiring Committee:",
    copyLetterBtn: "📋 Copy Formal Letter",
    letterCopied: "Letter copied to clipboard!",
    submitAccBtn: "📨 Submit with Application",
    accSubmitted: "Accommodation request submitted successfully!",
    verifiedEmployers: "Verified Inclusive Employers",
    accommodationsReady: "Accommodations Ready",
    screenReaderOptimized: "Screen Reader Optimized",
    searchJobsPlaceholder: "Search roles, companies, tags...",
    allRolesFilter: "All Roles",
    remoteFilter: "Remote",
    srFilter: "Screen Reader",
    flexibleFilter: "Flexible Hours",
    verifiedEmployer: "Verified Employer",
    activelyHiring: "Actively Hiring",
    noJobsFound: "No matching opportunities found",
    noJobsFoundDesc: "Try adjusting your search terms or clearing category filters.",
    resetFiltersBtn: "Show All Opportunities",
  }
};

/**
 * Course Grounding Knowledge Base
 * Directly mirrors Savanna static course material (concept-with-navigation.html)
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
    keywords: ["aspiring", "beginner", "start", "advice", "portfolio", "ተማሪ", "ጀማሪ", "ስራ", "መጀመር", "ምክር", "jalqaba", "barataa", "hojii", "مبتدئ", "بداية", "نصائح"],
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


/**
 * Verified Inclusive Job Opportunities Database (WCAG 2.2 AA / CRPD Verified)
 * Employers pre-committed to screen reader accessible assessments and workplace accommodations.
 */
const INCLUSIVE_JOBS_DB = [
  {
    id: "job-1",
    title: "Remote Executive Virtual Assistant",
    company: "Savanna Global Partners",
    location: "Addis Ababa / Remote (Global)",
    salary: "$800 - $1,200 / mo",
    tags: ["Remote", "Screen Reader Friendly", "Flexible Hours"],
    categories: ["remote", "screen-reader", "flexible"],
    workType: "Full-time",
    titles: {
      am: "የርቀት ስራ አስፈፃሚ ቨርቹዋል ረዳት",
      om: "Gargaaraa Hojii Fageenyaa Olaanaa",
      ti: "ናይ ርሕቐት ቨርቹዋል ረዳት ፈጻሚ",
      so: "Kaaliyaha Fulinta ee Fog",
      ar: "مساعد افتراضي تنفيذي عن بُعد",
      en: "Remote Executive Virtual Assistant"
    },
    descriptions: {
      am: "ዓለም አቀፍ ስራ ፈጣሪዎችን በኢሜይል አስተዳደር፣ በቀን መቁጠሪያ ማቀናጀት እና በስራ ቅንጅት ያግዙ። ሙሉ የፈተና ማመቻቸት ይደረጋል።",
      om: "Hundeeffamtoota addunyaa e-meelii qindeessuu fi karoora hojii to'achuu keessatti deeggaraa. Qormaata mijaawaan ni kennama.",
      ti: "ንዓለምለኸ መስረትቲ ብናይ ኢሜይል ምምሕዳርን ካላንደር ምውዳድን ሓግዙ። ምሉእ ናይ ፈተና ምቹእነት ይወሃብ።",
      so: "Kaalmee aasaasayaasha caalamiga ah maaraynta iimaylada iyo jadwalka. Fursado buuxa oo la xaqiijiyay.",
      ar: "دعم رواد الأعمال العالميين في إدارة البريد الإلكتروني، الجداول الزمنية، وأتمتة المهام. يتم توفير كافة التسهيلات المعتمدة.",
      en: "Support international founders with email management, calendar coordination, and workflow orchestration. Full accommodations verified."
    }
  },
  {
    id: "job-2",
    title: "Multilingual Customer Care Specialist",
    company: "Ethio-Telecom Digital Hub",
    location: "Remote / Hybrid (Ethiopia)",
    salary: "18,000 - 24,000 ETB / mo",
    tags: ["Amharic/Oromo/English", "Assistive Tech Verified"],
    categories: ["remote", "screen-reader"],
    workType: "Full-time",
    titles: {
      am: "ባለብዙ ቋንቋ የደንበኞች አገልግሎት ባለሙያ",
      om: "Ogeessa Tajaajila Maamilaa Afaan Baay'ee",
      ti: "ክኢላ ኣገልግሎት ዓማዊል فرቲ ቋንቋታት",
      so: "Khabiirka Daryeelka Macmiilka Luqadaha Badan",
      ar: "أخصائي خدمة عملاء متعدد اللغات",
      en: "Multilingual Customer Care Specialist"
    },
    descriptions: {
      am: "የደንበኞችን ጥያቄዎች በጽሁፍ እና በኢሜይል ይመልሱ። የ NVDA / JAWS ስክሪን አንባቢ ድጋፍ በዳሽቦርዱ ላይ ሙሉ በሙሉ ተካቷል።",
      om: "Gaaffilee maamiltootaa barreeffamaa fi e-meeliin deebisaa. Deeggarsi 'Screen Reader' guutuu qaba.",
      ti: "ሕቶታት ዓማዊል ብጽሑፍን ኢሜይልን መልሱ። ናይ ስክሪን ኣንባቢ ሓገዝ ምሉእ ብምሉእ ዝተሓወሰ እዩ።",
      so: "Ka jawaab su'aalaha macaamiisha qoraal iyo iimayl ahaan. Nidaamku wuxuu taageeraa Screen Reader.",
      ar: "الرد على استفسارات العملاء عبر الدردشة والبريد الإلكتروني. لوحة التحكم متوافقة 100% مع برامج قارئ الشاشة.",
      en: "Handle inbound customer inquiries via chat and email. Assistive software (NVDA/JAWS) fully integrated into support dashboard."
    }
  },
  {
    id: "job-3",
    title: "AI Data Annotation & Accessibility Reviewer",
    company: "Bana AI Labs",
    location: "Fully Remote (East Africa)",
    salary: "$600 - $950 / mo",
    tags: ["No Voice Call Required", "Part-Time / Full-Time"],
    categories: ["remote", "flexible"],
    workType: "Flexible / Part-time",
    titles: {
      am: "የ AI ዳታ መረጃ ገምጋሚ እና የተደራሽነት ተንታኝ",
      om: "Qorataa Daataa AI fi Qulqullina Mijaawummaa",
      ti: "ገምጋሚ ሓበሬታ AIን ተበጻሕነትን",
      so: "Falanqeeyaha Xogta AI iyo Helitaanka",
      ar: "مقيّم بيانات الذكاء الاصطناعي ومعايير النفاذية الرقمية",
      en: "AI Data Annotation & Accessibility Reviewer"
    },
    descriptions: {
      am: "የአርቲፊሻል ኢንተሊጀንስ ምላሾችን ለምስራቅ አፍሪካ ቋንቋዎች ተደራሽነት እና ጥራት ይገምግሙ። የስክሪን አንባቢ ተጠቃሚዎች ቅድሚያ ይሰጣቸዋል።",
      om: "Deebiiwwan AI afaanota Baha Afrikaaf qulqullinaa fi mijaawummaa isaanii qoradhaa.",
      ti: "ናይ AI መልስታት ንቋንቋታት ምብራቕ ኣፍሪቃ ብቑዕን ተበጻሕን ምዃኑ ገምግሙ።",
      so: "Qiimee jawaabaha AI ee luqadaha Bariga Afrika. Isticmaalayaasha Screen Reader ayaa mudnaan leh.",
      ar: "مراجعة جودة ونفاذية مخرجات نماذج الذكاء الاصطناعي للغات شرق أفريقيا. أولوية كاملة للمرشحين من مستخدمي قارئات الشاشة.",
      en: "Evaluate multimodal AI responses and screen-reader accessibility for East African languages. Prioritizes screen reader users."
    }
  },
  {
    id: "job-4",
    title: "Digital Accessibility QA Tester",
    company: "InclusiveWeb Global",
    location: "Remote",
    salary: "$1,000 - $1,500 / mo",
    tags: ["WCAG 2.2 AA", "Screen Reader Expert"],
    categories: ["remote", "screen-reader"],
    workType: "Full-time",
    titles: {
      am: "የዲጂታል ተደራሽነት የጥራት ቁጥጥር ፈታሽ (QA)",
      om: "Qoraa Qulqullina Mijaawummaa Dijitaalaa (QA)",
      ti: "ፈታሺ ፅሬት ዲጂታላዊ ተበጻሕነት (QA)",
      so: "Tijaabiyaha Tayada Helitaanka Dhijitaalka (QA)",
      ar: "فاحص جودة النفاذية الرقمية واختبارات الويب (QA)",
      en: "Digital Accessibility QA Tester"
    },
    descriptions: {
      am: "የድረ-ገጾችን ተደራሽነት በ NVDA፣ TalkBack እና በኪቦርድ ብቻ በመጠቀም ኦዲት ያድርጉ። አካል ጉዳተኝነት ያላቸው አመልካቾች ይበረታታሉ።",
      om: "Mijaawummaa marsariitii 'NVDA' fi 'TalkBack' fayyadamuun qoradhaa.",
      ti: "ተበጻሕነት መርበብ ሓበሬታ ብ NVDAን ኪቦርድን ጥራይ ብምጥቃም ፈትሹ።",
      so: "Kormeer helitaanka mareegaha adoo adeegsanaya NVDA iyo TalkBack.",
      ar: "تنفيذ اختبارات التدقيق لمواقع وتطبيقات الويب باستخدام قارئات الشاشة NVDA وTalkBack ولوحة المفاتيح. ترحيب خاص بذوي الإعاقة.",
      en: "Conduct audit testing of web applications using NVDA, TalkBack, and keyboard navigation. Prioritizes candidates with lived experience."
    }
  }
];

const SUPPORTED_LANGUAGES = [
  { code: 'am', flag: '🇪🇹', shortName: 'አማርኛ', nativeName: 'አማርኛ (Amharic)', englishName: 'Amharic' },
  { code: 'om', flag: '🇪🇹', shortName: 'Oromoo', nativeName: 'Afaan Oromoo', englishName: 'Oromo' },
  { code: 'ti', flag: '🇪🇹', shortName: 'ትግርኛ', nativeName: 'ትግርኛ (Tigrinya)', englishName: 'Tigrinya' },
  { code: 'so', flag: '🇸🇴', shortName: 'Soomaali', nativeName: 'Soomaali (Somali)', englishName: 'Somali' },
  { code: 'ar', flag: '🇸🇦', shortName: 'العربية', nativeName: 'العربية (Arabic RTL)', englishName: 'Arabic (RTL)' },
  { code: 'en', flag: '🌐', shortName: 'English', nativeName: 'English', englishName: 'English' }
];


const COMPANY_THEMES = {
  "Savanna Global Partners": {
    bg: "linear-gradient(135deg, #065f46 0%, #047857 55%, #059669 100%)",
    initial: "S",
    badgeColor: "#047857"
  },
  "Ethio-Telecom Digital Hub": {
    bg: "linear-gradient(135deg, #3730a3 0%, #4338ca 55%, #6366f1 100%)",
    initial: "E",
    badgeColor: "#4338ca"
  },
  "Bana AI Labs": {
    bg: "linear-gradient(135deg, #0369a1 0%, #0284c7 55%, #38bdf8 100%)",
    initial: "B",
    badgeColor: "#0284c7"
  },
  "InclusiveWeb Global": {
    bg: "linear-gradient(135deg, #b45309 0%, #d97706 55%, #f59e0b 100%)",
    initial: "I",
    badgeColor: "#b45309"
  }
};

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
    this.recognition = null;
    this.isRecording = false;
    this.lastFocusedElement = null;
    this.activeJobsFilter = "all";
    this.jobsSearchQuery = "";

    // Plug-and-play configuration defaults
    this.partnerId = 'savanna';
    this.courseId = 'VA-1';
    this.themeColor = '#047857';
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

  disconnectedCallback() {
    this.stopScreenShare(false);
    this.stopSpeechRecognition();
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
   * Screen Reader Live Announcer with Dynamic Language Tagging (WCAG 3.1.2 / 4.1.3)
   * Dynamically switches speech synthesis acoustic model to match active language.
   */
  announce(text, lang = this.currentLang) {
    const announcer = this.shadowRoot.getElementById('sr-announcer');
    if (!announcer) return;
    announcer.setAttribute('lang', lang);
    announcer.setAttribute('dir', (LOCALIZED_UI[lang] || {}).direction || 'ltr');
    announcer.textContent = '';
    setTimeout(() => {
      announcer.textContent = text;
    }, 60);
    this.speakVoice(text, lang);
  }

  speakVoice(text, lang = this.currentLang) {
    if (!this.soundEnabled) return;
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const t = LOCALIZED_UI[lang] || LOCALIZED_UI['en'];
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = t.speechLang || 'en-US';
      utterance.rate = 1.0;

      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const targetCode = (t.speechLang || lang).toLowerCase();
        const shortCode = lang.toLowerCase();
        const match = voices.find(v => {
          const vLang = v.lang.toLowerCase().replace('_', '-');
          return vLang === targetCode || vLang.startsWith(shortCode);
        });
        if (match) utterance.voice = match;
      }
      window.speechSynthesis.speak(utterance);
    } catch {
      // Degrade gracefully if TTS is restricted
    }
  }

  playChime(type) {
    if (!this.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'message') {
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(739.99, now + 0.12);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.28);
      } else if (type === 'send') {
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'citation') {
        osc.frequency.setValueAtTime(659.25, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'mic-start') {
        osc.frequency.setValueAtTime(493.88, now); // B4
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'mic-stop') {
        osc.frequency.setValueAtTime(659.25, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.1);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.start(now);
        osc.stop(now + 0.18);
      }
    } catch {
      // Degrade gracefully if AudioContext is blocked
    }
  }

  get styles() {
    const isLeft = this.position.includes('left');
    const isTop = this.position.includes('top');
    const posX = isLeft ? 'left: 20px;' : 'right: 20px;';
    const posY = isTop ? 'top: 20px;' : 'bottom: 20px;';

    return `
      :host {
        --primary: var(--assistant-primary, #047857);
        --primary-hover: #065f46;
        --primary-gradient: linear-gradient(135deg, #065f46 0%, #047857 55%, #059669 100%);
        --primary-light: #ecfdf5;
        --primary-glow: rgba(4, 120, 87, 0.22);
        --accent-blue: #1d4ed8;
        --accent-blue-light: #eff6ff;
        --bg: #ffffff;
        --bg-subtle: #f8fafc;
        --text: #0f172a;
        --text-secondary: #334155;
        --text-muted: #64748b;
        --border: #e2e8f0;
        --border-light: #f1f5f9;
        --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
        --shadow-md: 0 4px 14px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04);
        --shadow-lg: 0 20px 35px -8px rgba(15, 23, 42, 0.18), 0 8px 16px -4px rgba(15, 23, 42, 0.08);
        --shadow-xl: 0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.06);
        --radius-sm: 8px;
        --radius-md: 12px;
        --radius-lg: 18px;
        --font: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", sans-serif;
        --line-height: 1.55;
        --font-size: 14px;
        position: fixed;
        ${posX}
        ${posY}
        z-index: 999999;
        font-family: var(--font);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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

      /* Floating Launcher Button */
      .launcher-btn {
        min-width: 52px;
        min-height: 52px;
        padding: 0 20px;
        border-radius: 9999px;
        background: var(--primary-gradient);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 24px -4px rgba(4, 120, 87, 0.4), 0 4px 10px -2px rgba(4, 120, 87, 0.2);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: -0.01em;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, filter 0.2s ease;
      }
      .launcher-btn:hover {
        transform: translateY(-2px) scale(1.03);
        box-shadow: 0 14px 30px -4px rgba(4, 120, 87, 0.5), 0 6px 14px -2px rgba(4, 120, 87, 0.25);
        filter: brightness(1.04);
      }
      .launcher-btn:active {
        transform: translateY(0) scale(0.97);
      }
      .launcher-btn:focus-visible {
        outline: 3px solid #0f172a;
        outline-offset: 3px;
      }

      /* Drawer Dialog Shell */
      .drawer {
        display: none;
        flex-direction: column;
        width: 390px;
        height: 610px;
        max-width: 96vw;
        max-height: 88vh;
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        overflow: hidden;
      }
      .drawer.open {
        display: flex;
        animation: drawerEntrance 0.24s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      @keyframes drawerEntrance {
        from {
          opacity: 0;
          transform: translateY(16px) scale(0.97);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
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

      /* Mobile Drawer Drag Handle */
      .drawer-mobile-handle {
        display: none;
        width: 40px;
        height: 4px;
        background: rgba(255, 255, 255, 0.45);
        border-radius: 2px;
        margin: 6px auto 2px auto;
      }

      /* Simple Mode (WCAG 3.1.5) */
      .drawer.simple-mode {
        font-size: 17px !important;
        line-height: 1.8 !important;
      }
      .drawer.simple-mode .msg {
        font-size: 17px !important;
        line-height: 1.8 !important;
      }
      .drawer.simple-mode .msg-body {
        font-size: 17px !important;
        line-height: 1.8 !important;
      }

      /* Drawer Header */
      .drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 14px;
        background: var(--primary-gradient);
        color: #ffffff;
        gap: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      }
      .header-title-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
        min-width: 0;
      }
      .header-avatar-badge {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        position: relative;
        flex-shrink: 0;
      }
      .status-dot {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 8px;
        height: 8px;
        background: #22c55e;
        border: 1.5px solid #065f46;
        border-radius: 50%;
        animation: statusPulse 2s infinite ease-in-out;
      }
      @keyframes statusPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.18); opacity: 0.8; }
      }
      .header-title-text {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .header-title {
        font-size: 13.5px;
        font-weight: 700;
        color: #ffffff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        letter-spacing: -0.01em;
        line-height: 1.25;
      }
      .header-subtitle {
        font-size: 10.5px;
        color: rgba(255, 255, 255, 0.85);
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .header-controls {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-shrink: 0;
      }
      .icon-btn {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.22);
        color: #ffffff;
        cursor: pointer;
        padding: 0;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        transition: all 0.15s ease;
      }
      .icon-btn:hover {
        background: rgba(255, 255, 255, 0.28);
        transform: scale(1.05);
      }
      .icon-btn:focus-visible {
        outline: 2px solid #ffffff;
        outline-offset: 2px;
      }

      /* Professional Custom Language Dropdown */
      .lang-dropdown-wrap {
        position: relative;
        display: inline-flex;
        align-items: center;
      }
      .lang-custom-trigger {
        background: rgba(255, 255, 255, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #ffffff;
        border-radius: 9999px;
        padding: 4px 10px;
        font-size: 11.5px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: all 0.18s ease;
        height: 32px;
      }
      .lang-custom-trigger:hover {
        background: rgba(255, 255, 255, 0.28);
      }
      .lang-custom-trigger:focus-visible {
        outline: 2px solid #ffffff;
        outline-offset: 2px;
      }
      .lang-custom-trigger[aria-expanded="true"] {
        background: rgba(255, 255, 255, 0.35);
      }
      .lang-trigger-flag {
        font-size: 13px;
        line-height: 1;
      }
      .lang-trigger-label {
        font-size: 11.5px;
        font-weight: 600;
      }
      .lang-chevron-icon {
        transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        margin-inline-start: 1px;
      }
      .lang-custom-trigger[aria-expanded="true"] .lang-chevron-icon {
        transform: rotate(180deg);
      }
      .lang-custom-menu {
        position: absolute;
        top: calc(100% + 6px);
        right: 0;
        min-width: 210px;
        background: #ffffff;
        border: 1px solid var(--border);
        border-radius: 14px;
        box-shadow: var(--shadow-lg);
        padding: 5px;
        z-index: 1000;
        animation: dropdownFade 0.16s ease-out;
      }
      .drawer[dir="rtl"] .lang-custom-menu {
        right: auto;
        left: 0;
      }
      @keyframes dropdownFade {
        from {
          opacity: 0;
          transform: translateY(-4px) scale(0.96);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .lang-custom-option {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.15s ease;
        color: #1e293b;
        user-select: none;
        font-size: 12px;
      }
      .lang-custom-option:hover, .lang-custom-option:focus-visible {
        background: var(--primary-light);
        color: var(--primary);
        outline: 2px solid var(--primary);
        outline-offset: -1px;
      }
      .lang-custom-option.selected {
        background: #f0fdf4;
        font-weight: 600;
      }
      .lang-opt-flag {
        font-size: 15px;
        line-height: 1;
        flex-shrink: 0;
      }
      .lang-opt-names {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 0;
        line-height: 1.25;
      }
      .lang-opt-native {
        font-size: 12px;
        font-weight: 600;
        color: #0f172a;
      }
      .lang-opt-eng {
        font-size: 10px;
        color: #64748b;
      }
      .lang-opt-check {
        font-size: 12px;
        font-weight: 700;
        color: var(--primary);
        margin-inline-start: auto;
        min-width: 14px;
        text-align: center;
      }

      /* Utility Action Bar */
      .action-bar {
        display: flex;
        gap: 8px;
        padding: 7px 14px;
        background: #ffffff;
        border-bottom: 1px solid var(--border-light);
        align-items: center;
        flex-wrap: wrap;
      }
      .action-chip {
        font-size: 11.5px;
        font-weight: 600;
        padding: 5px 12px;
        border-radius: 9999px;
        border: 1px solid var(--border);
        background: var(--bg-subtle);
        color: var(--text-secondary);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        transition: all 0.15s ease;
        line-height: 1;
      }
      .action-chip:hover {
        background: #f1f5f9;
        border-color: #cbd5e1;
        color: var(--text);
        transform: translateY(-1px);
      }
      .action-chip:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
      }
      .action-chip[aria-pressed="true"] {
        background: var(--primary-light);
        border-color: var(--primary);
        color: var(--primary);
        font-weight: 700;
        box-shadow: 0 1px 3px rgba(4, 120, 87, 0.15);
      }
      .action-chip.chip-escalate {
        background: #fff7ed;
        border-color: #fed7aa;
        color: #c2410c;
      }
      .action-chip.chip-escalate:hover {
        background: #ffedd5;
        border-color: #fdba74;
      }

      /* Persistent Screen Share Banner */
      .screen-share-banner {
        background: #fef2f2;
        border: 1px solid #fca5a5;
        border-radius: 10px;
        margin: 8px 14px;
        padding: 7px 12px;
        display: none;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        box-shadow: 0 1px 3px rgba(239, 68, 68, 0.08);
      }
      .share-info-group {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        min-width: 0;
      }
      .screen-preview-thumb {
        width: 48px;
        height: 32px;
        background: #0f172a;
        border-radius: 6px;
        object-fit: cover;
        border: 1.5px solid #ef4444;
      }
      .btn-stop-share {
        background: #dc2626;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        padding: 5px 11px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        min-height: 28px;
        white-space: nowrap;
        transition: background-color 0.15s ease;
      }
      .btn-stop-share:hover {
        background: #b91c1c;
      }
      .btn-stop-share:focus-visible {
        outline: 2px solid #0f172a;
        outline-offset: 2px;
      }

      /* Segmented Tab Bar */
      .tab-bar {
        display: flex;
        gap: 4px;
        padding: 4px;
        background: #f1f5f9;
        border-radius: 12px;
        margin: 8px 14px 4px 14px;
        border: 1px solid var(--border);
      }
      .tab-btn {
        flex: 1;
        border: none;
        background: transparent;
        padding: 8px 10px;
        border-radius: 9px;
        font-size: 12px;
        font-weight: 600;
        color: var(--text-muted);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        text-align: center;
      }
      .tab-btn:hover {
        color: var(--text);
        background: rgba(255, 255, 255, 0.5);
      }
      .tab-btn[aria-selected="true"] {
        background: #ffffff;
        color: var(--primary);
        font-weight: 700;
        box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.04);
      }
      .tab-btn:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 1px;
      }

      /* Tab Content Panels */
      .tab-panel {
        flex: 1;
        overflow-y: auto;
        padding: 12px 14px;
        background: var(--bg-subtle);
        scrollbar-width: thin;
        scrollbar-color: #cbd5e1 transparent;
      }
      .tab-panel::-webkit-scrollbar {
        width: 5px;
      }
      .tab-panel::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 3px;
      }
      .tab-panel:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: -2px;
      }

      
      /* High-Precision SVG Icons */
      .tab-svg {
        width: 16px;
        height: 16px;
        display: block;
        flex-shrink: 0;
        stroke: currentColor;
        transition: transform 0.2s ease;
      }
      .tab-btn:hover .tab-svg {
        transform: scale(1.1);
      }
      .tab-btn[aria-selected="true"] .tab-svg {
        stroke: #047857;
      }

      .chip-svg {
        width: 14px;
        height: 14px;
        display: block;
        flex-shrink: 0;
        stroke: currentColor;
        transition: transform 0.2s ease;
      }
      .action-chip:hover .chip-svg {
        transform: scale(1.1);
      }

      .mic-svg {
        width: 19px;
        height: 19px;
        display: block;
        stroke: currentColor;
        transition: transform 0.2s ease, stroke 0.2s ease;
      }
      .btn-mic:hover .mic-svg {
        stroke: #047857;
        transform: scale(1.08);
      }
      .btn-mic.recording .mic-svg {
        stroke: #ffffff;
      }

      .send-svg {
        width: 17px;
        height: 17px;
        display: block;
        stroke: #ffffff;
        margin-left: 2px;
        transition: transform 0.2s ease;
      }
      .btn-send:hover .send-svg {
        transform: translate(1px, -1px);
      }

      /* Chat Log */
      .chat-log {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .msg {
        max-width: 88%;
        padding: 12px 14px;
        border-radius: 16px;
        font-size: 13.5px;
        line-height: var(--line-height);
        word-break: break-word;
        position: relative;
        box-shadow: var(--shadow-sm);
      }
      .msg:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
      }
      .msg.user {
        align-self: flex-end;
        background: var(--primary-gradient);
        color: #ffffff;
        border-bottom-right-radius: 4px;
        box-shadow: 0 3px 10px rgba(4, 120, 87, 0.2);
      }
      .drawer[dir="rtl"] .msg.user {
        align-self: flex-start;
        border-bottom-right-radius: 16px;
        border-bottom-left-radius: 4px;
      }
      .msg.tutor {
        align-self: flex-start;
        background: #ffffff;
        color: var(--text);
        border-bottom-left-radius: 4px;
        border: 1px solid var(--border);
      }
      .drawer[dir="rtl"] .msg.tutor {
        align-self: flex-end;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 4px;
      }
      .msg-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 6px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--border-light);
      }
      .msg-author {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        font-weight: 700;
        color: var(--primary);
      }
      .btn-msg-listen {
        background: #f1f5f9;
        border: 1px solid var(--border);
        border-radius: 6px;
        font-size: 11px;
        padding: 2px 6px;
        cursor: pointer;
        color: var(--text-muted);
        transition: all 0.15s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .btn-msg-listen:hover {
        background: var(--primary-light);
        border-color: #a7f3d0;
        color: var(--primary);
      }
      .btn-msg-listen:focus-visible {
        outline: 2px solid var(--primary);
      }
      .msg-body {
        font-size: 13.5px;
        line-height: 1.58;
        color: inherit;
      }

      /* Quick Prompts Container */
      .quick-prompts-bar {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 4px;
      }
      .quick-prompt-btn {
        background: #ffffff;
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 600;
        color: var(--text-secondary);
        text-align: start;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        transition: all 0.18s ease;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
      }
      .quick-prompt-btn:hover {
        background: var(--primary-light);
        border-color: #86efac;
        color: var(--primary);
        transform: translateX(2px);
        box-shadow: 0 2px 6px rgba(4, 120, 87, 0.1);
      }
      .drawer[dir="rtl"] .quick-prompt-btn:hover {
        transform: translateX(-2px);
      }
      .quick-prompt-btn:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 1px;
      }
      .quick-prompt-arrow {
        font-size: 11px;
        color: var(--text-muted);
      }

      /* Interactive Grounded Citation Badges */
      .citation-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
        padding: 7px 11px;
        background: #f0fdf4;
        color: #166534;
        border: 1px solid #bbf7d0;
        border-radius: 8px;
        font-size: 11.5px;
        font-weight: 600;
        cursor: pointer;
        text-align: start;
        transition: all 0.2s ease;
        min-height: 28px;
        box-shadow: 0 1px 2px rgba(22, 101, 52, 0.05);
      }
      .citation-badge:hover {
        background: #dcfce7;
        border-color: #86efac;
        transform: translateY(-1px);
        box-shadow: 0 3px 6px rgba(22, 101, 52, 0.12);
      }
      .citation-badge:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
      }
      .citation-badge .citation-icon { font-size: 12px; }
      .citation-badge .citation-jump {
        margin-inline-start: 4px;
        font-size: 10px;
        opacity: 0.85;
      }

      /* Visual Typing Indicator */
      .typing-bubble {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 10px 14px;
        background: #ffffff;
        border: 1px solid var(--border);
        border-radius: 14px;
        border-bottom-left-radius: 3px;
        width: fit-content;
        box-shadow: var(--shadow-sm);
      }
      .drawer[dir="rtl"] .typing-bubble {
        border-bottom-left-radius: 14px;
        border-bottom-right-radius: 3px;
      }
      .typing-dot {
        width: 7px;
        height: 7px;
        background: #94a3b8;
        border-radius: 50%;
        animation: typingBounce 1.2s infinite ease-in-out;
      }
      .typing-dot:nth-child(2) { animation-delay: 0.2s; }
      .typing-dot:nth-child(3) { animation-delay: 0.4s; }
      @keyframes typingBounce {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-5px); background: var(--primary); }
      }
      @media (prefers-reduced-motion: reduce) {
        .typing-dot { animation: none; opacity: 0.7; }
      }

      /* Chat Footer Input */
      .input-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-top: 1px solid var(--border);
        background: #ffffff;
      }
      .text-input {
        flex: 1;
        height: 42px;
        background: var(--bg-subtle);
        border: 1.5px solid var(--border);
        border-radius: 21px;
        padding: 0 16px;
        font-size: 13.5px;
        color: var(--text);
        outline: none;
        transition: all 0.2s ease;
        font-family: inherit;
      }
      .text-input:focus {
        background: #ffffff;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px var(--primary-glow);
      }
      .btn-mic {
        width: 38px;
        height: 38px;
        min-width: 38px;
        min-height: 38px;
        border-radius: 50%;
        background: #f1f5f9;
        border: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--text);
      }
      .btn-mic:hover {
        background: #e2e8f0;
        transform: scale(1.05);
      }
      .btn-mic.recording {
        background: #fee2e2;
        color: #dc2626;
        border-color: #ef4444;
        animation: pulseRecord 1.2s infinite alternate ease-in-out;
      }
      @keyframes pulseRecord {
        from { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
        to { transform: scale(1.12); box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
      }
      .btn-send {
        width: 38px;
        height: 38px;
        min-width: 38px;
        min-height: 38px;
        border-radius: 50%;
        background: var(--primary-gradient);
        border: none;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 6px rgba(4, 120, 87, 0.25);
      }
      .btn-send:hover {
        transform: scale(1.06);
        box-shadow: 0 4px 12px rgba(4, 120, 87, 0.35);
        filter: brightness(1.05);
      }
      .btn-send:active {
        transform: scale(0.95);
      }
      .btn-send:focus-visible {
        outline: 2px solid #0f172a;
        outline-offset: 2px;
      }

      
      /* Career Gateway Section & Cards (Senior UI/UX Design) */
      #panel-career {
        display: none;
        flex-direction: column !important;
        flex: 1 1 0% !important;
        min-height: 0 !important;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        padding: 14px 16px;
        width: 100%;
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
      }
      .career-header-card {
        background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f7fee7 100%);
        border: 1.5px solid #a7f3d0;
        border-radius: 16px;
        padding: 14px 16px;
        margin-bottom: 12px;
        box-shadow: 0 4px 12px -2px rgba(5, 150, 105, 0.08);
        flex-shrink: 0;
      }
      .career-header-top {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 8px;
      }
      .career-header-icon-box {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: linear-gradient(135deg, #065f46 0%, #047857 60%, #059669 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(4, 120, 87, 0.25);
        flex-shrink: 0;
      }
      .career-header-icon {
        font-size: 22px;
        line-height: 1;
      }
      .career-header-text {
        flex: 1;
        min-width: 0;
      }
      .career-header-title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 2px;
      }
      .career-title {
        margin: 0;
        font-size: 14.5px;
        font-weight: 800;
        color: #065f46;
        letter-spacing: -0.01em;
        line-height: 1.3;
      }
      .career-live-pill {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 2px 7px;
        background: #dcfce7;
        border: 1px solid #86efac;
        color: #166534;
        font-size: 10px;
        font-weight: 800;
        border-radius: 9999px;
        letter-spacing: 0.04em;
        flex-shrink: 0;
      }
      .live-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #16a34a;
        box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.25);
        animation: livePulse 2s infinite ease-in-out;
      }
      @keyframes livePulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.3); opacity: 0.7; }
      }
      .career-subheading {
        font-size: 11.5px;
        color: #047857;
        margin: 0;
        line-height: 1.45;
      }
      .career-stats-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .career-stat-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 3px 9px;
        border-radius: 9999px;
        font-size: 10px;
        font-weight: 700;
        background: #ffffff;
        color: #065f46;
        border: 1px solid #a7f3d0;
        box-shadow: 0 1px 2px rgba(4, 120, 87, 0.05);
      }

      /* Career Filter & Search Controls */
      .career-filter-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 12px;
        flex-shrink: 0;
      }
      .career-search-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
      }
      .career-search-icon {
        position: absolute;
        left: 12px;
        font-size: 13px;
        color: #64748b;
        pointer-events: none;
      }
      .career-search-input {
        width: 100%;
        height: 38px;
        background: #ffffff;
        border: 1.5px solid #cbd5e1;
        border-radius: 10px;
        padding: 0 34px 0 34px;
        font-size: 12.5px;
        color: #0f172a;
        transition: all 0.15s ease;
        box-sizing: border-box;
        font-family: inherit;
      }
      .career-search-input:focus {
        border-color: #047857;
        box-shadow: 0 0 0 3px rgba(4, 120, 87, 0.15);
        outline: none;
      }
      .career-search-input::placeholder {
        color: #94a3b8;
      }
      .career-search-clear {
        position: absolute;
        right: 8px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #e2e8f0;
        border: none;
        cursor: pointer;
        font-size: 11px;
        color: #475569;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
      }
      .career-search-clear:hover {
        background: #cbd5e1;
        color: #0f172a;
      }
      .career-search-clear:focus-visible {
        outline: 2px solid #047857;
      }
      .career-chips-scroll {
        display: flex;
        align-items: center;
        gap: 6px;
        overflow-x: auto;
        padding-bottom: 2px;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }
      .career-chips-scroll::-webkit-scrollbar {
        display: none;
      }
      .career-chip {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 6px 12px;
        border-radius: 9999px;
        background: #ffffff;
        border: 1.5px solid #e2e8f0;
        font-size: 11.5px;
        font-weight: 600;
        color: #334155;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.15s ease;
        box-sizing: border-box;
        font-family: inherit;
        flex-shrink: 0;
      }
      .career-chip:hover {
        background: #f8fafc;
        border-color: #cbd5e1;
        color: #0f172a;
        transform: translateY(-1px);
      }
      .career-chip.active {
        background: #047857;
        border-color: #047857;
        color: #ffffff;
        box-shadow: 0 2px 6px rgba(4, 120, 87, 0.25);
      }
      .career-chip:focus-visible {
        outline: 2px solid #047857;
        outline-offset: 2px;
      }
      .chip-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 1px 6px;
        border-radius: 9999px;
        font-size: 10px;
        font-weight: 700;
        background: #f1f5f9;
        color: #475569;
      }
      .career-chip.active .chip-count {
        background: rgba(255, 255, 255, 0.25);
        color: #ffffff;
      }

      /* Job Feed Container */
      #jobs-container {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
        box-sizing: border-box;
      }
      .job-card {
        background: #ffffff;
        border: 1.5px solid #e2e8f0;
        border-radius: 16px;
        padding: 16px;
        box-shadow: 0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03);
        transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.2s ease;
        width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
        position: relative;
        animation: cardEntrance 0.25s ease-out;
      }
      @keyframes cardEntrance {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .job-card:hover {
        border-color: #047857;
        box-shadow: 0 12px 28px -4px rgba(4, 120, 87, 0.14), 0 4px 8px -2px rgba(4, 120, 87, 0.06);
        transform: translateY(-2px);
      }
      .job-card:focus-visible {
        outline: 2px solid #047857;
        outline-offset: 2px;
      }
      .job-card-header {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 10px;
      }
      .job-company-badge {
        width: 42px;
        height: 42px;
        border-radius: 12px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 800;
        flex-shrink: 0;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
      }
      .job-title-wrap {
        flex: 1;
        min-width: 0;
      }
      .job-company-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 2px;
      }
      .job-company-name {
        font-size: 12px;
        font-weight: 600;
        color: #334155;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .job-verified-tag {
        font-size: 10.5px;
        font-weight: 700;
        color: #065f46;
        background: #ecfdf5;
        border: 1px solid #a7f3d0;
        border-radius: 9999px;
        padding: 1px 7px;
        display: inline-flex;
        align-items: center;
        gap: 3px;
      }
      .job-title {
        margin: 2px 0 3px 0;
        color: #0f172a;
        font-size: 14.5px;
        font-weight: 700;
        letter-spacing: -0.01em;
        line-height: 1.35;
        word-break: break-word !important;
        overflow-wrap: anywhere !important;
        transition: color 0.15s ease;
      }
      .job-card:hover .job-title {
        color: #047857;
      }
      .job-hiring-pill {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 10px;
        font-weight: 700;
        color: #166534;
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        border-radius: 9999px;
        padding: 1px 6px;
      }
      .hiring-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #16a34a;
      }
      .job-meta {
        font-size: 11.5px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 8px 0 10px 0;
      }
      .job-meta-item {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 7px;
        padding: 3px 8px;
        font-weight: 500;
        color: #334155;
      }
      .job-meta-salary {
        font-weight: 700;
        color: #065f46;
        background: #ecfdf5;
        border-color: #a7f3d0;
      }
      .job-badges-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .job-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 3px 9px;
        border-radius: 9999px;
        font-size: 10.5px;
        font-weight: 600;
        background: #ecfdf5;
        color: #065f46;
        border: 1px solid #a7f3d0;
        box-sizing: border-box;
      }
      .job-badge.badge-sr {
        background: #eef2ff;
        color: #312e81;
        border-color: #c7d2fe;
      }
      .job-badge.badge-remote {
        background: #f0fdf4;
        color: #14532d;
        border-color: #bbf7d0;
      }
      .job-badge.badge-flexible {
        background: #fffbeb;
        color: #78350f;
        border-color: #fde68a;
      }
      .job-desc {
        font-size: 12.5px;
        color: #334155;
        line-height: 1.55;
        margin: 6px 0 14px 0;
        word-break: break-word !important;
        overflow-wrap: anywhere !important;
      }
      .job-actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        width: 100%;
        box-sizing: border-box;
      }
      .btn-apply {
        flex: 1 1 120px;
        text-align: center;
        background: linear-gradient(135deg, #059669 0%, #047857 100%);
        color: #ffffff;
        border: none;
        border-radius: 9999px;
        padding: 9px 16px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        min-height: 40px;
        transition: all 0.15s ease;
        box-shadow: 0 2px 6px rgba(4, 120, 87, 0.25);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        font-family: inherit;
      }
      .btn-apply:hover {
        filter: brightness(1.08);
        box-shadow: 0 4px 14px rgba(4, 120, 87, 0.38);
        transform: translateY(-1px);
      }
      .btn-apply:active {
        transform: scale(0.98);
      }
      .btn-apply:focus-visible {
        outline: 2px solid #0f172a;
        outline-offset: 2px;
      }
      .btn-acc {
        flex: 1 1 140px;
        text-align: center;
        background: #eff6ff;
        color: #1e40af;
        border: 1.5px solid #bfdbfe;
        border-radius: 9999px;
        padding: 9px 14px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        min-height: 40px;
        transition: all 0.15s ease;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        font-family: inherit;
      }
      .btn-acc:hover {
        background: #dbeafe;
        border-color: #93c5fd;
        transform: translateY(-1px);
      }
      .btn-acc:active {
        transform: scale(0.98);
      }
      .btn-acc:focus-visible {
        outline: 2px solid #1e40af;
        outline-offset: 2px;
      }

      /* Career Empty State */
      .career-empty-state {
        text-align: center;
        padding: 28px 16px;
        background: #ffffff;
        border: 1.5px dashed #cbd5e1;
        border-radius: 16px;
        margin: 6px 0;
      }
      .career-empty-icon {
        font-size: 32px;
        margin-bottom: 6px;
        display: block;
      }
      .career-empty-title {
        font-size: 14px;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 4px 0;
      }
      .career-empty-desc {
        font-size: 12px;
        color: #64748b;
        margin: 0 0 14px 0;
        line-height: 1.4;
      }
      .career-reset-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        border-radius: 9999px;
        background: #047857;
        color: #ffffff;
        border: none;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s ease;
        font-family: inherit;
      }
      .career-reset-btn:hover {
        background: #065f46;
      }
      .career-reset-btn:focus-visible {
        outline: 2px solid #0f172a;
        outline-offset: 2px;
      }
/* Modals */
      .modal-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 23, 42, 0.65);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        z-index: 2000;
        animation: modalFade 0.2s ease-out;
      }
      @keyframes modalFade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .modal-card {
        background: #ffffff;
        border-radius: 16px;
        padding: 18px;
        width: 100%;
        max-width: 340px;
        box-shadow: var(--shadow-xl);
        border: 1px solid var(--border);
        animation: modalPop 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes modalPop {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
      }
      .modal-close-btn {
        background: #f1f5f9;
        border: 1px solid var(--border);
        cursor: pointer;
        font-size: 13px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-muted);
        transition: all 0.15s ease;
      }
      .modal-close-btn:hover {
        background: #e2e8f0;
        color: var(--text);
      }
      .modal-close-btn:focus-visible {
        outline: 2px solid var(--primary);
      }

      /* Responsive Rules Across All Devices (Mobile Bottom-Sheet & Reflow) */
      @media screen and (max-width: 480px) {
        :host {
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          top: auto !important;
          width: 100vw !important;
        }
        .launcher-btn {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
        }
        :host([position*="left"]) .launcher-btn {
          left: 20px !important;
          right: auto !important;
        }
        .drawer {
          position: fixed !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100vw !important;
          max-width: 100vw !important;
          height: 92vh !important;
          max-height: 92vh !important;
          border-radius: 24px 24px 0 0 !important;
          border-bottom: none !important;
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.25) !important;
        }
        .drawer-mobile-handle {
          display: block !important;
        }
        .input-row {
          padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px)) !important;
        }
        .msg {
          max-width: 92% !important;
        }
        .modal-card {
          max-width: 92vw !important;
        }
      }

      @media screen and (max-height: 520px) {
        .drawer {
          height: 96vh !important;
          max-height: 96vh !important;
        }
        .drawer-header {
          padding: 8px 12px !important;
        }
        .action-bar {
          padding: 4px 12px !important;
        }
        .tab-btn {
          padding: 6px 8px !important;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .drawer.open, .modal-card, .launcher-btn, .lang-custom-menu {
          animation: none !important;
          transition: none !important;
        }
      }
    `;
  }

  render() {
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];

    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>

      <!-- Polite Screen Reader Live Announcer (WCAG 4.1.3) -->
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
        <!-- Mobile Bottom-Sheet Pull Handle -->
        <div class="drawer-mobile-handle" aria-hidden="true"></div>

        <!-- Header -->
        <header class="drawer-header">
          <div class="header-title-wrap">
            <div class="header-avatar-badge" aria-hidden="true">
              <span>🎓</span>
              <span class="status-dot"></span>
            </div>
            <div class="header-title-text">
              <h2 class="header-title" id="dialog-title">${t.dialogTitle}</h2>
              <span class="header-subtitle">Savanna Multilingual Hub</span>
            </div>
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

            <!-- Professional Custom Language Dropdown -->
            <div class="lang-dropdown-wrap" id="lang-dropdown-wrap">
              <button 
                type="button" 
                class="lang-custom-trigger" 
                id="lang-custom-trigger" 
                aria-haspopup="listbox" 
                aria-expanded="false" 
                aria-controls="lang-custom-menu"
                aria-label="Select Language: Current language is ${this.currentLang === 'am' ? 'አማርኛ (Amharic)' : this.currentLang === 'om' ? 'Afaan Oromoo' : this.currentLang === 'ti' ? 'ትግርኛ (Tigrinya)' : this.currentLang === 'so' ? 'Soomaali (Somali)' : this.currentLang === 'ar' ? 'العربية (Arabic RTL)' : 'English'}"
              >
                <span class="lang-trigger-flag" id="lang-trigger-flag" aria-hidden="true">${this.currentLang === 'am' ? '🇪🇹' : this.currentLang === 'om' ? '🇪🇹' : this.currentLang === 'ti' ? '🇪🇹' : this.currentLang === 'so' ? '🇸🇴' : this.currentLang === 'ar' ? '🇸🇦' : '🌐'}</span>
                <span class="lang-trigger-label" id="lang-trigger-label">${this.currentLang === 'am' ? 'አማርኛ' : this.currentLang === 'om' ? 'Oromoo' : this.currentLang === 'ti' ? 'ትግርኛ' : this.currentLang === 'so' ? 'Soomaali' : this.currentLang === 'ar' ? 'العربية' : 'English'}</span>
                <svg class="lang-chevron-icon" id="lang-chevron-icon" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <div 
                class="lang-custom-menu" 
                id="lang-custom-menu" 
                role="listbox" 
                aria-label="Available Languages" 
                tabindex="-1"
                style="display:none;"
              >
                <div 
                  role="option" 
                  class="lang-custom-option ${this.currentLang === 'am' ? 'selected' : ''}" 
                  id="lang-opt-am" 
                  data-value="am" 
                  aria-selected="${this.currentLang === 'am' ? 'true' : 'false'}"
                  tabindex="${this.currentLang === 'am' ? '0' : '-1'}"
                >
                  <span class="lang-opt-flag" aria-hidden="true">🇪🇹</span>
                  <div class="lang-opt-names">
                    <span class="lang-opt-native">አማርኛ</span>
                    <span class="lang-opt-eng">Amharic</span>
                  </div>
                  <span class="lang-opt-check" aria-hidden="true">${this.currentLang === 'am' ? '✓' : ''}</span>
                </div>

                <div 
                  role="option" 
                  class="lang-custom-option ${this.currentLang === 'om' ? 'selected' : ''}" 
                  id="lang-opt-om" 
                  data-value="om" 
                  aria-selected="${this.currentLang === 'om' ? 'true' : 'false'}"
                  tabindex="${this.currentLang === 'om' ? '0' : '-1'}"
                >
                  <span class="lang-opt-flag" aria-hidden="true">🇪🇹</span>
                  <div class="lang-opt-names">
                    <span class="lang-opt-native">Afaan Oromoo</span>
                    <span class="lang-opt-eng">Oromo</span>
                  </div>
                  <span class="lang-opt-check" aria-hidden="true">${this.currentLang === 'om' ? '✓' : ''}</span>
                </div>

                <div 
                  role="option" 
                  class="lang-custom-option ${this.currentLang === 'ti' ? 'selected' : ''}" 
                  id="lang-opt-ti" 
                  data-value="ti" 
                  aria-selected="${this.currentLang === 'ti' ? 'true' : 'false'}"
                  tabindex="${this.currentLang === 'ti' ? '0' : '-1'}"
                >
                  <span class="lang-opt-flag" aria-hidden="true">🇪🇹</span>
                  <div class="lang-opt-names">
                    <span class="lang-opt-native">ትግርኛ</span>
                    <span class="lang-opt-eng">Tigrinya</span>
                  </div>
                  <span class="lang-opt-check" aria-hidden="true">${this.currentLang === 'ti' ? '✓' : ''}</span>
                </div>

                <div 
                  role="option" 
                  class="lang-custom-option ${this.currentLang === 'so' ? 'selected' : ''}" 
                  id="lang-opt-so" 
                  data-value="so" 
                  aria-selected="${this.currentLang === 'so' ? 'true' : 'false'}"
                  tabindex="${this.currentLang === 'so' ? '0' : '-1'}"
                >
                  <span class="lang-opt-flag" aria-hidden="true">🇸🇴</span>
                  <div class="lang-opt-names">
                    <span class="lang-opt-native">Soomaali</span>
                    <span class="lang-opt-eng">Somali</span>
                  </div>
                  <span class="lang-opt-check" aria-hidden="true">${this.currentLang === 'so' ? '✓' : ''}</span>
                </div>

                <div 
                  role="option" 
                  class="lang-custom-option ${this.currentLang === 'ar' ? 'selected' : ''}" 
                  id="lang-opt-ar" 
                  data-value="ar" 
                  aria-selected="${this.currentLang === 'ar' ? 'true' : 'false'}"
                  tabindex="${this.currentLang === 'ar' ? '0' : '-1'}"
                >
                  <span class="lang-opt-flag" aria-hidden="true">🇸🇦</span>
                  <div class="lang-opt-names">
                    <span class="lang-opt-native">العربية</span>
                    <span class="lang-opt-eng">Arabic (RTL)</span>
                  </div>
                  <span class="lang-opt-check" aria-hidden="true">${this.currentLang === 'ar' ? '✓' : ''}</span>
                </div>

                <div 
                  role="option" 
                  class="lang-custom-option ${this.currentLang === 'en' ? 'selected' : ''}" 
                  id="lang-opt-en" 
                  data-value="en" 
                  aria-selected="${this.currentLang === 'en' ? 'true' : 'false'}"
                  tabindex="${this.currentLang === 'en' ? '0' : '-1'}"
                >
                  <span class="lang-opt-flag" aria-hidden="true">🌐</span>
                  <div class="lang-opt-names">
                    <span class="lang-opt-native">English</span>
                    <span class="lang-opt-eng">English</span>
                  </div>
                  <span class="lang-opt-check" aria-hidden="true">${this.currentLang === 'en' ? '✓' : ''}</span>
                </div>
              </div>

              <!-- Synchronized Select for Screen Readers and Automated Testing -->
              <select class="sr-only" id="lang-select" aria-label="Select Language (ቋንቋ ይምረጡ)" tabindex="-1">
                <option value="am" ${this.currentLang === 'am' ? 'selected' : ''}>አማርኛ (Amharic)</option>
                <option value="om" ${this.currentLang === 'om' ? 'selected' : ''}>Afaan Oromoo</option>
                <option value="ti" ${this.currentLang === 'ti' ? 'selected' : ''}>ትግርኛ (Tigrinya)</option>
                <option value="so" ${this.currentLang === 'so' ? 'selected' : ''}>Soomaali (Somali)</option>
                <option value="ar" ${this.currentLang === 'ar' ? 'selected' : ''}>العربية (Arabic RTL)</option>
                <option value="en" ${this.currentLang === 'en' ? 'selected' : ''}>English</option>
              </select>
            </div>

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

        <!-- Utility Action Bar (Simple Mode & Human Help) -->
        <div class="action-bar" role="toolbar" aria-label="Reading and assistance options">
          <button 
            type="button" 
            class="action-chip" 
            id="simple-toggle" 
            aria-pressed="false"
            aria-label="${t.simpleBtn}"
          >
            <svg class="chip-svg chip-svg-brain" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z"></path>
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z"></path>
            </svg>
            <span id="simple-text">${t.simpleBtn}</span>
          </button>
          <button 
            type="button" 
            class="action-chip chip-escalate" 
            id="escalate-btn" 
            aria-label="${t.humanHelpBtn}"
          >
            <svg class="chip-svg chip-svg-help" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
            <span id="escalate-text">${t.humanHelpBtn}</span>
          </button>
        </div>

        <!-- Persistent Screen Share Banner with Live Preview -->
        <div class="screen-share-banner" id="screen-share-area" role="alert" aria-live="assertive">
          <div class="share-info-group">
            <video id="screen-preview" class="screen-preview-thumb" autoplay playsinline muted aria-label="Live thumbnail of shared display"></video>
            <span id="screen-share-text" style="font-weight:600; line-height:1.2;">${t.screenShareActive}</span>
          </div>
          <button type="button" class="btn-stop-share" id="stop-share-btn" aria-label="${t.stopShare} (Escape)">
            🛑 ${t.stopShare}
          </button>
        </div>

        <!-- WAI-ARIA Segmented Tabs Control -->
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
            <svg class="tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <span id="tab-tutor-text">${t.tutorTab}</span>
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
            <svg class="tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span id="tab-career-text">${t.careerTab}</span>
          </button>
        </div>

        <!-- Tab Panel 1: Course Tutor (WCAG 4.1.3 Live Region) -->
        <section 
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
            <div class="msg tutor" lang="${this.currentLang}" dir="${t.direction}" role="article" tabindex="0">
              <div class="msg-header">
                <span class="msg-author"><span aria-hidden="true">🎓</span> Savanna AI Tutor</span>
                <button type="button" class="btn-msg-listen" id="welcome-listen-btn" aria-label="${t.soundToggle}: Read greeting">
                  <span aria-hidden="true">🔊</span>
                </button>
              </div>
              <div class="msg-body" id="welcome-msg-text">
                ${t.welcome}
              </div>
            </div>

            <!-- Instant Starter Prompts -->
            <div class="quick-prompts-bar" id="quick-prompts" role="group" aria-label="Suggested Prompts">
              <button type="button" class="quick-prompt-btn" data-prompt="Will AI replace virtual assistants?">
                <span>🤖 Will AI replace virtual assistants?</span>
                <span class="quick-prompt-arrow" aria-hidden="true">↗</span>
              </button>
              <button type="button" class="quick-prompt-btn" data-prompt="What skills do clients value most?">
                <span>🎯 What skills do clients value most?</span>
                <span class="quick-prompt-arrow" aria-hidden="true">↗</span>
              </button>
              <button type="button" class="quick-prompt-btn" data-prompt="How do I request interview accommodations?">
                <span>♿ How to request accommodations?</span>
                <span class="quick-prompt-arrow" aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Tab Panel 2: Career Gateway (WCAG 1.3.1, 2.4.6) -->
        <section 
          class="tab-panel" 
          id="panel-career" 
          role="tabpanel" 
          aria-labelledby="tab-career" 
          tabindex="0" 
          style="display:none;"
        >
          <!-- Inspiring Hero Card with Live Status & Inclusion Trust Marks -->
          <div class="career-header-card">
            <div class="career-header-top">
              <div class="career-header-icon-box" aria-hidden="true">
                <span class="career-header-icon">💼</span>
              </div>
              <div class="career-header-text">
                <div class="career-header-title-row">
                  <h3 id="career-title" class="career-title">${t.careerHeading}</h3>
                  <span class="career-live-pill" aria-hidden="true"><span class="live-dot"></span> LIVE</span>
                </div>
                <p id="career-subheading" class="career-subheading">${t.careerSubheading}</p>
              </div>
            </div>
            <div class="career-stats-row">
              <span class="career-stat-badge" id="badge-stat-employers">✓ ${t.verifiedEmployers || 'Verified Inclusive Employers'}</span>
              <span class="career-stat-badge" id="badge-stat-accommodations">♿ ${t.accommodationsReady || 'Accommodations Ready'}</span>
              <span class="career-stat-badge" id="badge-stat-sr">⚡ ${t.screenReaderOptimized || 'Screen Reader Optimized'}</span>
            </div>
          </div>

          <!-- Career Filter & Search Controls -->
          <div class="career-filter-section" role="region" aria-label="Job Filters">
            <div class="career-search-wrapper">
              <span class="career-search-icon" aria-hidden="true">🔍</span>
              <input 
                type="search" 
                id="career-search-input" 
                class="career-search-input" 
                placeholder="${t.searchJobsPlaceholder || 'Search roles, companies, tags...'}"
                aria-label="${t.searchJobsPlaceholder || 'Search roles, companies, tags...'}"
                autocomplete="off"
              />
              <button 
                type="button" 
                id="career-search-clear" 
                class="career-search-clear" 
                aria-label="Clear search" 
                style="display:none;"
              >✕</button>
            </div>

            <div class="career-chips-scroll" role="group" aria-label="Filter roles by category">
              <button type="button" class="career-chip active" id="chip-filter-all" data-filter="all" aria-pressed="true">
                <span id="chip-text-all">${t.allRolesFilter || 'All Roles'}</span> <span class="chip-count" id="chip-count-all">4</span>
              </button>
              <button type="button" class="career-chip" id="chip-filter-remote" data-filter="remote" aria-pressed="false">
                <span>🏠</span> <span id="chip-text-remote">${t.remoteFilter || 'Remote'}</span>
              </button>
              <button type="button" class="career-chip" id="chip-filter-sr" data-filter="screen-reader" aria-pressed="false">
                <span>♿</span> <span id="chip-text-sr">${t.srFilter || 'Screen Reader'}</span>
              </button>
              <button type="button" class="career-chip" id="chip-filter-flexible" data-filter="flexible" aria-pressed="false">
                <span>⏱</span> <span id="chip-text-flexible">${t.flexibleFilter || 'Flexible Hours'}</span>
              </button>
            </div>
          </div>

          <!-- Feed of Accessible Job Opportunities -->
          <div id="jobs-container" role="feed" aria-busy="false" aria-label="Verified Job Openings">
            Loading inclusive opportunities...
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
            <svg class="mic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
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
            <svg class="send-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </footer>

        <!-- Citation Details Preview Modal -->
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

        <!-- Interactive Interview Accommodations Generator Modal (WCAG 1.3.1, 3.3.2) -->
        <div 
          id="accommodations-modal" 
          class="modal-backdrop" 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-acc-title" 
          style="display:none;"
        >
          <div class="modal-card" style="max-width:370px; max-height:86vh; display:flex; flex-direction:column;">
            <div class="modal-header">
              <strong id="modal-acc-title" style="font-size:13px; color:#1d4ed8;">♿ ${t.accModalTitle}</strong>
              <button type="button" class="modal-close-btn" id="modal-acc-close" aria-label="${t.closeTitle}">✕</button>
            </div>
            
            <div style="overflow-y:auto; padding-right:4px; flex:1;">
              <div id="acc-job-summary" style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; padding:8px 10px; margin-bottom:10px; font-size:11px; color:#166534;">
                <!-- Populated dynamically: Title & Company -->
              </div>

              <p id="modal-acc-intro" style="font-size:11px; color:#4b5563; margin:0 0 10px 0; line-height:1.4;">
                ${t.accModalIntro}
              </p>

              <!-- Checkbox Options Fieldset -->
              <fieldset style="border:1px solid var(--border); border-radius:8px; padding:10px; margin:0 0 10px 0; font-size:12px;">
                <legend style="font-size:11px; font-weight:700; color:var(--text); padding:0 4px;">Accommodation Options</legend>
                
                <label style="display:flex; align-items:flex-start; gap:8px; margin-bottom:8px; cursor:pointer;">
                  <input type="checkbox" id="chk-sr" aria-labelledby="label-chk-sr" checked style="margin-top:2px;" />
                  <span id="label-chk-sr" style="font-size:11px; color:#1f2937;">${t.optScreenReader}</span>
                </label>

                <label style="display:flex; align-items:flex-start; gap:8px; margin-bottom:8px; cursor:pointer;">
                  <input type="checkbox" id="chk-time" aria-labelledby="label-chk-time" checked style="margin-top:2px;" />
                  <span id="label-chk-time" style="font-size:11px; color:#1f2937;">${t.optExtendedTime}</span>
                </label>

                <label style="display:flex; align-items:flex-start; gap:8px; margin-bottom:8px; cursor:pointer;">
                  <input type="checkbox" id="chk-camera" aria-labelledby="label-chk-camera" style="margin-top:2px;" />
                  <span id="label-chk-camera" style="font-size:11px; color:#1f2937;">${t.optCameraOptional}</span>
                </label>

                <label style="display:flex; align-items:flex-start; gap:8px; margin-bottom:8px; cursor:pointer;">
                  <input type="checkbox" id="chk-advance" aria-labelledby="label-chk-advance" style="margin-top:2px;" />
                  <span id="label-chk-advance" style="font-size:11px; color:#1f2937;">${t.optAdvanceNotice}</span>
                </label>

                <label style="display:flex; align-items:flex-start; gap:8px; cursor:pointer;">
                  <input type="checkbox" id="chk-chat" aria-labelledby="label-chk-chat" style="margin-top:2px;" />
                  <span id="label-chk-chat" style="font-size:11px; color:#1f2937;">${t.optChatInterview}</span>
                </label>
              </fieldset>

              <!-- Custom Notes Input -->
              <div style="margin-bottom:10px;">
                <label for="acc-custom-notes" id="label-custom-notes" style="display:block; font-size:11px; font-weight:600; color:#374151; margin-bottom:4px;">
                  ${t.customNotesLabel}
                </label>
                <textarea 
                  id="acc-custom-notes" 
                  class="text-input" 
                  style="width:100%; height:44px; font-size:11px; box-sizing:border-box; resize:none;" 
                  placeholder="${t.customNotesPlaceholder}"
                ></textarea>
              </div>

              <!-- Live Letter Preview -->
              <div style="margin-bottom:6px;">
                <label style="display:block; font-size:11px; font-weight:700; color:#1f2937; margin-bottom:4px;" id="label-letter-title">
                  ${t.letterPreviewTitle}
                </label>
                <pre id="acc-letter-preview" style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:8px 10px; font-size:10px; line-height:1.45; white-space:pre-wrap; word-break:break-word; max-height:95px; overflow-y:auto; color:#0f172a; margin:0; font-family:inherit;"></pre>
              </div>
            </div>

            <!-- Modal Action Buttons -->
            <div style="display:flex; justify-content:flex-end; gap:6px; border-top:1px solid var(--border); padding-top:10px; margin-top:6px;">
              <button 
                type="button" 
                class="action-chip" 
                id="btn-copy-letter" 
                style="padding:6px 10px; font-size:11px;"
              >
                ${t.copyLetterBtn}
              </button>
              <button 
                type="button" 
                class="action-chip" 
                id="btn-submit-acc" 
                style="padding:6px 12px; font-size:11px; background:#1d4ed8; color:#ffffff; border:none;"
              >
                ${t.submitAccBtn}
              </button>
            </div>
          </div>
        </div>

        <!-- Human Mentor Escalation Modal (Learner Privacy Control) -->
        <div 
          id="escalate-modal" 
          class="modal-backdrop" 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-escalate-title" 
          style="display:none;"
        >
          <div class="modal-card">
            <div class="modal-header">
              <strong id="modal-escalate-title" style="font-size:14px; color:#b91c1c;">${t.escalateModalTitle}</strong>
              <button type="button" class="modal-close-btn" id="modal-escalate-close" aria-label="Close mentor dialog">✕</button>
            </div>
            <p id="modal-escalate-desc" style="font-size:12px; color:#374151; line-height:1.5; margin: 0 0 14px 0;">
              ${t.escalateModalDesc}
            </p>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <button 
                type="button" 
                class="action-chip" 
                id="btn-confirm-screenshare" 
                style="padding:8px 12px; font-size:12px; background:#dc2626; color:#ffffff; border:none; justify-content:center;"
              >
                ${t.shareScreenBtn}
              </button>
              <button 
                type="button" 
                class="action-chip" 
                id="btn-confirm-chatonly" 
                style="padding:8px 12px; font-size:12px; background:#f3f4f6; color:#1f2937; justify-content:center;"
              >
                ${t.chatHelpOnlyBtn}
              </button>
              <button 
                type="button" 
                class="action-chip" 
                id="btn-cancel-escalate" 
                style="padding:6px 12px; font-size:11px; color:#6b7280; justify-content:center; border:none; background:transparent;"
              >
                ${t.cancelBtn}
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
    const stopShareBtn = this.shadowRoot.getElementById('stop-share-btn');

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

    // Simple Mode Toggle
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

    // Professional Custom Language Dropdown Logic
    const langTrigger = this.shadowRoot.getElementById('lang-custom-trigger');
    const langMenu = this.shadowRoot.getElementById('lang-custom-menu');
    const langOptions = this.shadowRoot.querySelectorAll('.lang-custom-option');

    const toggleLangMenu = (open) => {
      if (!langMenu || !langTrigger) return;
      const isCurrentlyOpen = langMenu.style.display !== 'none';
      const shouldOpen = typeof open === 'boolean' ? open : !isCurrentlyOpen;
      langMenu.style.display = shouldOpen ? 'block' : 'none';
      langTrigger.setAttribute('aria-expanded', String(shouldOpen));
      if (shouldOpen) {
        const selectedOpt = this.shadowRoot.querySelector('.lang-custom-option[aria-selected="true"]') || langOptions[0];
        if (selectedOpt) selectedOpt.focus();
      }
    };

    if (langTrigger && langMenu) {
      langTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLangMenu();
      });

      langTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleLangMenu(true);
        }
      });

      langOptions.forEach((opt, idx) => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          const val = opt.getAttribute('data-value');
          toggleLangMenu(false);
          this.handleLanguageSwitch(val);
          langTrigger.focus();
        });

        opt.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = langOptions[(idx + 1) % langOptions.length];
            next.focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = langOptions[(idx - 1 + langOptions.length) % langOptions.length];
            prev.focus();
          } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const val = opt.getAttribute('data-value');
            toggleLangMenu(false);
            this.handleLanguageSwitch(val);
            langTrigger.focus();
          } else if (e.key === 'Escape') {
            e.preventDefault();
            toggleLangMenu(false);
            langTrigger.focus();
          } else if (e.key === 'Tab') {
            toggleLangMenu(false);
          }
        });
      });

      // Close dropdown if user clicks anywhere outside
      this.shadowRoot.addEventListener('click', (e) => {
        if (!e.composedPath().includes(langTrigger) && !e.composedPath().includes(langMenu)) {
          if (langMenu && langMenu.style.display !== 'none') {
            toggleLangMenu(false);
          }
        }
      });
    }

    // Synchronized Native Select (Backward Compatibility & Accessibility)
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        this.handleLanguageSwitch(e.target.value);
      });
    }

    sendBtn.addEventListener('click', () => this.handleSend());
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleSend();
    });

    // Native Voice Input Handler
    micBtn.addEventListener('click', () => this.toggleSpeechInput(micBtn));

    // Mentor Escalation Modal Handlers
    escalateBtn.addEventListener('click', () => this.openEscalateModal());
    stopShareBtn.addEventListener('click', () => this.stopScreenShare());

    const modalEscalateClose = this.shadowRoot.getElementById('modal-escalate-close');
    modalEscalateClose.addEventListener('click', () => this.closeEscalateModal());

    const btnConfirmScreenshare = this.shadowRoot.getElementById('btn-confirm-screenshare');
    btnConfirmScreenshare.addEventListener('click', () => {
      this.closeEscalateModal();
      this.startScreenShare();
    });

    const btnConfirmChatonly = this.shadowRoot.getElementById('btn-confirm-chatonly');
    btnConfirmChatonly.addEventListener('click', () => {
      this.closeEscalateModal();
      this.requestChatHelp();
    });

    const btnCancelEscalate = this.shadowRoot.getElementById('btn-cancel-escalate');
    btnCancelEscalate.addEventListener('click', () => this.closeEscalateModal());

    // Citation Modal Close
    const modalClose = this.shadowRoot.getElementById('modal-cite-close');
    modalClose.addEventListener('click', () => this.closeCitationModal());

    // Welcome Greeting Listen Button
    const welcomeListen = this.shadowRoot.getElementById('welcome-listen-btn');
    if (welcomeListen) {
      welcomeListen.addEventListener('click', (e) => {
        e.stopPropagation();
        const welcomeText = this.shadowRoot.getElementById('welcome-msg-text')?.textContent.trim() || '';
        this.speakVoice(welcomeText, this.currentLang);
      });
    }

    // Quick Starter Prompts
    const promptButtons = this.shadowRoot.querySelectorAll('.quick-prompt-btn');
    promptButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-prompt');
        if (query) {
          this.askQuestion(query);
        }
      });
    });

    // Accommodations Modal Handlers
    const modalAccClose = this.shadowRoot.getElementById('modal-acc-close');
    if (modalAccClose) modalAccClose.addEventListener('click', () => this.closeAccommodationsModal());

    const btnCopyLetter = this.shadowRoot.getElementById('btn-copy-letter');
    if (btnCopyLetter) btnCopyLetter.addEventListener('click', () => this.copyAccLetter());

    const btnSubmitAcc = this.shadowRoot.getElementById('btn-submit-acc');
    if (btnSubmitAcc) btnSubmitAcc.addEventListener('click', () => this.submitAccRequest());

    ['chk-sr', 'chk-time', 'chk-camera', 'chk-advance', 'chk-chat'].forEach(id => {
      const el = this.shadowRoot.getElementById(id);
      if (el) el.addEventListener('change', () => this.updateAccLetterPreview());
    });

    const accCustomNotes = this.shadowRoot.getElementById('acc-custom-notes');
    if (accCustomNotes) accCustomNotes.addEventListener('input', () => this.updateAccLetterPreview());

    const accModalEl = this.shadowRoot.getElementById('accommodations-modal');
    if (accModalEl) {
      accModalEl.addEventListener('click', (e) => {
        if (e.target === accModalEl) this.closeAccommodationsModal();
      });
    }

    const escModalEl = this.shadowRoot.getElementById('escalate-modal');
    if (escModalEl) {
      escModalEl.addEventListener('click', (e) => {
        if (e.target === escModalEl) this.closeEscalateModal();
      });
    }

    const citeModalEl = this.shadowRoot.getElementById('citation-modal');
    if (citeModalEl) {
      citeModalEl.addEventListener('click', (e) => {
        if (e.target === citeModalEl) this.closeCitationModal();
      });
    }
  }

  open() {
    const drawer = this.shadowRoot.getElementById('drawer');
    const openBtn = this.shadowRoot.getElementById('open-btn');
    drawer.classList.add('open');
    openBtn.setAttribute('aria-expanded', 'true');
    openBtn.style.display = 'none';

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
    requestAnimationFrame(() => {
      openBtn.focus();
    });
    this.emitEvent('assistant:closed', { partner: this.partnerId });
  }

  setupFocusTrap() {
    const drawer = this.shadowRoot.getElementById('drawer');

    this.shadowRoot.addEventListener('keydown', (e) => {
      if (!drawer.classList.contains('open')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        const langMenu = this.shadowRoot.getElementById('lang-custom-menu');
        const langTrigger = this.shadowRoot.getElementById('lang-custom-trigger');
        if (langMenu && langMenu.style.display !== 'none') {
          langMenu.style.display = 'none';
          if (langTrigger) {
            langTrigger.setAttribute('aria-expanded', 'false');
            langTrigger.focus();
          }
          return;
        }
        const accModal = this.shadowRoot.getElementById('accommodations-modal');
        if (accModal && accModal.style.display !== 'none') {
          this.closeAccommodationsModal();
          return;
        }
        const escModal = this.shadowRoot.getElementById('escalate-modal');
        if (escModal && escModal.style.display !== 'none') {
          this.closeEscalateModal();
          return;
        }
        const citeModal = this.shadowRoot.getElementById('citation-modal');
        if (citeModal.style.display !== 'none') {
          this.closeCitationModal();
          return;
        }
        if (this.screenStream) {
          this.stopScreenShare();
          return;
        }
        this.close();
        return;
      }

      if (e.key === 'Tab') {
        // Strict Modal Focus Isolation (WCAG 2.1.2 & 2.4.3)
        const modals = [
          this.shadowRoot.getElementById('accommodations-modal'),
          this.shadowRoot.getElementById('escalate-modal'),
          this.shadowRoot.getElementById('citation-modal')
        ];
        const activeModal = modals.find(m => m && m.style.display !== 'none');
        const scopeContainer = activeModal || drawer;

        const focusable = scopeContainer.querySelectorAll(
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
    const announcement = t.langChangedAnnouncement || t.welcome;
    this.announce(announcement, lang);
    this.emitEvent('assistant:language-change', { language: lang, direction: t.direction });
  }

  updateLanguageUI(lang) {
    const t = LOCALIZED_UI[lang] || LOCALIZED_UI['en'];
    const drawer = this.shadowRoot.getElementById('drawer');
    if (!drawer) return;

    // Dynamically update WCAG 3.1.2 Language of Parts and Direction
    drawer.setAttribute('dir', t.direction);
    drawer.setAttribute('lang', lang);
    this.setAttribute('lang', lang);
    this.setAttribute('dir', t.direction);

    const announcer = this.shadowRoot.getElementById('sr-announcer');
    if (announcer) {
      announcer.setAttribute('lang', lang);
      announcer.setAttribute('dir', t.direction);
    }

    this.shadowRoot.getElementById('dialog-title').textContent = t.dialogTitle;
    this.shadowRoot.getElementById('launcher-text').textContent = t.launcher;
    this.shadowRoot.getElementById('open-btn').setAttribute('aria-label', t.launcher);
    this.shadowRoot.getElementById('close-btn').setAttribute('aria-label', t.closeTitle);
    this.shadowRoot.getElementById('close-btn').setAttribute('title', t.closeTitle);

    const simpleToggle = this.shadowRoot.getElementById('simple-toggle');
    simpleToggle.setAttribute('aria-label', t.simpleBtn);
    this.shadowRoot.getElementById('simple-text').textContent = this.simpleMode ? t.simpleActive : t.simpleBtn;
    this.shadowRoot.getElementById('escalate-text').textContent = t.humanHelpBtn;
    this.shadowRoot.getElementById('screen-share-text').textContent = t.screenShareActive;
    this.shadowRoot.getElementById('stop-share-btn').textContent = `🛑 ${t.stopShare}`;

    // Update Mentor Modal texts
    this.shadowRoot.getElementById('modal-escalate-title').textContent = t.escalateModalTitle;
    this.shadowRoot.getElementById('modal-escalate-desc').textContent = t.escalateModalDesc;
    this.shadowRoot.getElementById('btn-confirm-screenshare').textContent = t.shareScreenBtn;
    this.shadowRoot.getElementById('btn-confirm-chatonly').textContent = t.chatHelpOnlyBtn;
    this.shadowRoot.getElementById('btn-cancel-escalate').textContent = t.cancelBtn;

    const tabTutorText = this.shadowRoot.getElementById('tab-tutor-text');
    if (tabTutorText) tabTutorText.textContent = t.tutorTab;
    const tabCareerText = this.shadowRoot.getElementById('tab-career-text');
    if (tabCareerText) tabCareerText.textContent = t.careerTab;

    const input = this.shadowRoot.getElementById('user-input');
    input.placeholder = t.placeholder;
    input.setAttribute('aria-label', t.placeholder);
    this.shadowRoot.getElementById('send-btn').setAttribute('aria-label', t.send);
    this.shadowRoot.getElementById('mic-btn').setAttribute('aria-label', t.micLabel);


    // Update Career Panel Texts & Filter Labels
    const careerTitle = this.shadowRoot.getElementById('career-title');
    if (careerTitle) careerTitle.textContent = t.careerHeading;
    const careerSub = this.shadowRoot.getElementById('career-subheading');
    if (careerSub) careerSub.textContent = t.careerSubheading;

    const badgeEmp = this.shadowRoot.getElementById('badge-stat-employers');
    if (badgeEmp) badgeEmp.textContent = `✓ ${t.verifiedEmployers || 'Verified Inclusive Employers'}`;
    const badgeAcc = this.shadowRoot.getElementById('badge-stat-accommodations');
    if (badgeAcc) badgeAcc.textContent = `♿ ${t.accommodationsReady || 'Accommodations Ready'}`;
    const badgeSr = this.shadowRoot.getElementById('badge-stat-sr');
    if (badgeSr) badgeSr.textContent = `⚡ ${t.screenReaderOptimized || 'Screen Reader Optimized'}`;

    const searchInput = this.shadowRoot.getElementById('career-search-input');
    if (searchInput) {
      searchInput.placeholder = t.searchJobsPlaceholder || 'Search roles, companies, tags...';
      searchInput.setAttribute('aria-label', t.searchJobsPlaceholder || 'Search roles, companies, tags...');
    }

    const chipAll = this.shadowRoot.getElementById('chip-text-all');
    if (chipAll) chipAll.textContent = t.allRolesFilter || 'All Roles';
    const chipRemote = this.shadowRoot.getElementById('chip-text-remote');
    if (chipRemote) chipRemote.textContent = t.remoteFilter || 'Remote';
    const chipSr = this.shadowRoot.getElementById('chip-text-sr');
    if (chipSr) chipSr.textContent = t.srFilter || 'Screen Reader';
    const chipFlex = this.shadowRoot.getElementById('chip-text-flexible');
    if (chipFlex) chipFlex.textContent = t.flexibleFilter || 'Flexible Hours';


    // Update Accommodations Modal Texts
    const accModalTitle = this.shadowRoot.getElementById('modal-acc-title');
    if (accModalTitle) accModalTitle.textContent = `♿ ${t.accModalTitle}`;
    const accModalIntro = this.shadowRoot.getElementById('modal-acc-intro');
    if (accModalIntro) accModalIntro.textContent = t.accModalIntro;
    const lblSr = this.shadowRoot.getElementById('label-chk-sr');
    if (lblSr) lblSr.textContent = t.optScreenReader;
    const lblTime = this.shadowRoot.getElementById('label-chk-time');
    if (lblTime) lblTime.textContent = t.optExtendedTime;
    const lblCamera = this.shadowRoot.getElementById('label-chk-camera');
    if (lblCamera) lblCamera.textContent = t.optCameraOptional;
    const lblAdvance = this.shadowRoot.getElementById('label-chk-advance');
    if (lblAdvance) lblAdvance.textContent = t.optAdvanceNotice;
    const lblChat = this.shadowRoot.getElementById('label-chk-chat');
    if (lblChat) lblChat.textContent = t.optChatInterview;
    const lblNotes = this.shadowRoot.getElementById('label-custom-notes');
    if (lblNotes) lblNotes.textContent = t.customNotesLabel;
    const notesInput = this.shadowRoot.getElementById('acc-custom-notes');
    if (notesInput) notesInput.placeholder = t.customNotesPlaceholder;
    const lblLetter = this.shadowRoot.getElementById('label-letter-title');
    if (lblLetter) lblLetter.textContent = t.letterPreviewTitle;
    const btnCopy = this.shadowRoot.getElementById('btn-copy-letter');
    if (btnCopy) btnCopy.textContent = t.copyLetterBtn;
    const btnSubmit = this.shadowRoot.getElementById('btn-submit-acc');
    if (btnSubmit) btnSubmit.textContent = t.submitAccBtn;

    // Update Welcome Message Card Text & Direction
    const welcomeMsgText = this.shadowRoot.getElementById('welcome-msg-text');
    if (welcomeMsgText) {
      welcomeMsgText.textContent = t.welcome;
      const welcomeCard = welcomeMsgText.closest('.msg');
      if (welcomeCard) {
        welcomeCard.setAttribute('lang', lang);
        welcomeCard.setAttribute('dir', t.direction);
      }
    }

    // Update Custom Language Dropdown Trigger and Active Item State
    const langObj = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];
    const triggerFlag = this.shadowRoot.getElementById('lang-trigger-flag');
    if (triggerFlag) triggerFlag.textContent = langObj.flag;

    const triggerLabel = this.shadowRoot.getElementById('lang-trigger-label');
    if (triggerLabel) triggerLabel.textContent = langObj.shortName;

    const customTrigger = this.shadowRoot.getElementById('lang-custom-trigger');
    if (customTrigger) {
      customTrigger.setAttribute('aria-label', `Select Language: Current language is ${langObj.nativeName}`);
    }

    const langOptions = this.shadowRoot.querySelectorAll('.lang-custom-option');
    langOptions.forEach(opt => {
      const isSelected = opt.getAttribute('data-value') === lang;
      opt.classList.toggle('selected', isSelected);
      opt.setAttribute('aria-selected', String(isSelected));
      opt.setAttribute('tabindex', isSelected ? '0' : '-1');
      const checkEl = opt.querySelector('.lang-opt-check');
      if (checkEl) checkEl.textContent = isSelected ? '✓' : '';
    });

    const select = this.shadowRoot.getElementById('lang-select');
    if (select && select.value !== lang) select.value = lang;

    if (this.activeTab === 'career') {
      this.loadJobs();
    }
  }

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
    this.showTypingIndicator();

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


  showTypingIndicator() {
    this.removeTypingIndicator();
    const log = this.shadowRoot.getElementById('chat-log');
    if (!log) return;
    const div = document.createElement('div');
    div.id = 'typing-indicator';
    div.className = 'msg tutor typing-bubble';
    div.setAttribute('role', 'status');
    div.setAttribute('aria-label', 'AI tutor is preparing answer');
    div.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    log.appendChild(div);
    const panel = this.shadowRoot.getElementById('panel-tutor');
    if (panel) panel.scrollTop = panel.scrollHeight;
  }

  removeTypingIndicator() {
    const existing = this.shadowRoot.getElementById('typing-indicator');
    if (existing) existing.remove();
  }

  groundedFallbackReply(query) {
    setTimeout(() => {
      const result = this.getGroundedResponse(query, this.currentLang);
      this.appendMessage('tutor', result.reply, this.currentLang, result.citation);
    }, 350);
  }

  appendMessage(role, text, lang, citation = null) {
    this.removeTypingIndicator();
    const log = this.shadowRoot.getElementById('chat-log');
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.setAttribute('role', 'article');
    div.setAttribute('tabindex', '0');
    div.setAttribute('lang', lang);
    div.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    if (role === 'tutor') {
      const header = document.createElement('div');
      header.className = 'msg-header';
      header.innerHTML = `
        <span class="msg-author"><span aria-hidden="true">🎓</span> Savanna AI Tutor</span>
      `;
      const listenBtn = document.createElement('button');
      listenBtn.type = 'button';
      listenBtn.className = 'btn-msg-listen';
      listenBtn.setAttribute('aria-label', `Listen to response in ${lang}`);
      listenBtn.innerHTML = '<span aria-hidden="true">🔊</span>';
      listenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.speakVoice(text, lang);
      });
      header.appendChild(listenBtn);
      div.appendChild(header);

      const body = document.createElement('div');
      body.className = 'msg-body';
      body.textContent = text;
      div.appendChild(body);
    } else {
      const body = document.createElement('div');
      body.className = 'msg-body';
      body.textContent = text;
      div.appendChild(body);
    }

    if (citation && role === 'tutor') {
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

  handleCitationActivate(citationObj, citeBtn) {
    this.playChime('citation');
    this.lastFocusedElement = citeBtn;

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

        const origOutline = hostElem.style.outline;
        const origBg = hostElem.style.backgroundColor;
        const origTransition = hostElem.style.transition;

        hostElem.style.transition = 'all 0.4s ease';
        hostElem.style.outline = '3px solid var(--assistant-primary, #047857)';
        hostElem.style.backgroundColor = 'rgba(4, 120, 87, 0.15)';

        setTimeout(() => {
          hostElem.style.outline = origOutline;
          hostElem.style.backgroundColor = origBg;
          hostElem.style.transition = origTransition;
        }, 3000);

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
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
    }
  }

  /**
   * Native Web Speech API Engine (WCAG 2.1.1, WCAG 4.1.3)
   * Toggleable microphone with real-time interim recognition and language fallback.
   */
  toggleSpeechInput(btn) {
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];

    // If currently recording, stop it
    if (this.isRecording) {
      this.stopSpeechRecognition();
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.announce(t.micNotSupported);
      this.appendMessage('tutor', `⚠️ ${t.micNotSupported}`, this.currentLang);
      return;
    }

    try {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = t.speechLang;
      this.recognition.interimResults = true;
      this.recognition.continuous = false;

      this.recognition.onstart = () => {
        this.isRecording = true;
        btn.classList.add('recording');
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('aria-label', `${t.micLabel} (${t.micListening})`);
        this.playChime('mic-start');
        this.announce(t.micListening);
        this.emitEvent('assistant:speech-start', { language: this.recognition.lang });
      };

      this.recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        const input = this.shadowRoot.getElementById('user-input');
        if (input) input.value = transcript;

        if (event.results[0].isFinal) {
          this.stopSpeechRecognition();
          this.announce(`Speech captured: ${transcript}`);
          setTimeout(() => this.handleSend(), 400);
        }
      };

      this.recognition.onerror = (event) => {
        this.stopSpeechRecognition();
        if (event.error === 'not-allowed' || event.error === 'permission-denied') {
          this.announce(t.micPermissionDenied);
          this.appendMessage('tutor', `⚠️ ${t.micPermissionDenied}`, this.currentLang);
        } else if (event.error === 'language-not-supported' && this.recognition.lang !== 'en-US') {
          // Acoustic model fallback
          this.announce('Acoustic model fallback to universal speech recognition.');
          this.currentLang = 'en';
          this.toggleSpeechInput(btn);
        } else {
          this.announce(t.micStopped);
        }
      };

      this.recognition.onend = () => {
        this.stopSpeechRecognition();
      };

      this.recognition.start();
    } catch {
      this.stopSpeechRecognition();
      this.announce(t.micNotSupported);
    }
  }

  stopSpeechRecognition() {
    if (this.recognition) {
      try { this.recognition.stop(); } catch {}
      this.recognition = null;
    }
    this.isRecording = false;
    const btn = this.shadowRoot.getElementById('mic-btn');
    if (btn) {
      btn.classList.remove('recording');
      btn.setAttribute('aria-pressed', 'false');
      const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
      btn.setAttribute('aria-label', t.micLabel);
    }
    this.playChime('mic-stop');
  }

  /**
   * Human Mentor Escalation & Screen Sharing
   * Privacy-first learner consent, live thumbnail, and accessible stop triggers.
   */
  openEscalateModal() {
    this.lastFocusedElement = this.shadowRoot.getElementById('escalate-btn');
    const modal = this.shadowRoot.getElementById('escalate-modal');
    modal.style.display = 'flex';
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    this.announce(`${t.escalateModalTitle}. Select an option.`);
    const shareBtn = this.shadowRoot.getElementById('btn-confirm-screenshare');
    if (shareBtn) shareBtn.focus();
    this.emitEvent('assistant:escalate-request', { partner: this.partnerId });
  }

  closeEscalateModal() {
    const modal = this.shadowRoot.getElementById('escalate-modal');
    modal.style.display = 'none';
    if (this.lastFocusedElement) this.lastFocusedElement.focus();
  }

  async startScreenShare() {
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
      this.appendMessage('tutor', `⚠️ Screen sharing API is not supported in this browser. Connecting via direct chat ticket.`, this.currentLang);
      this.requestChatHelp();
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: 'always' },
        audio: false
      });
      this.screenStream = stream;

      // Attach stream to preview thumbnail
      const preview = this.shadowRoot.getElementById('screen-preview');
      if (preview) {
        preview.srcObject = stream;
        preview.play().catch(() => {});
      }

      // Display Persistent Status Banner
      const banner = this.shadowRoot.getElementById('screen-share-area');
      banner.style.display = 'flex';

      this.appendMessage('tutor', t.mentorConnected, this.currentLang);
      this.announce(t.mentorConnected);

      const track = stream.getVideoTracks()[0];
      const settings = track.getSettings ? track.getSettings() : {};

      this.emitEvent('assistant:screenshare-started', {
        partner: this.partnerId,
        displaySurface: settings.displaySurface || 'window'
      });

      // Browser native "Stop Sharing" bar integration
      track.onended = () => {
        this.stopScreenShare();
      };
    } catch {
      // User cancelled picker dialog
      const cancelledText = 'Screen sharing was cancelled. Your screen was not shared.';
      this.appendMessage('tutor', cancelledText, this.currentLang);
      this.announce(cancelledText);
    }
  }

  stopScreenShare(announce = true) {
    if (this.screenStream) {
      this.screenStream.getTracks().forEach(track => track.stop());
      this.screenStream = null;
    }

    const preview = this.shadowRoot.getElementById('screen-preview');
    if (preview) preview.srcObject = null;

    const banner = this.shadowRoot.getElementById('screen-share-area');
    if (banner) banner.style.display = 'none';

    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    if (announce) {
      this.appendMessage('tutor', t.screenShareStopped, this.currentLang);
      this.announce(t.screenShareStopped);
    }

    this.emitEvent('assistant:screenshare-stopped', { partner: this.partnerId });
  }

  requestChatHelp() {
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    const ticketId = 'MNT-' + Math.floor(1000 + Math.random() * 9000);
    const msg = t.mentorTicketCreated.replace('{id}', ticketId);
    this.appendMessage('tutor', msg, this.currentLang);
    this.announce(msg);
    this.emitEvent('assistant:escalate-ticket', {
      ticketId,
      partner: this.partnerId,
      course: this.courseId,
      language: this.currentLang
    });
  }

  /**
   * Accessible Career Gateway Feed & Accommodations Engine (WCAG 1.3.1, 2.4.6)
   */
  async loadJobs() {
    const container = this.shadowRoot.getElementById('jobs-container');
    if (!container) return;

    let jobs = null;
    try {
      const res = await fetch(`${this.apiUrl}/career/jobs?partner_id=${this.partnerId}`);
      if (res.ok) {
        jobs = await res.json();
      }
    } catch {
      // Degrade gracefully to inclusive offline database
    }

    if (!jobs || !Array.isArray(jobs) || jobs.length === 0) {
      jobs = INCLUSIVE_JOBS_DB;
    }
    this._cachedJobs = jobs;

    this.setupCareerControls();
    this.renderJobsFeed();
  }

  setupCareerControls() {
    if (this._careerControlsInitialized) return;
    this._careerControlsInitialized = true;

    const searchInput = this.shadowRoot.getElementById('career-search-input');
    const searchClear = this.shadowRoot.getElementById('career-search-clear');
    const chips = this.shadowRoot.querySelectorAll('.career-chip');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.jobsSearchQuery = e.target.value.trim().toLowerCase();
        if (searchClear) searchClear.style.display = this.jobsSearchQuery ? 'flex' : 'none';
        this.renderJobsFeed();
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        this.jobsSearchQuery = '';
        searchClear.style.display = 'none';
        this.renderJobsFeed();
        if (searchInput) searchInput.focus();
      });
    }

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const filter = chip.getAttribute('data-filter') || 'all';
        this.activeJobsFilter = filter;
        chips.forEach(c => {
          const isActive = c === chip;
          c.classList.toggle('active', isActive);
          c.setAttribute('aria-pressed', String(isActive));
        });
        this.renderJobsFeed();
      });
    });
  }

  renderJobsFeed() {
    const container = this.shadowRoot.getElementById('jobs-container');
    if (!container) return;
    const jobs = this._cachedJobs || INCLUSIVE_JOBS_DB;
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];

    // Filter by Category
    let filtered = jobs.filter(j => {
      if (this.activeJobsFilter === 'all') return true;
      if (this.activeJobsFilter === 'remote') {
        return (j.categories && j.categories.includes('remote')) ||
               (j.tags && j.tags.some(tag => tag.toLowerCase().includes('remote'))) ||
               (j.location && j.location.toLowerCase().includes('remote'));
      }
      if (this.activeJobsFilter === 'screen-reader') {
        return (j.categories && j.categories.includes('screen-reader')) ||
               (j.tags && j.tags.some(tag => tag.toLowerCase().includes('screen reader') || tag.toLowerCase().includes('assistive')));
      }
      if (this.activeJobsFilter === 'flexible') {
        return (j.categories && j.categories.includes('flexible')) ||
               (j.tags && j.tags.some(tag => tag.toLowerCase().includes('flexible') || tag.toLowerCase().includes('part-time')));
      }
      return true;
    });

    // Filter by Search Query
    if (this.jobsSearchQuery) {
      const q = this.jobsSearchQuery;
      filtered = filtered.filter(j => {
        const title = (j.titles?.[this.currentLang] || j.title || '').toLowerCase();
        const desc = (j.descriptions?.[this.currentLang] || j.description || '').toLowerCase();
        const comp = (j.company || '').toLowerCase();
        const loc = (j.location || '').toLowerCase();
        const tags = (j.tags || []).join(' ').toLowerCase();
        return title.includes(q) || desc.includes(q) || comp.includes(q) || loc.includes(q) || tags.includes(q);
      });
    }

    // Update Chip Count
    const chipCountAll = this.shadowRoot.getElementById('chip-count-all');
    if (chipCountAll) chipCountAll.textContent = String(jobs.length);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="career-empty-state" role="status" aria-live="polite">
          <span class="career-empty-icon" aria-hidden="true">🔍</span>
          <h4 class="career-empty-title">${t.noJobsFound || 'No matching opportunities found'}</h4>
          <p class="career-empty-desc">${t.noJobsFoundDesc || 'Try adjusting your search terms or clearing category filters.'}</p>
          <button type="button" class="career-reset-btn" id="career-btn-reset-filters">
            <span>↺</span> ${t.resetFiltersBtn || 'Show All Opportunities'}
          </button>
        </div>
      `;

      const resetBtn = container.querySelector('#career-btn-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.activeJobsFilter = 'all';
          this.jobsSearchQuery = '';
          const searchInput = this.shadowRoot.getElementById('career-search-input');
          const searchClear = this.shadowRoot.getElementById('career-search-clear');
          if (searchInput) searchInput.value = '';
          if (searchClear) searchClear.style.display = 'none';

          const chips = this.shadowRoot.querySelectorAll('.career-chip');
          chips.forEach(c => {
            const isAll = c.getAttribute('data-filter') === 'all';
            c.classList.toggle('active', isAll);
            c.setAttribute('aria-pressed', String(isAll));
          });
          this.renderJobsFeed();
          if (searchInput) searchInput.focus();
        });
      }

      this.announce(`${t.noJobsFound}. ${t.resetFiltersBtn}`);
      return;
    }

    container.innerHTML = filtered.map(j => {
      const title = j.titles?.[this.currentLang] || j.title;
      const desc = j.descriptions?.[this.currentLang] || j.description;
      const tags = j.tags || ['Remote', 'Inclusive'];
      const theme = COMPANY_THEMES[j.company] || {
        bg: 'linear-gradient(135deg, #065f46 0%, #047857 55%, #059669 100%)',
        initial: (j.company || 'S').charAt(0).toUpperCase()
      };

      return `
        <article class="job-card" role="article" tabindex="0" aria-labelledby="job-${j.id}-title">
          <div class="job-card-header">
            <div class="job-company-badge" style="background: ${theme.bg};" aria-hidden="true">${theme.initial}</div>
            <div class="job-title-wrap">
              <div class="job-company-row">
                <span class="job-company-name">🏢 ${j.company}</span>
                <span class="job-verified-tag" aria-label="${t.verifiedEmployer || 'Verified Employer'}">✓ ${t.verifiedEmployer || 'Verified Employer'}</span>
              </div>
              <h4 class="job-title" id="job-${j.id}-title">${title}</h4>
              <span class="job-hiring-pill" aria-hidden="true"><span class="hiring-dot"></span> ${t.activelyHiring || 'Actively Hiring'}</span>
            </div>
          </div>

          <div class="job-meta">
            <span class="job-meta-item">📍 ${j.location}</span>
            <span class="job-meta-item job-meta-salary">💰 ${j.salary}</span>
            <span class="job-meta-item">⏱ ${j.workType || 'Full-time'}</span>
          </div>

          <div class="job-badges-wrap" aria-label="Inclusion Features">
            ${tags.map(tag => {
              let badgeClass = 'job-badge';
              const low = tag.toLowerCase();
              if (low.includes('screen reader') || low.includes('assistive')) badgeClass += ' badge-sr';
              else if (low.includes('remote')) badgeClass += ' badge-remote';
              else if (low.includes('flexible') || low.includes('part-time')) badgeClass += ' badge-flexible';
              return `<span class="${badgeClass}">♿ ${tag}</span>`;
            }).join('')}
          </div>

          <p class="job-desc">${desc}</p>

          <div class="job-actions">
            <button type="button" class="btn-apply" data-job-id="${j.id}" aria-label="${t.applyBtn}: ${title} at ${j.company}">
              <span>${t.applyBtn}</span> <span aria-hidden="true">↗</span>
            </button>
            <button type="button" class="btn-acc" data-job-id="${j.id}" aria-label="${t.requestAccBtn}: ${title} at ${j.company}">
              <span aria-hidden="true">♿</span> <span>${t.requestAccBtn}</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to Apply & Accommodations buttons
    container.querySelectorAll('.btn-apply').forEach(btn => {
      btn.addEventListener('click', () => {
        const jobId = btn.getAttribute('data-job-id');
        const job = jobs.find(x => x.id === jobId) || jobs[0];
        this.handleJobApply(job);
      });
    });

    container.querySelectorAll('.btn-acc').forEach(btn => {
      btn.addEventListener('click', () => {
        const jobId = btn.getAttribute('data-job-id');
        const job = jobs.find(x => x.id === jobId) || jobs[0];
        this.openAccommodationsModal(job, btn);
      });
    });

    this.announce(`Showing ${filtered.length} verified inclusive opportunities.`);
  }

  handleJobApply(job) {
    const title = job.titles?.[this.currentLang] || job.title;
    this.playChime('message');
    this.emitEvent('assistant:job-apply', {
      jobId: job.id,
      company: job.company,
      title,
      partner: this.partnerId
    });

    const msg = `Application initiated for ${title} at ${job.company}. You can request interview accommodations anytime!`;
    this.appendMessage('tutor', msg, this.currentLang);
    this.announce(msg);
  }

  openAccommodationsModal(job, sourceBtn) {
    this.activeJobForAcc = job;
    this.lastFocusedElement = sourceBtn;
    const modal = this.shadowRoot.getElementById('accommodations-modal');
    const summary = this.shadowRoot.getElementById('acc-job-summary');
    const title = job.titles?.[this.currentLang] || job.title;
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];

    summary.innerHTML = `<strong>🏢 ${job.company}</strong> · <span>${title}</span> (${job.location})`;
    this.updateAccLetterPreview();

    modal.style.display = 'flex';
    this.announce(`${t.accModalTitle}: ${title}. Choose accommodations.`);
    const firstCheckbox = this.shadowRoot.getElementById('chk-sr');
    if (firstCheckbox) firstCheckbox.focus();
  }

  closeAccommodationsModal() {
    const modal = this.shadowRoot.getElementById('accommodations-modal');
    modal.style.display = 'none';
    if (this.lastFocusedElement) this.lastFocusedElement.focus();
  }

  generateAccommodationLetter(job, selections, customNotes, lang) {
    const title = job.titles?.[lang] || job.title;
    const NL = String.fromCharCode(10);
    const items = selections.map(s => "• " + s).join(NL);
    const notesStr = customNotes ? NL + "• Notes: " + customNotes : "";
    const amNotes = customNotes ? NL + "• ተጨማሪ ማስታወሻ፦ " + customNotes : "";
    const arNotes = customNotes ? NL + "• ملاحظات إضافية: " + customNotes : "";
    const omNotes = customNotes ? NL + "• Yaada dabalataa: " + customNotes : "";
    const tiNotes = customNotes ? NL + "• ተወሳኺ ድሌት: " + customNotes : "";
    const soNotes = customNotes ? NL + "• Faahfaahin dheeraad ah: " + customNotes : "";

    if (lang === 'am') {
      return "ለ፦ " + job.company + " የሰው ሃብት አስተዳደር" + NL +
             "ጉዳዩ፦ ለ " + title + " የስራ መደብ የፈተና እና የስራ ቦታ ማመቻቸት ጥያቄ" + NL + NL +
             "ክቡራትና ክቡራን፤" + NL +
             "በድርጅታችሁ ለወጣው የ " + title + " የስራ ማስታወቂያ ያመለከትኩ ሲሆን፣ የሙያ አቅሜን በእኩልነት ለማሳየት የሚከተሉትን ማመቻቸቶች በትህትና እጠይቃለሁ፦" + NL + NL +
             items + amNotes + NL + NL +
             "ተደራሽ እና ፍትሃዊ የስራ አካባቢ ለመፍጠር ለምታደርጉት ቁርጠኝነት አመሰግናለሁ።";
    }
    if (lang === 'ar') {
      return "إلى: لجنة التوظيف في " + job.company + NL +
             "الموضوع: طلب تسهيلات مقابلة واختبار لوظيفة " + title + NL + NL +
             "تحية طيبة وبعد،" + NL +
             "بخصوص تقدمي لشغل وظيفة " + title + "، أود التقدم بطلب رسمي لتوفير التسهيلات التالية لضمان بيئة تقييم عادلة ومتكافئة:" + NL + NL +
             items + arNotes + NL + NL +
             "شاكراً لكم التزامكم بمبادئ الشمولية وتكافؤ الفرص في التوظيف.";
    }
    if (lang === 'om') {
      return "Gara: Garee Qacarrii " + job.company + NL +
             "Dhimmi: Gaaffii Gargaarsa Qormaataa fi Hojii - " + title + NL + NL +
             "Kabajamtoota," + NL +
             "Iyyannoo koo hojii " + title + " wajjin walqabatee, dandeettii koo qixxummaan agarsiisuuf gargaarsa armaan gadii kabajaan gaafadha:" + NL + NL +
             items + omNotes + NL + NL +
             "Sirna qacarrii mijaawaa fi wal-qixa taasisaniif galatoomaa.";
    }
    if (lang === 'ti') {
      return "ናብ: ሓላፊ ቆጺራ " + job.company + NL +
             "ጉዳይ: ሕቶ ምቹእነት ፈተናን ስራሕን - " + title + NL + NL +
             "ዝኸበርኩም፣" + NL +
             "ምስቲ ዘቕረብክዎ መመልከቲ ስራሕ " + title + " ብዝተሓሓዝ፡ ብቕዓተይ ብማዕረ ንምርኣይ ዝስዕቡ ናይ ፈተና ምቹእነታት ብኽብሪ ይሓትት፦" + NL + NL +
             items + tiNotes + NL + NL +
             "ምቹእ ናይ ስራሕ ባይታ ንምፍጣር ንእትገብርዎ ጻዕሪ የቐንየለይ።";
    }
    if (lang === 'so') {
      return "Ku: Kooxda Shaqaaleysiinta ee " + job.company + NL +
             "Ujeeddo: Codsiga Fursadaha Gaarka ah ee Imtixaanka - " + title + NL + NL +
             "Mudanayaal," + NL +
             "Iyadoo la tixraacayo codsigayga shaqo ee " + title + "، waxaan si xushmad leh u codsanayaa fursadaha gaarka ah ee soo socda si aan u muujiyo aqoontayda:" + NL + NL +
             items + soNotes + NL + NL +
             "Waad ku mahadsan tihiin taageeradaada ku aaddan shaqo loo siman yahay.";
    }
    return "To: Hiring Team at " + job.company + NL +
           "Subject: Interview & Assessment Accommodation Request - " + title + NL + NL +
           "Dear Hiring Team," + NL + NL +
           "In connection with my application for the " + title + " position, I am formally requesting the following workplace and interview accommodations to ensure an equitable assessment of my skills:" + NL + NL +
           items + notesStr + NL + NL +
           "Thank you for your commitment to accessible and inclusive employment.";
  }

  updateAccLetterPreview() {
    if (!this.activeJobForAcc) return;
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    const selections = [];

    if (this.shadowRoot.getElementById('chk-sr')?.checked) selections.push(t.optScreenReader);
    if (this.shadowRoot.getElementById('chk-time')?.checked) selections.push(t.optExtendedTime);
    if (this.shadowRoot.getElementById('chk-camera')?.checked) selections.push(t.optCameraOptional);
    if (this.shadowRoot.getElementById('chk-advance')?.checked) selections.push(t.optAdvanceNotice);
    if (this.shadowRoot.getElementById('chk-chat')?.checked) selections.push(t.optChatInterview);

    const notes = this.shadowRoot.getElementById('acc-custom-notes')?.value.trim() || '';
    const letter = this.generateAccommodationLetter(this.activeJobForAcc, selections, notes, this.currentLang);

    const preview = this.shadowRoot.getElementById('acc-letter-preview');
    if (preview) preview.textContent = letter;
  }

  copyAccLetter() {
    const preview = this.shadowRoot.getElementById('acc-letter-preview');
    if (!preview) return;
    const text = preview.textContent;
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    const btn = this.shadowRoot.getElementById('btn-copy-letter');

    navigator.clipboard.writeText(text).then(() => {
      this.playChime('citation');
      btn.textContent = `✅ ${t.letterCopied}`;
      this.announce(t.letterCopied);
      setTimeout(() => {
        btn.textContent = t.copyLetterBtn;
      }, 2000);
    });
  }

  submitAccRequest() {
    if (!this.activeJobForAcc) return;
    const job = this.activeJobForAcc;
    const title = job.titles?.[this.currentLang] || job.title;
    const t = LOCALIZED_UI[this.currentLang] || LOCALIZED_UI['en'];
    const preview = this.shadowRoot.getElementById('acc-letter-preview');
    const letterText = preview ? preview.textContent : '';

    this.playChime('message');
    this.emitEvent('assistant:accommodation-request', {
      jobId: job.id,
      company: job.company,
      title,
      letterText,
      language: this.currentLang
    });

    this.closeAccommodationsModal();
    const successMsg = `✅ ${t.accSubmitted} (${job.company} · ${title})`;
    this.appendMessage('tutor', successMsg, this.currentLang);
    this.announce(successMsg);
  }

  // Public Programmatic API for Partner Platforms
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
