// ==============================
// Smart Study Group Finder
// Database Manager
// ==============================

// Users
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Current Login User
function setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function logoutUser() {
    localStorage.removeItem("currentUser");
}

// Groups
function getGroups() {
    return JSON.parse(localStorage.getItem("groups")) || [];
}

function saveGroups(groups) {
    localStorage.setItem("groups", JSON.stringify(groups));
}

// Joined Groups
function getJoinedGroups() {
    return JSON.parse(localStorage.getItem("joinedGroups")) || [];
}

function saveJoinedGroups(groups) {
    localStorage.setItem("joinedGroups", JSON.stringify(groups));
}

// Notifications
function getNotifications() {
    return JSON.parse(localStorage.getItem("notifications")) || [];
}

function saveNotifications(list) {
    localStorage.setItem("notifications", JSON.stringify(list));
}

if (!localStorage.getItem("courses")) {

    const defaultCourses = [

        {
            subject: "Programming",
            courseCode: "ICT105"
        },

        {
            subject: "Database",
            courseCode: "ICT205"
        },

        {
            subject: "Mathematics",
            courseCode: "MATH101"
        },

        {
            subject: "English",
            courseCode: "ENG101"
        }

    ];

    localStorage.setItem(
        "courses",
        JSON.stringify(defaultCourses)
    );

}