Risk Register

## Project Title
Smart Study Group Finder

| Risk ID | Category | Risk Description | Affected Feature / Requirement | Severity | Likelihood | Mitigation Action | Owner | GitHub Evidence | Status |
|---------|----------|------------------|-------------------------------|----------|------------|-------------------|-------|-----------------|--------|
| R-01 | Privacy | Personal information may be exposed to unauthorized users. | User Registration, Profile | Medium | Low | Collect minimum personal data, use nickname/display name, restrict access. | Development Team | Issue #43 | Closed |
| R-02 | Ethical | Users may not understand how their information is used. | Registration, Privacy Notice | Medium | Low | Provide clear privacy notice and explain purpose before registration. | Development Team | Issue #43 | Closed |
| R-03 | Intellectual Property | Third-party libraries or icons may be used without proper attribution. | UI Design, Documentation | Low | Low | Use open-source assets and acknowledge sources in documentation. | Development Team | Issue #43 | Closed |
| R-04 | Security | Unauthorized users may attempt to access protected functions. | Login, Group Management | Medium | Low | Implement role-based access control and input validation. | Development Team | Issue #43 | Closed |
| R-05 | Legal | Prototype may not comply with privacy or university policies. | Entire Prototype | Medium | Low | Review legal and privacy checklist before submission. | Development Team | Issue #43 | Closed |
| R-06 | Data Quality | Validation survey data may contain incomplete or incorrect responses. | Validation Dashboard, Power BI | Medium | Medium | Clean dataset before analysis and verify all records. | Development Team | Issue #33, Issue #34 | Closed |

---

## Overall Risk Decision

Overall project risk is **Low**.

The Smart Study Group Finder prototype has completed legal, ethical, privacy, intellectual property, security, and data quality reviews. Identified risks have appropriate mitigation actions and are considered acceptable for an educational MVP prototype.

**Decision:** â Safe to continue development and classroom demonstration.


____________________________________________________________________________________________________________________________________________

file name -  docs/updated-requirements-note.md


# Updated Requirements Note

## Project Title
Smart Study Group Finder

## Purpose

This document records requirement updates made after customer validation during Lab 09. All changes are documented with supporting evidence and linked GitHub issues.

| Requirement ID | Original Requirement | Proposed Update | Reason for Change | Supporting Evidence | GitHub Issue/Commit | Approved by Team? |
|----------------|----------------------|-----------------|------------------|---------------------|---------------------|-------------------|
| FR-04 | Users can search study groups by subject. | Users can search by subject **and course code**. | Test users requested a more accurate search method. | Validation Dashboard (Confusion Point: Course Code) | Issue #27, Issue #33 | Yes |
| FR-06 | Users can create study groups. | Add meeting time validation and clearer instructions when creating groups. | Users were confused when entering meeting information. | Customer Validation Comments | Issue #27 | Yes |
| FR-07 | Users can join study groups. | Add confirmation message after joining a group. | Users wanted feedback that the join request was successful. | Validation Feedback | Issue #27 | Yes |
| FR-08 | Users receive notifications. | Improve notification messages to clearly show request status. | Validation comments indicated notification messages were unclear. | Customer Validation Results | Issue #27 | Yes |

---

## Rule

All requirement changes are based on customer validation results, documented in GitHub Issues, and approved by the project team before implementation. No system requirement was modified without supporting evidence.
