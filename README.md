# ICT-Hacking-MVP

## Selected IT Venture Direction

Our team selected a Smart Study Group Finder.

The target users are university students who struggle to find study partners and study groups. Currently, students rely on class chat groups, social media platforms, and personal networks. Our proposed solution is a web-based platform where students can create, discover, and join study groups based on subjects and academic interests.

## Current Status

In Lab 02, we reviewed multiple IT opportunities, evaluated them using NUF scoring, and selected Smart Study Group Finder as the most feasible semester project.

## Next Step

In Lab 03, we will prepare customer discovery questions and interview university students to validate the study group matching problem.

## Customer Problem Discovery Summary

In Lab 03, our team interviewed university students to validate the study group finding problem.

## Target Respondents

University students, especially students who have difficulty finding study partners and study groups for academic subjects.

## Main Evidence Found

Most respondents reported difficulty finding study partners. Many students currently rely on Facebook groups, Messenger groups, and class chats, but frequently experience slow responses and difficulty finding students studying the same subject.

## Updated Problem Statement

Based on customer discovery interviews, university students often struggle to find active study partners and study groups for specific subjects. Current methods such as Facebook groups, Messenger groups, and class chats are often slow, unorganized, and ineffective.

## Decision for Next Step

Continue developing Smart Study Group Finder and focus on subject-based group discovery, group creation, and easier student collaboration features for the MVP.


## Lab 04: User Persona, Requirements, and User Stories

### Primary Target User

The primary target user is a university student who wants to quickly find or create study groups with classmates taking the same subject. The platform helps students collaborate more effectively and reduces the difficulty of finding suitable study partners.

---

### Persona Summary

- **Persona name:** Aung Aung
- **User type:** Second-year University Student
- **Main goal:** Find or create a study group for the same subject.
- **Main pain point:** It is difficult and time-consuming to find active study partners.
- **Current workaround:** Uses Facebook Groups, Messenger, LINE, and class chat groups.

---

### Key Requirements

| Req ID | Requirement | Priority | Related Evidence |
|--------|-------------|----------|------------------|
| FR-01 | Homepage with study group overview | Must | Students need a simple starting page |
| FR-02 | Search study groups by subject | Must | 8/10 respondents struggled to find study groups |
| FR-03 | Create a new study group | Must | Students wanted to organize their own groups |
| FR-04 | Store study group information | Must | Group information must be saved |
| FR-05 | View study group list | Must | Students need to browse available groups |
| FR-06 | Filter groups by subject | Must | Students requested faster searching |
| FR-07 | View group details | Must | Students need more information before joining |
| FR-08 | Join study group | Must | Students want to participate easily |
| FR-09 | Admin manage study groups | Should | Remove inactive or incorrect groups |
| NFR-01 | Easy-to-use interface | Must | Students preferred a simple interface |
| NFR-02 | Mobile responsive design | Must | Most students use smartphones |
| NFR-03 | Fast page loading | Should | Improve user experience |

---

### MVP Feature Scope

| Feature | Priority | Included in Final Prototype? |
|---------|----------|------------------------------|
| Search Study Groups | Must | Yes |
| Create Study Group | Must | Yes |
| Join Study Group | Must | Yes |
| View Group Details | Must | Yes |
| Filter by Subject | Should | Yes |
| Admin Management | Should | Yes |
| Real-time Chat | Could | No |
| AI Recommendation | Won't | No |

---

### Diagram Links

- **User Flow Diagram:** https://drive.google.com/file/d/1NO8SpFjQfxuXT9tp3WbRYnNJkgEyua65/view?usp=sharing
- **Use Case Diagram:** https://drive.google.com/file/d/1sdk83tay41gsiU6wogzn5fKVfB44PVQQ/view?usp=sharing

---

### GitHub Contribution Evidence

All team members contributed to the repository through commits, GitHub Issues, and project documentation. Evidence can be verified from the repository commit history, Issues, and project files.


# Lab 05: Product Concept and UI/UX Wireframe

## Product Concept

### Product Title
Smart Study Group Finder

### Description
Smart Study Group Finder is a web-based application that helps university students find, create, and join study groups based on subjects or courses. It provides an easy way for students to collaborate, prepare for exams, and improve their learning experience.

### Target Users
- University Students
- Student Group Leaders

### Problem Solved
Many students have difficulty finding suitable study partners or study groups. Existing communication methods such as chat groups and social media are unorganized and inefficient. This system provides a centralized platform to discover and manage study groups easily.

---

## Requirement-Driven Screens

| Screen | Related Requirement IDs | Wireframe File |
|--------|--------------------------|----------------|
| Homepage / Landing Page | FR-01 | /wireframes/homepage.png |
| Login / Register | FR-01 | /wireframes/login.png |
| Find Groups | FR-02, FR-03 | /wireframes/find-groups.png |
| Group Details | FR-04 | /wireframes/group-details.png |
| Create Group | FR-05 | /wireframes/create-group.png |
| Join Group / Request Status | FR-06 | /wireframes/join-group.png |
| Notifications | FR-07 | /wireframes/notification.png |

---

## User Flow

The user opens the website and logs into the system. After logging in, the user searches for study groups using subjects or keywords and filters the results if necessary. The user views group details and submits a request to join a study group. The user can also create a new study group and receive notifications about request approvals or group updates.

User Flow Diagram:
/diagrams/user-flow.png

---
# README Update Template - Lab 05

Add this section to your group README.md.

## Lab 05: Product Concept and UI/UX Wireframe

### Product Concept
Briefly explain what your product is, who it is for, and what problem it solves.

### Requirement-Driven Screens
List your required screens and related requirement IDs.

| Screen | Related Requirement IDs | Wireframe File |
|---|---|---|
| Homepage / Landing | FR-01, FR-02 | https://drive.google.com/file/d/1mcV1f05Qf203248i3YhDrPSXbCGwbscd/view?usp=sharing |
| Input / Submission Form | FR-03, FR-10, FR-11 |  https://drive.google.com/file/d/1uMZiy0uz1_Xno3DXOoyBE2danjE10Lqn/view?usp=sharing|
| Records / Information List | FR-05, FR-06 |https://drive.google.com/file/d/134mCcw_oxDhQhJ69qcywdQChYoEX71jO/view?usp=sharing |
| Record Detail View | FR-07, FR-08 | https://drive.google.com/file/d/12M2MrlcLlzGUhxmENmLlwEYMc4VgynxV/view?usp=sharing|
| Dashboard / Summary | FR-12 | https://drive.google.com/file/d/1dxYzErIWFan8q0X18kM0vQHq_CilycAh/view?usp=sharing |
| Admin / Manager View | FR-09, FR-08 |https://drive.google.com/file/d/1xOtKVdJ9K46eLrGdqZGASrFGXJCDiZnI/view?usp=sharing  |

### User Flow
For the user flow ,generally there will be four main user types for our project.Student,tutor,admin and academic Support Staff.They have different responsibilities and functions .We used one way and two ways arrows in the diagram for clear understanding.<img width="747" height="607" alt="data flow" src="https://github.com/user-attachments/assets/7b5e51d9-a9eb-43b8-bed9-17678a649c37" />


### Team Contribution
All members contributed to the same GitHub repository.

# Lab 06 Update – Business Model Canvas and Technical Architecture

## Lab 06 Summary

In Lab 06, our group transformed the **Smart Study Group Finder** project into a complete business and technical design. We connected our product concept, user requirements, user stories, wireframes, and MVP features with the Business Model Canvas, technical architecture, system architecture, data flow, and data structure. These deliverables provide a clear foundation for developing the final prototype.

---

## Files Added or Updated

- [Business Model Canvas](docs/business-model-canvas.md)
- [Feature-Value Mapping](docs/feature-value-mapping.md)
- [Technical Architecture](docs/technical-architecture.md)
- [Data Structure](docs/data-structure.md)
- [System Architecture Diagram](diagrams/system-architecture.png)
- [Data Flow Diagram](diagrams/data-flow.png)
- [Weekly Logbook](docs/weekly-logbook.md)

---

## Technical Direction

The prototype will use a **Frontend + localStorage/JSON** architecture.

**Technologies**
- HTML5
- CSS3
- JavaScript
- localStorage / JSON
- Figma (Wireframe Design)

This architecture is suitable because it is simple, easy to develop, and supports all MVP features without requiring a backend server. It also allows the team to demonstrate the complete user workflow effectively.

---

## Final Prototype Connection

The outputs from Lab 06 will directly guide the development of the final **Smart Study Group Finder** prototype. The Business Model Canvas defines the project's value and target users, the Feature-Value Mapping ensures each feature provides user and operational value, the Technical Architecture specifies how the system will be built, and the System Architecture and Data Flow Diagrams illustrate how users, system components, and data interact. The Data Structure provides realistic sample data for implementation. Together, these deliverables ensure that the final prototype is consistent, user-centered, and aligned with the project requirements and MVP features.
