// updateClock function to update clock display
function updateClock() {
    // Create a new Date object representing the current date and time
    var now = new Date();

    // Extract the day of the week (0-6) from the date object
    var dname = now.getDay();

    // Extract the month (0-11)
    var mo = now.getMonth();

    // Extract the day of the month (1-31)
    var dnum = now.getDate();

    // Extract the four digits from the current date
    var yr = now.getFullYear();

    // Extract the hour (0-23) from the current time
    var hou = now.getHours();

    // Extract the minute (0-59)
    var min = now.getMinutes();

    // Extract the second (0-59)
    var sec = now.getSeconds();
    var pe = hou >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour time
    if (hou == 0) {
        hou = 12;
    } else if (hou > 12) {
        hou -= 12;
    }

    // Add leading zeros to single-digit minute and second values
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Define arrays to stores names of months and days of the week
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Define arrays to store IDs of HTML elements to be updated
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];

    // Define an array to store corresponding values to update HTML elements
    var values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];

    // Loop through each ID and update the corresponding HTML element with its respective value
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).textContent = values[i];
    }
}

// Define a function named initClock to initialize the clock
function initClock() {
    // Call the updateClock function to intially set the clock
    updateClock();

    // Set an interval to call the updateClock function every 1000ms (1 second)
    setInterval(updateClock, 1000);
}

// Call the initClock function when the window finishes loading 
window.onload = initClock;