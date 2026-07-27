// =========================
// Smart Study Login
// =========================

console.log("Login JS Loaded");

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

    window.location.href = "homepage.html";

});