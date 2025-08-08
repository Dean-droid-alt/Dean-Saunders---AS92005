/*Javascript for hamburger menu*/
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.menu');
    const navbar = document.querySelector('nav');

/*What happens when you click on the hamburger menu*/
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

/*Close hamburger menu when something is clicked on*/
    const navLinks = document.querySelectorAll('.menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
});