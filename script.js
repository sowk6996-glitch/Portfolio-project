// =============================
// CodeFolio - script.js
// =============================

// Login
function goToTemplates() {
    alert("Login Successful!");
    window.location.href = "templates.html";
}

// Register
function registerUser() {
    alert("Registration Successful!");
    window.location.href = "templates.html";
}

// Contact Form
function sendMessage(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
    document.getElementById("contactForm").reset();
}

// Choose Template
function chooseTemplate(templateName) {
    alert("You selected the " + templateName + " template.");
}

// Dashboard
function openDashboard() {
    alert("Welcome to your Dashboard!");
}

// Profile
function saveProfile() {
    alert("Profile updated successfully!");
}

// Projects
function addProject() {
    alert("Project added successfully!");
}

// Skills
function saveSkills() {
    alert("Skills updated successfully!");
}

// Preview
function previewPortfolio() {
    alert("Opening Portfolio Preview...");
}

// Settings
function saveSettings() {
    alert("Settings saved successfully!");
}

// Logout
function logout() {
    alert("You have been logged out.");
    window.location.href = "login.html";
}