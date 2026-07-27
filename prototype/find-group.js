const groupContainer = document.getElementById("groupContainer");

const groups = JSON.parse(localStorage.getItem("groups")) || [];

groupContainer.innerHTML = "";

groups.forEach(group => {

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


            <div class = "group-actions">

            <button class="group-btn" onclick= "viewDetails(${group.id})">
                View Details
            </button>

            <button class="group-btn" onclick= "joinGroup(${group.id})">
                Join Group
            </button>

            </div>


        </div>

    </div>

    `;

});

function joinGroup(groupId){

    let groups = JSON.parse(localStorage.getItem("groups")) || [];

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let group = groups.find(g => g.id === groupId);

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

    alert("Joined Successfully!");

    location.reload();

}

function viewDetails(groupId) {

    localStorage.setItem("selectedGroupId" , groupId);
    window.location.href = "group-details.html";

}