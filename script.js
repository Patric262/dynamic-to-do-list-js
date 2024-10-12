// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the value of the input and trim any leading/trailing spaces
        const taskText = taskInput.value.trim();

        // Check if the task input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element and set its textContent to the taskText
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text content to the task

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set the text content to 'Remove'

        // Add class 'remove-btn' to the remove button using classList.add
        removeButton.classList.add('remove-btn'); 

        // Assign an onclick event to the remove button to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the <li> element from the task list
        };

        // Append the remove button to the list item (li)
        li.appendChild(removeButton);

        // Append the list item (li) to the unordered list (taskList)
        taskList.appendChild(li);

        // Clear the input field for the next task
        taskInput.value = ""; // Reset the input field
    }

    // Add an event listener to the "Add Task" button to call addTask when clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to the task input for the "keypress" event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Check if the pressed key is "Enter"
            addTask(); // Call the addTask function when "Enter" is pressed
        }
    });
});
