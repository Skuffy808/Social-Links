// Light/Dark Mode Toggle Script
const modeSwitch = document.querySelector('.mode-switch');

// Function to apply mode based on localStorage
const applyMode = () => {
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
};

// Apply mode on page load
applyMode();

modeSwitch.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    }
});

// Neon Rain Background Script
const canvas = document.getElementById('neon-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ff69b4';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
};

setInterval(draw, 30);

// Typewriter Effect Script
const typewriterElement = document.getElementById('typewriter-text');
const texts = ['Programmer', 'Graphic Designer', 'Photographer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseTime = 2000;

const type = () => {
    const currentText = texts[textIndex];
    if (isDeleting) {
        typewriterElement.textContent =  ("I'm a ") + currentText.substring(0, charIndex - 1) + ("|");
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, deletingSpeed);
        }
    } else {
        typewriterElement.textContent = ("I'm a ") + currentText.substring(0, charIndex + 1) + ("|");
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, pauseTime);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, typingSpeed);
});


