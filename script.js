// JavaScript Interactions

// 1. Dark Mode / Light Mode Toggle Interface
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🌙 Mode';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Mode';
    }
});

// 2. Dynamic Contact Form DOM manipulation Validation
const contactForm = document.getElementById('contact-form');
const feedbackMsg = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop webpage from reloading
    
    const userName = document.getElementById('form-name').value;
    
    // Dynamically show confirmation success alert text inside DOM
    feedbackMsg.textContent = `Thank you, ${userName}! Your message was sent successfully.`;
    feedbackMsg.className = "success";
    
    // Clear out input fields
    contactForm.reset();
});
