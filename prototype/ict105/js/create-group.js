function addNotification(message) {

    let notifications =
        JSON.parse(localStorage.getItem("notifications")) || [];

    notifications.unshift({

        message: message,

        time: new Date().toLocaleString(),

        read: false

    });

    localStorage.setItem(
        "notifications",
        JSON.stringify(notifications)
    );

}




const form = document.getElementById("createGroupForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUser){
        alert("Please login first.");
        window.location.href="login.html";
        return;
    }

    const group = {

        id: Date.now(),

        groupName: document.getElementById("groupName").value,

        courseCode: document.getElementById("courseCode").value,

        subject: document.getElementById("subject").value,

        studyMode: document.getElementById("studyMode").value,

        skillLevel: document.getElementById("skillLevel").value,

        preferredYear: document.getElementById("preferredYear").value,

        meetingDate: document.getElementById("meetingDate").value,

        meetingTime: document.getElementById("meetingTime").value,

        location: document.getElementById("location").value,

        maxMembers: document.getElementById("maxMembers").value,

        frequency: document.getElementById("frequency").value,

        privacy: document.getElementById("privacy").value,

        description: document.getElementById("description").value,

        rules: document.getElementById("rules").value,

        ownerEmail: currentUser.email,

        members:[currentUser.email]

    };

    let groups = JSON.parse(localStorage.getItem("groups")) || [];

    groups.push(group);

    localStorage.setItem("groups", JSON.stringify(groups));

    addNotification(
    "You created the group: " + group.groupName
);

    alert("Study Group Created Successfully!");

    form.reset();

});


document.addEventListener("DOMContentLoaded", function () {
    loadSubjects();
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


function loadSubjects() {

    const subjectSelect =
        document.getElementById("subject");

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    subjectSelect.innerHTML = "";

    courses.forEach(function(course){

        subjectSelect.innerHTML += `
            <option value="${course.subject}">
                ${course.subject}
            </option>
        `;

    });

    loadCourseCodes();

}


function loadCourseCodes() {

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    const subject =
        document.getElementById("subject").value;

    const courseSelect =
        document.getElementById("courseCode");

    courseSelect.innerHTML = "";

    courses.forEach(function(course){

        if(course.subject === subject){

            courseSelect.innerHTML += `
                <option value="${course.courseCode}">
                    ${course.courseCode}
                </option>
            `;

        }

    });

}

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

/* ===========================
   Mobile Menu
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn && navLinks){

        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {

            if(
                !menuBtn.contains(e.target) &&
                !navLinks.contains(e.target)
            ){
                navLinks.classList.remove("show");
            }

        });

    }

});