let items = document.querySelectorAll('.content');
console.log(items);

items.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        let positionPx = e.clientX - item.getBoundingClientRect().left;
        let positionX = (positionPx / item.offsetWidth) * 100;
        console.log(positionX, positionPx);

        let positionPy = e.clientY - item.getBoundingClientRect().top;
        let positionY = (positionPy / item.offsetHeight) * 100;

        item.style.setProperty('--rX', (0.5) * (50 - positionY) + 'deg');
        item.style.setProperty('--rY', -(0.5) * (50 - positionX) + 'deg');
    });

    item.addEventListener('mouseout', () => {
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
    });
});
/*balls*/
function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;

    document.querySelectorAll('.box').forEach((box, index) => {
        const boxPosition = box.getBoundingClientRect().top + window.scrollY;
        const boxHeight = box.offsetHeight;
        const isVisible = scrollPosition > boxPosition;

        if (isVisible && !box.classList.contains('visible')) {
            box.classList.add('visible');
            box.classList.remove('out');
        } else if (!isVisible && !box.classList.contains('out')) {
            box.classList.remove('visible');
            box.classList.add('out');
        }
    });
}

// Handle scroll event to move boxes into and out of the page
window.addEventListener('scroll', handleScroll);

// Initial call to handle visible state on page load
handleScroll();
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