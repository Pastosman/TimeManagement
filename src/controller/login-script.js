document.getElementById('loginForm').addEventListener('submit', function (event) {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here, you can perform validation, send the data to the server, etc.
    // For this basic example, let's just log the credentials.
    console.log('Username:', username);
    console.log('Password', password);
});