// Get references to the input and list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task to the list
function addTask() {
    // Checkm if the input box is empty
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        // Create a new list item
        let li = document.createElement("li");

        // Set the contents of the list item to the value of the input box
        li.innerHTML = inputBox.value;

        // Append the list item to the list container
        listContainer.appendChild(li);

        // Create a span element for the delete button
        let span = document.createElement('span');

        // Set its content to the multiplication sign (x)
        span.innerHTML = "\u00D7";

        // Append the delete button to the list item
        li.appendChild(span);
    }
    // Clear the input box after adding the task
    inputBox.value = "";

    // Save the updated list to the localStorage
    saveData();
}

// Event listener to handle task completetion and deletion of tasks
listContainer.addEventListener("click", function(e){
    // If the clicked element is a list item
    if(e.target.tagName === "LI") {
        // Toggle the "checked" class on the list item (mark/unmarking tasks)
        e.target.classList.toggle("checked");
        // Save the updated list to localStorage
        saveData();
    }
    // If the clicked element is a delete button
    else if(e.target.tagName ==="SPAN"){
        // Remove the parent list item from the list container
        e.target.parentElement.remove();
        // Save the updated list to localStorage
        saveData();
    }
}, false);

// Function to save the list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from localStorage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem( "data" );
}

// Call the showTask function to display tasks when the page loads
showTask();
