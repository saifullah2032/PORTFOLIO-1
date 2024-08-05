/*pre-loader*/
document.addEventListener("DOMContentLoaded", function() {
    const greetings = ["Hi", "Hola", "Bonjour", "Ciao", "Hallo", "こんにちは","నమస్తే","नमस्ते ","السلام عليكم","你好","kamusta na","Merhaba","Γεια σας"];
    let index = 0;
    const greetingElement = document.getElementById("greeting");
    const loader = document.getElementById("preloader");
    const homePage = document.getElementById("home-page");

    function updateGreeting() {
        greetingElement.textContent = greetings[index];
        index = (index + 1) % greetings.length;
    }

    const interval = setInterval(updateGreeting, 250); // Change greeting every 2 seconds

    setTimeout(function() {
        clearInterval(interval);
        loader.style.display = "none";
        homePage.style.display = "block";
    }, 3400); 
});
/*cursor*/
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Add event listeners to specific elements to change the cursor
document.querySelectorAll('.button, .icon, .skill-bar, .service-box').forEach((element) => {
  element.addEventListener('mouseover', () => {
    cursor.classList.add('pointer-svg');
  });
  element.addEventListener('mouseout', () => {
    cursor.classList.remove('pointer-svg');
  });
});
/*menu*/
document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a'); // Updated selector

    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(section => {
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});



