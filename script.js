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
        bio: `<p>Justin is a Computer Science student at Washington University in St. Louis. During high school, he served as Chair of Yale Model United Nations Taiwan and became the first student from his school to conduct research at the LOPE Lab at National Taiwan University. He completed the U.S. college application process without hiring a private counselor or professional essay editor, independently developing his application strategy and earning admission to every university he applied to.</p>

        <p>At WashU, Justin serves as a Teaching Assistant for Introduction to Computer Science and Introduction to Computer Engineering, where he taught and mentored over 200 college students through lectures and office hours while emphasizing structured problem-solving and precise reasoning. He is also President and Team Captain of the Badminton Club, one of the ten largest student organizations at the university, where he oversees operations and organized Missouri’s first-ever national-level collegiate badminton tournament. </p>
        <p>Through his experience navigating the application process independently and teaching at the university level, Justin works with high school applicants on academic planning, application strategy, and essay development with clarity and structure.</p>`
    },
    2: {
        name: "Alyssa Yang",
        role: "Duke University",
        bio: "Alyssa Yang had an exceptional college admissions journey, gaining admission to over 15 prestigious universities including Brown, Northwestern, Duke, Johns Hopkins, Georgia Tech, and Dartmouth. She ultimately chose Duke University, where she continues to thrive academically. Alyssa's experience navigating multiple top-tier admissions processes gives her unique insights into crafting compelling applications and making strategic college choices. She specializes in helping students build diverse, competitive college lists and develop authentic personal narratives."
    },
    3: {
        name: "Kathryn Tsai",
        role: "Johns Hopkins University",
        bio: "Kathryn Tsai is a student at Johns Hopkins University, one of the world's leading research institutions. Her experience gaining admission to this highly selective university has given her valuable insights into what top-tier admissions committees look for in applicants. Kathryn is passionate about helping students discover their strengths and present them effectively in their applications."
    },
    4: {
        name: "Esther Tsai",
        role: "University of Edinburgh",
        bio: "Esther Tsai attends the University of Edinburgh, one of the UK's most prestigious universities and a member of the Russell Group. Her experience navigating international university admissions provides valuable perspective for students considering studying abroad. Esther understands the unique challenges and opportunities of applying to universities outside the traditional U.S. system and can guide students through both American and international application processes."
    },
    5: {
        name: "Derrick Lin",
        role: "University of Illinois Urbana-Champaign",
        bio: "Derrick Lin is a standout student at the University of Illinois Urbana-Champaign's prestigious Grainger College of Engineering, where he has earned a place on the Dean's List. He currently serves as the Mechanical Lead for Illini EV Concept, demonstrating his leadership abilities and technical expertise. Derrick's experience in competitive engineering programs and hands-on project leadership makes him an excellent resource for students interested in engineering and technical fields."
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
                modalBody.innerHTML = `
                    <h2>${memberData.name}</h2>
                    <span class="modal-role">${memberData.role}</span>
                    <p>${memberData.bio}</p>
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