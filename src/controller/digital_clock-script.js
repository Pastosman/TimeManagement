function updateClock() {
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();
    var hou = now.getHours();
    var min = now.getMinutes();
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

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).textContent = values[i];
    }
}

function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

window.onload = initClock;