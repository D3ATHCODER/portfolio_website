document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    const header = document.querySelector('.header');
    
    let lastScrollTop = 0;
    let scrollTimer = null;
    
    window.addEventListener('scroll', () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)'; // Hide the navbar
        } else {
            header.style.transform = 'translateY(0)'; // Show the navbar
        }
        lastScrollTop = currentScrollTop;


        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (currentScrollTop >= (sectionTop - window.innerHeight / 2) && 
                currentScrollTop < (sectionTop + sectionHeight - window.innerHeight / 2)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        if (current) {
            navLinks.forEach(link => {
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        }


        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }
        
        scrollTimer = setTimeout(function() {
            if (currentScrollTop <= 50) {
                header.style.transform = 'translateY(0)'; // Show navbar if at the top
            }
        }, 1000); 
    });

    document.addEventListener('mousemove', function(e) {
        if (e.clientY <= 50) {
            header.style.transform = 'translateY(0)'; // Show navbar when mouse is near the top
        }
    });
});
var typed = new Typed(".text", {
    strings: ["Software Developer", "Web Developer", "Worthy Coder", "Programmer Analyst"],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;


            if (window.scrollY >= sectionTop - window.innerHeight * 0.3 &&
                window.scrollY < sectionTop + sectionHeight - window.innerHeight * 0.3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
