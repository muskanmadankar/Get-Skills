// This script should be included in your new1.html file

document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Get button elements
    const signInButton = document.getElementById('signInBtn');
    const signUpButton = document.getElementById('signUpBtn');
    const signOutButton = document.getElementById('signOutBtn');

    if (isLoggedIn === 'true') {
        // If user is logged in, show Sign Out and hide Sign In/Sign Up
        signInButton.style.display = 'none'; // Hide Sign In button
        signUpButton.style.display = 'none'; // Hide Sign Up button
        signOutButton.style.display = 'block'; // Show Sign Out button
        
        // Add click event to Sign Out button
        signOutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn'); // Clear login status
            window.location.reload(); // Refresh the page to update the UI
        });
    } else {
        // If user is not logged in, show Sign In/Sign Up
        signInButton.style.display = 'block'; // Show Sign In button
        signUpButton.style.display = 'block'; // Show Sign Up button
        signOutButton.style.display = 'none'; // Hide Sign Out button
    }
});
