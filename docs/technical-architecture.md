Technical Architecture
Project Title
Smart Study Group Finder
1. Selected Prototype Platform
Frontend + localStorage or JSON
Technologies
HTML5
CSS3
JavaScript
localStorage / JSON
Figma (UI Design)
2. Architecture Decision
The Frontend + localStorage/JSON platform is suitable because it matches our group's web development skills and can be completed within the project timeline. It allows us to build an interactive prototype without requiring a complex backend or database server. Using HTML, CSS, and JavaScript makes the system easy to develop, test, and demonstrate while still supporting the core MVP features such as user registration, study group management, search, and notifications.

3. Main Components

4. | Component           | Description                                              | Tool / Technology      | Related Requirement |
| ------------------- | -------------------------------------------------------- | ---------------------- | ------------------- |
| User Interface      | Responsive web pages for students, tutors, and staff     | HTML, CSS              | FR-01               |
| Data Input Form     | Create and edit study groups                             | HTML Forms, JavaScript | FR-03               |
| Data Storage        | Store sample users and study group data                  | localStorage / JSON    | FR-02               |
| Record List         | Display available study groups with search and filters   | JavaScript             | FR-04               |
| Detail View         | Show complete information about a selected study group   | HTML, JavaScript       | FR-05               |
| Admin Function      | Manage users, study groups, and tutors                   | HTML, JavaScript       | FR-06               |
| Dashboard / Summary | Show joined groups, notifications, and upcoming sessions | HTML, CSS, JavaScript  | FR-07               |

4. What Will Be Fully Implemented?
User Registration and Login
Search Study Groups
Create Study Group
Join Study Group
View Study Group Details
Tutor Finder
Dashboard
Search and Filter
Responsive User Interface
5. What Will Be Simulated?
User authentication (using sample accounts)
Database operations (using localStorage/JSON)
Notifications (sample notifications)
Admin approval process
Tutor availability updates
Email notifications
6. Final Prototype Risk
The biggest technical risk is the absence of a real backend database, which limits real-time data synchronization and multi-user access. To reduce this risk, the group will use localStorage and JSON to simulate data management, prepare realistic sample datasets, thoroughly test all user flows, and ensure the prototype demonstrates all core MVP features clearly during the final presentation.
