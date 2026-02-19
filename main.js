/**
 * Digital Marketing Personal Site
 * Language: Hebrew (default) / English
 * You can edit all text in the translations object below.
 */

const translations = {
  he: {
    logo: 'המותג שלי',
    nav_home: 'דף בית',
    nav_about: 'אודות',
    nav_services: 'שירותים',
    nav_blog: 'בלוג',
    hero_tag: 'שיווק דיגיטלי עם נשמה',
    hero_title: 'מגדילים נוכחות. בונים קשרים. מובילים תוצאות.',
    hero_desc: 'אני עוזרת לעסקים ולמותגים להצליח באונליין — מאסטרטגיה ועד תוכן, SEO וקמפיינים.',
    hero_cta: 'ראה שירותים',
    hero_cta2: 'הסיפור שלי',
    about_title: 'אודות',
    about_subtitle: 'הסיפור שלי בעולם הדיגיטל',
    about_lead: 'התחלתי את הדרך בעולם הטכנולוגיה והתוכן, ומשם התפתחתי לשיווק דיגיטלי ואסטרטגיה.',
    about_p1: 'אני מאמינה בשילוב בין כלים חכמים (כולל AI) לבין גישה אנושית — כך נוצרים קמפיינים שמדברים לאנשים אמיתיים ומביאים תוצאות.',
    about_p2: 'כאן תמצאו שירותים מותאמים: אסטרטגיה דיגיטלית, תוכן ו-SEO, ניהול רשתות ופרסום ממומן — הכל עם הליווי האישי שלי.',
    about_stat: 'ניסיון + גישה',
    about_stat_desc: 'טכנולוגיה עם מגע אישי',
    services_title: 'שירותים',
    services_subtitle: 'מה אני מציעה',
    service1_title: 'אסטרטגיה דיגיטלית',
    service1_desc: 'בניית תכנית שיווקית מותאמת, יעדים ומדידות להצלחה באונליין.',
    service2_title: 'תוכן ו-SEO',
    service2_desc: 'כתיבת תוכן איכותי, אופטימיזציה למנועי חיפוש ובלוג לבניית סמכות.',
    service3_title: 'רשתות חברתיות',
    service3_desc: 'ניהול פייסבוק, אינסטגרם ולינקדאין — פוסטים, סיפורים וקמפיינים.',
    service4_title: 'פרסום ממומן',
    service4_desc: 'קמפיינים ממוקדים (Meta, Google) עם תקציב חכם ומדידות ברורות.',
    blog_title: 'בלוג',
    blog_subtitle: 'טיפים, תובנות ו-SEO',
    blog1_date: 'פברואר 2025',
    blog1_title: 'איך להתחיל עם SEO בעברית',
    blog1_excerpt: 'צעדים ראשונים לאופטימיזציה למנועי חיפוש — מילות מפתח, מטא ותוכן.',
    blog2_date: 'ינואר 2025',
    blog2_title: 'AI בתוכן שיווקי — איך לשמור על קול אנושי',
    blog2_excerpt: 'שימוש בכלים חכמים בלי לאבד את המגע האישי עם הקהל.',
    blog3_date: 'דצמבר 2024',
    blog3_title: 'מדדים שחשוב לעקוב אחריהם בדיגיטל',
    blog3_excerpt: 'ROI, המרות, מעורבות — מה למדוד ולמה.',
    footer: '© כל הזכויות שמורות. נבנה עם טכנולוגיה ובעבודה ידנית.',
  },
  en: {
    logo: 'My Brand',
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_blog: 'Blog',
    hero_tag: 'Digital marketing with a human touch',
    hero_title: 'Grow presence. Build relationships. Drive results.',
    hero_desc: 'I help businesses and brands succeed online — from strategy to content, SEO and campaigns.',
    hero_cta: 'See services',
    hero_cta2: 'My story',
    about_title: 'About',
    about_subtitle: 'My story in the digital world',
    about_lead: 'I started in tech and content, and evolved into digital marketing and strategy.',
    about_p1: 'I believe in combining smart tools (including AI) with a human approach — so campaigns speak to real people and deliver results.',
    about_p2: 'Here you\'ll find tailored services: digital strategy, content and SEO, social media and paid advertising — all with my personal touch.',
    about_stat: 'Experience + approach',
    about_stat_desc: 'Technology with a personal touch',
    services_title: 'Services',
    services_subtitle: 'What I offer',
    service1_title: 'Digital strategy',
    service1_desc: 'Custom marketing plans, goals and metrics for online success.',
    service2_title: 'Content & SEO',
    service2_desc: 'Quality copy, search optimization and blog content for authority.',
    service3_title: 'Social media',
    service3_desc: 'Facebook, Instagram and LinkedIn — posts, stories and campaigns.',
    service4_title: 'Paid advertising',
    service4_desc: 'Focused campaigns (Meta, Google) with smart budget and clear metrics.',
    blog_title: 'Blog',
    blog_subtitle: 'Tips, insights and SEO',
    blog1_date: 'February 2025',
    blog1_title: 'How to get started with SEO in Hebrew',
    blog1_excerpt: 'First steps for search optimization — keywords, meta and content.',
    blog2_date: 'January 2025',
    blog2_title: 'AI in marketing content — keeping a human voice',
    blog2_excerpt: 'Using smart tools without losing the personal touch with your audience.',
    blog3_date: 'December 2024',
    blog3_title: 'Metrics that matter in digital',
    blog3_excerpt: 'ROI, conversions, engagement — what to measure and why.',
    footer: '© All rights reserved. Built with technology and a personal touch.',
  },
};

let currentLang = 'he';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  document.documentElement.lang = lang === 'he' ? 'he' : 'en';
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', lang === 'en');

  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) langSwitch.textContent = lang === 'he' ? 'EN' : 'עב';

  localStorage.setItem('site-lang', lang);
}

function initLangSwitch() {
  const saved = localStorage.getItem('site-lang');
  if (saved && (saved === 'he' || saved === 'en')) {
    applyLanguage(saved);
  }

  const btn = document.getElementById('langSwitch');
  if (btn) {
    btn.addEventListener('click', () => {
      applyLanguage(currentLang === 'he' ? 'en' : 'he');
    });
  }
}

function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('is-open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.remove('is-open'));
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLangSwitch();
  initMobileNav();
  initSmoothScroll();
});
