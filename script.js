// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Book Cleaning Service buttons
    const bookingButtons = document.querySelectorAll('.btn-primary');
    bookingButtons.forEach(button => {
        if (button.textContent.includes('Book')) {
            button.addEventListener('click', function() {
                alert('Booking system coming soon! Please call us at +27 21 XXX XXXX to book your cleaning service.');
            });
        }
    });
    
    // Find Jobs / Register as Cleaner buttons
    const jobButtons = document.querySelectorAll('.btn-secondary');
    jobButtons.forEach(button => {
        if (button.textContent.includes('Find') || button.textContent.includes('Register')) {
            button.addEventListener('click', function() {
                alert('Job registration coming soon! Please email jobs@rawarts.co.za to apply as a cleaner.');
            });
        }
    });
    
    // View More Options/Suburbs buttons
    const viewMoreButtons = document.querySelectorAll('.btn-outline');
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.textContent.includes('Options')) {
                showMoreServices();
            } else if (button.textContent.includes('Suburbs')) {
                showMoreAreas();
            }
        });
    });
});

// Show More Services Function
function showMoreServices() {
    const servicesGrid = document.querySelector('.services-grid');
    const additionalServices = [
        { icon: '🪟', title: 'Window Cleaning', description: 'Crystal clear window cleaning inside and out' },
        { icon: '🧽', title: 'Deep Cleaning', description: 'Comprehensive deep cleaning service' },
        { icon: '🏠', title: 'Move-in/Move-out', description: 'Complete cleaning for relocations' },
        { icon: '✨', title: 'Post-Construction', description: 'Specialized post-renovation cleanup' }
    ];
    
    additionalServices.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
    
    // Hide the button after showing more services
    event.target.style.display = 'none';
}

// Show More Areas Function
function showMoreAreas() {
    const areasGrid = document.querySelector('.areas-grid');
    const additionalAreas = [
        'Sea Point', 'Camps Bay', 'Clifton', 'Bantry Bay',
        'Woodstock', 'Observatory', 'Rondebosch', 'Newlands'
    ];
    
    additionalAreas.forEach(area => {
        const areaCard = document.createElement('div');
        areaCard.className = 'area-card';
        areaCard.textContent = area;
        areasGrid.appendChild(areaCard);
    });
    
    // Hide the button after showing more areas
    event.target.style.display = 'none';
}

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .area-card, .booking-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});