// ===========================
// Smart Study Group Finder
// Register with Local Storage
// ===========================

console.log("Register JS Loaded");

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document
            .getElementById("fullName")
            .value.trim();

        const studentId = document
            .getElementById("studentId")
            .value.trim();

        const email = document
            .getElementById("email")
            .value.trim()
            .toLowerCase();

        const password = document
            .getElementById("password")
            .value;

        const confirmPassword = document
            .getElementById("confirmPassword")
            .value;

        if (
            fullName === "" ||
            studentId === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please complete all fields.");
            return;
        }

        if (!/^\d{6,10}$/.test(studentId)) {
            alert("Student ID must contain 6 to 10 digits.");
            return;
        }

        const normalEmail =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        const rsuEmail =
            /^[A-Za-z0-9._%+-]+@rsu\.ac\.th$/i;

        if (
            !normalEmail.test(email) &&
            !rsuEmail.test(email)
        ) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must contain at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const users =
            JSON.parse(localStorage.getItem("users")) || [];

        const duplicateEmail = users.some(function (user) {
            return user.email.toLowerCase() === email;
        });

        if (duplicateEmail) {
            alert("This email is already registered.");
            return;
        }

        const newUser = {
            id: Date.now(),
            fullName: fullName,
            studentId: studentId,
            email: email,
            password: password,

            role: "student",

            joinedGroups: [],
            createdGroups: [],
            createdAt: new Date().toLocaleString()
        };

        users.push(newUser);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        console.table(users);

        alert("Registration Successful!");

        registerForm.reset();

        window.location.href = "login.html";
    });
}


document.addEventListener("DOMContentLoaded", function () {
    updateNavbarAuth();
});

function updateNavbarAuth() {
    const authButton = document.getElementById("authButton");

    if (!authButton) {
        return;
    }

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    if (currentUser) {
        authButton.textContent =
            currentUser.name ||
            currentUser.fullName ||
            currentUser.email ||
            "My Profile";

        authButton.href = "my-profile.html";
        authButton.classList.add("logged-in-user");
    } else {
        authButton.textContent = "Login";
        authButton.href = "login.html";
        authButton.classList.remove("logged-in-user");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    updateNavbarAuth();

    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", logoutUser);
    }
});

function updateNavbarAuth() {
    const authButton = document.getElementById("authButton");
    const logoutItem = document.getElementById("logoutItem");

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    if (currentUser) {
        authButton.textContent =
            currentUser.name ||
            currentUser.fullName ||
            currentUser.email ||
            "My Profile";

        authButton.href = "my-profile.html";

        logoutItem.style.display = "block";
    } else {
        authButton.textContent = "Login";
        authButton.href = "login.html";

        logoutItem.style.display = "none";
    }
}

function logoutUser() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("loggedInUser");

    alert("You have logged out successfully.");

    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn && navLinks){

        menuBtn.addEventListener("click",(e)=>{
            e.stopPropagation();
            navLinks.classList.toggle("show");
        });

        document.addEventListener("click",(e)=>{

            if(
                !menuBtn.contains(e.target) &&
                !navLinks.contains(e.target)
            ){
                navLinks.classList.remove("show");
            }

        });

    }

});