// ==================== TRANSLATIONS (قاموس الترجمات) ====================
// هذا الكائن (Object) يحتوي على كل النصوص الموجودة في الموقع
// مقسمة لغتين: عربي (ar) وإنجليزي (en)
// كل مفتاح (key) له نفس الاسم في اللغتين، والقيمة (value) هي النص المترجم
const translations = {
    ar: {
        // ========== روابط التنقل ==========
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_pricing: "الأسعار",
        nav_about: "من نحن",
        nav_testimonials: "آراء العملاء",
        nav_faq: "الأسئلة الشائعة",
        nav_contact: "اتصل بنا",
        nav_book: "احجز الآن",

        // ========== لوحة التحكم ==========
        language_btn: "English",       // نص زر تغيير اللغة (يعرض اللغة الأخرى)
        font_size_label: "حجم الخط",

        // ========== الشعار والهيرو ==========
        brand_subtitle: "فندق الحيوانات الأليفة الفاخر",
        hero_title: 'مثل <span class="highlight">منزل بعيد عن المنزل</span> لحيواتك الأليف',
        hero_subtitle: "في Loving Homes، نعتني بحيوانك الأليف كما لو كان من عائلتنا. مرافق فاخرة، رعاية احترافية، وحب لا محدود.",
        btn_book_now: "احجز الآن",
        btn_learn_more: "اعرف المزيد",
        btn_view_packages: "عرض الحزم والأسعار",

        // ========== قسم "لماذا تختارنا" ==========
        why_choose_title: "لماذا تختار Loving Homes؟",
        why_choose_subtitle: "نحن نقدم أفضل الخدمات لحيوانك الأليف بأعلى معايير الجودة والرعاية",
        feat1_title: "رعاية احترافية", feat1_desc: "فريق مدرب ومتخصص في رعاية الحيوانات الأليفة",
        feat2_title: "خدمة 24/7", feat2_desc: "نحن متاحون طوال الوقت لرعاية حيوانك",
        feat3_title: "بيئة آمنة", feat3_desc: "مرافق آمنة وحديثة مع أنظمة أمان متقدمة",
        feat4_title: "حب واهتمام", feat4_desc: "نعامل حيوانك الأليف كأنه من عائلتنا",

        // ========== قسم الخدمات ==========
        services_title: "خدماتنا المتميزة",
        services_subtitle: "نقدم مجموعة شاملة من الخدمات المتخصصة لحيوانك الأليف",
        srv1_title: "🍖 الطعام والمنتجع", srv1_desc: "وجبات صحية ومتوازنة مع خيارات غذائية خاصة",
        srv2_title: "🛏️ غرف مجهزة بالكامل", srv2_desc: "غرف مريحة وفسيحة مع جميع الراحيات",
        srv3_title: "🚗 خدمة التوصيل", srv3_desc: "توصيل آمن من والى منزلك",
        srv4_title: "🌳 مراعي خارجية آمنة", srv4_desc: "مساحات خضراء آمنة للعب واللهو",
        srv5_title: "⚕️ خدمات بيطرية 24/7", srv5_desc: "فحوصات طبية دورية وخدمات طوارئ",
        srv6_title: "📱 مراقبة وتحديثات يومية", srv6_desc: "صور وفيديوهات يومية لحيوانك الأليف",

        // ========== آراء العملاء ==========
        testimonials_title: "ماذا يقول عملاؤنا",
        testimonials_subtitle: "آراء العملاء الراضين عن خدماتنا",

        // ========== قسم الدعوة للحجز (CTA) ==========
        cta_title: "هل أنت مستعد لإقامة رائعة لحيوانك الأليف؟",
        cta_subtitle: "احجز الآن واستمتع بخدمات Loving Homes الفاخرة",
        cta_subtitle2: "احجز الآن والحصول على خصم 10% على الحجز الأول",
        btn_contact: "اتصل بنا",

        // ========== الفوتر ==========
        footer_about_title: "عن Loving Homes",
        footer_about_desc: "نحن متخصصون في توفير أفضل الرعاية لحيوانك الأليف بأعلى معايير الجودة والاحترافية.",
        footer_about_desc2: "فندق الحيوانات الأليفة الفاخر في هونج كونج",
        footer_services: "الخدمات", footer_quick_links: "روابط سريعة", footer_info: "معلومات",
        footer_contact_title: "تواصل معنا", footer_contact_title2: "اتصل بنا",
        footer_rights: "جميع الحقوق محفوظة.",

        // ========== صفحة "من نحن" ==========
        about_page_title: "من نحن", about_story_title: "قصتنا",
        about_story_p1: "تأسست Loving Homes برؤية واضحة: توفير منزل آمن وفاخر لحيواناتك الأليفة عندما تكون بعيداً.",
        about_story_p2: "مع أكثر من 15 سنة من الخبرة في مجال رعاية الحيوانات الأليفة، فريقنا متخصص في توفير خدمات عالية الجودة.",
        about_story_p3: "كل حيوان أليف له احتياجات فريدة وشخصيته الخاصة، ونحن نفهم ذلك تماماً.",
        about_values_title: "قيمنا الأساسية",
        about_val1_title: "الحب والرعاية", about_val1_desc: "نعامل كل حيوان بحب وحنان كما لو كان من عائلتنا",
        about_val2_title: "الأمان والثقة", about_val2_desc: "بيئة آمنة 100% مع مراقبة على مدار الساعة",
        about_val3_title: "الجودة والتميز", about_val3_desc: "أعلى معايير الخدمة والرعاية الطبية",
        about_team_title: "فريقنا المتخصص",
        about_team1_title: "أطباء بيطريون", about_team1_desc: "فريق طبي متخصص مع سنوات من الخبرة",
        about_team2_title: "مشرفو الرعاية", about_team2_desc: "متخصصون في رعاية الحيوانات الأليفة",
        about_team3_title: "خبراء التنظيف", about_team3_desc: "متدربون على أعلى معايير النظافة",
        about_mission_title: "رسالتنا",
        about_mission_desc: "نحن هنا لتوفير أفضل خدمة رعاية للحيوانات الأليفة في هونج كونج.",

        // ========== صفحة الحجز ==========
        booking_title: "احجز الآن",
        booking_step1_label: "بيانات الحيوان", booking_step2_label: "اختيار الحزمة",
        booking_step3_label: "التواريخ والأسعار", booking_step4_label: "التأكيد",
        booking_step1_title: "الخطوة 1: بيانات الحيوان الأليف",
        booking_pet_name: "اسم الحيوان", booking_pet_name_ph: "أدخل اسم حيوانك",
        booking_pet_type: "نوع الحيوان", booking_pet_type_ph: "اختر نوع الحيوان",
        booking_pet_dog: "كلب", booking_pet_cat: "قطة", booking_pet_rabbit: "أرنب",
        booking_pet_bird: "طائر", booking_pet_other: "أخرى",
        booking_pet_age: "العمر", booking_pet_age_ph: "أدخل عمر الحيوان بالسنوات",
        booking_pet_weight: "الوزن (كجم)", booking_pet_weight_ph: "أدخل وزن الحيوان",
        booking_pet_notes: "ملاحظات خاصة", booking_pet_notes_ph: "أي معلومات مهمة عن حيوانك",
        booking_btn_next: "التالي", booking_btn_prev: "السابق",
        booking_step2_title: "الخطوة 2: اختر الحزمة المناسبة",
        booking_pkg1_name: "حزمة اليوم", booking_pkg1_desc: "رعاية يومية مع مشرف ووجبات",
        booking_pkg2_name: "الحزمة الكلاسيكية", booking_pkg2_desc: "حجرة خاصة + وجبات + مراقبة 24/7",
        booking_pkg3_name: "الحزمة المميزة", booking_pkg3_desc: "خدمات فاخرة + وجبات متقدمة",
        booking_step3_title: "الخطوة 3: اختر التواريخ",
        booking_checkin: "تاريخ الدخول", booking_checkout: "تاريخ الخروج",
        booking_summary: "ملخص الحجز", booking_package_lbl: "الحزمة:", booking_nights_lbl: "عدد الليالي:",
        booking_price_lbl: "السعر اليومي:", booking_total_lbl: "المجموع:",
        booking_step4_title: "الخطوة 4: تأكيد الحجز",
        booking_owner_title: "بيانات المالك",
        booking_owner_name: "اسم المالك", booking_owner_name_ph: "أدخل اسمك",
        booking_owner_email: "البريد الإلكتروني", booking_owner_email_ph: "أدخل بريدك الإلكتروني",
        booking_owner_phone: "رقم الهاتف", booking_owner_phone_ph: "أدخل رقم هاتفك",
        booking_terms_title: "الشروط والأحكام",
        booking_terms_text: "أوافق على شروط وأحكام Loving Homes وسياسة الخصوصية",
        booking_confirm_btn: "تأكيد الحجز",
        booking_classic_pkg: "الحزمة الكلاسيكية", booking_nights_val: "3 ليالٍ",

        // ========== صفحة التواصل ==========
        contact_title: "اتصل بنا", contact_info_title: "معلومات التواصل",
        contact_phone_title: "📞 الهاتف", contact_phone_hours: "متاح من 9 صباحاً إلى 6 مساءً",
        contact_email_title: "📧 البريد الإلكتروني", contact_email_reply: "سنرد عليك في غضون 24 ساعة",
        contact_address_title: "📍 العنوان", contact_address1: "شارع الحيوان الأليف 123", contact_address2: "هونج كونج",
        contact_hours_title: "🕐 ساعات العمل",
        contact_hours1: "الاثنين - الجمعة: 9:00 - 18:00", contact_hours2: "السبت: 10:00 - 16:00", contact_hours3: "الأحد: مغلق",
        contact_form_title: "أرسل لنا رسالة",
        contact_name: "الاسم", contact_name_ph: "أدخل اسمك",
        contact_email: "البريد الإلكتروني", contact_email_ph: "أدخل بريدك الإلكتروني",
        contact_phone: "الهاتف", contact_phone_ph: "أدخل رقم هاتفك",
        contact_subject: "الموضوع", contact_subject_ph: "موضوع الرسالة",
        contact_message: "الرسالة", contact_message_ph: "اكتب رسالتك هنا...",
        contact_send_btn: "إرسال الرسالة", contact_map_title: "موقعنا على الخريطة",

        // ========== صفحة الأسئلة الشائعة ==========
        faq_title: "الأسئلة الشائعة",
        faq_q1: "هل حيواني الأليف سيكون آمناً في Loving Homes؟",
        faq_a1: "نعم، بالتأكيد! نحن نوفر بيئة آمنة 100% مع مراقبة على مدار الساعة.",
        faq_q2: "كم تكلفة الحجز؟",
        faq_a2: "لدينا ثلاث حزم: حزمة اليوم (HKD 250)، الكلاسيكية (HKD 450)، والمميزة (HKD 750).",
        faq_q3: "هل يمكنني الحصول على تحديثات يومية عن حيواني؟",
        faq_a3: "نعم! نحن نرسل صور وتحديثات يومية لكل حيوان.",
        faq_q4: "هل تقدمون خدمات طبية؟",
        faq_a4: "نعم، لدينا فريق من الأطباء البيطريين المتخصصين.",
        faq_q5: "كيف أحجز مكاناً لحيواني؟",
        faq_a5: "يمكنك الحجز بسهولة من خلال موقعنا. اضغط على \"احجز الآن\".",
        faq_q6: "هل تقبلون جميع أنواع الحيوانات الأليفة؟",
        faq_a6: "نعم! نحن نقبل الكلاب والقطط والحيوانات الأليفة الأخرى.",
        faq_q7: "هل توفرون خدمة التوصيل؟",
        faq_a7: "نعم! نوفر خدمة التوصيل المجاني للمناطق المحددة.",
        faq_q8: "ما هي سياسة الإلغاء؟",
        faq_a8: "يمكنك إلغاء الحجز قبل 48 ساعة بدون رسوم.",

        // ========== صفحة الأسعار ==========
        pricing_title: "الحزم والأسعار", pricing_subtitle: "اختر الحزمة المناسبة لحيوانك الأليف",
        pkg1_name: "حزمة اليوم", pkg1_sub: "Day Care", pkg1_desc: "رعاية يومية أثناء العمل",
        pkg1_f1: "✓ مشي مرتين يوميًا", pkg1_f2: "✓ منطقة لعب خارجية",
        pkg1_f3: "✓ مسار رشاقة", pkg1_f4: "✓ حفر الرمل",
        pkg1_f5: "", pkg1_f6: "",
        pkg2_badge: "الأفضل", pkg2_name: "الحزمة الكلاسيكية", pkg2_sub: "Classic Package",
        pkg2_desc: "الحزمة الأولى والأفضل لإقامة شريفة وممتعة",
        pkg2_f1: "✓ مشي 3 مرات يوميًا", pkg2_f2: "✓ حظيرة لعب داخلية",
        pkg2_f3: "✓ منطقة للاسترخاء", pkg2_f4: "✓ جلسة حلاقة وتنظيف",
        pkg2_f5: "", pkg2_f6: "",
        pkg3_name: "الحزمة المميزة", pkg3_sub: "Premium Package",
        pkg3_desc: "تجربة فاخرة مع الخدمات الراقية والمرافق",
        pkg3_f1: "✓ مشي 4 مرات يوميًا", pkg3_f2: "✓ مساحة عشب خاصة",
        pkg3_f3: "✓ تحديثات وصور يومية", pkg3_f4: "✓ مكافآت حسب الاتفاق",
        pkg3_f5: "", pkg3_f6: "",
        pricing_day: "/اليوم", pricing_night: "/الليلة",
        comparison_title: "جدول المقارنة الشامل",
        comp_service: "الخدمة", comp_day: "حزمة اليوم", comp_classic: "الكلاسيكية", comp_premium: "المميزة",
        comp_r1: "المشرف والوجبات", comp_r2: "حجرة خاصة", comp_r3: "مراقبة 24/7", comp_r4: "خدمات إضافية", comp_free: "✓ مجاني",
        extras_title: "خدمات إضافية", extras_desc: "نقدم خيارات مخصصة لاحتياجات حيوانك الخاصة:",
        extra1: "🚗 خدمة التوصيل الإضافية (يومياً) - HKD 150",
        extra2: "💇 خدمة التنظيف والعرف - HKD 200",
        extra3: "🎂 وجبات خاصة ومخصصة - HKD 100",
        extra4: "📸 جلسة تصوير احترافية - HKD 300",

        // ========== صفحة الخدمات التفصيلية ==========
        services_page_title: "خدماتنا المتميزة",
        services_page_subtitle: "نقدم مجموعة شاملة من الخدمات المتطورة لرعاية حيوانك الأليف",
        srv_detail1_title: "✨ صالة الحلاقة والمنتجع",
        srv_detail1_desc: "خدمات تجميل احترافية تشمل الاستحمام، التشذيب، قص الاظافر، وتنظيف الاذنين.",
        srv_detail1_f1: "✓ حمام فاخر مع منتجات عالية الجودة", srv_detail1_f2: "✓ قص شعر احترافي",
        srv_detail1_f3: "✓ تدليك استرخائي", srv_detail1_f4: "✓ عناية بالاظافر والاذنين",
        srv_detail2_title: "💇 غرف فاخرة مجهزة بالكامل",
        srv_detail2_desc: "غرف مريحة مع تدفئة/تبريد تحت الأرضية، تلفزيون، وأسرّة فاخرة.",
        srv_detail2_f1: "✓ تحكم بدرجة الحرارة", srv_detail2_f2: "✓ تلفزيون مع برامج مهدئة",
        srv_detail2_f3: "✓ أسرّة طبية مريحة", srv_detail2_f4: "✓ نوافذ بإطلالات طبيعية",
        srv_detail3_title: "🚗 خدمة التوصيل من والى المكان",
        srv_detail3_desc: "خدمة توصيل آمنة وموثوقة من منزلك إلى فندقنا والعودة.",
        srv_detail3_f1: "✓ سيارات مكيفة ومريحة", srv_detail3_f2: "✓ سائقون مدربون وودودون",
        srv_detail3_f3: "✓ توصيل آمن وسريع", srv_detail3_f4: "✓ خدمة يومية منتظمة",
        srv_detail4_title: "⚕️ خدمات بيطرية 24/7",
        srv_detail4_desc: "رعاية بيطرية متخصصة متاحة على مدار الساعة لأي حالة طارئة.",
        srv_detail4_f1: "✓ فريق بيطري متخصص", srv_detail4_f2: "✓ عيادة مجهزة بالكامل",
        srv_detail4_f3: "✓ رعاية طارئة فورية", srv_detail4_f4: "✓ متابعة طبية دورية",
        srv_detail5_title: "📱 مراقبة وتحديثات يومية",
        srv_detail5_desc: "كاميرات مراقبة على مدار الساعة وتحديثات يومية مع صور.",
        srv_detail5_f1: "✓ كاميرات مراقبة عالية الدقة", srv_detail5_f2: "✓ تحديثات يومية مع صور",
        srv_detail5_f3: "✓ تقارير مفصلة عن نشاط الحيوان", srv_detail5_f4: "✓ إشعارات فورية عند الحاجة",
        srv_detail6_title: "🌳 مراعي خارجية آمنة",
        srv_detail6_desc: "مساحات واسعة وآمنة للعب والركض والاستمتاع بالهواء الطلق.",
        srv_detail6_f1: "✓ مساحات خضراء واسعة", srv_detail6_f2: "✓ أسوار آمنة وقوية",
        srv_detail6_f3: "✓ مناطق ظليلة وآمنة", srv_detail6_f4: "✓ إشراف مستمر أثناء اللعب",
        srv_cta_title: "هل أنت مستعد لتجربة خدماتنا؟",
        srv_cta_subtitle: "احجز الآن والحصول على خصم 10% على الحجز الأول",

        // ========== صفحة آراء العملاء ==========
        test_title: "آراء العملاء", test_subtitle: "استمع إلى ما يقوله عملاؤنا الراضون عن خدماتنا",
        test_stats_title: "إحصائيات رضا العملاء",
        test_stat1: "نسبة رضا العملاء", test_stat2: "حيوان أليف راضٍ", test_stat3: "سنة من الخبرة",
        test_r1_text: "أحسن تجربة! حيوني عاد سعيد جداً والفريق احترافي جداً.",
        test_r1_name: "سارة أحمد", test_r1_role: "صاحبة كلب جولدن ريتريفر",
        test_r2_text: "خدمة ممتازة جداً! الصور اليومية تجعلني مطمئن على حيوني.",
        test_r2_name: "محمد خالد", test_r2_role: "صاحب كلب لابرادور",
        test_r3_text: "الرعاية الطبية ممتازة والمرافق نظيفة جداً.",
        test_r3_name: "أيل حسن", test_r3_role: "صاحب كلب شيه تزو",
        test_r4_text: "فندق رائع جداً! الموظفون يتعاملون مع حيواناتنا بحب وعناية.",
        test_r4_name: "فاطمة علي", test_r4_role: "صاحبة قطتين",
        test_r5_text: "الخدمات رائعة والأسعار معقولة جداً.",
        test_r5_name: "عمر محمود", test_r5_role: "صاحب كلب بولي",
        test_r6_text: "أفضل خيار! الفريق متخصص والمرافق حديثة جداً.",
        test_r6_name: "ليلى حسين", test_r6_role: "صاحبة كلب هاسكي",
    },

    // ==================== الترجمة الإنجليزية ====================
    en: {
        // ========== روابط التنقل ==========
        nav_home: "Home", nav_services: "Services", nav_pricing: "Pricing",
        nav_about: "About Us", nav_testimonials: "Testimonials", nav_faq: "FAQ",
        nav_contact: "Contact", nav_book: "Book Now",

        // ========== لوحة التحكم ==========
        language_btn: "العربية",       // يعرض "عربي" عشان نرجع للعربية
        font_size_label: "Font Size",

        // ========== الشعار والهيرو ==========
        brand_subtitle: "Luxury Pet Hotel",
        hero_title: 'A <span class="highlight">Home Away From Home</span> for Your Pet',
        hero_subtitle: "At Loving Homes, we care for your pet as if it were part of our family. Luxurious facilities, professional care, and unlimited love.",
        btn_book_now: "Book Now", btn_learn_more: "Learn More", btn_view_packages: "View Packages & Pricing",

        // ========== قسم "لماذا تختارنا" ==========
        why_choose_title: "Why Choose Loving Homes?",
        why_choose_subtitle: "We provide the best services for your pet with the highest standards of quality and care",
        feat1_title: "Professional Care", feat1_desc: "A trained and specialized team in caring for pets",
        feat2_title: "24/7 Service", feat2_desc: "We are available around the clock to care for your pet",
        feat3_title: "Safe Environment", feat3_desc: "Safe and modern facilities with advanced security systems",
        feat4_title: "Love & Attention", feat4_desc: "We treat your pet as if they were part of our family",

        // ========== قسم الخدمات ==========
        services_title: "Our Premium Services",
        services_subtitle: "We offer a comprehensive range of specialized services for your pet",
        srv1_title: "🍖 Food & Spa", srv1_desc: "Healthy and balanced meals with special dietary options",
        srv2_title: "🛏️ Fully Equipped Rooms", srv2_desc: "Comfortable and spacious rooms with all amenities",
        srv3_title: "🚗 Transportation Service", srv3_desc: "Safe pickup and drop-off from your home",
        srv4_title: "🌳 Safe Outdoor Meadows", srv4_desc: "Safe green spaces for play and fun",
        srv5_title: "⚕️ 24/7 Veterinary Services", srv5_desc: "Regular medical checkups and emergency services",
        srv6_title: "📱 Daily Monitoring & Updates", srv6_desc: "Daily photos and videos of your pet",

        // ========== آراء العملاء ==========
        testimonials_title: "What Our Customers Say",
        testimonials_subtitle: "Opinions of satisfied customers about our services",

        // ========== CTA ==========
        cta_title: "Ready for a wonderful stay for your pet?",
        cta_subtitle: "Book now and enjoy Loving Homes premium services",
        cta_subtitle2: "Book now and get 10% off your first booking",
        btn_contact: "Contact Us",

        // ========== الفوتر ==========
        footer_about_title: "About Loving Homes",
        footer_about_desc: "We specialize in providing the best care for your pet with the highest standards.",
        footer_about_desc2: "Luxury Pet Hotel in Hong Kong",
        footer_services: "Services", footer_quick_links: "Quick Links", footer_info: "Information",
        footer_contact_title: "Contact Us", footer_contact_title2: "Contact Us",
        footer_rights: "All rights reserved.",

        // ========== صفحة "من نحن" ==========
        about_page_title: "About Us", about_story_title: "Our Story",
        about_story_p1: "Loving Homes was founded with a clear vision: to provide a safe and luxurious home for your pets when you are away.",
        about_story_p2: "With more than 15 years of experience in pet care, our team specializes in providing high-quality and reliable services.",
        about_story_p3: "Every pet has unique needs and its own personality, and we understand that completely.",
        about_values_title: "Our Core Values",
        about_val1_title: "Love & Care", about_val1_desc: "We treat every animal with love and tenderness",
        about_val2_title: "Safety & Trust", about_val2_desc: "100% safe environment with round-the-clock monitoring",
        about_val3_title: "Quality & Excellence", about_val3_desc: "The highest standards of service and medical care",
        about_team_title: "Our Specialized Team",
        about_team1_title: "Veterinarians", about_team1_desc: "Specialized medical team with years of experience",
        about_team2_title: "Care Supervisors", about_team2_desc: "Specialists in pet care",
        about_team3_title: "Grooming Experts", about_team3_desc: "Trained to the highest hygiene standards",
        about_mission_title: "Our Mission",
        about_mission_desc: "We are here to provide the best pet care service in Hong Kong.",

        // ========== صفحة الحجز ==========
        booking_title: "Book Now",
        booking_step1_label: "Pet Details", booking_step2_label: "Choose Package",
        booking_step3_label: "Dates & Pricing", booking_step4_label: "Confirmation",
        booking_step1_title: "Step 1: Pet Details",
        booking_pet_name: "Pet Name", booking_pet_name_ph: "Enter your pet's name",
        booking_pet_type: "Pet Type", booking_pet_type_ph: "Choose pet type",
        booking_pet_dog: "Dog", booking_pet_cat: "Cat", booking_pet_rabbit: "Rabbit",
        booking_pet_bird: "Bird", booking_pet_other: "Other",
        booking_pet_age: "Age", booking_pet_age_ph: "Enter pet's age in years",
        booking_pet_weight: "Weight (kg)", booking_pet_weight_ph: "Enter pet's weight",
        booking_pet_notes: "Special Notes", booking_pet_notes_ph: "Any important info about your pet",
        booking_btn_next: "Next", booking_btn_prev: "Previous",
        booking_step2_title: "Step 2: Choose the Right Package",
        booking_pkg1_name: "Day Package", booking_pkg1_desc: "Daily care with supervisor and meals",
        booking_pkg2_name: "Classic Package", booking_pkg2_desc: "Private room + meals + 24/7 monitoring",
        booking_pkg3_name: "Premium Package", booking_pkg3_desc: "Luxury services + advanced meals",
        booking_step3_title: "Step 3: Choose Dates",
        booking_checkin: "Check-in Date", booking_checkout: "Check-out Date",
        booking_summary: "Booking Summary", booking_package_lbl: "Package:", booking_nights_lbl: "Number of Nights:",
        booking_price_lbl: "Daily Price:", booking_total_lbl: "Total:",
        booking_step4_title: "Step 4: Confirm Booking",
        booking_owner_title: "Owner Information",
        booking_owner_name: "Owner Name", booking_owner_name_ph: "Enter your name",
        booking_owner_email: "Email", booking_owner_email_ph: "Enter your email",
        booking_owner_phone: "Phone Number", booking_owner_phone_ph: "Enter your phone number",
        booking_terms_title: "Terms & Conditions",
        booking_terms_text: "I agree to Loving Homes terms, conditions and privacy policy",
        booking_confirm_btn: "Confirm Booking",
        booking_classic_pkg: "Classic Package", booking_nights_val: "3 Nights",

        // ========== صفحة التواصل ==========
        contact_title: "Contact Us", contact_info_title: "Contact Information",
        contact_phone_title: "📞 Phone", contact_phone_hours: "Available from 9 AM to 6 PM",
        contact_email_title: "📧 Email", contact_email_reply: "We will reply within 24 hours",
        contact_address_title: "📍 Address", contact_address1: "123 Pet Street", contact_address2: "Hong Kong",
        contact_hours_title: "🕐 Working Hours",
        contact_hours1: "Monday - Friday: 9:00 - 18:00", contact_hours2: "Saturday: 10:00 - 16:00", contact_hours3: "Sunday: Closed",
        contact_form_title: "Send Us a Message",
        contact_name: "Name", contact_name_ph: "Enter your name",
        contact_email: "Email", contact_email_ph: "Enter your email",
        contact_phone: "Phone", contact_phone_ph: "Enter your phone number",
        contact_subject: "Subject", contact_subject_ph: "Message subject",
        contact_message: "Message", contact_message_ph: "Write your message here...",
        contact_send_btn: "Send Message", contact_map_title: "Our Location on the Map",

        // ========== الأسئلة الشائعة ==========
        faq_title: "Frequently Asked Questions",
        faq_q1: "Will my pet be safe at Loving Homes?",
        faq_a1: "Yes, absolutely! We provide a 100% safe environment with round-the-clock monitoring.",
        faq_q2: "How much does booking cost?",
        faq_a2: "We have three packages: Day Package (HKD 250), Classic (HKD 450), Premium (HKD 750).",
        faq_q3: "Can I get daily updates about my pet?",
        faq_a3: "Yes! We send daily photos and updates for every animal.",
        faq_q4: "Do you provide medical services?",
        faq_a4: "Yes, we have a team of specialized veterinarians.",
        faq_q5: "How do I book a spot for my pet?",
        faq_a5: 'Easily book through our website. Click "Book Now", choose the date and package.',
        faq_q6: "Do you accept all types of pets?",
        faq_a6: "Yes! We accept dogs, cats, and other pets.",
        faq_q7: "Do you provide transportation service?",
        faq_a7: "Yes! Free transportation to specific areas.",
        faq_q8: "What is the cancellation policy?",
        faq_a8: "Cancel 48 hours before without any fees.",

        // ========== الأسعار ==========
        pricing_title: "Packages & Pricing", pricing_subtitle: "Choose the right package for your pet",
        pkg1_name: "Day Package", pkg1_sub: "Day Care", pkg1_desc: "Daily care during work hours",
        pkg1_f1: "✓ 2 walks daily", pkg1_f2: "✓ Outdoor play area",
        pkg1_f3: "✓ Agility track", pkg1_f4: "✓ Sand digging",
        pkg1_f5: "", pkg1_f6: "",
        pkg2_badge: "Best", pkg2_name: "Classic Package", pkg2_sub: "Classic Package",
        pkg2_desc: "The first and best package for a comfortable stay",
        pkg2_f1: "✓ 3 walks daily", pkg2_f2: "✓ Indoor play kennel",
        pkg2_f3: "✓ Relaxation area", pkg2_f4: "✓ Grooming & cleaning session",
        pkg2_f5: "", pkg2_f6: "",
        pkg3_name: "Premium Package", pkg3_sub: "Premium Package",
        pkg3_desc: "A luxurious experience with premium services",
        pkg3_f1: "✓ 4 walks daily", pkg3_f2: "✓ Private grass area",
        pkg3_f3: "✓ Daily updates & photos", pkg3_f4: "✓ Rewards as agreed",
        pkg3_f5: "", pkg3_f6: "",
        pricing_day: "/day", pricing_night: "/night",
        comparison_title: "Comprehensive Comparison Table",
        comp_service: "Service", comp_day: "Day Package", comp_classic: "Classic", comp_premium: "Premium",
        comp_r1: "Supervisor & Meals", comp_r2: "Private Room", comp_r3: "24/7 Monitoring", comp_r4: "Additional Services", comp_free: "✓ Free",
        extras_title: "Additional Services", extras_desc: "We offer customized options for your pet's special needs:",
        extra1: "🚗 Additional Transportation Service (daily) - HKD 150",
        extra2: "💇 Grooming & Cleaning Service - HKD 200",
        extra3: "🎂 Special Custom Meals - HKD 100",
        extra4: "📸 Professional Photo Session - HKD 300",

        // ========== صفحة الخدمات ==========
        services_page_title: "Our Premium Services",
        services_page_subtitle: "We offer a comprehensive range of advanced services for your pet's care",
        srv_detail1_title: "✨ Grooming Salon & Spa",
        srv_detail1_desc: "Professional grooming services including bathing, trimming, nail cutting, and ear cleaning.",
        srv_detail1_f1: "✓ Luxury bath with high-quality products", srv_detail1_f2: "✓ Professional haircut",
        srv_detail1_f3: "✓ Relaxing massage", srv_detail1_f4: "✓ Nail and ear care",
        srv_detail2_title: "💇 Fully Equipped Luxury Rooms",
        srv_detail2_desc: "Comfortable rooms with underfloor heating/cooling, TV, and luxury beds.",
        srv_detail2_f1: "✓ Temperature control", srv_detail2_f2: "✓ TV with calming programs",
        srv_detail2_f3: "✓ Comfortable medical beds", srv_detail2_f4: "✓ Windows with natural views",
        srv_detail3_title: "🚗 Transportation Service To & From",
        srv_detail3_desc: "Safe and reliable transportation from your home to our hotel and back.",
        srv_detail3_f1: "✓ Air-conditioned and comfortable vehicles", srv_detail3_f2: "✓ Trained and friendly drivers",
        srv_detail3_f3: "✓ Safe and quick transportation", srv_detail3_f4: "✓ Regular daily service",
        srv_detail4_title: "⚕️ 24/7 Veterinary Services",
        srv_detail4_desc: "Specialized veterinary care available around the clock for any emergency.",
        srv_detail4_f1: "✓ Specialized veterinary team", srv_detail4_f2: "✓ Fully equipped clinic",
        srv_detail4_f3: "✓ Immediate emergency care", srv_detail4_f4: "✓ Regular medical follow-up",
        srv_detail5_title: "📱 Daily Monitoring & Updates",
        srv_detail5_desc: "Round-the-clock surveillance cameras and daily updates with photos.",
        srv_detail5_f1: "✓ High-resolution surveillance cameras", srv_detail5_f2: "✓ Daily updates with photos",
        srv_detail5_f3: "✓ Detailed activity reports", srv_detail5_f4: "✓ Instant notifications when needed",
        srv_detail6_title: "🌳 Safe Outdoor Meadows",
        srv_detail6_desc: "Wide and safe spaces for playing, running, and enjoying fresh air.",
        srv_detail6_f1: "✓ Wide green spaces", srv_detail6_f2: "✓ Safe and strong fences",
        srv_detail6_f3: "✓ Shaded and safe areas", srv_detail6_f4: "✓ Continuous supervision during play",
        srv_cta_title: "Ready to Experience Our Services?",
        srv_cta_subtitle: "Book now and get 10% off your first booking",

        // ========== آراء العملاء ==========
        test_title: "Customer Testimonials", test_subtitle: "Listen to what our satisfied customers say",
        test_stats_title: "Customer Satisfaction Statistics",
        test_stat1: "Customer Satisfaction Rate", test_stat2: "Satisfied Pets", test_stat3: "Years of Experience",
        test_r1_text: "Best experience! My pet came back very happy. The team is very professional.",
        test_r1_name: "Sara Ahmed", test_r1_role: "Golden Retriever Owner",
        test_r2_text: "Excellent service! The daily photos make me feel at ease.",
        test_r2_name: "Mohammed Khaled", test_r2_role: "Labrador Owner",
        test_r3_text: "The medical care is excellent and the facilities are very clean.",
        test_r3_name: "Ayal Hassan", test_r3_role: "Shih Tzu Owner",
        test_r4_text: "Amazing hotel! The staff treat our animals with love and care.",
        test_r4_name: "Fatima Ali", test_r4_role: "Two Cats Owner",
        test_r5_text: "Great services and very reasonable prices.",
        test_r5_name: "Omar Mahmoud", test_r5_role: "Bully Dog Owner",
        test_r6_text: "Best choice! The team is specialized and facilities are very modern.",
        test_r6_name: "Layla Hussein", test_r6_role: "Husky Owner",
    }
};

// ==================== STATE (حالة التطبيق) ====================
// متغيرات نحفظ فيها الإعدادات الحالية للمستخدم
// localStorage يحفظها حتى بعد إغلاق المتصفح

let currentLanguage = localStorage.getItem('language') || 'ar';  // اللغة المحفوظة أو العربية افتراضياً
let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 100; // حجم الخط المحفوظ أو 100% افتراضياً

// ==================== INITIALIZATION (تشغيل الكود عند تحميل الصفحة) ====================
document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLanguage);     // تطبيق اللغة المحفوظة
    applyFontSize(currentFontSize);     // تطبيق حجم الخط المحفوظ
    createControlPanel();               // إنشاء لوحة التحكم
    updateLanguageButton();             // تحديث نص زر اللغة
});

// ==================== CONTROL PANEL (إنشاء لوحة التحكم) ====================
// هذه الدالة تنشئ الشريط العلوي بزر اللغة وأزرار حجم الخط وتضيفه للصفحة
function createControlPanel() {
    // إنشاء div جديد للوحة التحكم
    const controlPanel = document.createElement('div');
    controlPanel.className = 'control-panel';

    // الـ HTML الداخلي للوحة
    controlPanel.innerHTML = `
        <div class="control-panel-content">
            <!-- زر تبديل اللغة - يعرض اللغة الأخرى -->
            <button id="language-toggle" class="control-btn language-btn" title="تبديل اللغة / Toggle Language">
                ${translations[currentLanguage].language_btn}
            </button>
            <!-- مجموعة أزرار حجم الخط -->
            <div class="font-size-controls">
                <button id="font-decrease" class="control-btn font-btn" title="تصغير الخط">A−</button>
                <span class="font-size-label">${currentFontSize}%</span>
                <button id="font-increase" class="control-btn font-btn" title="تكبير الخط">A+</button>
            </div>
        </div>
    `;

    // إدراج اللوحة في بداية الـ body (قبل كل المحتوى)
    document.body.insertBefore(controlPanel, document.body.firstChild);

    // ربط الأحداث (Event Listeners) بالأزرار
    document.getElementById('language-toggle').addEventListener('click', toggleLanguage);
    document.getElementById('font-decrease').addEventListener('click', decreaseFont);
    document.getElementById('font-increase').addEventListener('click', increaseFont);
}

// ==================== LANGUAGE TOGGLE (تبديل اللغة) ====================
// تتبدل بين العربية والإنجليزية وتحفظ الاختيار
function toggleLanguage() {
    // إذا كانت العربية، انتقل للإنجليزية وبالعكس
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLanguage); // حفظ الاختيار
    applyLanguage(currentLanguage);    // تطبيق اللغة الجديدة
    updateLanguageButton();             // تحديث نص الزر
}

// ==================== APPLY LANGUAGE (تطبيق اللغة على الصفحة) ====================
// تمشي على كل عنصر له data-i18n وتبدل نصه بالترجمة المناسبة
function applyLanguage(lang) {
    // تغيير اتجاه الصفحة (RTL للعربية، LTR للإنجليزية)
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[lang]; // اختصار للوصول للترجمات

    // ترجمة كل عنصر له attribute اسمه data-i18n
    // مثال: <h1 data-i18n="nav_home">الرئيسية</h1>
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n'); // اسم المفتاح في القاموس
        if (t[key] !== undefined) el.innerHTML = t[key]; // تبديل النص
    });

    // ترجمة الـ placeholder لحقول الإدخال
    // مثال: <input data-i18n-placeholder="booking_pet_name_ph">
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
}

// ==================== UPDATE LANGUAGE BUTTON (تحديث نص زر اللغة) ====================
function updateLanguageButton() {
    const btn = document.getElementById('language-toggle');
    // يعرض اللغة الأخرى (عربي يعرض English، وإنجليزي يعرض العربية)
    if (btn) btn.textContent = translations[currentLanguage].language_btn;
}

// ==================== FONT SIZE CONTROLS (التحكم بحجم الخط) ====================

// تصغير حجم الخط (الحد الأدنى 80%)
function decreaseFont() {
    if (currentFontSize > 80) {
        currentFontSize -= 10;                              // تصغير بـ 10%
        applyFontSize(currentFontSize);
        localStorage.setItem('fontSize', currentFontSize); // حفظ الإعداد
        updateFontSizeDisplay();                            // تحديث الرقم المعروض
    }
}

// تكبير حجم الخط (الحد الأقصى 150%)
function increaseFont() {
    if (currentFontSize < 150) {
        currentFontSize += 10;                              // تكبير بـ 10%
        applyFontSize(currentFontSize);
        localStorage.setItem('fontSize', currentFontSize);
        updateFontSizeDisplay();
    }
}

// تطبيق حجم الخط على كامل الصفحة عبر تغيير font-size على الـ html
// كل القيم المعتمدة على rem ستتأثر تلقائياً
function applyFontSize(size) {
    document.documentElement.style.fontSize = (size / 100) * 16 + 'px';
}

// تحديث الرقم المعروض في لوحة التحكم (مثلاً: 100%)
function updateFontSizeDisplay() {
    const d = document.querySelector('.font-size-label');
    if (d) d.textContent = currentFontSize + '%';
}

// ==================== HAMBURGER MENU (قائمة الموبايل) ====================
// فتح/إغلاق قائمة التنقل على الموبايل عند الضغط على الـ hamburger
document.querySelector('.hamburger')?.addEventListener('click', function() {
    const menu = document.querySelector('.nav-menu');
    if (menu) menu.classList.toggle('active'); // إضافة/إزالة class "active"
});

// إغلاق القائمة عند الضغط على أي رابط فيها
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.nav-menu');
        if (menu) menu.classList.remove('active');
    });
});

console.log('✅ Loving Homes v2.0 - Full i18n + Comments');

// ==================== AUDIO FEEDBACK (المؤثرات الصوتية) ====================
// نظام أصوات خفيفة عند التفاعل مع الموقع - قابل للتشغيل والإيقاف

// قراءة إعداد الصوت من localStorage (افتراضياً مشغّل)
let audioEnabled = localStorage.getItem('audioEnabled') !== 'false';

// إنشاء سياق صوتي (Web Audio API) - يُستخدم لتوليد الأصوات برمجياً
function createAudioContext() {
    try {
        return new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) {
        return null; // إذا لم يدعم المتصفح الـ Audio API
    }
}

// تشغيل صوت حسب النوع المطلوب
// type: 'click' - نقرة بسيطة، 'success' - لحن نجاح، 'message' - رسالة
function playSound(type) {
    if (!audioEnabled) return; // لا تشغل إذا الصوت مغلق

    const ctx = createAudioContext();
    if (!ctx) return;

    // Oscillator: مولد موجة صوتية
    const osc = ctx.createOscillator();
    // GainNode: للتحكم بمستوى الصوت (fade in/out)
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'click') {
        // نغمة قصيرة وخفيفة عند النقر
        osc.frequency.setValueAtTime(880, ctx.currentTime); // تردد 880 Hz
        gain.gain.setValueAtTime(0.06, ctx.currentTime);    // حجم خفيف جداً
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08); // خفوت سريع
        osc.start();
        osc.stop(ctx.currentTime + 0.08);

    } else if (type === 'success') {
        // لحن صاعد من 3 نغمات عند نجاح عملية
        [523, 659, 784].forEach((freq, i) => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g);
            g.connect(ctx.destination);
            o.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12); // كل نغمة بعد 120ms
            g.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.12);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.15);
            o.start(ctx.currentTime + i * 0.12);
            o.stop(ctx.currentTime + i * 0.12 + 0.15);
        });

    } else if (type === 'message') {
        // صوت تنبيه رسالة (تردد يصعد قليلاً)
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(550, ctx.currentTime + 0.06); // تصاعد بسيط
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
    }
}

// إنشاء زر تشغيل/إيقاف الصوت في الزاوية السفلى اليمنى
function initAudioToggle() {
    const btn = document.createElement('button');
    btn.className = 'audio-toggle-btn' + (audioEnabled ? '' : ' muted');
    btn.title = 'تشغيل/إيقاف الأصوات';
    btn.innerHTML = audioEnabled ? '🔊' : '🔇';

    btn.addEventListener('click', () => {
        audioEnabled = !audioEnabled;                                   // عكس الحالة
        localStorage.setItem('audioEnabled', audioEnabled);            // حفظ الإعداد
        btn.innerHTML = audioEnabled ? '🔊' : '🔇';                    // تحديث الأيقونة
        btn.classList.toggle('muted', !audioEnabled);                  // إضافة/إزالة class مغلق
        if (audioEnabled) playSound('click');                          // صوت تأكيد عند التشغيل
    });

    document.body.appendChild(btn);

    // إضافة صوت نقرة لكل أزرار الموقع تلقائياً
    document.addEventListener('click', (e) => {
        if (e.target.matches('button, .btn, .btn-book, .cta-btn, .quick-reply-btn')) {
            playSound('click');
        }
    });
}

// ==================== AI CHATBOT (الشات بوت الذكي) ====================
// نظام دردشة يجيب على الأسئلة الشائعة عن الموقع

// قاعدة معرفة الشات بوت: كلمات مفتاحية + ردود محددة
const chatbotKnowledge = {

    // الكلمات المحفزة لكل موضوع
    triggers: {
        price:    ['سعر','تكلفة','كم','تسعير','اسعار','هكد','hkd'],
        booking:  ['حجز','أحجز','احجز','book','كيف أحجز'],
        services: ['خدمات','ايش','شو','خدمة','تقدمون'],
        transport:['توصيل','نقل','مواصلات','سيارة'],
        medical:  ['طبي','بيطري','دكتور','صحة','مرض'],
        hours:    ['وقت','ساعات','متى','متاح'],
        cancel:   ['إلغاء','الغاء','كنسل'],
        hello:    ['مرحبا','هلا','هاي','أهلا','السلام'],
        photos:   ['صور','فيديو','تحديثات','أشوف'],
        safety:   ['آمن','أمان','أطمن','أضمن'],
    },

    // الردود المقابلة لكل موضوع
    responses: {
        price:    '💰 لدينا 3 حزم:\n• حزمة اليوم: HKD 250/يوم\n• الكلاسيكية: HKD 450/ليلة\n• المميزة: HKD 750/ليلة\n\nكمان في خدمات إضافية مثل التوصيل والتصوير 😊',
        booking:  '📅 الحجز سهل جداً!\n1. اضغط على "احجز الآن"\n2. أدخل بيانات حيوانك\n3. اختر الحزمة والتواريخ\n4. أكمل بيانات الدفع\n\nهل تريد مساعدة في خطوة معينة؟',
        services: '🌟 خدماتنا تشمل:\n• 🍖 وجبات صحية متخصصة\n• 🛏️ غرف فاخرة مجهزة\n• 🚗 خدمة التوصيل\n• ⚕️ رعاية بيطرية 24/7\n• 📱 تحديثات ومتابعة يومية\n• 🌳 مساحات خضراء للعب',
        transport:'🚗 نعم! نقدم خدمة توصيل آمنة.\n• المناطق القريبة: مجاني\n• المناطق البعيدة: HKD 150 إضافية',
        medical:  '⚕️ لدينا فريق بيطري متخصص متاح 24/7!\n• فحوصات دورية روتينية\n• رعاية طارئة فورية\n• عيادة مجهزة بالكامل',
        hours:    '🕐 ساعات العمل:\n• الاثنين - الجمعة: 9:00 - 18:00\n• السبت: 10:00 - 16:00\n• الأحد: مغلق\n\nلكن الرعاية متوفرة للحيوانات 24/7!',
        cancel:   '📋 سياسة الإلغاء:\n• قبل 48 ساعة: مجاني 100%\n• بعد 48 ساعة: قد تطبق رسوم',
        hello:    '👋 أهلاً وسهلاً! أنا مساعد Loving Homes الذكي 🐾\n\nكيف يمكنني مساعدتك اليوم؟',
        photos:   '📸 بالتأكيد! نرسل صوراً وفيديوهات يومية لحيوانك.\nكمان لوحة التتبع المباشر تتيح لك رؤية حالة حيوانك.',
        safety:   '🔒 حيوانك في أمان تام!\n• مراقبة بالكاميرا 24/7\n• طاقم متخصص دائماً موجود\n• رعاية طبية فورية',
        default:  'شكراً لسؤالك! 😊\n\nللحصول على إجابة أدق:\n📞 +852 1234 5678\n📧 info@loving-homes.hk'
    },

    // أزرار الردود السريعة
    quickReplies: ['💰 الأسعار', '📅 كيف أحجز؟', '🚗 خدمة التوصيل', '⚕️ الرعاية الطبية', '📸 صور يومية']
};

// دالة للكشف عن نية المستخدم من رسالته
function detectIntent(msg) {
    const lower = msg.toLowerCase(); // تحويل للحروف الصغيرة للمقارنة
    for (const [intent, words] of Object.entries(chatbotKnowledge.triggers)) {
        // إذا وجدنا أي كلمة من الكلمات المحفزة في الرسالة
        if (words.some(w => lower.includes(w))) return intent;
    }
    return 'default'; // رد افتراضي إذا لم يتعرف على الموضوع
}

// إنشاء وتفعيل نافذة الشات بوت
function initChatbot() {
    // --- إنشاء زر الفتح/الإغلاق ---
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'chatbot-toggle';
    toggleBtn.innerHTML = '🐾';
    toggleBtn.title = 'تحدث مع مساعدنا الذكي';

    // --- إنشاء نافذة الدردشة ---
    const chatWin = document.createElement('div');
    chatWin.className = 'chatbot-window';
    chatWin.innerHTML = `
        <!-- رأس النافذة -->
        <div class="chatbot-header">
            <div class="chatbot-header-avatar">🐾</div>
            <div class="chatbot-header-info">
                <h4>مساعد Loving Homes</h4>
                <p>🟢 متاح الآن • يرد فوراً</p>
            </div>
            <button class="chatbot-close">✕</button>
        </div>
        <!-- منطقة الرسائل -->
        <div class="chatbot-messages" id="chatMessages">
            <!-- رسالة ترحيب افتراضية من البوت -->
            <div class="chat-msg bot">
                <div class="avatar">🤖</div>
                <div class="chat-bubble">أهلاً وسهلاً! 👋 أنا مساعد Loving Homes الذكي. كيف يمكنني مساعدتك؟</div>
            </div>
        </div>
        <!-- أزرار الردود السريعة -->
        <div class="quick-replies" id="quickReplies">
            ${chatbotKnowledge.quickReplies.map(r => `<button class="quick-reply-btn">${r}</button>`).join('')}
        </div>
        <!-- مربع إدخال الرسالة -->
        <div class="chatbot-input-area">
            <input class="chatbot-input" id="chatInput" type="text" placeholder="اكتب رسالتك هنا...">
            <button class="chatbot-send" id="chatSend">➤</button>
        </div>
    `;

    // إضافة العناصر للصفحة
    document.body.appendChild(toggleBtn);
    document.body.appendChild(chatWin);

    // --- فتح/إغلاق النافذة بالزر ---
    toggleBtn.addEventListener('click', () => {
        chatWin.classList.toggle('open');
        playSound('click');
        toggleBtn.innerHTML = chatWin.classList.contains('open') ? '✕' : '🐾';
    });

    // إغلاق بزر الـ X داخل النافذة
    chatWin.querySelector('.chatbot-close').addEventListener('click', () => {
        chatWin.classList.remove('open');
        toggleBtn.innerHTML = '🐾';
    });

    // --- دالة إرسال الرسالة ومعالجتها ---
    function sendMsg(text) {
        const msgs = document.getElementById('chatMessages');
        const qr = document.getElementById('quickReplies');

        // إضافة رسالة المستخدم
        msgs.innerHTML += `<div class="chat-msg user"><div class="avatar">👤</div><div class="chat-bubble">${text}</div></div>`;
        qr.style.display = 'none'; // إخفاء الردود السريعة أثناء الكتابة

        // إضافة مؤشر "يكتب..."
        msgs.innerHTML += `<div class="chat-msg bot" id="typingIndicator"><div class="avatar">🤖</div><div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div></div>`;
        msgs.scrollTop = msgs.scrollHeight; // التمرير للأسفل تلقائياً
        playSound('message');

        // بعد تأخير عشوائي (محاكاة وقت التفكير)
        setTimeout(() => {
            document.getElementById('typingIndicator')?.remove(); // إزالة المؤشر
            const intent = detectIntent(text);                     // تحديد موضوع السؤال
            const reply = chatbotKnowledge.responses[intent];      // إيجاد الرد المناسب
            msgs.innerHTML += `<div class="chat-msg bot"><div class="avatar">🤖</div><div class="chat-bubble">${reply.replace(/\n/g,'<br>')}</div></div>`;
            msgs.scrollTop = msgs.scrollHeight;
            playSound('message');
            qr.style.display = 'flex'; // إعادة إظهار الردود السريعة
        }, 1000 + Math.random() * 500); // تأخير بين 1 و 1.5 ثانية
    }

    // إرسال بزر الإرسال
    document.getElementById('chatSend').addEventListener('click', () => {
        const inp = document.getElementById('chatInput');
        if (inp.value.trim()) { sendMsg(inp.value.trim()); inp.value = ''; }
    });

    // إرسال بضغط Enter
    document.getElementById('chatInput').addEventListener('keydown', e => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            sendMsg(e.target.value.trim());
            e.target.value = '';
        }
    });

    // إرسال الردود السريعة عند النقر عليها
    document.getElementById('quickReplies').addEventListener('click', e => {
        if (e.target.classList.contains('quick-reply-btn')) sendMsg(e.target.textContent);
    });
}

// ==================== PET TRACKER (لوحة تتبع الحيوان) ====================
// تحقن قسم HTML كاملاً قبل قسم الـ CTA في الصفحة الرئيسية

function injectPetTracker() {
    const trackerHTML = `
    <section class="tracker-section">
        <div class="container">
            <!-- عنوان القسم -->
            <div class="tracker-header">
                <h2>📍 تتبع حيوانك الأليف مباشرة</h2>
                <p>لوحة تحكم شخصية لمتابعة حيوانك لحظة بلحظة أثناء إقامته معنا</p>
            </div>
            <!-- لوحة التتبع الرئيسية -->
            <div class="tracker-dashboard">
                <!-- شريط معلومات الحيوان الأعلى -->
                <div class="tracker-top-bar">
                    <div class="tracker-pet-avatar">🐕</div>
                    <div class="tracker-pet-info">
                        <h3>ماكس - كلب جولدن ريتريفر</h3>
                        <p>يوم 2 من 5 • وصل: 7 مارس 2025</p>
                    </div>
                    <div class="tracker-status-badge">🟢 نشيط ومبسوط</div>
                </div>
                <!-- شبكة الإحصائيات الأربع -->
                <div class="tracker-grid">
                    <div class="tracker-stat"><div class="tracker-stat-icon">🍖</div><div class="tracker-stat-value">3/3</div><div class="tracker-stat-label">وجبات اليوم</div></div>
                    <div class="tracker-stat"><div class="tracker-stat-icon">🚶</div><div class="tracker-stat-value">2.4 كم</div><div class="tracker-stat-label">المشي اليوم</div></div>
                    <div class="tracker-stat"><div class="tracker-stat-icon">😴</div><div class="tracker-stat-value">6.5 س</div><div class="tracker-stat-label">وقت النوم</div></div>
                    <div class="tracker-stat"><div class="tracker-stat-icon">🎾</div><div class="tracker-stat-value">45 د</div><div class="tracker-stat-label">وقت اللعب</div></div>
                </div>
                <!-- جدول أنشطة اليوم (Timeline) -->
                <div class="tracker-timeline">
                    <h4>📋 جدول اليوم</h4>
                    <div class="timeline-items">
                        <!-- الأنشطة المنتهية (active) والقادمة (upcoming) -->
                        <div class="timeline-item"><div class="timeline-dot active">🌅</div><div class="timeline-info"><strong>الاستيقاظ والإفطار</strong><span>وجبة الصباح + ماء نظيف</span></div><div class="timeline-time">7:30 ص</div></div>
                        <div class="timeline-item"><div class="timeline-dot active">🚶</div><div class="timeline-info"><strong>جولة الصباح</strong><span>مشي 35 دقيقة في الحديقة</span></div><div class="timeline-time">9:00 ص</div></div>
                        <div class="timeline-item"><div class="timeline-dot active">🎾</div><div class="timeline-info"><strong>وقت اللعب</strong><span>لعب بالكرة مع المشرف</span></div><div class="timeline-time">11:00 ص</div></div>
                        <div class="timeline-item"><div class="timeline-dot active">😴</div><div class="timeline-info"><strong>قيلولة الظهر</strong><span>استراحة في الغرفة</span></div><div class="timeline-time">1:00 م</div></div>
                        <div class="timeline-item"><div class="timeline-dot upcoming">🍖</div><div class="timeline-info"><strong>وجبة العصر</strong><span>قادماً</span></div><div class="timeline-time">4:00 م</div></div>
                        <div class="timeline-item"><div class="timeline-dot upcoming">🌙</div><div class="timeline-info"><strong>جولة المساء والنوم</strong><span>قادماً</span></div><div class="timeline-time">6:30 م</div></div>
                    </div>
                </div>
                <!-- شريط صور اليوم -->
                <div class="tracker-photos">
                    <h4>📸 صور اليوم</h4>
                    <div class="photo-strip">
                        <!-- placeholder للصور (في الواقع ستكون صور حقيقية) -->
                        <div class="photo-thumb-placeholder">🐕</div>
                        <div class="photo-thumb-placeholder">🎾</div>
                        <div class="photo-thumb-placeholder">😴</div>
                        <div class="photo-thumb-placeholder">🌳</div>
                        <div class="photo-thumb-placeholder">🍖</div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

    // إدراج القسم قبل قسم الـ CTA مباشرةً
    const cta = document.querySelector('.cta-section');
    if (cta) cta.insertAdjacentHTML('beforebegin', trackerHTML);
}

// ==================== INIT ALL (تشغيل كل الميزات) ====================
// هذا الكود يعمل بعد تحميل كامل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initAudioToggle();   // زر الصوت

    initChatbot();       // الشات بوت

    // إضافة لوحة التتبع فقط إذا وجدنا قسم الـ CTA (أي في الصفحة الرئيسية)
    if (document.querySelector('.cta-section')) injectPetTracker();

    // إضافة صوت نجاح عند إرسال النماذج
    document.querySelectorAll('form').forEach(f => {
        f.addEventListener('submit', () => playSound('success'));
    });
});
