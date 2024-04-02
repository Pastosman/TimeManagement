// Ask user to allow notification access
if ("Notification" in window) {
    Notification.requestPermission().then(function(permission) {
        if (Notification.permission !== "granted") {
            alert("Please allow notification access!");
        }
    });
}

var timeoutIds = [];

// Load reminders from localStorage when the page loads
window.onload = function() {
    loadReminders();
};

function scheduleReminder() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    var dateTimeString = date + " " + time;
    var scheduledTime = new Date(dateTimeString);
    var currentTime = new Date();
    var timeDifference = scheduledTime - currentTime;

    if (timeDifference > 0) {
        addReminder(title, description, dateTimeString);

        var reminder = {
            title: title,
            description: description,
            dateTimeString: dateTimeString
        };
        saveReminder(reminder);

        var timeoutId = setTimeout(function() {
            document.getElementById("notificationSound").play();

            var notification = new Notification(title, {
                body: description,
                requireInteraction: true,
            });
        }, timeDifference);
        timeoutIds.push(timeoutId);
    } else {
        alert("The scheduled time is in the past! Please enter a valid future time.");
    }
}

function addReminder(title, description, dateTimeString) {
    var tableBody = document.getElementById("reminderTableBody");

    var row = tableBody.insertRow();

    var titleCell = row.insertCell(0);
    var descriptionCell = row.insertCell(1);
    var dateTimeStringCell = row.insertCell(2);
    var actionCell = row.insertCell(3);

    titleCell.innerHTML = title;
    descriptionCell.innerHTML = description;
    dateTimeStringCell.innerHTML = dateTimeString;
    actionCell.innerHTML = '<button onclick="deleteReminder(this);">Delete</button>';
}

function deleteReminder(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Save reminder to localStorage
function saveReminder(reminder) {
    var reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.push(reminder);
    localStorage.setItem('reminders', JSON.stringify(reminders));
}

// Load reminders from localStorage
function loadReminders() {
    var reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    reminders.forEach(function(reminder) {
        addReminder(reminder.title, reminder.description, reminder.dateTimeString);
    });
}