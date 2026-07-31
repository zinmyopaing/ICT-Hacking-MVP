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





const groupContainer =
    document.getElementById("groupContainer");

const groups =
    JSON.parse(localStorage.getItem("groups")) || [];

const currentUser =
    JSON.parse(localStorage.getItem("currentUser")) ||
    JSON.parse(localStorage.getItem("loggedInUser"));

    

if (groupContainer) {
    groupContainer.innerHTML = "";

    groups.forEach(group => {

        const ownerEmail =
        group.ownerEmail ||
        group.owner ||
        group.creatorEmail ||
        group.createdBy ||
        "";

    const isOwner =
        currentUser &&
        ownerEmail &&
        String(ownerEmail).toLowerCase() ===
        String(currentUser.email).toLowerCase();

    groupContainer.innerHTML += `
    
    <div class="group-card">

        <div class="group-content">

            <span class="badge">
                ${group.subject}
            </span>

            <h3>${group.groupName}</h3>

            <p>
                <i class="fa-solid fa-book"></i>
                ${group.courseCode}
            </p>

            <p>
                <i class="fa-solid fa-users"></i>
                ${group.members.length}/${group.maxMembers} Members
            </p>

            <p>
                <i class="fa-solid fa-location-dot"></i>
                ${group.location}
            </p>

            <p>
                <i class="fa-regular fa-clock"></i>
                ${group.meetingDate} • ${group.meetingTime}
            </p>


            <div class="group-actions">

    <button class="group-btn"
            onclick="viewDetails('${group.id}')">
        View Details
    </button>

    <button class="group-btn"
            onclick="joinGroup('${group.id}')">
        Join Group
    </button>

    ${
        isOwner
            ? `
                <button class="edit-group-btn"
                        onclick="editGroup('${group.id}')">
                    Edit Group
                </button>

                <button class="delete-group-btn"
                        onclick="deleteGroup('${group.id}')">
                    Delete Group
                </button>
            `
            : ""
    }

</div>


        </div>

    </div>

    `;

});


    }

function joinGroup(groupId) {

    let groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    let currentUser =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    if (!currentUser) {
        alert("Please login before joining a group.");
        window.location.href = "login.html";
        return;
    }

    let group = groups.find(
        g => String(g.id) === String(groupId)
    );

    
    if(!group){

        alert("Group not found!");

        return;

    }

    if(group.members.includes(currentUser.email)){

        alert("You already joined this group.");

        return;

    }

    if(group.members.length >= group.maxMembers){

        alert("Group is full!");

        return;

    }

    group.members.push(currentUser.email);

    localStorage.setItem("groups", JSON.stringify(groups));

    addNotification(
    "You joined the group: " +
    group.groupName
);

    alert("Joined Successfully!");

    location.reload();

}

function viewDetails(groupId) {

    localStorage.setItem("selectedGroupId" , groupId);
    window.location.href = "group-details.html";

}


document.addEventListener("DOMContentLoaded", function () {
    loadSubjectFilter();
    loadCourseFilter();
    
    updateNavbarAuth();

    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", logoutUser);
    }
});

function updateNavbarAuth() {
    const authButton = document.getElementById("authButton");
    const logoutItem = document.getElementById("logoutItem");

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

        if (logoutItem) {
            logoutItem.style.display = "block";
        }
    } else {
        authButton.textContent = "Login";
        authButton.href = "login.html";

        if (logoutItem) {
            logoutItem.style.display = "none";
        }
    }
}



function logoutUser() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("loggedInUser");

    alert("You have logged out successfully.");

    window.location.href = "login.html";
}




function editGroup(groupId) {
    localStorage.setItem("editGroupId", groupId);
    window.location.href = "edit-group.html";
}

function deleteGroup(groupId) {
    const currentUser =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    if (!currentUser) {
        alert("Please login first.");
        window.location.href = "login.html";
        return;
    }

    let groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    const selectedGroup = groups.find(function (group) {
        return String(group.id) === String(groupId);
    });

    if (!selectedGroup) {
        alert("Group not found.");
        return;
    }

    const ownerEmail =
        selectedGroup.ownerEmail ||
        selectedGroup.owner ||
        selectedGroup.creatorEmail ||
        selectedGroup.createdBy ||
        "";

    if (
        String(ownerEmail).toLowerCase() !==
        String(currentUser.email).toLowerCase()
    ) {
        alert("You can only delete your own group.");
        return;
    }

    const confirmDelete = confirm(
        "Are you sure you want to delete this group?"
    );

    if (!confirmDelete) {
        return;
    }

    groups = groups.filter(function (group) {
        return String(group.id) !== String(groupId);
    });

    localStorage.setItem(
        "groups",
        JSON.stringify(groups)
    );

    addNotification(
    "You deleted the group: " +
    selectedGroup.groupName
);

    alert("Group deleted successfully.");

    location.reload();
}






function applyFilters() {

    const keyword =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const subject =
        document.getElementById("subjectFilter")
        .value;

    const course = 
        document.getElementById("courseFilter")
        .value;
    
    const availability =
    document.getElementById("availabilityFilter")
    .value;

    const cards =
        document.querySelectorAll(".group-card");

    cards.forEach(function(card){

        const text =
            card.innerText.toLowerCase();

        const matchSearch =
            text.includes(keyword);

        const matchSubject =
            subject === "all" ||
            text.includes(subject.toLowerCase());

        const matchCourse =
            course === "all" ||
            text.includes(course.toLowerCase());

        const matchAvailability =
            availability === "all" ||
            text.includes(availability.toLowerCase());

        if(matchSearch && matchSubject && matchCourse && matchAvailability){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

function loadSubjectFilter() {

    const subjectFilter =
        document.getElementById("subjectFilter");

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    subjectFilter.innerHTML =
        '<option value="">All Subjects</option>';

    courses.forEach(function(course){

        subjectFilter.innerHTML += `

            <option value="${course.subject}">
                ${course.subject}
            </option>

        `;

    });

}


function loadCourseFilter() {

    const courseFilter =
        document.getElementById("courseFilter");

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    courseFilter.innerHTML =
        '<option value="">All Courses</option>';

    courses.forEach(function(course){

        courseFilter.innerHTML += `

            <option value="${course.courseCode}">
                ${course.courseCode}
            </option>

        `;

    });

}

function updateCourseFilter() {

    const subject =
        document.getElementById("subjectFilter").value;

    const courseFilter =
        document.getElementById("courseFilter");

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    courseFilter.innerHTML =
        '<option value="">All Courses</option>';

    courses.forEach(function(course){

        if(subject === "" || course.subject === subject){

            courseFilter.innerHTML += `

                <option value="${course.courseCode}">
                    ${course.courseCode}
                </option>

            `;

        }

    });

}


/* ===========================
   Mobile Menu
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navLinks.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {

            if (
                !menuBtn.contains(e.target) &&
                !navLinks.contains(e.target)
            ) {
                navLinks.classList.remove("show");
            }

        });

    }

});