/**
 * Main Application Logic
 * TheToex Portfolio & Resume
 */

// Current state (Default to English)
let currentLang = localStorage.getItem('thetoex_lang') || 'en';

// Terminal simulation commands dictionary
const commandsData = {
    whoami: {
        en: "Toex | Infrastructure Engineer & Linux Advocate\n> Focus: Resilience, automation, containers, and distributed networks.",
        fa: "Toex | مهندس زیرساخت و عاشق لینوکس\n> تمرکز: پایداری، اتوماسیون، کانتینرها و شبکه‌های توزیع‌شده."
    },
    philosophy: {
        en: "\"Learning by building.\"\nRather than stockpiling guides, I build real setups that solve practical challenges.",
        fa: "«یادگیری با ساختن.»\nبه جای کلکسیون کردن آموزش‌های تئوری، سیستم‌های واقعی با نیاز ملموس می‌سازم."
    },
    skills: {
        en: "Docker • Kubernetes • Linux • Bash • Python • C • CI/CD • Cloudflare • Nginx • VPN • Ansible",
        fa: "Docker • Kubernetes • Linux • Bash • Python • C • CI/CD • Cloudflare • Nginx • VPN • Ansible"
    },
    uptime: {
        en: "up 24/7 | 0 downtime mindset | 100% committed to open-source innovation.",
        fa: "up 24/7 | ذهنیت پایداری کامل | ۱۰۰٪ متعهد به نوآوری در دنیای متن‌باز."
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initMobileNav();
    initScrollSpy();
    initSkillsFilter();
    initTerminalTabs();
    initScrollAnimations();
});

/**
 * Language Switcher Implementation
 */
function initLanguage() {
    setLanguage(currentLang);

    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'fa' : 'en';
            setLanguage(newLang);
        });
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('thetoex_lang', lang);

    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

    // Update Lang Switcher Button
    const langLabel = document.getElementById('current-lang-label');
    const langFlag = document.getElementById('current-lang-flag');
    if (langLabel) {
        // If current is English, button invites switching to Persian, and vice versa
        langLabel.textContent = lang === 'en' ? 'فارسی' : 'English';
    }
    if (langFlag) {
        langFlag.textContent = lang === 'en' ? '🇮🇷' : '🇬🇧';
    }

    // Apply translations
    applyTranslations(translations[lang]);

    // Instantly update terminal output to match new language
    updateTerminalLanguage(lang);
}

function applyTranslations(dict) {
    if (!dict) return;

    // Document title
    if (dict.pageTitle) {
        document.title = dict.pageTitle;
    }

    // Elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = getNestedValue(dict, key);
        if (val !== undefined && val !== null) {
            el.innerHTML = val;
        }
    });

    // Elements with data-i18n-title
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        const val = getNestedValue(dict, key);
        if (val !== undefined && val !== null) {
            el.setAttribute('title', val);
        }
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : undefined;
    }, obj);
}

/**
 * Mobile Navigation Menu
 */
function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !mobileMenu) return;

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.toggle('active');
        toggleBtn.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        });
    });

    // Close when clicking outside menu
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });
}

/**
 * Smooth Active Navigation Link Highlighting (ScrollSpy)
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 160;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

/**
 * Skills Category Filter
 */
function initSkillsFilter() {
    const filterBtns = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    if (!filterBtns.length || !skillCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 20);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
}

/**
 * Interactive Terminal Commands
 */
function initTerminalTabs() {
    const promptButtons = document.querySelectorAll('.terminal-cmd-trigger');
    const terminalOutput = document.getElementById('terminal-active-output');
    const terminalCommandSpan = document.getElementById('terminal-active-command');

    if (!promptButtons.length || !terminalOutput || !terminalCommandSpan) return;

    promptButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            promptButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cmd = btn.getAttribute('data-cmd');
            terminalCommandSpan.textContent = cmd;

            const resObj = commandsData[cmd];
            if (resObj) {
                terminalOutput.textContent = resObj[currentLang] || resObj.en;
            }
        });
    });

    // Run once on init to make sure output matches language
    updateTerminalLanguage(currentLang);
}

/**
 * Update Terminal Output when Language Changes
 */
function updateTerminalLanguage(lang) {
    const activeBtn = document.querySelector('.terminal-cmd-trigger.active');
    const terminalOutput = document.getElementById('terminal-active-output');
    if (!activeBtn || !terminalOutput) return;

    const cmd = activeBtn.getAttribute('data-cmd');
    const resObj = commandsData[cmd];
    if (resObj) {
        terminalOutput.textContent = resObj[lang] || resObj.en;
    }
}

/**
 * Copy to Clipboard Helper
 */
function copyText(text, btnElement, feedbackMsg = 'Copied!') {
    navigator.clipboard.writeText(text).then(() => {
        const originalContent = btnElement.innerHTML;
        btnElement.innerHTML = `<span class="copy-success-icon">✓</span> ${feedbackMsg}`;
        btnElement.classList.add('copied');

        setTimeout(() => {
            btnElement.innerHTML = originalContent;
            btnElement.classList.remove('copied');
        }, 2200);
    }).catch(err => {
        console.error('Clipboard copy error: ', err);
    });
}

/**
 * Scroll Reveal Animations
 */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}
