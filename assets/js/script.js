// Initialize ScrollReveal for smooth animations
ScrollReveal().reveal('.home__data', {
    distance: '50px',
    duration: 1000,
    delay: 200,
    origin: 'bottom',
    reset: true,
});
ScrollReveal().reveal('.about__content', {
    distance: '50px',
    duration: 1000,
    delay: 300,
    origin: 'left',
    reset: true,
});
ScrollReveal().reveal('.skills__content', {
    distance: '50px',
    duration: 1000,
    delay: 400,
    origin: 'right',
    reset: true,
});
ScrollReveal().reveal('.projects__content', {
    distance: '50px',
    duration: 1000,
    delay: 500,
    origin: 'bottom',
    reset: true,
});
ScrollReveal().reveal('.contact__form', {
    distance: '50px',
    duration: 1000,
    delay: 600,
    origin: 'top',
    reset: true,
});

// Smooth scroll to sections
document.querySelectorAll('.nav__link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form validation
document.querySelector('.contact__form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');
    
    if (!name.value || !email.value || !message.value) {
        e.preventDefault(); // Prevent form submission
        alert('Please fill out all fields.');
    } else {
        alert('Message sent successfully!');
    }
});

// Dark/Light Mode toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
toggleButton.classList.add('dark-mode-toggle');
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    alert(`Switched to ${currentMode} Mode`);
});

// Example of dynamic skills bar
function updateSkillBars() {
    const skills = {
        python: 80,
        sql: 70,
        java: 65,
        html: 90
    };

    for (let skill in skills) {
        document.querySelector(`.skills__bar.${skill}`).style.width = `${skills[skill]}%`;
    }
}

updateSkillBars();

// Typing text effect
const texts = ["Computer Science Professional.", "Classic Coder.", "Data Diver."];
let textIndex = 0;
let letterIndex = 0;
const typingSpeed = 100; // typing speed in milliseconds
const erasingSpeed = 50;  // erasing speed in milliseconds
const delayBetweenTexts = 2000; // delay between texts in milliseconds

function typeText() {
    const typingTextElement = document.querySelector(".typing-text");
    if (letterIndex < texts[textIndex].length) {
        typingTextElement.textContent += texts[textIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    const typingTextElement = document.querySelector(".typing-text");
    if (letterIndex > 0) {
        typingTextElement.textContent = typingTextElement.textContent.slice(0, -1);
        letterIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (texts.length) setTimeout(typeText, delayBetweenTexts + 250);
});

// Smooth scroll animation
$(document).on('click', '.smoth-animation', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 300);
});

// Two scroll spy
$(document).on('click', '.smoth-animation-two', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 0
    }, 300);
});
