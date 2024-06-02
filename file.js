// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span>${taskText}</span>
            <button onclick="markDone(this)">Done</button>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

// Function to mark a task as done
function markDone(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('done');
}

// Function to remove a task
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Optional: Function to initialize with sample tasks (demonstrates loop usage)
function initializeTasks() {
    const sampleTasks = ['Buy groceries', 'Walk the dog', 'Read a book'];
    sampleTasks.forEach(task => {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span>${task}</span>
            <button onclick="markDone(this)">Done</button>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(newTask);
    });
}

// Initialize the to-do list with sample tasks
initializeTasks();
