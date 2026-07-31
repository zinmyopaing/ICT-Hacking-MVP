// ===============================
// Admin Dashboard
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    checkAdmin();

    loadAdminName();

    loadStatistics();

    loadRecentUsers();

    displayAllUsers();

    displayGroups();

    setupLogout();



});


// ===============================
// Admin Security
// ===============================

function checkAdmin() {

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || currentUser.role !== "admin") {

        alert("Access Denied!");

        window.location.href = "login.html";

    }

}


// ===============================
// Admin Name
// ===============================

function loadAdminName() {

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    document.getElementById("adminName").textContent =
        currentUser.fullName;

}


// ===============================
// Dashboard Statistics
// ===============================

function loadStatistics() {

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    const notifications =
        JSON.parse(localStorage.getItem("notifications")) || [];

    document.getElementById("totalUsers").textContent =
        users.length;

    document.getElementById("totalGroups").textContent =
        groups.length;

    document.getElementById("totalCourses").textContent =
        courses.length;

    document.getElementById("totalNotifications").textContent =
        notifications.length;

}

// ===============================
// Recent Users
// ===============================

function loadRecentUsers() {

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const table =
        document.getElementById("usersTable");

    table.innerHTML = "";

    users.slice(-5).reverse().forEach(user => {

        table.innerHTML += `

        <tr>

            <td>${user.fullName}</td>

            <td>${user.email}</td>

            <td>${user.role}</td>

        </tr>

        `;

    });

}

// ===============================
// Logout
// ===============================

function setupLogout() {

    document
        .getElementById("adminLogout")
        .addEventListener("click", function (e) {

            e.preventDefault();

            localStorage.removeItem("currentUser");

            alert("Logged Out Successfully");

            window.location.href = "login.html";

        });

}

// ===============================
// Display All Users
// ===============================

function displayAllUsers(search = "") {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const table = document.getElementById("manageUsersTable");

    table.innerHTML = "";

    const filteredUsers = users.filter(user =>
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    filteredUsers.forEach((user, index) => {

        table.innerHTML += `

        <tr>

            <td>${user.fullName}</td>

            <td>${user.studentId || "-"}</td>

            <td>${user.email}</td>

            <td>${user.role}</td>

            <td>

            ${
                user.role === "admin"

                ?

                `<span class="lock-text">🔒 Admin</span>`

                :

                `<button
                    class="delete-btn"
                    onclick="deleteUser(${index})">
                    Delete
                </button>`
            }

            </td>

        </tr>

        `;

    });

}


// ===============================
// Delete User
// ===============================

function deleteUser(index){

    if(!confirm("Delete this user?")){

        return;

    }

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    users.splice(index,1);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    loadStatistics();

    loadRecentUsers();

    displayAllUsers();

}



// ===============================
// Search User
// ===============================

document.addEventListener("DOMContentLoaded",()=>{

    const search =
        document.getElementById("searchUser");

    if(search){

        search.addEventListener("keyup",function(){

            displayAllUsers(this.value);

        });

    }

});

// ===============================
// Display Study Groups
// ===============================

function displayGroups(search = "") {

    const groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    const table =
        document.getElementById("groupsTable");

    table.innerHTML = "";

    const filteredGroups = groups.filter(group =>
        group.groupName.toLowerCase().includes(search.toLowerCase())
    );

    filteredGroups.forEach((group, index) => {

        table.innerHTML += `

        <tr>

            <td>${group.groupName}</td>

            <td>${group.course}</td>

            <td>${group.createdBy}</td>

            <td>${group.members?.length || 0}</td>

            <td>

                <button
                    class="delete-btn"
                    onclick="deleteGroup(${index})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}

function deleteGroup(index){

    if(!confirm("Delete this study group?")){

        return;

    }

    let groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    groups.splice(index,1);

    localStorage.setItem(
        "groups",
        JSON.stringify(groups)
    );

    loadStatistics();

    displayGroups();

}

const searchGroup =
    document.getElementById("searchGroup");

if(searchGroup){

    searchGroup.addEventListener("keyup",function(){

        displayGroups(this.value);

    });

}

// ===============================
// Mobile Sidebar
// ===============================

const menuToggle =
    document.getElementById("menuToggle");

const sidebar =
    document.querySelector(".sidebar");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        sidebar.classList.toggle("show");

    });

}

// ===============================
// Admin Profile
// ===============================

const adminProfile =
    document.getElementById("adminProfile");

const adminModal =
    document.getElementById("adminModal");

const closeAdminModal =
    document.getElementById("closeAdminModal");

if(adminProfile){

    adminProfile.addEventListener("click",()=>{

        const admin =
            JSON.parse(localStorage.getItem("currentUser"));

        document.getElementById("profileName").textContent =
            admin.fullName;

        document.getElementById("profileEmail").textContent =
            admin.email;

        document.getElementById("profileRole").textContent =
            admin.role;

        document.getElementById("profileStudentId").textContent =
            admin.studentId || "-";

        adminModal.style.display="flex";

    });

}

closeAdminModal.onclick=function(){

    adminModal.style.display="none";

}

window.onclick=function(e){

    if(e.target===adminModal){

        adminModal.style.display="none";

    }

}