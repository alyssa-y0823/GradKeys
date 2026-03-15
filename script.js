// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Get package from URL parameter for contact form
const urlParams = new URLSearchParams(window.location.search);
const packageParam = urlParams.get('package');
const packageSelect = document.getElementById('package');

if (packageParam && packageSelect) {
    packageSelect.value = packageParam;
}

// Form handling (if using custom HTML form)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to your backend
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your interest! We will contact you within 24 hours.');

        // Reset form
        contactForm.reset();

        // In production, you would send this to your backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => {
        //     alert('Thank you for your interest! We will contact you within 24 hours.');
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     alert('There was an error submitting your form. Please try again or email us directly.');
        // });
    });
}

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with fade-in animation
document.querySelectorAll('.service-card, .trust-item, .pricing-card, .story-card, .resource-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Team member modal functionality
const isChinesePage = window.location.pathname.includes('/zh/');

const teamMembersEn = {
    1: {
        name: "Justin Chen",
        role: "Washington University in St. Louis",
        linkedin: "https://www.linkedin.com/in/hung-chi-chen-5b20b1347/",
        bio: `<p>Justin is a Computer Science student at Washington University in St. Louis and a recipient of the McKelvey School of Engineering Dean’s List. At WashU, he serves as a Teaching Assistant for Introduction to Computer Science and Introduction to Computer Engineering, teaching over 200 students through lectures and office hours. He is also entrusted with proctoring and grading midterm and final exams, and assignments, supporting courses totaling more than 800 students. In addition, he tutors college-level calculus and matrix algebra, with 81 percent of his students improving from the B range to an A.</p>
        <p>Justin began conducting research at National Taiwan University in high school, becoming the first student from his school to join the LOPE lab. In college, he collaborated with NTU PhD and master’s students to develop an AI framework for complex multi-step reasoning tasks. His team became the first AI research group to participate in the International Linguistics Olympiad.</p>
        <p>During high school, he served as Chair and Assistant Director of Yale Model United Nations Taiwan and competed on his school’s representative math and debate teams. In college, he serves as President of the WashU Badminton Club, leading over 150 members and spearheading Missouri’s first-ever national-level badminton tournament. He also serves as captain of the school’s Division I badminton team.</p>`
    },
    2: {
        name: "Alyssa Yang",
        role: "Duke University",
        linkedin: "https://www.linkedin.com/in/alyssayang143/",
        bio: `<p>Alyssa was admitted to 15+ universities, including Brown, Northwestern, Johns Hopkins, Georgia Tech, and Dartmouth. She is currently a sophomore at Duke University pursuing Computer Science major with a concentration in AI and Machine Learning, along with a minor in Neuroscience and a certificate in Innovation & Entrepreneurship. She ranked first in Wego International Department (薇閣國際部) over six years of middle and high school and graduated with the Taipei Mayor’s Award (市長獎). At Duke, she is on the Dean’s List at the Trinity College of Arts and Sciences, an honor awarded to the top 10% of the student body.</p>
        <p>Alyssa began tutoring SAT and TOEFL preparation, as well as providing college admissions counseling, in the summer following her high school graduation. Since then, her students have earned admission to top US universities, including the University of Virginia and Emory University.</p>`
    },
    3: {
        name: "Kathryn Tsai",
        role: "Johns Hopkins University",
        linkedin: "https://www.linkedin.com/in/kathryn-tsai-88a0a2266/",
        bio: `<p>Kathryn is currently a pre-med sophomore pursuing a degree in Chemical and Biomolecular Engineering with a minor in Financial Management and Accounting at Johns Hopkins University. Being a part of a world renowned research institution, she is currently working as an undergraduate research assistant investigating the role of cholesterol ester in obese patients with cases of heart failures. On campus, at the Whiting School of Engineering, she has been on the Dean’s List since her freshman year.</p>
        <p>Kathryn graduated from Taipei Wego Senior High as a straight-A student consistently on the high honor roll, with a keen interest in public speaking and biological engineering. Her model UN and speech career began in junior high, and she has participated, chaired, and hosted 40+ conferences both in Taiwan and internationally. She reached out and joined a pharmacology lab at National Taiwan University in her freshman year, where she collaboratively developed a cardiovascular disease biomechanistic cure over the past four years. At the same time, she served a crucial role in the wet lab in her school’s International Genetically Engineered Machine team for two consecutive years, winning medals both times.</p>
        <p>Kathryn’s tutoring experiences started in the very last year of high school, and she’s been tutoring a wide range of subjects, from standardised testings, Wego-specific STEM and humanities courses, to college counseling. Her students have received offers from the University of Michigan, half-ride scholarship from Case Western Reserve University, and more.</p>`
    },
    4: {
        name: "Esther Tsai",
        role: "University of Edinburgh",
        linkedin: "https://www.linkedin.com/in/esther-tsai-84443327b/",
        bio: `<p>Esther is a Business with Strategic Economics student at the University of Edinburgh Business School, and an incoming exchange student at the Wharton School of the University of Pennsylvania.</p>
        <p>She serves as a Team Lead at 180 Degrees Consulting Edinburgh, with two years of experience advising non-profit organizations and early-stage ventures. Esther is also a Hedging and Funding Coordinator at Prosper Social Finance, the UK’s first student-led ESG investment fund.</p>
        <p>Previously, she interned in the CTBC Bank Dealing Room, where she built a fixing-rate automation tool, contributed to stablecoin and digital asset strategy, and supported equity hedging and backtesting for equity-linked notes.</p>
        <p>As a Silver Medalist in the International Economics Olympiad and with over five years of experience in C++ and Python, she now applies her knowledge in mentoring students in business case analysis, economics competitions, and strategic academic planning.</p>
        <p>In high school, Esther earned straight A’s while balancing competitive athletics and music. She served as Team Captain of the KCIS Triathlon Team, completing nine 51.5km triathlons, and was Principal Oboe Player of the KCIS Symphony Orchestra. She was also selected as a reserve member of the Taiwan Debate Union, competing in World Schools and British Parliamentary debates.</p>`
    },
    5: {
        name: "Derrick Lin",
        role: "University of Illinois Urbana-Champaign",
        linkedin: "https://www.linkedin.com/in/derrick-lin-45b5a52a2/",
        bio: `<p>Derrick is a Mechanical Engineering student at the University of Illinois Urbana-Champaign and a recipient of the Grainger College of Engineering Dean’s List. He currently serves as Body Team Lead for Illini EV Concept, where he oversees the design and manufacturing of EV3 body panels using carbon fiber wet layup techniques, managing both technical execution and team coordination.</p>
        <p>Beyond campus, Derrick applies his engineering skills to community impact. He traveled to Puerto Rico to collaborate with a local NGO in designing and constructing a rainwater harvesting system to help communities better withstand hurricanes and severe rainstorms.</p>
        <p>With over five years of tutoring and college advising experience, Derrick began mentoring students through his high school learning center and a local tutoring institute, teaching junior high courses in math, science, and English. He later joined a college counseling firm, where he provided AP subject instruction and guided students through admissions strategy and essay development.</p>
        <p>Derrick graduated from KCIS with the Mayor’s Award. He served as Student Council Vice President, and was Co-captain of the Triathlon Team, leading training camps and competitions. He also completed two independent engineering projects: one exploring innovative data center cooling solutions, and another analyzing the application of liquid sealants in Boeing aircraft hydraulic systems.</p>`
    }
};

const teamMembersZh = {
    1: {
        name: "Justin Chen",
        role: "Washington University in St. Louis",
        linkedin: "https://www.linkedin.com/in/hung-chi-chen-5b20b1347/",
        bio: `<p>Justin 是 Washington University in St. Louis 的電腦科學學生，並獲得 McKelvey School of Engineering 院長名單榮譽。在 WashU，他擔任 Introduction to Computer Science 與 Introduction to Computer Engineering 的助教，透過課堂講解與 office hours 協助超過 200 名學生學習。他同時負責監考與批改期中、期末考及各項作業，支援總計超過 800 名學生的課程。此外，他也教授大學程度的微積分與矩陣代數，所輔導學生中有 81% 從 B 區間提升到 A。</p>
        <p>Justin 在高中時期便開始於國立臺灣大學進行研究，成為其高中第一位進入 LOPE Lab 的學生。進入大學後，他與臺大博士生及碩士生合作，開發一套用於複雜多步驟推理任務的 AI 架構。他所在團隊也成為第一個參與 International Linguistics Olympiad 的 AI 研究團隊。</p>
        <p>高中期間，Justin 曾擔任 Yale Model United Nations Taiwan 的主席與副總監，並是校內數學隊與辯論隊成員。進入大學後，他擔任 WashU Badminton Club 的會長，帶領超過 150 名成員，並主導密蘇里州首場全國級羽球賽事的舉辦。他同時也是校隊 Division I 羽球隊隊長。</p>`
    },
    2: {
        name: "Alyssa Yang",
        role: "Duke University",
        linkedin: "https://www.linkedin.com/in/alyssayang143/",
        bio: `<p>Alyssa 曾獲得超過 15 所大學錄取，包括 Brown、Northwestern、Johns Hopkins、Georgia Tech 與 Dartmouth。她目前就讀 Duke University，大二主修電腦科學，專注於 AI 與 Machine Learning，並輔修 Neuroscience，另修讀 Innovation & Entrepreneurship 證書課程。她在薇閣國際部六年間始終名列第一，畢業時獲得臺北市市長獎。在 Duke，她也進入 Trinity College of Arts and Sciences 院長名單，該榮譽頒給全校前 10% 的學生。</p>
        <p>Alyssa 自高中畢業後的暑假開始教授 SAT、TOEFL，並提供大學申請顧問服務。至今，她已協助學生錄取多所美國頂尖大學，包括 University of Virginia 與 Emory University。</p>`
    },
    3: {
        name: "Kathryn Tsai",
        role: "Johns Hopkins University",
        linkedin: "https://www.linkedin.com/in/kathryn-tsai-88a0a2266/",
        bio: `<p>Kathryn 目前就讀 Johns Hopkins University，主修 Chemical and Biomolecular Engineering，並輔修 Financial Management and Accounting，是一名以醫學院為目標的大二學生。身處世界頂尖研究型大學，她目前擔任 undergraduate research assistant，研究膽固醇酯在肥胖患者心衰竭案例中的角色。在校內的 Whiting School of Engineering，她自大一以來持續獲得院長名單榮譽。</p>
        <p>Kathryn 畢業於臺北薇閣高中，成績始終維持全 A，並對公開演說與生物工程有高度興趣。她的模擬聯合國與演講經歷自國中開始，至今已參與、主持並籌辦超過 40 場國內外會議。她在大一時主動聯繫並加入國立臺灣大學藥理實驗室，四年來持續參與心血管疾病生物機制治療方案的研究。同時，她也連續兩年在高中 iGEM 團隊中擔任濕實驗重要成員，並兩度獲獎。</p>
        <p>Kathryn 的教學與輔導經驗始於高中最後一年，之後持續教授各類科目，包括標準化考試、薇閣校內 STEM 與人文課程，以及大學申請顧問服務。她的學生曾獲得 University of Michigan 錄取、Case Western Reserve University 半額獎學金等成果。</p>`
    },
    4: {
        name: "Esther Tsai",
        role: "University of Edinburgh",
        linkedin: "https://www.linkedin.com/in/esther-tsai-84443327b/",
        bio: `<p>Esther 是 University of Edinburgh Business School 的 Business with Strategic Economics 學生，並即將以交換學生身分前往 University of Pennsylvania 的 Wharton School。</p>
        <p>她目前擔任 180 Degrees Consulting Edinburgh 的 Team Lead，擁有兩年為非營利組織與早期新創提供顧問服務的經驗。Esther 同時也是 Prosper Social Finance 的 Hedging and Funding Coordinator；該組織為英國第一個由學生主導的 ESG 投資基金。</p>
        <p>在此之前，她曾於 CTBC Bank Dealing Room 實習，建立 fixing-rate 自動化工具，參與穩定幣與數位資產策略研究，並支援 equity-linked notes 的股票避險與回測工作。</p>
        <p>作為 International Economics Olympiad 銀牌得主，加上超過五年的 C++ 與 Python 經驗，她目前也將自己的知識運用於商業個案分析、經濟競賽與學術規劃指導。</p>
        <p>高中時期，Esther 在維持全 A 成績的同時，也兼顧競技運動與音樂。她曾擔任 KCIS 鐵人三項隊隊長，完成九場 51.5 公里鐵人賽，並擔任 KCIS 交響樂團雙簧管首席。她也曾入選 Taiwan Debate Union 儲備成員，參與 World Schools 與 British Parliamentary 辯論賽。</p>`
    },
    5: {
        name: "Derrick Lin",
        role: "University of Illinois Urbana-Champaign",
        linkedin: "https://www.linkedin.com/in/derrick-lin-45b5a52a2/",
        bio: `<p>Derrick 是 University of Illinois Urbana-Champaign 的 Mechanical Engineering 學生，並獲得 Grainger College of Engineering 院長名單榮譽。他目前擔任 Illini EV Concept 的 Body Team Lead，負責以 carbon fiber wet layup 技術設計與製作 EV3 車體面板，並同時管理技術執行與團隊協作。</p>
        <p>在校園之外，Derrick 也將工程能力投入社會實踐。他曾前往 Puerto Rico，與當地 NGO 合作設計並建造雨水回收系統，協助社區在颶風與強降雨環境下提升韌性。</p>
        <p>他擁有超過五年的家教與大學申請顧問經驗。Derrick 最初於高中學習中心與在地補習機構擔任導師，教授國中數學、自然與英文。之後他加入升學顧問公司，負責 AP 科目教學，並協助學生規劃申請策略與修改文書。</p>
        <p>Derrick 畢業於 KCIS，並獲得市長獎。他曾擔任學生會副會長，也是鐵人三項隊副隊長，負責帶領訓練營與比賽。此外，他也完成過兩項獨立工程研究：一項探討創新的資料中心冷卻方案，另一項分析液態密封劑在 Boeing 飛機液壓系統中的應用。</p>`
    }
};

const teamMembers = isChinesePage ? teamMembersZh : teamMembersEn;

const modal = document.getElementById('teamModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.team-modal-close');

if (modal && modalBody) {
    // Add click event to all team members
    document.querySelectorAll('.team-member[data-member]').forEach(member => {
        member.addEventListener('click', function () {
            const memberId = this.getAttribute('data-member');
            const memberData = teamMembers[memberId];

            if (memberData) {
                const linkedinHTML = memberData.linkedin
                    ? `
                    <a class="linkedin-badge" href="${memberData.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                    `
                    : "";

                modalBody.innerHTML = `
                    <div class="modal-header">
                    <div class="modal-header-text">
                        <h2>${memberData.name}</h2>
                        <span class="modal-role">${memberData.role}</span>
                    </div>
                    ${linkedinHTML}
                    </div>
                    <div class="modal-bio">
                    ${memberData.bio}
                    </div>
                `;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when clicking the X
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Values: seamless infinite auto-scroll (last card loops back to first)
(() => {
  const track = document.querySelector(".values-grid");
  if (!track) return;

  const speed = 1.5; // increase for faster
  let paused = false;

  // Get the horizontal gap between cards (grid column-gap)
  const getGap = () => {
    const cs = window.getComputedStyle(track);
    const gap = cs.columnGap || cs.gap || "0px";
    return parseFloat(gap) || 0;
  };

  let gap = getGap();
  window.addEventListener("resize", () => { gap = getGap(); });

  const step = () => {
    if (!paused) {
      track.scrollLeft += speed;

      const first = track.firstElementChild;
      if (first) {
        const firstWidth = first.getBoundingClientRect().width;

        // If we've scrolled past the first card, move it to the end
        if (track.scrollLeft >= firstWidth + gap) {
          track.appendChild(first);
          track.scrollLeft -= (firstWidth + gap);
        }
      }
    }
    requestAnimationFrame(step);
  };

  track.addEventListener("mouseenter", () => (paused = true));
  track.addEventListener("mouseleave", () => (paused = false));
  document.addEventListener("visibilitychange", () => (paused = document.hidden));

  requestAnimationFrame(step);
})();