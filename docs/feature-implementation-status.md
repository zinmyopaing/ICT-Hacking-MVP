# Lab 10 - Feature Implementation Status

## Purpose

This document tracks the implementation status of the Smart Study Group Finder prototype and demonstrates the traceability between the implemented prototype and the approved system requirements.

---

| Req ID | Required Functionality | Prototype Screen / Module | Current Status | Evidence | Next Fix Needed |
|--------|-------------------------|---------------------------|----------------|----------|-----------------|
| FR-01 | User Registration | Register Page | Working Draft | register.html, register.css, register.js | Connect Local Storage |
| FR-02 | User Login | Login Page | Working Draft | login.html, login.css, login.js | Connect authentication |
| FR-03 | Create Study Group | Create Group Page | Working Draft | create-group.html | Save created groups |
| FR-04 | Join Study Group | Group Details | In Progress | group-details.html | Join button functionality |
| FR-05 | Search Study Groups | Find Groups Page | Working Draft | find-group.html | Improve search accuracy |
| FR-06 | View Group Details | Group Details Page | In Progress | group-details.html | Display complete group information |
| FR-07 | Edit or Delete Study Group | My Groups | Planned | my-groups.html | Add edit/delete functions |
| FR-08 | Filter Groups | Find Groups Page | In Progress | find-group.html | Add subject/category filters |
| FR-09 | Manage Study Groups | Admin / My Groups | Planned | admin.html | Add management features |
| FR-10 | Input Validation | Register, Login, Create Group | Working Draft | JavaScript validation | Complete validation rules |
| FR-11 | Confirmation Messages | All Forms | Working Draft | JavaScript alerts/messages | Improve user feedback |
| FR-12 | Dashboard | Dashboard Page | In Progress | dashboard.html | Display joined and created groups |
| FR-13 | Consistent User Interface | Entire Website | Working Draft | Shared navigation and styling | Improve UI consistency |
| FR-14 | Responsive Design | Entire Website | In Progress | Bootstrap 5 layout | Test on mobile devices |
| FR-15 | Privacy Protection | Registration & Profile | Working Draft | Registration form | Hide sensitive information |
| FR-16 | Requirement Traceability | Documentation | Working Draft | implementation-plan.md, user-stories.md | Verify complete requirement mapping |

---

## Summary

### Features Working Today

- Homepage
- User Registration Interface
- User Login Interface
- Find Study Groups Page
- Create Study Group Page
- Navigation between pages
- Basic form validation
- Responsive layout

### Features Partially Working

- Search Study Groups
- Group Details
- Dashboard
- Filter Groups
- Confirmation messages

### Features Not Yet Started

- Admin management functions
- Edit/Delete Study Groups
- Local Storage integration
- Full authentication

### Features Requiring Instructor Feedback

- Local Storage implementation approach
- Dashboard data presentation
- Future backend integration
- Additional usability improvements

---

## Overall Sprint 1 Status

| Category | Progress |
|----------|----------|
| Frontend Pages | 80% Complete |
| Navigation | 100% Complete |
| Form Validation | 75% Complete |
| Search & Filter | 60% Complete |
| Dashboard | 60% Complete |
| Admin Functions | 20% Complete |
| Documentation | 90% Complete |
| Overall Sprint 1 | **Working Draft** 

---

# Feature Implementation Status

## Update this file during Lab 11. Every prototype feature must connect to `system-requirements.md`.

| Req ID | Required Functionality | Screen/Module | Lab 10 Status | Lab 11 Status | Owner | Evidence Screenshot/Commit | Notes / Next Action |
|--------|-------------------------|---------------|---------------|---------------|-------|----------------------------|---------------------|
| FR-01 | Homepage or landing screen | Homepage | Partially Completed | Completed | All Members | homepage.png | Homepage completed and navigation improved. |
| FR-02 | Primary user pathway | User Flow | Partially Completed | Completed | Member 1 | login.png | Register and Login flow connected successfully. |
| FR-03 | User input/submission | Register / Create Group | Partially Completed | Completed | Member 1 | register.png | User registration uses Local Storage successfully. |
| FR-04 | Data storage/record management | Local Storage | Partially Completed | Completed | Member 1 | register.js commit | User data stored and retrieved using Local Storage. |
| FR-05 | View records/list | Find Groups | Partially Completed | Partially Completed | Member 2 | find-group.png | Record list completed, dynamic data will be improved. |
| FR-06 | Search/filter/category | Search | Pending | In Progress | Member 2 | search.png | Search function under development. |
| FR-07 | Detail view | Group Details | Pending | In Progress | Member 2 | group-details.png | Detail page designed, data connection remaining. |
| FR-08 | Status/progress tracking | Status Module | Pending | Pending | Member 3 | - | Status tracking will be implemented after CRUD features. |
| FR-09 | Admin/manager function | Admin View | Pending | Pending | Member 3 | - | Admin page not implemented yet. |
| FR-10 | Validation/error prevention | Forms | Pending | Completed | Member 1 | register.png | Required field validation added to Register/Login forms. |
| FR-11 | Confirmation/feedback message | Forms | Pending | Completed | Member 1 | login.png | Success and error alert messages implemented. |
| FR-12 | Dashboard/analytics view | Dashboard | Pending | Pending | Member 3 | - | Dashboard will be developed in the next sprint. |
| FR-13 | UI consistency | All Screens | Partially Completed | Completed | All Members | screenshots | Consistent colors, fonts and layout across pages. |
| FR-14 | Mobile/responsive consideration | All Screens | Pending | In Progress | Member 2 | responsive.png | Responsive layout being improved. |
| FR-15 | Privacy/responsible data handling | Local Storage | Pending | Partially Completed | Member 1 | register.js | Basic Local Storage implemented; security improvements planned. |
| FR-16 | Final prototype traceability | Documentation | Pending | In Progress | All Members | GitHub Commit | Documentation updated continuously during Lab 11. |
