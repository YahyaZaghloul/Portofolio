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

    // Dynamic Multi-Title Typing Effect for Hero Section
    const titlesToType = [
        "HTB Junior Cybersecurity Analyst",
        "Offensive Security & Pentesting",
        "Active Directory & Network Defense",
        "Threat Hunter & Security Enthusiast"
    ];
    const typingElement = document.getElementById('typing-text');
    let titleIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function typeEffect() {
        if (!typingElement) return;

        const currentText = titlesToType[titleIndex];

        if (isTyping) {
            if (charIndex < currentText.length) {
                typingElement.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, Math.random() * 40 + 40); // Random typing speed
            } else {
                isTyping = false;
                setTimeout(typeEffect, 2500); // Pause before erasing
            }
        } else {
            if (charIndex > 0) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeEffect, 25); // Erasing speed
            } else {
                isTyping = true;
                titleIndex = (titleIndex + 1) % titlesToType.length;
                setTimeout(typeEffect, 400); // Wait before typing next
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
        contactForm.addEventListener('submit', function (e) {
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

    // Dynamic IP Trace & Terminal Simulation
    const traceOutput = document.getElementById('trace-output');
    const dynamicIp = document.getElementById('dynamic-ip');

    if (traceOutput && dynamicIp) {
        const ips = ['192.168.1.1', '10.0.0.45', '172.16.254.1', '142.250.190.46', '104.21.23.41'];
        const logs = [
            "> Initializing nmap scan...",
            "> Discovering open ports...",
            "> Port 22/tcp OPEN (SSH)",
            "> Port 80/tcp OPEN (HTTP)",
            "> Running vuln scripts...",
            "> CVE-202X-XXXX detected!",
            "> Launching exploit payload...",
            "> Establishing reverse shell...",
            "<span class='text-white'>> Access Granted (root)</span>",
            "<span class='text-cyber-darkred'>> Connection terminated.</span>",
            "> Retargeting..."
        ];

        let logIndex = 0;

        function addLog() {
            if (logIndex === 0) {
                // Change IP when starting a new loop
                dynamicIp.textContent = ips[Math.floor(Math.random() * ips.length)];
                traceOutput.innerHTML = ''; // Clear previous
            }

            const p = document.createElement('p');
            p.className = 'text-cyber-red opacity-80 text-xs sm:text-sm';
            p.innerHTML = logs[logIndex];
            traceOutput.appendChild(p);

            // Auto scroll to bottom
            traceOutput.scrollTop = traceOutput.scrollHeight;

            logIndex++;

            if (logIndex < logs.length) {
                setTimeout(addLog, Math.random() * 800 + 400); // Random delay between 400-1200ms
            } else {
                logIndex = 0;
                setTimeout(addLog, 3000); // Wait 3s before starting next sequence
            }
        }

        setTimeout(addLog, 1500); // Initial delay
    }

    // HTB XP Bar Simulation
    // Note: True live API syncing without a backend requires authentication/CORS bypass. 
    // This provides a high-fidelity visual simulation of the platform's UI.
    const htbXpBar = document.getElementById('htb-xp-bar');
    const htbRankTitle = document.getElementById('htb-rank-title');
    const htbLevelNum = document.getElementById('htb-level-num');
    const htbXpFraction = document.getElementById('htb-xp-fraction');

    if (htbXpBar) {
        // Updated to match your real profile stats (Level 39, 140/930 XP - Skilled)
        const targetRank = "Skilled";
        const targetLevel = "39";
        const targetPercentage = 15.1; // 140 / 930 = 15.05%
        const targetXp = "140/930";

        setTimeout(() => {
            if (htbLevelNum) htbLevelNum.textContent = targetLevel;
            if (htbRankTitle) htbRankTitle.textContent = targetRank;
            if (htbXpFraction) htbXpFraction.textContent = targetXp;
            htbXpBar.style.width = `${targetPercentage}%`;
        }, 800);
    }

    // Back to Top Button Logic
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible');
                backToTopBtn.classList.remove('opacity-100', 'visible');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
