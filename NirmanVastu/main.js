// Sidebar functionality
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Project Slider
const projectCards = document.querySelectorAll('.project-card');
const prevBtn1 = document.querySelector('.prev-btn1');
const nextBtn1 = document.querySelector('.next-btn1');
let currentSlide = 0;

function showSlide(index) {
    projectCards.forEach(card => card.classList.remove('active'));
    if (index >= projectCards.length) currentSlide = 0;
    if (index < 0) currentSlide = projectCards.length - 1;
    projectCards[currentSlide].classList.add('active');
}

prevBtn1.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

nextBtn1.addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});
// Auto slide every 5 seconds
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000);


// Testimonials Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    if (index >= testimonialCards.length) currentTestimonial = 0;
    if (index < 0) currentTestimonial = testimonialCards.length - 1;
    testimonialCards[currentTestimonial].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentTestimonial--;
    showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
    currentTestimonial++;
    showTestimonial(currentTestimonial);
});

// Auto slide testimonials every 6 seconds
setInterval(() => {
    currentTestimonial++;
    showTestimonial(currentTestimonial);
}, 6000);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close sidebar if open
            if (sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    contactForm.reset();
});

// Animation on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.service-card, .sustainability-card, .award-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
});