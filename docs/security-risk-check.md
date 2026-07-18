


# Basic Security Risk Check

## Project Title
Smart Study Group Finder

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|------|---------------|----------------|------------|------------|-------|
| Form input | Can incomplete or invalid data be submitted? | Required fields and input validation are used. | Low | Validate all required fields before submission. | Development Team |
| Admin function | Can normal users access admin actions? | Admin and student roles are separated. | Low | Apply role-based access control (RBAC). | Development Team |
| Data display | Is private information visible to everyone? | Only limited user information is displayed. | Low | Hide personal data and use nickname/display name. | Development Team |
| Status update | Can records be edited without control? | Only the creator can edit their own study group. | Medium | Verify ownership before allowing updates. | Development Team |
| Public links | Does a public link expose private data? | No public links expose private user information. | Low | Restrict access to authenticated users only. | Development Team |
| File upload | If used, can unsafe or unrelated files be uploaded? | File upload is not implemented in the prototype. | Low | Restrict file types and file size if added later. | Development Team |

---

## Additional Security Controls

- User authentication using Student ID and University Email.
- Input validation on registration and group creation forms.
- Role separation between Student and Admin.
- Sensitive personal information is not stored.
- Dashboard uses anonymous validation data only.

---

## Security Decision

**Decision:** Continue with mitigation â

The Smart Study Group Finder prototype has a **Low overall security risk**. Basic security controls such as input validation, role-based access control, limited personal data collection, and protected user actions are included. Additional security features can be implemented in future versions if the system is deployed.
