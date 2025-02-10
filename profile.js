document.addEventListener("DOMContentLoaded", function () {
    const profileForm = document.getElementById("profile-form");
    const messageDiv = document.getElementById("message");

    // Load saved data from localStorage
    loadProfileData();

    profileForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const age = parseInt(document.getElementById("age").value.trim(), 10);

        // Validate inputs
        if (!validateEmail(email)) {
            showMessage("Invalid email format!", "error");
            return;
        }
        if (!validateMobile(mobile)) {
            showMessage("Invalid mobile number!", "error");
            return;
        }
        if (isNaN(age) || age < 18) {
            showMessage("You must be at least or above 18 years old!", "error");
            return;
        }

        // Save profile data
        saveProfileData(email, address, mobile, age);

        showMessage("Profile updated successfully! Redirecting...", "success");

        // Redirect to homepage (index.html) after 2 seconds
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateMobile(mobile) {
        const regex = /^[0-9]{11}$/;
        return regex.test(mobile);
    }

    function saveProfileData(email, address, mobile, age) {
        const profile = { email, address, mobile, age };
        localStorage.setItem("profile", JSON.stringify(profile));
    }

    function loadProfileData() {
        const savedProfile = localStorage.getItem("profile");
        if (savedProfile) {
            const { email, address, mobile, age } = JSON.parse(savedProfile);
            document.getElementById("email").value = email;
            document.getElementById("address").value = address;
            document.getElementById("mobile").value = mobile;
            document.getElementById("age").value = age;
        }
    }

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        setTimeout(() => {
            messageDiv.textContent = "";
            messageDiv.className = "message";
        }, 1500);
    }
});
