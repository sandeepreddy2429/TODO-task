 
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

 
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) =>{
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.name}</span>
            <button class="complete" onclick="completeTask(${index})">COMPLETE</button>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;
        if (task.completed) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);
    });
    
 
}
 
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        tasks.push({ name: taskName, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        taskInput.value = '';
    }
}

 
function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
  
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
 
displayTasks();