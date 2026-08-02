// =====================================
// Smart Study Group Finder
// My Profile Page
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Please login first.");
        window.location.href = "login.html";
        return;
    }

    const groups =
        JSON.parse(localStorage.getItem("groups")) || [];

    const userName =
        document.getElementById("userName");

    const userEmail =
        document.getElementById("userEmail");

    const joinedCount =
        document.getElementById("joinedCount");

    const createdCount =
        document.getElementById("createdCount");

    const joinedGroupsContainer =
        document.getElementById("joinedGroups");

    const logoutButton =
        document.getElementById("logoutBtn");

    // -----------------------------
    // Show user information
    // -----------------------------

    if (userName) {
        userName.textContent =
            currentUser.fullName || currentUser.name || "Student";
    }

    if (userEmail) {
        userEmail.textContent = currentUser.email;
    }


    const profileUniversity =
    document.getElementById("profileUniversity");

const profileMajor =
    document.getElementById("profileMajor");

const profileYear =
    document.getElementById("profileYear");

const profileLocation =
    document.getElementById("profileLocation");

if (profileUniversity) {
    profileUniversity.textContent =
        currentUser.university || "Not set";
}

if (profileMajor) {
    profileMajor.textContent =
        currentUser.major || "Not set";
}

if (profileYear) {
    profileYear.textContent =
        currentUser.year || "Not set";
}

if (profileLocation) {
    profileLocation.textContent =
        currentUser.location || "Not set";
}

const profileBio =
    document.getElementById("profileBio");

if (profileBio) {

    profileBio.textContent =
        currentUser.bio || "No bio available.";

}

const profileLanguages =
    document.getElementById("profileLanguages");

if (profileLanguages) {
    profileLanguages.textContent =
        currentUser.languages || "Not set";
}

const studentId =
    document.getElementById("studentId");

if (studentId) {
    studentId.textContent =
        currentUser.studentId || "Not set";
}

const academicUniversity =
    document.getElementById("academicUniversity");

const academicMajor =
    document.getElementById("academicMajor");

const academicYear =
    document.getElementById("academicYear");

if (academicUniversity) {
    academicUniversity.textContent =
        currentUser.university || "Not set";
}

if (academicMajor) {
    academicMajor.textContent =
        currentUser.major || "Not set";
}

if (academicYear) {
    academicYear.textContent =
        currentUser.year || "Not set";
}


    // -----------------------------
    // Find created and joined groups
    // -----------------------------

    const createdGroups = groups.filter(function (group) {
        return group.owner === currentUser.email;
    });

    const joinedGroups = groups.filter(function (group) {
        return (
            Array.isArray(group.members) &&
            group.members.includes(currentUser.email)
        );
    });

    if (createdCount) {
        createdCount.textContent = createdGroups.length;
    }

    if (joinedCount) {
        joinedCount.textContent = joinedGroups.length;
    }

    // -----------------------------
    // Display joined group cards
    // -----------------------------

    if (joinedGroupsContainer) {

        joinedGroupsContainer.innerHTML = "";

        if (joinedGroups.length === 0) {

            joinedGroupsContainer.innerHTML = `
                <div class="group-card">
                    <h3>No Joined Groups</h3>
                    <p>You have not joined any study groups yet.</p>
                    <a href="find-group.html" class="group-btn">
                        Find Groups
                    </a>
                </div>
            `;

        } else {

            joinedGroups.forEach(function (group) {

                joinedGroupsContainer.innerHTML += `
                    <div class="group-card">

                        <h3>${group.groupName}</h3>

                        <p>
                            ${group.courseCode} • ${group.subject}
                        </p>

                        <span>
                            <i class="fa-solid fa-users"></i>
                            ${group.members.length}/${group.maxMembers} Members
                        </span>

                        <p>
                            <i class="fa-solid fa-location-dot"></i>
                            ${group.location}
                        </p>

                        <p>
                            <i class="fa-regular fa-clock"></i>
                            ${group.meetingDate} • ${group.meetingTime}
                        </p>

                    </div>
                `;
            });
        }
    }

    // -----------------------------
    // Logout
    // -----------------------------

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            const confirmLogout =
                confirm("Are you sure you want to logout?");

            if (!confirmLogout) {
                return;
            }

            localStorage.removeItem("currentUser");

            alert("Logout successful.");

            window.location.href = "login.html";
        });
    }

// -----------------------------
// Profile Image
// -----------------------------

const profileImage =
    document.getElementById("profileImage");

const profileImageInput =
    document.getElementById("profileImageInput");

// Load saved image
if (currentUser.profileImage) {

    profileImage.src = currentUser.profileImage;

}

// Click image to choose photo
profileImage.addEventListener("click", function () {

    profileImageInput.click();

});

// Save selected image
profileImageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        profileImage.src = e.target.result;

        currentUser.profileImage = e.target.result;

        localStorage.setItem(
            "currentUser",
            JSON.stringify(currentUser)
        );

        // Update users array
        const users =
            JSON.parse(localStorage.getItem("users")) || [];

        const index = users.findIndex(function(user){

            return user.email === currentUser.email;

        });

        if(index !== -1){

            users[index].profileImage =
                currentUser.profileImage;

            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );

        }

    };

    reader.readAsDataURL(file);

});


// -----------------------------
// Edit Profile
// -----------------------------

const editButton =
    document.querySelector(".primary-btn");

const modal =
    document.getElementById("editProfileModal");

const closeModal = 
    document.querySelector(".close-modal");

const saveProfileBtn =
    document.getElementById("saveProfileBtn");

editButton.addEventListener("click", function () {

    modal.style.display = "flex";

    document.getElementById("editFullName").value =
        currentUser.fullName || "";

    document.getElementById("editUniversity").value =
        currentUser.university || "";

    document.getElementById("editMajor").value =
        currentUser.major || "";

    document.getElementById("editYear").value =
        currentUser.year || "";

    document.getElementById("editLocation").value =
        currentUser.location || "";

    document.getElementById("editStudentId").value =
    currentUser.studentId || "";

    document.getElementById("editLanguages").value =
    currentUser.languages || "";

    document.getElementById("editBio").value =
        currentUser.bio || "";

});


saveProfileBtn.addEventListener("click", function () {

    currentUser.fullName =
        document.getElementById("editFullName").value;

    currentUser.university =
        document.getElementById("editUniversity").value;

    currentUser.major =
        document.getElementById("editMajor").value;

    currentUser.year =
        document.getElementById("editYear").value;

    currentUser.location =
        document.getElementById("editLocation").value;

    currentUser.studentId =
    document.getElementById("editStudentId").value;

    currentUser.languages =
    document.getElementById("editLanguages").value;

    currentUser.bio =
        document.getElementById("editBio").value;

    localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
    );

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const index =
        users.findIndex(user =>
            user.email === currentUser.email
        );

    if (index !== -1) {

        users[index] = currentUser;

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

    }

    document.getElementById("userName").textContent =
        currentUser.fullName;

    alert("Profile updated successfully.");

    modal.style.display = "none";

    location.reload();

});

closeModal.addEventListener("click", function () {

    modal.style.display = "none";

});

window.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});


});



/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

/*=========================================
        STICKY NAVBAR SHADOW
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 8px 20px rgba(0,0,0,.10)";

    } else {

        header.style.boxShadow =
            "0 3px 15px rgba(0,0,0,.05)";

    }

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================================
        SCROLL ANIMATION
=========================================*/

const fadeElements =
    document.querySelectorAll(
        ".about-card, .info-card, .skill, .group-card, .activity-card, .achievement-card, .stat-card"
    );

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");
            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

fadeElements.forEach(item => {

    observer.observe(item);

});

/*=========================================
        PROFILE IMAGE HOVER
=========================================*/

const profileImage =
    document.querySelector(".profile-image img");

if (profileImage) {

    profileImage.addEventListener("mouseenter", () => {

        profileImage.style.transform =
            "scale(1.05)";

        profileImage.style.transition =
            ".35s";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform =
            "scale(1)";

    });

}

/*=========================================
        BUTTON EFFECTS
=========================================*/

document.querySelectorAll(
    ".primary-btn, .secondary-btn"
).forEach(btn => {

    btn.addEventListener("mousedown", () => {

        btn.style.transform =
            "scale(.96)";

    });

    btn.addEventListener("mouseup", () => {

        btn.style.transform =
            "scale(1)";

    });

});



/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const currentPage =
    window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters =
    document.querySelectorAll(".stat-card h2");

const counterObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter =
                entry.target;

            const target =
                parseFloat(counter.innerText);

            const isDecimal =
                counter.innerText.includes(".");

            let current = 0;

            const speed = target / 50;

            const updateCounter = () => {

                if (current < target) {

                    current += speed;

                    if (isDecimal) {

                        counter.innerText =
                            current.toFixed(1);

                    } else {

                        counter.innerText =
                            Math.ceil(current);

                    }

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText =
                        target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    });

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*=========================================
        CURRENT YEAR
=========================================*/

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}

console.log("My Profile Page Loaded Successfully.");


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


document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn && navLinks){

        menuBtn.addEventListener("click",(e)=>{
            e.stopPropagation();
            navLinks.classList.toggle("show");
        });

        document.addEventListener("click",(e)=>{

            if(
                !menuBtn.contains(e.target) &&
                !navLinks.contains(e.target)
            ){
                navLinks.classList.remove("show");
            }

        });

    }

});