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
        name: "Dr. Jessica Davis",
        role: "Founder & Lead Counselor",
        bio: "Dr. Jessica Davis brings over 15 years of experience in college admissions counseling. As a former admissions officer at Columbia University, she has insider knowledge of what top universities look for in applicants. She earned her Ph.D. in Education from Stanford University, where her research focused on holistic admissions practices. Jessica is passionate about helping students discover their authentic voice and craft compelling narratives that resonate with admissions committees. She has successfully guided hundreds of students to their dream schools, including Ivy League institutions and top-tier universities worldwide."
    },
    2: {
        name: "Michael Park",
        role: "Senior Counselor",
        bio: "Michael Park is a seasoned college counselor with extensive experience working in admissions at UC Berkeley and UCLA. He specializes in guiding STEM applicants and international students through the complex college application process. With a deep understanding of both public and private university systems, Michael provides strategic insights into building competitive applications. He is particularly skilled at helping students highlight their research experiences, technical projects, and leadership in STEM fields. Michael graduated from MIT and holds a Master's degree in Higher Education Administration."
    },
    3: {
        name: "Sarah Rodriguez",
        role: "Essay Coach",
        bio: "Sarah Rodriguez is a published author and former English teacher with a gift for helping students craft compelling personal narratives. Her expertise lies in developmental editing and helping students find their authentic voice. Sarah has worked with students from diverse backgrounds, helping them transform their experiences into powerful essays that stand out to admissions committees. She holds an MFA in Creative Writing from the Iowa Writers' Workshop and has been featured in numerous literary publications. Sarah's approach combines creative writing techniques with strategic admissions insights."
    },
    4: {
        name: "David Kim",
        role: "Test Prep Specialist",
        bio: "David Kim is an expert test prep instructor specializing in SAT, TOEFL, and AP examinations. With over 10 years of tutoring experience, he has helped hundreds of students achieve significant score improvements. David scored in the 99th percentile on the SAT and has developed proprietary strategies for tackling standardized tests. He graduated summa cum laude from Yale University and understands the role test scores play in competitive admissions. David's patient, personalized approach helps students build confidence while mastering test-taking techniques."
    },
    5: {
        name: "Emily Chen",
        role: "College Counselor",
        bio: "Emily Chen is a dedicated college counselor who graduated from 薇閣 high school and earned her degree from Duke University. As a recent graduate, she brings fresh perspectives on current admissions trends and connects easily with students navigating the college process. Emily specializes in helping students from Taiwan understand the nuances of applying to U.S. universities. Her personal experience as an international student gives her unique insights into the challenges and opportunities students face. She is passionate about extracurricular planning and helping students build meaningful activities lists."
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