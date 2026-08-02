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


document.addEventListener("DOMContentLoaded", function () {

    loadSubjects();

    loadGroupData();

    const editForm = document.getElementById("editGroupForm");

    if (editForm) {
        editForm.addEventListener("submit", updateGroup);
    }

});

function loadGroupData() {
    const editGroupId =
        localStorage.getItem("editGroupId");

    if (!editGroupId) {
        alert("No group selected.");
        window.location.href = "find-group.html";
        return;
    }

    const groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    const selectedGroup = groups.find(function (group) {
        return String(group.id) === String(editGroupId);
    });

    if (!selectedGroup) {
        alert("Group not found.");
        window.location.href = "find-group.html";
        return;
    }

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(localStorage.getItem("loggedInUser"));

    if (!currentUser) {
        alert("Please login first.");
        window.location.href = "login.html";
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
        alert("You can only edit your own group.");
        window.location.href = "find-group.html";
        return;
    }

    document.getElementById("groupName").value =
        selectedGroup.groupName || "";

    document.getElementById("subject").value =
        selectedGroup.subject || "";

        loadCourseCodes();

    document.getElementById("courseCode").value =
        selectedGroup.courseCode || "";

    document.getElementById("studyMode").value =
        selectedGroup.studyMode || "";

    document.getElementById("skillLevel").value =
        selectedGroup.skillLevel || "";

    document.getElementById("preferredYear").value =
        selectedGroup.preferredYear || "All Years";

    document.getElementById("meetingDate").value =
        selectedGroup.meetingDate || "";

    document.getElementById("meetingTime").value =
        selectedGroup.meetingTime || "";

    document.getElementById("location").value =
        selectedGroup.location || "";

    document.getElementById("maxMembers").value =
        selectedGroup.maxMembers || "";

    document.getElementById("frequency").value =
        selectedGroup.frequency || "Weekly";

    document.getElementById("privacy").value =
        selectedGroup.privacy || "Public Group";

    document.getElementById("description").value =
        selectedGroup.description || "";

    document.getElementById("rules").value =
        selectedGroup.rules || "";

    const agreeCheckbox =
        document.getElementById("agree");

    if (agreeCheckbox) {
        agreeCheckbox.checked = true;
    }
}


function updateGroup(event) {
    event.preventDefault();

    const editGroupId =
        localStorage.getItem("editGroupId");

    let groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    const groupIndex = groups.findIndex(function (group) {
        return String(group.id) === String(editGroupId);
    });

    if (groupIndex === -1) {
        alert("Group not found.");
        return;
    }

    const updatedMaxMembers =
        Number(document.getElementById("maxMembers").value);

    const currentMembers = Array.isArray(groups[groupIndex].members)
        ? groups[groupIndex].members
        : [];

    if (updatedMaxMembers < currentMembers.length) {
        alert(
            "Maximum members cannot be less than the current number of members."
        );
        return;
    }

    groups[groupIndex] = {
        ...groups[groupIndex],

        groupName:
            document.getElementById("groupName").value.trim(),

        courseCode:
            document.getElementById("courseCode").value.trim(),

        subject:
            document.getElementById("subject").value,

        studyMode:
            document.getElementById("studyMode").value,

        skillLevel:
            document.getElementById("skillLevel").value,

        preferredYear:
            document.getElementById("preferredYear").value,

        meetingDate:
            document.getElementById("meetingDate").value,

        meetingTime:
            document.getElementById("meetingTime").value,

        location:
            document.getElementById("location").value.trim(),

        maxMembers:
            updatedMaxMembers,

        frequency:
            document.getElementById("frequency").value,

        privacy:
            document.getElementById("privacy").value,

        description:
            document.getElementById("description").value.trim(),

        rules:
            document.getElementById("rules").value.trim(),

        updatedAt:
            new Date().toISOString()
    };

    localStorage.setItem(
        "groups",
        JSON.stringify(groups)
    );

    addNotification(
    "You updated the group: " +
    groups[groupIndex].groupName
);

    localStorage.removeItem("editGroupId");

    alert("Group updated successfully.");

    window.location.href = "find-group.html";
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