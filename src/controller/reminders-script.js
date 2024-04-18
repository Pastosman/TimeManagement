/* Ask the user for permission to show push
notifcations if the browsers supports it*/
if ("Notification" in window) {
    Notification.requestPermission().then(function(permission) {
        // If the user accepts, let's create a notification
        if (Notification.permission !== "granted") {
            alert("Please allow notification access!");
        }
    });
}

// Array to store timeout IDs for scheduled reminders
var timeoutIds = [];

// Load reminders from localStorage when the page loads
window.onload = function() {
    loadReminders();
};

// Function to schedule a reminder
function scheduleReminder() {
    // Retrieve values from input files from the user (title, description, date and scheduled time)
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // Combine date and time strings to create a DateTime string
    var dateTimeString = date + " " + time;

    // Convert DateTime string to a Date object
    var scheduledTime = new Date(dateTimeString);
    var currentTime = new Date();

    // Calculate the time difference between scheduled and current time
    var timeDifference = scheduledTime - currentTime;

    // Check if the scheduled time is in the future
    if (timeDifference > 0) {
        // Add the reminder to the UI and local storage
        addReminder(title, description, dateTimeString);
        var reminder = {
            title: title,
            description: description,
            dateTimeString: dateTimeString
        };
        saveReminder(reminder);

        // Play the notification sound and show a notification at the schedule time
        var timeoutId = setTimeout(function() {
            document.getElementById("notificationSound").play();

            // Show the notification using the Notification API
            var notification = new Notification(title, {
                body: description,
                requireInteraction: true,
            });
        }, timeDifference);
        timeoutIds.push(timeoutId); // Store the timeout ID to the array
    } else {
        // If scheduled time is in the past, alert the user
        alert("The scheduled time is in the past! Please enter a valid future time.");
    }
}

// Function to add a reminder to the UI 
function addReminder(title, description, dateTimeString) {
    var tableBody = document.getElementById("reminderTableBody");

    // Insert a new row into the table
    var row = tableBody.insertRow();

    // Insert cells into the row and set their content
    var titleCell = row.insertCell(0);
    var descriptionCell = row.insertCell(1);
    var dateTimeStringCell = row.insertCell(2);
    var actionCell = row.insertCell(3);

    titleCell.innerHTML = title;
    descriptionCell.innerHTML = description;
    dateTimeStringCell.innerHTML = dateTimeString;
    actionCell.innerHTML = '<button onclick="deleteReminder(this);">Delete</button>';
}

// Function to delete a reminder
function deleteReminder(button) {
    var row = button.parentNode.parentNode;
    var table = row.parentNode;
    var rowIndex = row.rowIndex - 1; // Adjusting for the table header row
    
    // Remove the reminder from the table
    table.deleteRow(rowIndex);
    
    // Remove the reminder from localStorage
    var reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.splice(rowIndex, 1);
    localStorage.setItem('reminders', JSON.stringify(reminders));
}

// Save reminder to localStorage
function saveReminder(reminder) {
    var reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.push(reminder);
    localStorage.setItem('reminders', JSON.stringify(reminders));
}

// Function to load reminders from localStorage
function loadReminders() {
    var reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    var tableBody = document.getElementById("reminderTableBody");
    // Clear existing reminders from the UI
    tableBody.innerHTML = '';

    // Add reminders to the UI
    reminders.forEach(function(reminder) {
        addReminder(reminder.title, reminder.description, reminder.dateTimeString);
    });
}