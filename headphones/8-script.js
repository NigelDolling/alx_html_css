// Hamburger Menu Toggle Script
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const nav = document.querySelector('nav');
    
    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        nav.classList.toggle('menu-open');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Add click event to hamburger
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            // Reset menu state on larger screens
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            nav.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
    });
});
