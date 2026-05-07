document.addEventListener('DOMContentLoaded', () => {
    // Set Current Year in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'shadow-cyber-red/5');
                navbar.classList.remove('py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('shadow-lg', 'shadow-cyber-red/5');
                navbar.classList.remove('py-2');
                navbar.classList.add('py-4');
            }
        });
    }

    // Typing Effect for Hero Section
    const textToType = "Ethical Hacker & Security Enthusiast";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;
    let isTyping = true;

    function typeEffect() {
        if (!typingElement) return;
        
        if (isTyping) {
            if (charIndex < textToType.length) {
                typingElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, Math.random() * 50 + 50); // Random typing speed
            } else {
                isTyping = false;
                setTimeout(typeEffect, 3000); // Wait before erasing
            }
        } else {
            if (charIndex > 0) {
                typingElement.textContent = textToType.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeEffect, 30); // Erasing speed
            } else {
                isTyping = true;
                setTimeout(typeEffect, 500); // Wait before typing again
            }
        }
    }

    // Start typing effect after initial delay
    if (typingElement) {
        setTimeout(typeEffect, 1000);
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }

    // Initial check and scroll listener
    checkReveal();
    window.addEventListener('scroll', checkReveal);

    // Contact Form Handle
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const contactInfo = document.getElementById('contact-info').value;
            const message = document.getElementById('message').value;
            
            const emailAddress = "yahyazaghloul36@gmail.com"; // Placeholder as requested
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(
                `New message from portfolio:
                 
                 Name: ${name}
                 Contact: ${contactInfo}

                 Message:
                 ${message}

                 ---
                 Sent from Yahya's Portfolio`
                 );
            
            // Open default mail client
            window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
            
            // Reset form visually
            contactForm.reset();
        });
    }
});
