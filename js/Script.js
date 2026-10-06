/* ==========================================================================
   Nexa Digital — Main Script
   Modular vanilla JS: theme, language, RTL, menu, counters, form
   ========================================================================== */

/* ----------------------------- Translations ----------------------------- */
const translations = {
  en: {
    nav_home: "Home", nav_services: "Services", nav_about: "About",
    nav_projects: "Projects", nav_testimonials: "Testimonials", nav_contact: "Contact",

    hero_badge: "✦ Innovative Digital Agency",
    hero_title: 'We Build <span class="gradient-text">Digital Products</span> That Move Business Forward',
    hero_sub: "From concept to launch, Nexa Digital delivers scalable software, modern web experiences, and design systems that help ambitious teams ship faster and grow smarter.",
    hero_cta1: "Start a Project", hero_cta2: "View Our Work",
    hero_stat1: "Projects Delivered", hero_stat2: "Client Retention", hero_stat3: "Countries Served",

    services_eyebrow: "What We Do",
    services_title: "Services Built for Modern Teams",
    services_sub: "End-to-end capabilities that take your product from idea to impact.",
    srv1_title: "Web Development", srv1_desc: "Fast, accessible, and SEO-friendly web apps built with modern standards.",
    srv2_title: "Mobile Apps", srv2_desc: "Cross-platform iOS and Android apps with native-grade performance.",
    srv3_title: "UI / UX Design", srv3_desc: "Human-centered interfaces that turn visitors into loyal customers.",
    srv4_title: "Cloud & DevOps", srv4_desc: "Scalable infrastructure, CI/CD pipelines, and 24/7 monitoring.",
    srv5_title: "Digital Marketing", srv5_desc: "Data-driven campaigns that grow reach and revenue.",
    srv6_title: "Cybersecurity", srv6_desc: "Audit, harden, and protect your digital assets from day one.",

    about_eyebrow: "Why Choose Us",
    about_title: "A Partner, Not Just a Vendor",
    about_desc: "We combine strategy, design, and engineering under one roof. That means fewer hand-offs, faster feedback loops, and a product that feels whole — not stitched together.",
    about_f1: "Senior team on every project",
    about_f2: "Transparent weekly reporting",
    about_f3: "Post-launch support included",
    about_f4: "Fixed scope. No surprises.",
    about_cta: "Talk to Us",
    about_card_title: "Launch in Weeks",
    about_card_desc: "Our battle-tested process gets MVPs into users' hands faster.",

    stats1: "Projects Completed", stats2: "Happy Clients",
    stats3: "Years Experience", stats4: "Team Members",

    proj_eyebrow: "Portfolio", proj_title: "Selected Projects",
    proj_sub: "A glimpse of what we've shipped for clients worldwide.",
    proj1_tag: "E-commerce", proj1_title: "Orbit Store", proj1_desc: "Headless commerce platform serving 40k+ monthly users.",
    proj2_tag: "HealthTech", proj2_title: "VitaCare App", proj2_desc: "Patient management system used in 30+ clinics.",
    proj3_tag: "FinTech", proj3_title: "PayFlow Dashboard", proj3_desc: "Real-time analytics for a global payments provider.",

    test_eyebrow: "Testimonials", test_title: "Loved by Founders & Teams",
    test1_text: '"Nexa Digital shipped our MVP in 6 weeks. Their process was clear, and the result exceeded expectations."',
    test1_name: "Sarah Mitchell", test1_role: "CEO, Orbit Store",
    test2_text: '"The most organized agency we\'ve worked with. Weekly demos kept everything on track."',
    test2_name: "Ahmed Khalid", test2_role: "CTO, VitaCare",
    test3_text: '"Their design system saved us months of work. Everything is consistent and scalable."',
    test3_name: "Layla Hassan", test3_role: "Head of Product, PayFlow",

    cta_title: "Ready to Build Something Great?",
    cta_desc: "Let's talk about your idea. Free 30-minute consultation, no strings attached.",
    cta_btn: "Book a Free Call",

    contact_eyebrow: "Contact", contact_title: "Let's Work Together",
    form_name: "Full Name", form_name_ph: "John Doe",
    form_email: "Email", form_email_ph: "john@example.com",
    form_subject: "Subject", form_subject_ph: "Project inquiry",
    form_message: "Message", form_message_ph: "Tell us about your project...",
    form_send: "Send Message",
    form_success: "✓ Thanks! We'll get back to you within 24 hours.",

    footer_desc: "Software & digital solutions for modern businesses.",
    footer_company: "Company", footer_contact: "Get in Touch",
    footer_available: "Available for freelance projects",
    footer_contact_via: "Contact me through the platform",
    footer_rights_short: "Nexa Digital. All rights reserved."
  },

  ar: {
    nav_home: "الرئيسية", nav_services: "خدماتنا", nav_about: "من نحن",
    nav_projects: "أعمالنا", nav_testimonials: "آراء العملاء", nav_contact: "تواصل معنا",

    hero_badge: "✦ وكالة رقمية مبتكرة",
    hero_title: 'نبني <span class="gradient-text">منتجات رقمية</span> تدفع أعمالك للأمام',
    hero_sub: "من الفكرة إلى الإطلاق، تقدّم Nexa Digital برمجيات قابلة للتوسع وتجارب ويب حديثة وأنظمة تصميم تساعد الفرق الطموحة على الإطلاق والنمو بذكاء.",
    hero_cta1: "ابدأ مشروعك", hero_cta2: "شاهد أعمالنا",
    hero_stat1: "مشروع منجز", hero_stat2: "نسبة ولاء العملاء", hero_stat3: "دولة نخدمها",

    services_eyebrow: "ما نقدمه",
    services_title: "خدمات مصممة للفرق الحديثة",
    services_sub: "قدرات متكاملة تنقل منتجك من الفكرة إلى التأثير.",
    srv1_title: "تطوير الويب", srv1_desc: "تطبيقات ويب سريعة وسهلة الوصول ومتوافقة مع SEO.",
    srv2_title: "تطبيقات الجوال", srv2_desc: "تطبيقات iOS و Android بأداء أصلي متعدد المنصات.",
    srv3_title: "تصميم UI / UX", srv3_desc: "واجهات تركز على الإنسان وتحوّل الزوار إلى عملاء أوفياء.",
    srv4_title: "السحابة و DevOps", srv4_desc: "بنية تحتية قابلة للتوسع وخطوط CI/CD ومراقبة على مدار الساعة.",
    srv5_title: "التسويق الرقمي", srv5_desc: "حملات مبنية على البيانات تنمّي الوصول والإيرادات.",
    srv6_title: "الأمن السيبراني", srv6_desc: "تدقيق وتحصين وحماية أصولك الرقمية من اليوم الأول.",

    about_eyebrow: "لماذا تختارنا",
    about_title: "شريك وليس مجرد مزوّد خدمة",
    about_desc: "نجمع الاستراتيجية والتصميم والهندسة تحت سقف واحد، ما يعني تسليمات أقل ونتائج أسرع ومنتجًا متكاملًا لا مُجمَّعًا.",
    about_f1: "فريق خبير في كل مشروع",
    about_f2: "تقارير أسبوعية شفافة",
    about_f3: "دعم ما بعد الإطلاق مشمول",
    about_f4: "نطاق ثابت. بلا مفاجآت.",
    about_cta: "تحدث معنا",
    about_card_title: "أطلق في أسابيع",
    about_card_desc: "عمليتنا المجرَّبة تُوصل الـ MVP للمستخدمين بشكل أسرع.",

    stats1: "مشروع مكتمل", stats2: "عميل سعيد",
    stats3: "سنوات خبرة", stats4: "عضو في الفريق",

    proj_eyebrow: "أعمالنا", proj_title: "مشاريع مختارة",
    proj_sub: "لمحة عن أعمالنا لعملاء حول العالم.",
    proj1_tag: "تجارة إلكترونية", proj1_title: "متجر Orbit", proj1_desc: "منصة تجارة إلكترونية تخدم أكثر من 40 ألف مستخدم شهريًا.",
    proj2_tag: "تقنية صحية", proj2_title: "تطبيق VitaCare", proj2_desc: "نظام إدارة مرضى مستخدم في أكثر من 30 عيادة.",
    proj3_tag: "تقنية مالية", proj3_title: "لوحة PayFlow", proj3_desc: "تحليلات فورية لمزوّد مدفوعات عالمي.",

    test_eyebrow: "آراء العملاء", test_title: "يحبنا المؤسسون والفرق",
    test1_text: '"أطلقت Nexa Digital الـ MVP في 6 أسابيع. كانت عمليتهم واضحة، والنتيجة تجاوزت التوقعات."',
    test1_name: "سارة ميتشل", test1_role: "الرئيس التنفيذي، Orbit Store",
    test2_text: '"أكثر وكالة منظمة تعاملنا معها. العروض الأسبوعية أبقت كل شيء على المسار."',
    test2_name: "أحمد خالد", test2_role: "المدير التقني، VitaCare",
    test3_text: '"نظام التصميم وفّر علينا شهورًا من العمل. كل شيء متسق وقابل للتوسع."',
    test3_name: "ليلى حسن", test3_role: "رئيسة المنتج، PayFlow",

    cta_title: "جاهز لبناء شيء عظيم؟",
    cta_desc: "لنتحدث عن فكرتك. استشارة مجانية 30 دقيقة، بدون التزام.",
    cta_btn: "احجز مكالمة مجانية",

    contact_eyebrow: "تواصل", contact_title: "لنعمل معًا",
    form_name: "الاسم الكامل", form_name_ph: "محمد أحمد",
    form_email: "البريد الإلكتروني", form_email_ph: "mohamed@example.com",
    form_subject: "الموضوع", form_subject_ph: "استفسار عن مشروع",
    form_message: "الرسالة", form_message_ph: "أخبرنا عن مشروعك...",
    form_send: "إرسال الرسالة",
    form_success: "✓ شكرًا! سنرد عليك خلال 24 ساعة.",

    footer_desc: "حلول برمجية ورقمية للشركات الحديثة.",
    footer_company: "الشركة", footer_contact: "تواصل معنا",
    footer_available: "متاح لمشاريع العمل الحر",
    footer_contact_via: "تواصل معي عبر المنصة",
    footer_rights_short: "Nexa Digital. جميع الحقوق محفوظة."
  }
};

/* ----------------------------- Storage Keys ----------------------------- */
const STORAGE = { theme: "nexa-theme", lang: "nexa-lang" };

/* ----------------------------- Theme Module ----------------------------- */
const Theme = (() => {
  const btn = document.getElementById("themeToggle");
  const icon = btn.querySelector("i");

  const apply = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    localStorage.setItem(STORAGE.theme, theme);
  };

  const init = () => {
    const saved = localStorage.getItem(STORAGE.theme);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    apply(saved || (prefersDark ? "dark" : "light"));
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      apply(current === "dark" ? "light" : "dark");
    });
  };

  return { init };
})();

/* --------------------------- Language Module ---------------------------- */
const Language = (() => {
  const btn = document.getElementById("langToggle");
  const label = document.getElementById("langLabel");

  const applyText = (lang) => {
    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });
  };

  const apply = (lang) => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
    label.textContent = lang === "ar" ? "EN" : "AR";
    applyText(lang);
    localStorage.setItem(STORAGE.lang, lang);
  };

  const init = () => {
    apply(localStorage.getItem(STORAGE.lang) || "en");
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("lang");
      apply(current === "ar" ? "en" : "ar");
    });
  };

  return { init };
})();

/* --------------------------- Navbar / Menu ------------------------------ */
const Navbar = (() => {
  const navbar  = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  /* Open or close the mobile menu.
     `open` controls both the drawer visibility and the body scroll lock. */
  const setMenuState = (open) => {
    navLinks.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.querySelector("i").className =
      open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };

  const init = () => {
    // Navbar gets a border/shadow once the user scrolls
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    });

    // Toggle button
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.contains("open");
      setMenuState(!isOpen);
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    // Close menu on Escape, and return focus to the toggle button
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navLinks.classList.contains("open")) {
        setMenuState(false);
        menuBtn.focus();
      }
    });
  };

  return { init };
})();

/* ----------------------------- Counters --------------------------------- */
const Counters = (() => {
  const animate = (el) => {
    const target = +el.dataset.counter;
    const duration = 1500;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };

  const init = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll("[data-counter]").forEach((el) => observer.observe(el));
  };

  return { init };
})();

/* ------------------------------ Contact --------------------------------- */
const Contact = (() => {
  const init = () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = document.documentElement.getAttribute("lang");
      status.textContent = translations[lang].form_success;
      form.reset();
      setTimeout(() => (status.textContent = ""), 5000);
    });
  };
  return { init };
})();

/* ------------------------------ Year ------------------------------------ */
const Year = (() => {
  const init = () => {
    const el = document.getElementById("currentYear");
    if (el) el.textContent = new Date().getFullYear();
  };
  return { init };
})();

/* ------------------------------- Boot ----------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  Theme.init();
  Language.init();
  Navbar.init();
  Counters.init();
  Contact.init();
  Year.init();
});