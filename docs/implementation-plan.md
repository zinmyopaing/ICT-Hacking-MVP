# Lab 10 - Implementation Plan

## 1. Project Information

- **Group name:** (ICT-Hacking-MVP)
- **Project title:** Smart Study Group Finder
- **Repository link:** https://github.com/zinmyopaing/ICT-Hacking-MVP.git
- **Selected platform/tools:** HTML5, CSS3, JavaScript, Bootstrap 5, GitHub
- **Backend status:** Simulated Backend (JavaScript + Local Storage)

---

## 2. Prototype Scope for Sprint 1

The following features will be implemented during Sprint 1.

| Feature | Requirement ID | User Story ID | Screen / Module | Sprint 1 Status |
|----------|----------------|---------------|-----------------|-----------------|
| Homepage / Landing Page | FR-13 | - | Homepage | Working Draft |
| User Registration | FR-01 | - | Register Page | Working Draft |
| User Login | FR-02 | - | Login Page | Working Draft |
| Create Study Group | FR-03 | US-02 | Create Group | Working Draft |
| Join Study Group | FR-04 | US-03 | Group Details | In Progress |
| Search Study Groups | FR-05 | US-01 | Find Groups | Working Draft |
| View Group Details | FR-06 | US-04 | Group Details | In Progress |
| Filter Study Groups | FR-08 | US-05 | Find Groups | In Progress |
| Manage Study Groups | FR-09 | US-06 | Admin / My Groups | Planned |
| Dashboard | FR-12 | - | Dashboard | In Progress |
| Input Validation | FR-10 | - | Register / Login / Create Group | Working Draft |
| Confirmation Messages | FR-11 | - | All Forms | Working Draft |
| Responsive User Interface | FR-14 | - | Entire Website | In Progress |

---

## 3. Implementation Approach

### Frontend

The prototype is developed using HTML5, CSS3, JavaScript, and Bootstrap 5 to provide a responsive and user-friendly interface.

### Data Source / Storage

The prototype currently uses JavaScript objects and sample data. Local Storage will be integrated to simulate backend functionality without requiring a real database.

### Admin / Status Handling

Study group status (Open, Full, Closed) and management functions are simulated using JavaScript.

### Search / Filter Approach

JavaScript is used to search study groups by subject and filter available groups based on selected categories.

### Validation Approach

JavaScript validation ensures required fields are completed, email addresses are valid, passwords match, and invalid submissions are prevented.

### Screenshots / Evidence Approach

Screenshots of completed pages, navigation, and implemented features will be stored in the /screenshots/ folder as implementation evidence.

---

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|----------|---------------|--------------------------|
| Thiri Htet Htet Soe | Homepage, Register, Login | GitHub commits, Issues, HTML/CSS/JS files |
| Zin Myo Paing | Create Group, Search, Group Details | GitHub commits, Prototype files |
| Sai Naw Khay Li | Dashboard, Documentation, Screenshots | GitHub commits, Markdown files, Screenshots |


---

## 5. Risks or Blockers

| Risk | Planned Solution |
|------|------------------|
| Local Storage integration is not fully completed. | Complete JavaScript data persistence during Sprint 2. |
| Some interactive features are still under development. | Continue implementing JavaScript functionality incrementally. |
| Responsive layout requires testing on different devices. | Improve Bootstrap responsiveness and perform cross-browser testing. |
| Prototype currently uses simulated data only. | Replace sample data with Local Storage before the final demonstration. |

---

## Sprint 1 Deliverables

- Responsive Homepage
- User Registration Page
- User Login Page
- Find Study Groups Page
- Create Study Group Page
- Study Group Details Page
- Dashboard
- Navigation between pages
- JavaScript Form Validation
- Search and Filter Functions
- Confirmation Messages
- Updated Project Documentation
- GitHub Issues and Commit History
