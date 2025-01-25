// Sign In form submission
const signInForm = document.querySelector('.sign-in-container form');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Retrieve sign up data from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered email and password match the stored data
    if (email === storedEmail && password === storedPassword) {
        alert('Sign in successful!');
        localStorage.setItem('isLoggedIn', 'true'); // Set login status
        window.location.href = 'new1.html'; // Redirect to the desired page
    } else {
        alert('Invalid email or password');
    }
});

// Sign Up form submission
const signUpForm = document.querySelector('.sign-up-container form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    // Store email and password in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    alert('Account created successfully! Please Sign In.');
    container.classList.remove('right-panel-active'); // Switch to sign in
});

// To update the login button based on the user's login status
document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        document.querySelector('#signInBtn').innerText = 'Sign Out';
        document.querySelector('#signOutBtn').style.display = 'block'; // Show sign-out button
        document.querySelector('#signInBtn').addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            window.location.reload(); // Refresh the page to update the UI
        });
        
        // Hide the Sign Up button
        const signUpButton = document.querySelector('#signUpBtn');
        if (signUpButton) {
            signUpButton.style.display = 'none';
        }
    }
});