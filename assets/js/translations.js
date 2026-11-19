/**
 * Language Translations (Fa / En)
 * TheToex Portfolio & Resume
 */
const translations = {
    fa: {
        pageTitle: "توئکس | مهندس دواپس و متخصص زیرساخت لینوکس",
        nav: {
            about: "درباره من",
            skills: "مهارت‌ها",
            projects: "پروژه‌ها",
            contact: "ارتباط با من",
            donate: "حمایت مالی"
        },
        hero: {
            statusBadge: "آماده برای همکاری و پروژه‌های نوآورانه",
            greeting: "سلام، من",
            name: "توئکس هستم",
            role: "مهندس DevOps و متخصص سیستم‌های لینوکس",
            bio: "علاقه‌مند به اتوماسیون، لینوکس، کانتینرها و توسعه نرم‌افزار متن‌باز. به جای انباشتن آموزش‌های تئوری، سیستم‌های مقیاس‌پذیر و پایدار واقعی خلق می‌کنم.",
            btnContact: "ارتباط مستقیم",
            btnDonate: "حمایت مالی",
            btnGitHub: "پروفایل گیت‌هاب",
            terminalTitle: "toex@thetoex-box: ~",
            cmd1: "whoami",
            cmd1Res: "Toex | مهندس زیرساخت و عاشق لینوکس",
            cmd2: "cat philosophy.txt",
            cmd2Res: "یادگیری با ساختن؛ حل مسائل واقعی با راه‌حل‌های پایدار.",
            cmd3: "uptime",
            cmd3Res: "up 24/7 | تمرکز روی پایداری و خودکارسازی"
        },
        stats: {
            stat1Val: "۱۰۰٪",
            stat1Label: "رویکرد عملی و پروژه-محور",
            stat2Val: "متن‌باز",
            stat2Label: "تعهد به فلسفه Open Source",
            stat3Val: "CI/CD",
            stat3Label: "اتوماسیون زیرساخت و استقرار",
            stat4Val: "لینوکس",
            stat4Label: "معماری توزیع‌شده و کانتینر"
        },
        about: {
            badge: "شناخت بیشتر",
            title: "درباره مسیر و تجربیات من",
            p1: "من عاشق دنیای گنو/لینوکس، اتوماسیون، دواپس و فرهنگ کدهای متن‌باز هستم. معتقدم ارزش واقعی در دنیای فناوری زمانی خلق می‌شود که بتوان تئوری‌ها را به محصولاتی پایدار، امن و اتوماتیک تبدیل کرد.",
            p2: "به جای کلکسیون کردن دوره‌ها، پروژه‌های واقعی تعریف می‌کنم و با ابزارهای روز زیرساخت، تست و پیاده‌سازی می‌سازم. هر مخزن و کدی که منتشر می‌کنم، گامی در راستای درک عمیق‌تر سیستم‌عامل، شبکه و فرآیندهای توسعه است.",
            pillar1Title: "زیرساخت و اتوماسیون",
            pillar1Desc: "طراحی خطوط لوله CI/CD، مدیریت سرورها و خودکارسازی کارهای تکراری با بش و پایتون.",
            pillar2Title: "سیستم‌های لینوکس و هسته",
            pillar2Desc: "تسلط عمیق بر سیستم‌های لینوکس، مدیریت پروسس‌ها، سرویس‌های systemd و کانفیگ شبکه.",
            pillar3Title: "کانتینرسازی و کلاود",
            pillar3Desc: "ایزوله‌سازی سرویس‌ها با داکر و داکر کامپوز، آماده‌سازی برای مایکروسرویس‌ها و مدیریت کلاسترهای ابری.",
            pillar4Title: "شبکه و امنیت زیرساخت",
            pillar4Desc: "راه‌اندازی ریورس پروکسی‌ها، فایروال‌های مدرن، ابزارهای مدیریت ترافیک و سرویس‌های کلودفلر."
        },
        skills: {
            badge: "تخصص‌های فنی",
            title: "استک ابزارها و فناوری‌ها",
            subtitle: "مجموعه‌ای از ابزارها و زبان‌هایی که در پروژه‌ها و راه‌اندازی زیرساخت‌ها روزانه استفاده می‌کنم",
            categories: {
                all: "همه ابزارها",
                devops: "دواپس و کانتینر",
                linux: "لینوکس و سیستم",
                dev: "برنامه‌نویسی و اسکریپت",
                network: "شبکه و ابزارها"
            }
        },
        projects: {
            badge: "پروژه‌ها",
            title: "پروژه‌ها و مخازن گیت‌هاب",
            subtitle: "بخشی از پروژه‌های متن‌باز و ساختارهای اتوماسیونی که روی گیت‌هاب توسعه داده‌ام",
            viewOnGithub: "مشاهده در گیت‌هاب",
            viewAllBtn: "مشاهده تمامی ریپازیتوری‌ها در GitHub",
            p1Title: "TTun",
            p1Desc: "یک تونل لایه ۳ ساده تحت پروتکل TCP پیاده‌سازی شده با زبان C جهت فوروارد بسته‌های شبکه.",
            p1Tag: "C / Networking",
            p2Title: "wordpress-deployer",
            p2Desc: "استقرار خودکار و مطمئن وردپرس با استفاده از داکر کامپوز و سرویس‌های سیستمی systemd.",
            p2Tag: "Docker / Systemd"
        },
        donateCallout: {
            badge: "پشتیبانی مالی",
            title: "حمایت از پروژه‌ها و توسعه متن‌باز",
            desc: "اگر ابزارها و کدهای من برای شما مفید بوده است، می‌توانید با دونیت کریپتو یا قهوه از ادامه فعالیت‌های من حمایت کنید!",
            btnText: "ورود به صفحه دونیت",
            note: "پشتیبانی از شبکه‌های بیت‌کوین، تتر (TRC20) و درگاه‌های مختلف"
        },
        contact: {
            badge: "ارتباط و گفتگو",
            title: "همیشه آماده چت و تبادل ایده",
            subtitle: "برای همکاری تیمی، مشاوره دواپس، یا گفتگو درباره ایده‌های جالب از راه‌های زیر پیام دهید:",
            telegramCardTitle: "تلگرام",
            telegramDesc: "سریع‌ترین روش برای ارسال پیام و گفتگو",
            btnTelegram: "ارسال پیام در تلگرام",
            emailCardTitle: "پست الکترونیکی",
            emailDesc: "برای پیشنهادات رسمی و ارتباطات کاری",
            btnCopyEmail: "کپی ایمیل",
            btnOpenEmail: "ارسال ایمیل",
            githubCardTitle: "گیت‌هاب",
            githubDesc: "بررسی کدها، مشارکت در پروژه‌ها و پیگیری فعالیت‌ها",
            btnGithub: "پروفایل @TheToex",
            copiedMsg: "ایمیل کپی شد! ✅"
        },
        footer: {
            rights: "تمامی حقوق محفوظ است.",
            builtWith: "توسعه‌یافته با انگیزه، تمرکز و عشق به دنیای آزاد متن‌باز."
        }
    },
    en: {
        pageTitle: "TheToex | DevOps & Linux Infrastructure Engineer",
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            donate: "Donate"
        },
        hero: {
            statusBadge: "Available for Projects & Collaboration",
            greeting: "Hi, I'm",
            name: "TheToex",
            role: "DevOps & Linux Infrastructure Engineer",
            bio: "Passionate about Linux systems, infrastructure automation, containers, and open-source software. Instead of collecting theoretical tutorials, I build real-world, high-availability solutions.",
            btnContact: "Get In Touch",
            btnDonate: "Support My Work",
            btnGitHub: "GitHub Profile",
            terminalTitle: "toex@thetoex-box: ~",
            cmd1: "whoami",
            cmd1Res: "Toex | Infrastructure Engineer & Linux Advocate",
            cmd2: "cat philosophy.txt",
            cmd2Res: "Learning by building; solving real problems with robust solutions.",
            cmd3: "uptime",
            cmd3Res: "up 24/7 | Focused on stability and automation"
        },
        stats: {
            stat1Val: "100%",
            stat1Label: "Real-World Driven Approach",
            stat2Val: "Open Source",
            stat2Label: "Active Philosophy & Sharing",
            stat3Val: "CI/CD",
            stat3Label: "Infrastructure Automation",
            stat4Val: "Linux",
            stat4Label: "Systems & Distributed Tech"
        },
        about: {
            badge: "Get to know me",
            title: "My Journey & Philosophy",
            p1: "I am deeply passionate about Linux, DevOps, automation, and the open-source movement. I believe actual engineering value is created when technical depth is transformed into scalable, secure, and self-healing infrastructure.",
            p2: "Rather than passively accumulating guides, I build real setups that solve practical challenges. Every repository I craft represents hands-on learning through designing, testing, and continuous iteration.",
            pillar1Title: "Infrastructure & Automation",
            pillar1Desc: "Designing robust CI/CD pipelines, configuration management, and automating redundant operations with Bash & Python.",
            pillar2Title: "Linux Systems & Internals",
            pillar2Desc: "Deep familiarity with Linux systems, process scheduling, systemd unit crafting, and network tuning.",
            pillar3Title: "Containers & Cloud Native",
            pillar3Desc: "Architecting isolated environments with Docker & Docker Compose, gearing up for scalable microservices and orchestration.",
            pillar4Title: "Networking & Defense",
            pillar4Desc: "Configuring reverse proxies, modern firewalls, traffic routing, and Cloudflare perimeter protection."
        },
        skills: {
            badge: "Technical Arsenal",
            title: "Tech Stack & Tools",
            subtitle: "Technologies and tools I utilize daily to build and maintain resilient platforms",
            categories: {
                all: "All Tech",
                devops: "DevOps & Containers",
                linux: "Linux & Systems",
                dev: "Development & Scripting",
                network: "Network & Security"
            }
        },
        projects: {
            badge: "Highlights",
            title: "Featured Projects",
            subtitle: "Open-source networking tools and infrastructure automation setups",
            viewOnGithub: "View on GitHub",
            viewAllBtn: "Explore all repositories on GitHub",
            p1Title: "TTun",
            p1Desc: "A simple Layer 3 TCP tunnel written in C for network packet tunneling and routing.",
            p1Tag: "C / Networking",
            p2Title: "wordpress-deployer",
            p2Desc: "Automated WordPress deployment using Docker Compose and systemd service management.",
            p2Tag: "Docker / Systemd"
        },
        donateCallout: {
            badge: "Support",
            title: "Fuel Open Source Development",
            desc: "If any of my repositories, scripts, or setups have helped you, consider supporting my work with a coffee or crypto tip!",
            btnText: "Go to Donate Page",
            note: "Supports Bitcoin (BTC), Tether (USDT TRC20), and more"
        },
        contact: {
            badge: "Let's Connect",
            title: "Always Open to Discussion",
            subtitle: "Whether you want to discuss DevOps opportunities, infrastructure design, or open-source ideas, reach out:",
            telegramCardTitle: "Telegram",
            telegramDesc: "Fastest way to get in touch and chat directly",
            btnTelegram: "Message on Telegram",
            emailCardTitle: "Email Address",
            emailDesc: "For formal collaborations and technical inquiries",
            btnCopyEmail: "Copy Email",
            btnOpenEmail: "Send Email",
            githubCardTitle: "GitHub",
            githubDesc: "Inspect code, contribute, and track development activity",
            btnGithub: "Visit @TheToex",
            copiedMsg: "Email copied! ✅"
        },
        footer: {
            rights: "All rights reserved.",
            builtWith: "Engineered with passion, focus, and love for open-source tech."
        }
    }
};
