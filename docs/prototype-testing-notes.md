Prototype Testing Notes

## Test Environment

- Prototype link or folder: ICT_105_Website (Local Prototype)
- Browser/device used: Google Chrome (Windows 10)
- Tester role: Student / Developer
- Test date: 21 July 2026

---

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---------|----------------------|---------------|-----------------|---------------|--------|-------------|-------------------|
| T-01 | Homepage | Open homepage | Homepage loads correctly | Homepage displayed successfully | â Pass | None | No action required |
| T-02 | Register | Fill in registration form and submit | User account saved to Local Storage | Registration successful | â Pass | None | Completed |
| T-03 | Login | Login using registered account | User logs in successfully | Login successful | â Pass | None | Completed |
| T-04 | Create Study Group | Fill in create group form | Study group created | Prototype page works but Local Storage integration not finished | â  Partial | Data not saved yet | Connect Create Group with Local Storage |
| T-05 | Find Study Groups | Open Find Groups page | Study groups displayed | Sample data displayed | â Pass | None | Replace sample data with Local Storage |
| T-06 | Search Groups | Search by subject | Matching groups displayed | Search function not completed | â Fail | Search logic missing | Implement JavaScript search |
| T-07 | Group Details | Open group details | Group information displayed | Static page only | â  Partial | Dynamic data missing | Connect selected group information |
| T-08 | Dashboard | Open dashboard | User statistics displayed | Dashboard not created | â Not Tested | Feature not implemented | Develop Dashboard page |

---

## Summary of Issues

- Search functionality is not yet implemented.
- Dashboard page has not been developed.
- Group Details page still uses static information.
- Create Group is not connected to Local Storage.
- Dynamic data loading needs improvement.

---

## Improvements Completed During Lab 11

- Implemented Register using JavaScript and Local Storage.
- Implemented Login validation using Local Storage.
- Improved form validation and error messages.
- Updated documentation and screenshots.
- Prepared prototype for Sprint 2 development.
