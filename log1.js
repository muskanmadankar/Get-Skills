// Get elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');
const signInOverlayButton = document.getElementById('signInOverlay');
const signUpOverlayButton = document.getElementById('signUpOverlay');

// Switch between Sign In and Sign Up
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signInOverlayButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpOverlayButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});
