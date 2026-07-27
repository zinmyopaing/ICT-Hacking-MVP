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