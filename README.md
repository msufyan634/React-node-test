# React & Node.js Skill Test

## Estimated Time

- 60 min

## Requirements

- Bug fix to login without any issues (20min) <br/>
  There is no need to change or add login function.
  Interpret the code structure and set the correct environment by the experience of building projects. <br/>
  Here is a login information. <br/>
  ✓ email: admin@gmail.com  ✓ password: admin123

- Implement Restful API of "Meeting" in the both of server and client sides (40min)<br/>
  Focus Code Style and Code Optimization. <br/>
  Reference other functions.



✅ Task 1: Fix Login Issue (Resolved)

🔹 Issue

The login was failing due to an incorrect URL format in API requests.

🔹 Solution

Implemented a utility function to check if a / exists in the API URL.<br/>
If missing, the function appends / automatically; otherwise, the URL remains unchanged.<br/>
Ensures a consistent API call format, preventing login failures.<br/>


✅ Task 2: Implement "Meeting" RESTful API (Implemented)

🔹 Features

Developed a RESTful API for the "Meeting" module on both the server and client.
Ensured proper error handling, validation, and response structures.

Implemented CRUD operations:<br/>
🆕 Create a new meeting<br/>
📖 Read meeting details<br/>
✏️ Update existing meetings<br/>
❌ Delete a meeting<br/>

🔹 Reusable Form for Add/Edit

Implemented a single form component for both adding and editing meetings.<br/>
The form dynamically detects whether it's in create or edit mode based on the provided meeting data.<br/>
Improved code reusability and user experience by avoiding duplicate forms.<br/>

🚀 Summary

Both tasks were successfully completed:<br/>
✔️ Fixed login issue with a robust URL handling function<br/>
✔️ Implemented a fully functional RESTful API for meetings<br/>
✔️ Used a single form for both adding and editing meetings for better reusability<br/>

Let me know if you need any refinements! 🔥