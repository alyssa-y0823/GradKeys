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
const teamMembers = {
    1: {
        name: "Justin Chen",
        role: "Washington University in St. Louis",
        linkedin: "https://www.linkedin.com/in/hung-chi-chen-5b20b1347/",

        bio: `<p>Justin is a Computer Science student at Washington University in St. Louis. At WashU, he serves as a Teaching Assistant for Introduction to Computer Science and Introduction to Computer Engineering, where he teaches over 200 students through lectures and office hours, emphasizing structured problem-solving and precise reasoning. In the same courses, he also serves as a proctor and grader for exams and assignments, supporting large course sections with more than 800 total students. In addition, he tutors college-level calculus and matrix algebra, with 81% of his students improving their grades from a B range to an A.</p>

        <p>Justin began conducting research at National Taiwan University in high school, becoming the first student from his school to join the LOPE lab. In college, he collaborated with NTU doctoral and master’s students to develop an AI framework for complex multi-step reasoning tasks. His team became the first AI research group to participate in the International Linguistics Olympiad. </p>
        <p>During high school, he served as Chair of Yale Model United Nations Taiwan and competed on his school’s representative math and debate teams. In college, he serves as President of the WashU Badminton Club, leading an organization of over 200 members and organizing Missouri’s first national-level collegiate badminton tournament. He also serves as captain of the school’s Division I badminton team.</p>`
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
        bio: "Kathryn Tsai is a student at Johns Hopkins University, one of the world's leading research institutions. Her experience gaining admission to this highly selective university has given her valuable insights into what top-tier admissions committees look for in applicants. Kathryn is passionate about helping students discover their strengths and present them effectively in their applications."
    },
    4: {
        name: "Esther Tsai",
        role: "University of Edinburgh",
        linkedin: "https://www.linkedin.com/in/esther-tsai-84443327b/",
        bio: `<p>Esther Tsai is a Business with Strategic Economics student at the University of Edinburgh Business School, and an incoming exchange student at the Wharton School of the University of Pennsylvania.
        </p>
        <p>She serves as a Team Lead at 180 Degrees Consulting Edinburgh, with two years of experience advising non-profit organizations and early-stage ventures. Esther is also a Hedging and Funding Coordinator at Prosper Social Finance, the UK’s first student-led ESG investment fund. 
        </p>
        <p>Previously, she interned in the CTBC Bank Dealing Room, where she built a fixing-rate automation tool, contributed to stablecoin and digital asset strategy, and supported equity hedging and backtesting for equity-linked notes. </p>
        <p>As a Silver Medalist in the International Economics Olympiad and with over five years of experience in C++ and Python, she now applies her knowledge in mentoring students in business case analysis, economics competitions, and strategic academic planning.</p>
        <p>In high school, Esther earned straight A’s while balancing competitive athletics and music. She served as Team Captain of the KCIS Triathlon Team, completing nine 51.5km triathlons, and was Principal Oboe Player of the KCIS Symphony Orchestra. She was also selected as a reserve member of the Taiwan Debate Union, competing in World Schools and British Parliamentary debates.</p>
        `
    },
    5: {
        name: "Derrick Lin",
        role: "University of Illinois Urbana-Champaign",
        linkedin: "https://www.linkedin.com/in/derrick-lin-45b5a52a2/",
        bio: `<p>Derrick is a Mechanical Engineering student at the University of Illinois Urbana-Champaign and a recipient of the Grainger College of Engineering Dean’s List. He currently serves as Body Team Lead for Illini EV Concept, where he oversees the design and manufacturing of EV3 body panels using carbon fiber wet layup techniques, managing both technical execution and team coordination.</p>
        <p>Beyond campus, Derrick applies his engineering skills to community impact. He traveled to Puerto Rico to collaborate with a local NGO in designing and constructing a rainwater harvesting system to help communities better withstand hurricanes and severe rainstorms. His work reflects a commitment to practical problem-solving and socially responsible engineering.</p>
        <p>With over five years of tutoring and college advising experience, Derrick began mentoring students through his high school learning center and a local tutoring institute, teaching junior high courses in math, science, and English. He later joined a college counseling firm, where he provided AP subject instruction and guided students through admissions strategy and essay development.</p>
        <p>Derrick graduated from KCIS with the Mayor’s Award. He served as Student Council Vice President, and was Co-captain of the Triathlon Team, leading training camps and competitions. He also completed two independent engineering projects: one exploring innovative data center cooling solutions, and another analyzing the application of liquid sealants in Boeing aircraft hydraulic systems.</p>`
    }
};

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