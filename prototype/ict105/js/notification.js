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


function displayNotifications() {

    const container =
        document.getElementById("notificationList");

        const title =
    document.getElementById("notificationTitle");

    if (!container) return;

    const notifications =
        JSON.parse(localStorage.getItem("notifications")) || [];

        if (title) {

    title.textContent =
        `Recent Notifications (${notifications.length})`;

}

    if (notifications.length === 0) {

        container.innerHTML = `
            <div class="notification-item">
                <div class="notification-content">
                    <h3>No Notifications</h3>
                    <p>No notifications yet.</p>
                </div>
            </div>
        `;

        return;
    }

    container.innerHTML = "";

    notifications.forEach(function(notification){

        container.innerHTML += `

        <div class="notification-item ${notification.read ? "" : "unread"}">

            <div class="notification-icon success">

                <i class="fa-solid fa-bell"></i>

            </div>

            <div class="notification-content">

                <h3>${notification.read ? "Read" : "New Notifications"}</h3>

                <p>${notification.message}</p>

                <span>${notification.time}</span>

            </div>

        </div>

        `;

    });

}



document.addEventListener("DOMContentLoaded", function () {
    displayMyGroups();
    displayNotifications();
});

function displayMyGroups() {
    const container =
        document.getElementById("myGroupsContainer");

    const emptyMessage =
        document.getElementById("emptyMyGroupsMessage");

    if (!container) {
        return;
    }

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    if (!currentUser) {
        container.innerHTML = `
            <div class="login-message">
                <p>Please login to view your study groups.</p>

                <a href="login.html" class="primary-btn">
                    Login
                </a>
            </div>
        `;

        if (emptyMessage) {
            emptyMessage.style.display = "none";
        }

        return;
    }

    const groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    const userEmail = currentUser.email;

    const joinedGroups = groups.filter(function (group) {
        const members = Array.isArray(group.members)
            ? group.members
            : [];

        return members.some(function (member) {
            if (typeof member === "string") {
                return member === userEmail;
            }

            return member.email === userEmail;
        });
    });

    if (joinedGroups.length === 0) {
        container.innerHTML = "";

        if (emptyMessage) {
            emptyMessage.style.display = "block";
        }

        return;
    }

    if (emptyMessage) {
        emptyMessage.style.display = "none";
    }

    container.innerHTML = joinedGroups
        .map(function (group) {
            const members = Array.isArray(group.members)
                ? group.members
                : [];

            const maxMembers =
                group.maxMembers ||
                group.maximumMembers ||
                group.capacity ||
                0;

            return `
                <div class="my-group-card">

                    <span class="group-badge">
                        ${group.subject ||
                          group.category ||
                          "General"}
                    </span>

                    <h3>
                        ${group.groupName ||
                          group.name ||
                          "Unnamed Group"}
                    </h3>

                    <p class="group-description">
                        ${group.description ||
                          "No description available."}
                    </p>

                    <div class="group-details-info">

                        <p>
                            <strong>Course:</strong>
                            ${group.courseCode ||
                              group.course ||
                              "Not available"}
                        </p>

                        <p>
                            <strong>Members:</strong>
                            ${members.length} / ${maxMembers}
                        </p>

                        <p>
                            <strong>Location:</strong>
                            ${group.location ||
                              group.studyMode ||
                              "Not available"}
                        </p>

                    </div>

                    <button type="button"
                            class="view-group-btn"
                            onclick="openGroupDetails('${group.id}')">

                        View Details

                    </button>

                    <button type="button"
                            class="leave-group-btn"
                            onclick="leaveGroup('${group.id}')">

                        Leave Group

                    </button>

                </div>
            `;
        })
        .join("");
}

function openGroupDetails(groupId) {
    localStorage.setItem("selectedGroupId", groupId);

    window.location.href = "group-details.html";
}

function leaveGroup(groupId) {
    const currentUser =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    if (!currentUser) {
        alert("Please login first.");
        window.location.href = "login.html";
        return;
    }

    const confirmLeave = confirm(
        "Are you sure you want to leave this group?"
    );

    if (!confirmLeave) {
        return;
    }

    const groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    const groupIndex = groups.findIndex(function (group) {
        return String(group.id) === String(groupId);
    });

    if (groupIndex === -1) {
        alert("Group was not found.");
        return;
    }

    const userEmail = currentUser.email;

    const members = Array.isArray(groups[groupIndex].members)
        ? groups[groupIndex].members
        : [];

    groups[groupIndex].members = members.filter(function (member) {
        if (typeof member === "string") {
            return member !== userEmail;
        }

        return member.email !== userEmail;
    });

    localStorage.setItem(
        "groups",
        JSON.stringify(groups)
    );

    addNotification(
    "You left the group: " +
    groups[groupIndex].groupName
);

    alert("You have left the group successfully.");

    displayMyGroups();
}


document.addEventListener("DOMContentLoaded", function () {
    updateNavbarAuth();
});


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


function markAllAsRead() {

    let notifications =
        JSON.parse(localStorage.getItem("notifications")) || [];

    notifications.forEach(function(notification){

        notification.read = true;

    });

    localStorage.setItem(
        "notifications",
        JSON.stringify(notifications)
    );

    displayNotifications();

}


function clearNotifications() {

    const confirmClear = confirm(
        "Are you sure you want to clear all notifications?"
    );

    if (!confirmClear) {
        return;
    }

    localStorage.removeItem("notifications");

    displayNotifications();

}


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