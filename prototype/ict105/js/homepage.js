/*=========================================
    SMART STUDY GROUP FINDER
    script.js
=========================================*/

// =====================================
// Smart Study Group Finder
// Homepage Authentication
// =====================================



/* ==========================
   Mobile Menu Toggle
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if(navLinks.classList.contains("show")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

}


/* ==========================
   Close Menu after Click
========================== */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

    });

});


/* ==========================
   Navbar Shadow on Scroll
========================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("header");

    if (window.scrollY > 80) {

        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.12)";

    } else {

        navbar.style.boxShadow =
        "0 3px 15px rgba(0,0,0,.05)";

    }

});


/* ==========================
   Hero Search Button
========================== */

const searchButton =
document.querySelector(".search-area button");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        const keyword =
        document.querySelector(".search-area input").value;

        if (keyword === "") {

            alert("Please enter a subject or keyword.");

        } else {

            alert("Searching for : " + keyword);

        }

    });

}


/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

document.addEventListener("click",(e)=>{

    if(
        !menuBtn.contains(e.target) &&
        !navLinks.contains(e.target)
    ){
        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

/* ==========================
   Card Hover Animation
========================== */

const cards = document.querySelectorAll(

".feature-card, .group-card, .step-card, .stat-card"

);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".3s";

    });

});


/* ==========================
   Fade In Animation
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-animation");

        }

    });

},{

    threshold:0.2

});

document.querySelectorAll(

".feature-card,.group-card,.step-card,.stat-card"

).forEach(el=>{

    observer.observe(el);

});


/* ==========================
   Current Year
========================== */

const year = new Date().getFullYear();

const copyright =
document.querySelector(".copyright p");

if(copyright){

copyright.innerHTML =
`© ${year} Smart Study Group Finder. All Rights Reserved.`;

}


/*=========================
 Show / Hide Password
==========================*/

const password =
document.getElementById("password");

const togglePassword =
document.getElementById("togglePassword");

if(password && togglePassword){

togglePassword.addEventListener("click",()=>{

const type =
password.getAttribute("type")==="password"
?
"text"
:
"password";

password.setAttribute("type",type);

togglePassword.classList.toggle("fa-eye");

togglePassword.classList.toggle("fa-eye-slash");

});

}

/*=========================================
      REGISTER PASSWORD
=========================================*/

const registerPassword =
document.getElementById("registerPassword");

const toggleRegisterPassword =
document.getElementById("toggleRegisterPassword");

if(registerPassword && toggleRegisterPassword){

toggleRegisterPassword.addEventListener("click",()=>{

const type =
registerPassword.type==="password"
?
"text"
:
"password";

registerPassword.type=type;

toggleRegisterPassword.classList.toggle("fa-eye");
toggleRegisterPassword.classList.toggle("fa-eye-slash");

});

}

const confirmPassword =
document.getElementById("confirmPassword");

const toggleConfirmPassword =
document.getElementById("toggleConfirmPassword");

if(confirmPassword && toggleConfirmPassword){

toggleConfirmPassword.addEventListener("click",()=>{

const type =
confirmPassword.type==="password"
?
"text"
:
"password";

confirmPassword.type=type;

toggleConfirmPassword.classList.toggle("fa-eye");
toggleConfirmPassword.classList.toggle("fa-eye-slash");

});

}



document.addEventListener("DOMContentLoaded", function () {

    updateNavbarAuth();

    loadStatistics();

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

function loadStatistics() {

    const groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    // Total Members
    let totalMembers = 0;

    groups.forEach(function(group){

        if(Array.isArray(group.members)){

            totalMembers += group.members.length;

        }

    });

    document.getElementById("totalGroups").textContent =
        groups.length;

    document.getElementById("totalMembers").textContent =
        totalMembers;

    document.getElementById("totalCourses").textContent =
        courses.length;

    document.getElementById("totalUsers").textContent =
        users.length;

}