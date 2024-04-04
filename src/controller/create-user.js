// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");

// Making a function to store data
window.signup = function (e) {
    e.preventDefault();
    var obj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    };
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function(success) {
            alert("Signup Successful");
        })
        .catch(function(err) {
            alert("Error: " + err.message);
        });
    console.log(obj);
};