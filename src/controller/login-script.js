document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('signupLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'block';
  });

  document.getElementById('LoginLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.signup-container').style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginMessage = document.getElementById('loginMessage');

    // Simple check for demonstration purposes
    if (username === "user" && password === "password") {
      loginMessage.textContent = 'Login successful';
      // Redirect to main menu page after successful login
      window.location.href = 'main_menu.html';
    } else {
      loginMessage.textContent = 'Login failed. Invalid credentials.';
    }
  });

  // Add event listener to redirect to create account page
  document.getElementById('createAccountLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = 'create_account.html'; // Redirect to create account page
  });
});
  

  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;
    // Simple check for demonstration purposes
    if (newEmail && newPassword) {
        console.log('Account created successfully');
        // Here you would typically redirect the user to another page
      } else {
        console.log('Account creation failed. Please fill in all fields.');
      }
    });