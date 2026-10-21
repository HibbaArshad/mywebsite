
// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

 // Form submission handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const data = new FormData(contactForm);

        const name = String(data.get('name') || '').trim();
        const email = String(data.get('email') || '').trim();
        const subjectText = String(data.get('subject') || '').trim();
        const message = String(data.get('message') || '').trim();

        const subject = `Portfolio Contact: ${subjectText}`;

        const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

        const mailto = `mailto:Hibba.Arshad@alghazitractors.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
    });
}


// FAQ interaction
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        question.parentElement.classList.toggle('active');
    });
});// Modern About Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab Switching Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and panes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                // Add active class to clicked button and corresponding pane
                button.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Animated Progress Circles
    const progressCircles = document.querySelectorAll('.circle-progress');
    
    function animateProgressCircles() {
        progressCircles.forEach(circle => {
            const value = circle.getAttribute('data-value');
            const circleElement = circle.querySelector('.progress-ring-circle');
            const radius = 35;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (value / 100) * circumference;
            
            circleElement.style.strokeDasharray = `${circumference} ${circumference}`;
            circleElement.style.strokeDashoffset = offset;
            
            // Animate the value counter
            const valueElement = circle.querySelector('.progress-value');
            let currentValue = 0;
            const targetValue = parseInt(value);
            const duration = 1500;
            const increment = targetValue / (duration / 16);
            
            function updateCounter() {
                if (currentValue < targetValue) {
                    currentValue += increment;
                    if (currentValue > targetValue) currentValue = targetValue;
                    valueElement.textContent = Math.round(currentValue) + '%';
                    requestAnimationFrame(updateCounter);
                }
            }
            
            updateCounter();
        });
    }
    
    // Animate circles when About section comes into view
    const aboutSection = document.querySelector('.about-modern');
    
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressCircles();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(aboutSection);
    }
    
    // Add smooth hover effects for cards
    const interactiveCards = document.querySelectorAll('.expertise-item, .profile-card, .highlight-box');
    
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });
});

/* Contact form labels and information */
.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-secondary);
}

.form-note {
    margin-top: 12px;
    color: var(--text-muted);
    font-size: 0.85rem;
    line-height: 1.5;
}
