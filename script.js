document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks from Local Storage
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add tasks to the DOM
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove task from the DOM
            removeTaskFromLocalStorage(taskText); // Remove task from Local Storage
        };

        // Append remove button to the li
        li.appendChild(removeButton);

        // Append the new li to the task list
        taskList.appendChild(li);

        // Save task to Local Storage if not loading from storage
        if (save) {
            saveTaskToLocalStorage(taskText);
        }

        // Clear the input field
        taskInput.value = "";
    }

    // Function to save tasks to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText); // Add new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated array to Local Storage
    }

    // Function to remove tasks from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText); // Remove the task from the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated array to Local Storage
    }

    // Add event listener to the 'Add Task' button
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task");
        } else {
            addTask(taskText);
        }
    });

    // Add task when pressing the Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText === "") {
                alert("Please enter a task");
            } else {
                addTask(taskText);
            }
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});

