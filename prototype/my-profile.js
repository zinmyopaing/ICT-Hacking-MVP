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
    // Footer year
    // -----------------------------

    const yearElement =
        document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

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
        EDIT PROFILE
=========================================*/

const editBtn =
    document.querySelector(".primary-btn");

if (editBtn) {

    editBtn.addEventListener("click", () => {

        alert(
            "Edit Profile feature will be available in the next version."
        );

    });

}

/*=========================================
        LOGOUT
=========================================*/

const logoutBtn =
    document.querySelector(".secondary-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout =
            confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            window.location.href =
                "login.html";

        }

    });

}

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