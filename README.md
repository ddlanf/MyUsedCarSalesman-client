# **Myusedcarsalesman-client**
 
Website Link: [https://myusedcarsalesman.now.sh](https://myusedcarsalesman.now.sh)
 
## Images
![Screenshot1](/src/Utils/myusecarsalesman_pics/view-post.png)
![Screenshot2](/src/Utils/myusecarsalesman_pics/post.png)
 
## Core Features
This serves the client side of the Myusedcarsalesman app. 
The pages this app provides include 
 * Landing Page - Landing page for Myusedcarsalesman app
 * Login - Login page for all registered users
 * Admin Login - Login Page for an administrator
 * Register - Register page for new users
 * View Posts - This page display all the posts made by all users
 * View My Posts - Page for users to view their own posts
 * View Post - This page shows the details of an individual post
 * Create Post - Page for creating a new post
 * Edit Page - Page for editing an existing post
 * Admin - Handles administrator tasks such as viewing user info and managing posts
 * Not Found - for all the unsupported endpoints
 
**This is a project created with React and vanilla CSS for styling**
 
**Server Link: [https://myusedcarsalesman.now.sh](https://myusedcarsalesman.now.sh)** 
 
## Running the App locally
Running the App locally requires ones to clone [myusedcarsalesman-api-auth](https://github.com/ddlanf/MyUsedCarSalesman-api-auth). Once both client and server are cloned, do the following.
1. In "myusedcarsalesman-client", change the API_ENDPOINT in config.js to localhost:8000/api or any other ports that may be used (If you are usig port 8000, just uncomment line 3, and comment out line 2).
2. Configure the CORS setting in "myusedcarsalesman-api-auth" to allow the localhost to send requests. This can be done simply adding app.use(cors()) in App.js file or chaging the value of CLIENT_ORIGIN in config.js  
3. Run both client and server with "npm start". "npm run dev" can also be used in "myusedcarsalesman-api-auth"
 
<!-- Just adding a random comment -->