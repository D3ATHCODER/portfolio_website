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
// For the typing animation
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
        strings: ["Software Developer", "Web Developer", "Worthy Coder", "Programmer Analyst"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Active navigation menu
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });
    };
});

// Contact form submission code
const scriptURL = "https://script.google.com/macros/s/AKfycbztgZPEIGaIcg8WJONz81NVHaZSwtYL9hNmYdIx2mzRHcfPwRp0djjidFg-9vRehDwj/exec";
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");
const msg2 = document.getElementById("msg2");

// Style the status messages
if (msg) {
    msg.style.marginTop = "10px";
    msg.style.color = "#ffa500"; // Orange color for sending message
    msg.style.fontWeight = "bold";
    msg.style.textAlign = "center";
}

if (msg2) {
    msg2.style.marginTop = "5px";
    msg2.style.color = "#00ff00"; // Green color for success message
    msg2.style.fontWeight = "bold";
    msg2.style.textAlign = "center";
}

// Handle form submission
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (msg) msg.innerHTML = "Sending...";
        if (msg2) msg2.innerHTML = "";
        
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                
                if (msg) msg.innerHTML = "";
                if (msg2) msg2.innerHTML = "Message sent successfully! ✅";
                
                setTimeout(() => {
                    if (msg2) msg2.innerHTML = "";
                }, 3000);  // Show success message for 3 seconds
                
                form.reset();
                console.log("Success!", response);
            })
            .catch((error) => {
                if (msg) msg.innerHTML = "";
                if (msg2) {
                    msg2.innerHTML = "Error sending message. Please try again.";
                    msg2.style.color = "#ff6666";  // Red color for error message
                }
                console.error("Error!", error.message);
            });
    });
}function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}