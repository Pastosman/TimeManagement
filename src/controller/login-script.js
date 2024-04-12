// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdqg7Ut_BQhXu37iqUXh2H8ptKpR8hHjw",
    authDomain: "timemanagersignup-form.firebaseapp.com",
    projectId: "timemanagersignup-form",
    storageBucket: "timemanagersignup-form.appspot.com",
    messagingSenderId: "933268304847",
    appId: "1:933268304847:web:726e2011de4697c838d8ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Getting All the Objects of html
var email = document.getElementById("email");
var password = document.getElementById("password");

// Function to handle login
function login(e) {
    e.preventDefault();
    
    // Retrieve email and password values
    var obj = {
        email: email.value,
        password: password.value
    };
    
    // Sign in with email and password
    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log(user.uid); // You can use user.uid to identify the signed-in user
            alert("Login Successful, Welcome to your personal time manager!");
            // Redirect to main_menu.html
            window.location.href = "navigation.html";
        })
        .catch((error) => {
            // Handle errors here
            alert("Login error: " + error.message);
        });
}

// Assign login function to form submission
document.querySelector("form").addEventListener("submit", login);
