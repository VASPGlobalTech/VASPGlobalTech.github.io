document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const animateElements = document.querySelectorAll('.service-item, .portfolio-item, .testimonial-card, .feature-item, .cta-section h2, .cta-section p, .cta-section .btn, .contact-form, .contact-info');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        element.classList.add('animate-on-scroll'); // Add base class for animation
        observer.observe(element);
    });

    // Form Submission (Basic client-side validation example)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // This is a basic client-side example.
            // For production, always validate on the server-side as well.
            const emailInput = this.querySelector('input[name="email"]');
            if (emailInput && !emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                e.preventDefault(); // Prevent form submission
            } else {
                // For a real scenario, you'd send an AJAX request here
                // e.g., fetch('submit_form.php', { method: 'POST', body: new FormData(this) })
                // .then(response => response.text())
                // .then(data => console.log(data));
                console.log('Form submitted (client-side simulation)');
                // If you want to prevent actual submission for demo purposes:
                e.preventDefault();
                alert('Thank you for your message! We will get back to you shortly.');
                this.reset(); // Clear the form
            }
        });
    }
});