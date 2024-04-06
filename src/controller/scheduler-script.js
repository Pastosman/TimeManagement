// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// Set up locale settings for dayjs
const localeSettings = {};
dayjs.locale(localeSettings);

// Wait until the DOM is fully loaded before executing the code inside the function.

// Get the current hour of the day using the dayjs library.
const currentHour = dayjs().format('H');

// Function: Change the color of each time block based on whether it's in the "past, present, or future" relative to the current hour.
function hourlyColor() {
    $('.time-block').each(function() {
    const blockHour = parseInt(this.id);
    $(this).toggleClass('past', blockHour < currentHour);
    $(this).toggleClass('present', blockHour === currentHour);
    $(this).toggleClass('future', blockHour > currentHour);
    });
}

// Function: Save user's input in a textarea to localStorage - only when the corresponding save button has been clicked.
function textEntry() {
    $('.saveBtn').on('click', function() {
    const key = $(this).parent().attr('id');
    const value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
    });
}

// Function: Refresh the color of each time block based on whether it's in the past(grey), present(red), or future(green) relative to the current time.
function refreshColor() {
    $('.time-block').each(function() {
    const blockHour = parseInt(this.id);
    if (blockHour == currentHour) {
        $(this).removeClass('past future').addClass('present');
    } else if (blockHour < currentHour) {
        $(this).removeClass('future present').addClass('past');
    } else {
        $(this).removeClass('past present').addClass('future');
    }
    });
}

// Function: Retrieve user input from localStorage and set textarea values for each time block.
$('.time-block').each(function() {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
});

// Function: Update current date and time displayed on the page.
function updateTime() {
    const dateElement = $('#date');
    const timeElement = $('#time');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
}

// Call the three main functions to set up the page.
hourlyColor();
textEntry();
refreshColor();

// Update the time once per second for the current time using setInterval(),
// making the header display a live time with hours, minutes, and seconds counter.
setInterval(updateTime, 1000);

});
  
// Function to save the title to the webpage
function saveTitle() {
    const newTitle = $('#plannerTitle').text();
    localStorage.setItem('plannerTitle', newTitle);
}

// Load the title from localStorage if it exists
function loadTitle() {
    const savedTitle = localStorage.getItem('plannerTitle');
    if (savedTitle) {
        $('#plannerTitle').text(savedTitle);
    }
}

// Call loadTitle function when the page loads
$(document).ready(function () {
    loadTitle();

    // Save the title when the save button is clicked
    $('#saveTitleBtn').click(function () {
        saveTitle();
    });
});
