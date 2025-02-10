// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const email = document.querySelector('.login-form input[type="email"]').value;
    const password = document.querySelector('.login-form input[type="password"]').value;

    // Dummy check for invalid credentials
    if (email !== "user@example.com" || password !== "1234") {
        alert("Invalid Account!"); // Show alert for invalid account
    } else {
        alert("Login Successful!");
    }
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.querySelector('[name="password"]').value;
    const confirmPassword = document.querySelector('[name="confirm-password"]').value;
    const errorMessage = document.getElementById('password-error');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
    } else {
        errorMessage.textContent = "";
        // You can proceed with form submission here if needed
        alert("Registration successful!");  // Example of successful form submission
        // This could be replaced with actual form submission logic
    }
});


// Add event listeners for login and register forms
document.querySelector('.login-form form').addEventListener('submit', handleLogin);
document.querySelector('.register-form form').addEventListener('submit', handleRegister);
