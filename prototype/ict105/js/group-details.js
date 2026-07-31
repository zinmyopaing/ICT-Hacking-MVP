document.addEventListener("DOMContentLoaded", function () {
    const groups = JSON.parse(localStorage.getItem("groups")) || [];
    const selectedGroupId = localStorage.getItem("selectedGroupId");

    const selectedGroup = groups.find(function (group) {
        return String(group.id) === String(selectedGroupId);
    });

    if (!selectedGroup) {
        alert("Group data was not found.");
        window.location.href = "find-group.html";
        return;
    }

    const members = Array.isArray(selectedGroup.members)
        ? selectedGroup.members
        : [];

    const maximumMembers =
        selectedGroup.maxMembers ||
        selectedGroup.maximumMembers ||
        selectedGroup.capacity ||
        0;

    document.getElementById("groupName").textContent =
        selectedGroup.groupName ||
        selectedGroup.name ||
        "Unnamed Group";

    document.getElementById("groupSubject").textContent =
        selectedGroup.subject ||
        selectedGroup.category ||
        "General";

    document.getElementById("groupDescription").textContent =
        selectedGroup.description ||
        "No description available.";

    document.getElementById("groupCourse").textContent =
        selectedGroup.courseCode ||
        selectedGroup.course ||
        "Not available";

    document.getElementById("groupMembers").textContent =
        `${members.length} / ${maximumMembers}`;

    document.getElementById("groupLeader").textContent =
        selectedGroup.leader ||
        selectedGroup.ownerName ||
        selectedGroup.createdBy ||
        "Not available";

    document.getElementById("groupLocation").textContent =
        selectedGroup.location ||
        selectedGroup.studyMode ||
        "Not available";

    document.getElementById("groupDate").textContent =
        selectedGroup.meetingDate ||
        selectedGroup.date ||
        "Not available";

    document.getElementById("groupTime").textContent =
        selectedGroup.meetingTime ||
        selectedGroup.time ||
        "Not available";

    document
        .getElementById("joinGroupBtn")
        .addEventListener("click", function () {
            joinSelectedGroup(selectedGroup.id);
        });
});


function joinSelectedGroup(groupId) {
    const currentUser =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    if (!currentUser) {
        alert("Please login before joining a group.");
        window.location.href = "login.html";
        return;
    }

    const groups = JSON.parse(localStorage.getItem("groups")) || [];

    const groupIndex = groups.findIndex(function (group) {
        return String(group.id) === String(groupId);
    });

    if (groupIndex === -1) {
        alert("Group was not found.");
        return;
    }

    if (!Array.isArray(groups[groupIndex].members)) {
        groups[groupIndex].members = [];
    }

    const userEmail = currentUser.email;

    const alreadyJoined = groups[groupIndex].members.some(function (member) {
        if (typeof member === "string") {
            return member === userEmail;
        }

        return member.email === userEmail;
    });

    if (alreadyJoined) {
        alert("You have already joined this group.");
        return;
    }

    const maximumMembers =
        groups[groupIndex].maxMembers ||
        groups[groupIndex].maximumMembers ||
        groups[groupIndex].capacity ||
        0;

    if (
        maximumMembers > 0 &&
        groups[groupIndex].members.length >= maximumMembers
    ) {
        alert("This group is already full.");
        return;
    }

    groups[groupIndex].members.push(userEmail);

    localStorage.setItem("groups", JSON.stringify(groups));

    alert("You joined the group successfully.");

    location.reload();
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