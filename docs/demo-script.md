# Demo Script

## Demo Objective

The purpose of this demo is to prove that the **Smart Study Group Finder** helps university students find, join, create, and manage study groups through a simple web-based workflow.

The demo will show that the prototype can:

- Introduce the user problem and product value.
- Register and log in a user.
- Display available study groups.
- Show complete group details.
- Allow a logged-in user to join a group.
- Allow users to create, edit, delete, and leave study groups.
- Display joined and created groups in the user profile.
- Show confirmation and validation messages.
- Support the main functional requirements of the project.

## Presenter Roles

| Member | Role in Demo | Part Presented |
|---|---|---|
| Zin Myo Paing | Presenter and Prototype Operator | Landing page, login, find groups, group details |
| Sai Naw Khay Li | User Workflow Presenter | Registration, join group, my study groups, leave group |
| Thiri Htet Htet Soe | Group Management Presenter | Create group, edit group, delete group |
| Ei Zin Phyo | Testing and Closing Presenter | Profile, testing evidence, improvement plan, closing statement |

## Demo Flow

| Step | Screen / Feature | What Presenter Says | Requirement ID | Expected User Value |
|---|---|---|---|---|
| 1 | Landing Page | “This is the Smart Study Group Finder landing page. It explains the problem, target users, key features, privacy note, and product value. The user can click Try Demo or Explore Study Groups to open the prototype.” | FR-13, FR-14, FR-15, FR-16 | The user quickly understands what the system does and why it is useful. |
| 2 | Homepage | “The homepage provides the main navigation to Find Groups, Create Group, Notifications, Profile, Login, and Logout.” | FR-13, FR-14 | The user can easily access the main system features. |
| 3 | Registration | “A new student can register by entering the required information. The system validates the form and stores the account data in Local Storage.” | FR-01, FR-10, FR-11 | The user can create an account and receive clear validation or confirmation messages. |
| 4 | Login | “The registered user logs in with their email and password. After login, the navigation changes from Login to the user name and displays Logout.” | FR-02, FR-11, FR-12 | The user receives a personalized and authenticated experience. |
| 5 | Find Groups | “The Find Groups page displays study groups stored in Local Storage. Each card shows the subject, group name, course code, member count, location, date, and time.” | FR-05, FR-08, FR-13 | The user can review available study groups in one central location. |
| 6 | View Group Details | “The user clicks View Details. The selected group ID is stored, and the details page displays the correct group information.” | FR-06, FR-11 | The user can review a group before deciding to join. |
| 7 | Join Group | “A logged-in user clicks Join Group. The system checks whether the group exists, whether the user already joined, and whether the group is full.” | FR-04, FR-10, FR-11 | The user can safely join a suitable group without duplication. |
| 8 | Notifications / My Study Groups | “The Notifications page includes a My Study Groups section. It displays the groups that the current user has joined.” | FR-12, FR-13 | The user can easily view and manage joined groups. |
| 9 | Leave Group | “The user can click Leave Group. The system asks for confirmation and removes the user from the group’s member list.” | FR-07, FR-11 | The user can leave a group when it is no longer suitable. |
| 10 | Create Group | “A logged-in student can create a new group by entering the group name, course code, subject, study mode, skill level, meeting date, time, location, capacity, description, and rules.” | FR-03, FR-10, FR-11 | The user can organize a new study group for classmates. |
| 11 | Owner-Only Controls | “The system checks the group owner’s email. Only the owner sees Edit Group and Delete Group buttons.” | FR-07, FR-15 | Group management actions are protected from unauthorized users. |
| 12 | Edit Group | “The owner clicks Edit Group. Existing group data is loaded into the form. After changes are submitted, the Local Storage record is updated.” | FR-07, FR-10, FR-11 | The owner can correct or update study group information. |
| 13 | Delete Group | “The owner clicks Delete Group. A confirmation message appears before the group is permanently removed.” | FR-07, FR-09, FR-11 | The owner or future admin can remove unnecessary records safely. |
| 14 | My Profile | “The profile page displays the current user’s name, email, joined group count, created group count, and dynamic group cards.” | FR-12, FR-13 | The user can see a summary of their account and study-group activity. |
| 15 | Logout | “The user clicks Logout. The current login data is removed, and the system returns to the login page.” | FR-02, FR-11, FR-15 | The user can securely end the session. |
| 16 | Testing Evidence | “We tested the main workflow with users and recorded task completion, issues found, comments, and improvement actions.” | FR-10, FR-13, FR-14, FR-16 | The team can improve the prototype using evidence rather than assumptions. |
| 17 | Final Improvement Plan | “Before Lab 14, we will complete Search and Filter, dynamic notifications, admin management, additional validation, and final responsive testing.” | FR-08, FR-09, FR-10, FR-14, FR-16 | The final prototype will be more complete, reliable, and ready for presentation. |

## Demo Preparation

Before starting the demonstration:

- Open the landing page in the browser.
- Confirm that Local Storage contains sample users and study groups.
- Prepare one normal user account.
- Prepare at least one group owned by the demo user.
- Confirm that View Details, Join Group, Leave Group, Edit Group, and Delete Group work.
- Keep the browser Developer Tools closed unless Local Storage evidence is required.
- Prepare screenshots of the main prototype screens.
- Prepare user-testing evidence and the final improvement list.
- Test all links before the presentation.

## Suggested Demo Timing

| Part | Estimated Time |
|---|---|
| Product introduction and landing page | 1 minute |
| Registration and login | 1 minute |
| Find, view, and join a group | 2 minutes |
| My Study Groups and leave group | 1 minute |
| Create, edit, and delete own group | 2 minutes |
| My Profile and logout | 1 minute |
| Testing evidence and improvement plan | 1 minute |
| Closing statement | 30 seconds |

**Estimated total time:** 8–10 minutes

## Closing Statement

The **Smart Study Group Finder** solves the problem of scattered, unclear, and difficult-to-search study group information.

It gives university students one central platform where they can register, log in, find suitable groups, view complete details, join groups, create their own groups, manage their participation, and review their study-group activities.

The prototype demonstrates the main user workflow and provides clear value by saving time, improving access to study partners, and supporting organized collaborative learning.

Our next step is to complete the remaining improvements, finalize admin management, test the full system, and prepare the final MVP release and venture pitch for Lab 14.


