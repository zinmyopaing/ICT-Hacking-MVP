const form = document.getElementById("createGroupForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUser){
        alert("Please login first.");
        window.location.href="login.html";
        return;
    }

    const group = {

        id: Date.now(),

        groupName: document.getElementById("groupName").value,

        courseCode: document.getElementById("courseCode").value,

        subject: document.getElementById("subject").value,

        studyMode: document.getElementById("studyMode").value,

        skillLevel: document.getElementById("skillLevel").value,

        preferredYear: document.getElementById("preferredYear").value,

        meetingDate: document.getElementById("meetingDate").value,

        meetingTime: document.getElementById("meetingTime").value,

        location: document.getElementById("location").value,

        maxMembers: document.getElementById("maxMembers").value,

        frequency: document.getElementById("frequency").value,

        privacy: document.getElementById("privacy").value,

        description: document.getElementById("description").value,

        rules: document.getElementById("rules").value,

        owner: currentUser.email,

        members:[currentUser.email]

    };

    let groups = JSON.parse(localStorage.getItem("groups")) || [];

    groups.push(group);

    localStorage.setItem("groups", JSON.stringify(groups));

    alert("Study Group Created Successfully!");

    form.reset();

});