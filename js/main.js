// JS FÜR KI WISSENSSYSTEME / IT SERVICES MEYER (B2B)
// Leichtgewichtiges Vanilla JS für UI Interaktionen.

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Menu Toggle --- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if(mobileToggle && mainNav){
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const bars = mobileToggle.querySelectorAll('.bar');
            if(mainNav.classList.contains('active')){
                bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close mobile menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mobileToggle.click(); // Trigger click to reverse animation
                }
            });
        });
    }

    /* --- 2. Sticky Header on Scroll --- */
    const header = document.querySelector('.header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /* --- 3. Form Handling (Simulation) --- */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Wird gesendet...';
            submitBtn.disabled = true;

            setTimeout(() => {
                formStatus.style.color = '#10B981'; // Green for success
                formStatus.innerText = 'Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet (Simulation). Wir melden uns in Kürze.';
                contactForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    formStatus.innerText = '';
                }, 8000);
            }, 1200);
        });
    }
});
