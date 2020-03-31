# **Myusedcarsalesman-client**

Website Link: [https://myusedcarsalesman.now.sh](https://myusedcarsalesman.now.sh)

## Images
# ScreenShot 1
![Screenshot1](/src/Utils/myusecarsalesman_pics/view-post.png)
# ScreenShot 2
![Screenshot2](/src/Utils/myusecarsalesman_pics/post.png)

## Core Features
This serves the client side of the Myusedcarsalesman. 
The pages this app provides include 
 * Landing Page - Landing page for Myusedcarsalesman app
 * Login - Login page for all registered users
 * Admin Login - Login Page for an administrator
 * Register - Register page for new users
 * View Posts - This page display all the posts made by all users
 * View My Posts - Page for users to view their own posts
 * View Post - This page show the details of an individual post
 * Create Post - Page for creating a new post
 * Edit Page - Page for editting an existing post
 * Admin - Handles administrator tasks such as viewing user info and managing posts
 * Not Found - for all the unsupported endpoints

**This project created with React and vanilla CSS for styling**

**Server Link: [https://myusedcarsalesman.now.sh](https://myusedcarsalesman.now.sh)** 

## Runnning the App locally
Running the App locally requires download of the [server](https://github.com/ddlanf/MyUsedCarSalesman-api-auth) seperately, once you download both client and server. Do the following
    1. In "myusedcarsalesman-client", change the API_ENDPOINT in config.js to localhost:3000 or any other ports that maybe used.
    2. Configure  the CORS setting in "myusedcarsalesman-server" to allow localhost to send requests. This is can be done simply adding app.use(cors()) in App.js file or chaging the value of CLIENT_ORIGIN in config.js  
    3. Run both client and server with npm start. npm run dev can also be used in "myusedcarsalesman-server"