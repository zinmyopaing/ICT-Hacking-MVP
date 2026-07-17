# Legal and Ethical Checklist

## Project Title

Smart Study Group Finder

## Ethical Review

| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|-------------|--------|------------------|-------------------|--------|---------------------|
| Users are informed about the purpose of the prototype. | Yes | The homepage clearly explains that the system helps students find and create study groups. | Keep project description visible on the homepage. | Team | Issue #43 |
| The prototype avoids misleading claims. | Yes | The prototype only provides study group matching features and does not guarantee academic success. | Review all system descriptions before release. | Team | Issue #43 |
| The prototype does not collect unnecessary sensitive data. | Yes | Only name, email, student ID and course information are collected. No financial or health data is stored. | Collect only required information. | Team | Issue #36 |
| Users can understand what happens after submission. | Yes | Users receive a confirmation after creating or joining a study group. | Improve confirmation messages if needed. | Team | Issue #36 |
| Admin or manager actions are clearly separated from user actions. | Yes | Administrative functions are restricted to administrators. Students only create, search and join groups. | Apply role-based access control. | Team | Issue #38 |
| The prototype avoids unfair or harmful treatment of users. | Yes | Every student has equal access to all study group functions. | Continue monitoring fairness and accessibility. | Team | Issue #39 |

## Summary Decision

- Safe to continue: **Yes**

- Required revision before implementation:
- Add a Privacy Policy page.
- Add a Terms of Use page.
- Add a User Consent checkbox before registration.
- Improve password validation and account security.
