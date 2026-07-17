# Privacy and Data Protection

## Project Title
Smart Study Group Finder

## Data Collection Summary

| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|------------|------------------|----------------|-----------------|-------------------------|-------|
| Student ID | Identify registered student | Yes | No | Keep | Only used for login and identification |
| Student Name | Display group member name | Yes | No | Replace | Use first name or nickname only |
| University Email | Login and contact | Yes | No | Keep | Required for authentication |
| Course Code | Find study groups | No | No | Keep | Academic information only |
| Course Name | Search study groups | No | No | Keep | Helps users find groups |
| Group Name | Identify study group | No | No | Keep | Required for the system |
| Meeting Time | Schedule study sessions | No | No | Keep | Shared only with group members |
| Notification Preference | Send reminders | No | No | Keep | Optional feature |

---

## Privacy Rule for Prototype

The Smart Study Group Finder prototype only collects the minimum information necessary for students to register, search for study groups, create groups, and communicate with other members.

Personal information is limited to Student ID, University Email, and Display Name. Sensitive personal information such as passwords, phone numbers, home addresses, financial information, or national ID numbers is not collected.

Only registered users can view study groups and join requests. Administrative functions are separated from normal student functions. Personal information is not shared with third parties and is only used for educational purposes.

---

## Data Minimization Decision

### Removed Data
- Phone Number
- Home Address
- National ID Number
- Date of Birth
- Financial Information

### Replaced Data
- Full Name → Nickname or First Name
- Personal Email → University Email

### Kept Data
- Student ID
- University Email
- Course Code
- Course Name
- Group Name
- Meeting Time
- Notification Preference

---

## Privacy Decision

**Privacy Status:** Passed ✅

The prototype follows the principle of data minimization by collecting only the information required for the study group service. No unnecessary personal or sensitive data is collected.
  
 



