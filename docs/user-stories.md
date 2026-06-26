# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

As a [user role], I want to [goal/action], so that [benefit/value].

---

## User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|----------|------|------------|---------------------|----------|---------------------|---------------|
| US-01 | Student | As a student, I want to search study groups by subject so that I can find classmates studying the same course. | FR-05 | Must | **Given** I am on the search page, **when** I enter a subject name, **then** matching study groups are displayed. | Search page screenshot |
| US-02 | Student | As a student, I want to create a study group so that other students can join me. | FR-03 | Must | **Given** I complete all required fields, **when** I click Create, **then** the study group is saved successfully. | Create group screenshot |
| US-03 | Student | As a student, I want to join an existing study group so that I can study with other students. | FR-04 | Must | **Given** I choose an available group, **when** I click Join, **then** I become a member of that group. | Join group screenshot |
| US-04 | Student | As a student, I want to view study group details so that I can decide whether the group matches my needs. | FR-06 | Must | **Given** I select a study group, **when** the details page opens, **then** I can view the subject, description, meeting time, and members. | Group details screenshot |
| US-05 | Student | As a student, I want to filter study groups by subject so that I can find suitable groups more quickly. | FR-08 | Should | **Given** multiple study groups exist, **when** I select a subject filter, **then** only matching groups are displayed. | Filter feature screenshot |
| US-06 | Admin | As an administrator, I want to manage study groups so that inappropriate or inactive groups can be removed. | FR-09 | Should | **Given** I am logged in as an admin, **when** I edit or remove a study group, **then** the changes are saved successfully. | Admin page screenshot |

---

## Acceptance Criteria Checklist

A good acceptance criterion should be:

- Testable.
- Observable in the final prototype.
- Connected to a requirement.
- Connected to user evidence.
- Not too vague.

---

## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|----------|-----------------------|------------------|
| US-07 | Real-time chat feature requires more development time. | Add in Version 2 after MVP validation. |
| US-08 | AI study group recommendation is beyond the MVP scope. | Add after collecting more user data. |
| US-09 | Video meeting integration requires third-party services. | Consider in future releases if needed. |
