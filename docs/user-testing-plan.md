# User Testing Plan

## 1. Testing Objective

The purpose of this user testing is to evaluate whether university students can understand and use the **Smart Study Group Finder** without major assistance before Lab 14.

The testing aims to identify:

- Whether users understand the purpose and value of the system.
- Whether registration and login are clear and easy to complete.
- Whether users can find and view suitable study groups.
- Whether users can join and leave a study group successfully.
- Whether users can create, edit, and delete their own groups.
- Whether profile and joined-group information is understandable.
- Whether confirmation and validation messages are clear.
- Which usability problems must be fixed before the final MVP presentation.
- Whether the prototype works correctly on different screen sizes.

## 2. Test User Profile

| User Type | Number of Testers | Why This User Type Matters |
|---|---:|---|
| University students | 3 | They are the primary target users who need to find, join, and create study groups. |
| Student group organizer | 1 | This user can evaluate group creation, editing, deletion, member capacity, and group management. |
| Admin or project reviewer | 1 planned tester | This role will evaluate user and group management after the Admin Dashboard is implemented. Admin testing is planned before Lab 14. |

### Tester Characteristics

The target testers should:

- Be university students.
- Have basic experience using websites.
- Have experience studying with classmates or study groups.
- Use either a laptop or mobile device.
- Have no previous detailed explanation of the prototype workflow.

## 3. Testing Tasks

| Task ID | User Task | Related Requirement | Success Criteria | Observation Focus |
|---|---|---|---|---|
| T01 | Open the landing page and explain what the system is for. | FR-13, FR-14, FR-16 | User correctly explains that the platform helps university students find, join, create, and manage study groups. | Clarity of headline, value message, features, and call-to-action. |
| T02 | Register a new user account. | FR-01, FR-10, FR-11 | User completes registration without major assistance and receives a clear confirmation or validation message. | Form labels, required fields, error messages, and password clarity. |
| T03 | Log in using the registered account. | FR-02, FR-11, FR-12 | User logs in successfully, sees their name in the navigation bar, and can access Logout. | Login clarity, error handling, and visible login status. |
| T04 | Find a study group and review the information shown on the group card. | FR-05, FR-08, FR-13 | User identifies a relevant group using its subject, course, location, date, time, and available spaces. | Card readability and search/filter usability. |
| T05 | Open the selected group’s details page. | FR-06, FR-11 | User opens the correct group and understands the displayed details. | Detail clarity, correct data display, Back button, and navigation. |
| T06 | Join an available study group. | FR-04, FR-10, FR-11 | User joins successfully, member count updates, and the system prevents duplicate joining. | Join button visibility, confirmation message, full-group and duplicate validation. |
| T07 | Open Notifications and locate the My Study Groups section. | FR-12, FR-13 | User can find the group they joined and open its details. | Section visibility, card layout, and navigation clarity. |
| T08 | Leave a joined study group. | FR-07, FR-11 | User confirms the action, leaves the group, and the group disappears from My Study Groups. | Confirmation message and whether the result is immediately clear. |
| T09 | Create a new study group. | FR-03, FR-10, FR-11 | User completes the form, creates the group, and sees it on the Find Groups page. | Field clarity, validation, meeting information, capacity, description, and rules. |
| T10 | Edit a group created by the current user. | FR-07, FR-10, FR-11 | Existing group data loads automatically, the user changes information, and the updated data appears correctly. | Owner-only controls, pre-filled fields, and update confirmation. |
| T11 | Delete a group created by the current user. | FR-07, FR-11 | User receives a confirmation prompt and the selected group is removed after confirmation. | Delete safety, owner protection, and result visibility. |
| T12 | Open My Profile and explain the information shown. | FR-12, FR-13 | User identifies their name, email, joined-group count, created-group count, and group cards. | Accuracy, card layout, readability, and usefulness of the summary. |
| T13 | Log out of the system. | FR-02, FR-11, FR-15 | Login data is removed, the user returns to the login page, and protected actions require login again. | Logout visibility and session privacy. |
| T14 | Use the prototype on a smaller screen or mobile-sized browser window. | FR-14 | Main navigation, forms, cards, and buttons remain usable without horizontal overflow. | Responsive layout, text size, button size, and mobile navigation. |
| T15 | Admin reviews users and groups through the Admin Dashboard. | FR-09, FR-10, FR-11 | Planned for testing after Admin Dashboard implementation before Lab 14. | Role protection, management controls, search, status update, and delete confirmation. |

## 4. Success Metrics

The testing session will use the following metrics:

| Metric | Measurement Method | Target |
|---|---|---:|
| Task completion rate | Successful tasks ÷ attempted tasks × 100 | At least 80% |
| Completion without help | Tasks completed without guidance ÷ total tasks × 100 | At least 75% |
| Critical error count | Number of errors that prevent task completion | 0 |
| Average usability rating | Tester rating from 1 to 5 | At least 4 out of 5 |
| User understanding | Testers who correctly explain the system purpose ÷ total testers × 100 | At least 80% |
| Feedback responses | Number of testers who provide comments or suggestions | All testers |
| Mobile usability success | Mobile tasks completed successfully ÷ mobile tasks attempted × 100 | At least 80% |

## 5. Observation Points

During testing, the team will observe:

- Whether the tester understands the landing-page message.
- Where the tester clicks first.
- Whether navigation labels are clear.
- Whether the tester notices Login, Logout, and the user name.
- Whether group-card information is easy to scan.
- Whether View Details and Join Group buttons are easy to identify.
- Whether validation and confirmation messages are understandable.
- Whether users know where to find joined groups.
- Whether users understand owner-only Edit and Delete controls.
- Whether any button, card, or form becomes too large or misaligned.
- Whether users hesitate, become confused, or request help.
- Whether Local Storage data updates correctly after each action.

## 6. Testing Procedure

1. Introduce the purpose of the testing session.
2. Explain that the prototype is being tested, not the tester.
3. Ask for permission before taking screenshots or recording feedback.
4. Provide the landing-page or prototype link.
5. Ask the tester to complete each task in order.
6. Do not guide the tester unless they cannot continue.
7. Record task completion as Success, Partial Success, or Failure.
8. Record the time taken, user comments, errors, and visible confusion.
9. Ask the tester to rate the overall usability from 1 to 5.
10. Ask final feedback questions.
11. Save evidence in the project repository.
12. Add identified problems to `final-improvement-list.md`.

## 7. Testing Environment

- **Prototype type:** HTML, CSS, JavaScript, and Local Storage
- **Primary device:** Laptop or desktop browser
- **Secondary device:** Mobile phone or browser responsive mode
- **Browser:** Google Chrome or Microsoft Edge
- **Testing location:** Classroom, university study area, or online screen-sharing session
- **Estimated session time:** 10–15 minutes per tester
- **Evidence file:** /screenshots/user-testing-evidence.png
- **Results file:** /docs/user-testing-results.md
- **Optional data file:** /data/user-testing-results.csv

## 8. Final Feedback Questions

After completing the tasks, ask each tester:

1. What do you think this system is designed to do?
2. Which task was the easiest?
3. Which task was the most difficult?
4. Was any button, label, or message confusing?
5. Was the study-group information easy to understand?
6. Did you trust the Join, Leave, Edit, and Delete confirmation messages?
7. Was the My Profile page useful?
8. Did the system work well on your device?
9. What feature should be improved before Lab 14?
10. Would you use or recommend this platform to other students?

## 9. Ethical Reminder

- Do not collect unnecessary personal information.
- Testers may use sample names and email addresses.
- Do not record passwords in testing documents or screenshots.
- Explain that feedback is collected only for class learning and prototype improvement.
- Ask for consent before taking photos, screenshots, audio, or video.
- Allow testers to stop the test at any time.
- Report feedback honestly without changing results to make the prototype appear better.

## 10. Testing Responsibilities

| Team Member | Responsibility |
|---|---|
| Zin Myo Paing | Prepare the prototype and operate the testing session. |
| Sai Naw Khay Li | Introduce tasks and observe user navigation. |
| Thiri Htet Htet Soe | Record task completion, timing, issues, and comments. |
| Ei Zin Phyo | Collect screenshots, summarize feedback, and prepare the improvement list. |

## 11. Expected Output

After testing, the team will prepare:

- /docs/user-testing-results.md
- /docs/final-improvement-list.md
- `/data/user-testing-results.csv`, if used
- /screenshots/user-testing-evidence.png
- Updated /docs/weekly-logbook.md
- Updated README.md


