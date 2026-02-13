// ==================== 
// Smooth Scrolling
// ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const pageHeader = document.querySelector('.header');
            const headerHeight = pageHeader ? pageHeader.offsetHeight : 0;
            const viewportHeight = window.innerHeight;
            const targetHeight = target.offsetHeight;
            const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
            const availableHeight = Math.max(viewportHeight - headerHeight, 0);

            let scrollTop;

            if (targetHeight <= availableHeight) {
                // Center section in the visible area under the fixed header.
                const extraSpace = (availableHeight - targetHeight) / 2;
                scrollTop = targetTop - headerHeight - extraSpace;
            } else {
                // Align section top with bottom edge of the fixed header.
                scrollTop = targetTop - headerHeight;
            }

            window.scrollTo({
                top: Math.max(scrollTop, 0),
                behavior: 'smooth'
            });

            const navToggle = document.querySelector('.nav-toggle');
            const navTogglePath = document.querySelector('.nav-toggle-icon path');
            if (pageHeader && pageHeader.classList.contains('menu-open')) {
                pageHeader.classList.remove('menu-open');
                if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
                if (navTogglePath) navTogglePath.setAttribute('d', 'M5 9H13H19M5 15H19');
            }
        }
    });
});

// ====================
// Mobile Navigation Toggle
// ====================

const headerEl = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const navTogglePath = document.querySelector('.nav-toggle-icon path');

if (headerEl && navToggle && navTogglePath) {
    const closedPath = 'M5 9H13H19M5 15H19';
    const openPath = 'M6 6L18 18M18 6L6 18';

    navToggle.addEventListener('click', () => {
        const isOpen = headerEl.classList.toggle('menu-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navTogglePath.setAttribute('d', isOpen ? openPath : closedPath);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && headerEl.classList.contains('menu-open')) {
            headerEl.classList.remove('menu-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navTogglePath.setAttribute('d', closedPath);
        }
    });
}

// ==================== 
// Contact Form Handling
// ====================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields');
            return;
        }
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// ==================== 
// Active Navigation Highlighting
// ====================

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== 
// Page Load Animation
// ====================

window.addEventListener('load', function () {
    document.body.style.opacity = '1';
});

// ==================== 
// Carousel Navigation
// ====================

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (carousel) {
    let items = Array.from(document.querySelectorAll('.portfolio-item'));
    let isAnimating = false;

    function updateStack() {
        items.forEach((item, index) => {
            item.className = 'portfolio-item';

            if (index === 0) item.classList.add('active');
            if (index === 1) item.classList.add('stack-1');
            if (index === 2) item.classList.add('stack-2');
            if (index === 3) item.classList.add('stack-3');
        });
    }

    function nextSlide() {
        if (isAnimating) return;
        isAnimating = true;

        const first = items[0];

        first.classList.add('exit-up');

        setTimeout(() => {
            first.classList.remove('exit-up');
            items.push(items.shift()); // move first to back
            updateStack();
            isAnimating = false;
        }, 600);
    }

    function prevSlide() {
        if (isAnimating) return;
        isAnimating = true;

        const last = items[items.length - 1];

        // Move last to front in array
        items.unshift(items.pop());

        updateStack();

        const newFirst = items[0];

        newFirst.classList.add('enter-down');

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                newFirst.classList.remove('enter-down');
                isAnimating = false;
            });
        });
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    updateStack();
}
if (typeof Swiper !== "undefined" && document.querySelector(".mySwiper")) {
    const swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: false,
        rewind: true,
        watchOverflow: false,
        navigation: {
            nextEl: ".portfolio-next",
            prevEl: ".portfolio-prev",
        },
    });
} else {
    console.warn("Swiper library or container not found; carousel was not initialized.");
}


// Email Copy Functionality
const emailCopyBtn = document.getElementById('emailCopyBtn');
if (emailCopyBtn) {
    emailCopyBtn.addEventListener('click', async function() {
        const email = 'maxdelaporte2003@gmail.com';
        const copyWithFallback = () => {
            const tempInput = document.createElement('textarea');
            tempInput.value = email;
            tempInput.setAttribute('readonly', '');
            tempInput.style.position = 'fixed';
            tempInput.style.opacity = '0';
            document.body.appendChild(tempInput);
            tempInput.select();
            tempInput.setSelectionRange(0, tempInput.value.length);
            const copied = document.execCommand('copy');
            document.body.removeChild(tempInput);
            return copied;
        };

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(email);
            } else if (!copyWithFallback()) {
                throw new Error('Clipboard API unavailable and fallback copy failed.');
            }

            const originalTitle = this.title;
            this.title = 'Email copied!';
            setTimeout(() => {
                this.title = originalTitle;
            }, 2000);

        } catch (err) {
            alert('Could not copy email automatically. Please copy: ' + email);
            console.error('Failed to copy email:', err);
        }
    });
}


