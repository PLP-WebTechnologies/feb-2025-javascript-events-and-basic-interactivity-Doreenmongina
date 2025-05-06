// 1. Event Handling
const clickButton = document.getElementById('clickButton');
const hoverDiv = document.getElementById('hoverDiv');
const keypressInput = document.getElementById('keypressInput');
const doubleClickDiv = document.getElementById('doubleClickDiv');

clickButton.addEventListener('click', () => {
    alert('Button Clicked!');
});

hoverDiv.addEventListener('mouseenter', () => {
    hoverDiv.style.backgroundColor = '#81C784';
});
hoverDiv.addEventListener('mouseleave', () => {
    hoverDiv.style.backgroundColor = '#f0f0f0';
});

keypressInput.addEventListener('keypress', (event) => {
    console.log('You pressed:', event.key);
});

doubleClickDiv.addEventListener('dblclick', () => {
    alert("Secret Action!");
});

// 2. Interactive Elements
const changeTextButton = document.getElementById('changeTextButton');
const imageGallery = document.getElementById('imageGallery');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

changeTextButton.addEventListener('click', () => {
    if (changeTextButton.textContent === 'Change Text') {
        changeTextButton.textContent = 'Text Changed!';
        changeTextButton.style.backgroundColor = '#FFB74D';
    } else {
        changeTextButton.textContent = 'Change Text';
        changeTextButton.style.backgroundColor = '#4CAF50';
    }
});

let currentImageIndex = 0;
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % imageGallery.children.length;
    imageGallery.children[currentImageIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
    });
}, 2000);

tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', () => {
        const tabName = tabLink.dataset.tab;
        tabLinks.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');
        tabLink.classList.add('active');
    });
});

// 3. Form Validation
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add('error');
    } else {
        nameInput.classList.remove('error');
    }

    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.classList.add('error');
    } else {
        emailInput.classList.remove('error');
    }

    if (!passwordInput.value.trim() || passwordInput.value.length < 8) {
        isValid = false;
        passwordInput.classList.add('error');
    } else {
        passwordInput.classList.remove('error');
    }

    if (isValid) {
        feedback.textContent = 'Form submitted successfully!';
        feedback.className = 'success';
        form.reset();
    } else {
        feedback.textContent = 'Please fix the errors in the form.';
        feedback.className = 'error';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
}

// Bonus: Real-time feedback
nameInput.addEventListener('input', () => {
    if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
    } else {
        nameInput.classList.remove('error');
    }
});

emailInput.addEventListener('input', () => {
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        emailInput.classList.add('error');
    } else {
        emailInput.classList.remove('error');
    }
});

passwordInput.addEventListener('input', () => {
    if (!passwordInput.value.trim() || passwordInput.value.length < 8) {
        passwordInput.classList.add('error');
    } else {
        passwordInput.classList.remove('error');
    }
});