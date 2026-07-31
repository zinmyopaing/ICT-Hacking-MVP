// =========================
// Smart Study Login
// =========================

console.log("Login JS Loaded");

// =========================
// Create Default Admin
// =========================
(function () {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const adminExists = users.some(user => user.role === "admin");

    if (!adminExists) {

        users.push({

            id: Date.now(),

            fullName: "Administrator",

            studentId: "000000",

            email: "admin@gmail.com",

            password: "123456",

            role: "admin",

            joinedGroups: [],

            createdGroups: [],

            createdAt: new Date().toLocaleString()

        });

        localStorage.setItem("users", JSON.stringify(users));

    }

})();









const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document
        .getElementById("email")
        .value
        .trim()
        .toLowerCase();

    const password = document
        .getElementById("password")
        .value;

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(function (u) {

        return (
            u.email.toLowerCase() === email &&
            u.password === password
        );

    });

    if (!user) {

        alert("Invalid Email or Password");

        return;

    }

    localStorage.setItem(
    "currentUser",
    JSON.stringify(user)
);

alert("Login Successful!");

if (user.role === "admin") {

    window.location.href = "admin.html";

} else {

    window.location.href = "homepage.html";

}

});



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