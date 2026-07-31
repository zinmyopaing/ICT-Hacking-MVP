let editIndex = -1;


document.addEventListener("DOMContentLoaded", function () {

    loadCourses();

    updateNavbarAuth();

    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", logoutUser);
    }

});

function loadCourses() {

    const courseList = document.getElementById("courseList");

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    courseList.innerHTML = "";

    courses.forEach(function (course, index) {

        courseList.innerHTML += `

<div class="course-item">

    <div class="course-info">

        <h3>${course.subject}</h3>

        <p>${course.courseCode}</p>

    </div>

    <div class="course-actions">

        <button onclick="editCourse(${index})">
            Edit
        </button>

        <button onclick="deleteCourse(${index})">
            Delete
        </button>

    </div>

</div>

`;

    });

}

function addCourse() {

    const subject =
        document.getElementById("subject").value.trim();

    const courseCode =
        document.getElementById("courseCode").value.trim();

    if (subject === "" || courseCode === "") {

        alert("Please enter Subject and Course Code.");
        return;

    }

    let courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    const exists = courses.some(function(course, index){

    return index !== editIndex &&
           course.subject.toLowerCase() === subject.toLowerCase();

});

    if (exists) {

        alert("This subject already exists.");
        return;

    }

    if (editIndex === -1) {

    courses.push({

        subject: subject,
        courseCode: courseCode

    });

} else {

    courses[editIndex] = {

        subject: subject,
        courseCode: courseCode

    };

    editIndex = -1;

    document.getElementById("addButton").textContent =
        "Add Course";

}

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

    document.getElementById("subject").value = "";
    document.getElementById("courseCode").value = "";

    loadCourses();

    alert("Course added successfully!");

}


function deleteCourse(index) {

    let courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    const confirmDelete = confirm(
        "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) {
        return;
    }

    courses.splice(index, 1);

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

    loadCourses();

    alert("Course deleted successfully!");

}


function editCourse(index) {

    let courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    document.getElementById("subject").value =
        courses[index].subject;

    document.getElementById("courseCode").value =
        courses[index].courseCode;

    editIndex = index;

    document.getElementById("addButton").textContent =
        "Update Course";

}

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