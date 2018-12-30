//Create UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load the event listeners
loadeventListeners();

//Create function for storing event listeners 
function loadeventListeners() {
    //Add event for submit button of the list
    form.addEventListener('submit', addTask);
    //Remove task event from the list
    taskList.addEventListener('click', removeTask);
    //Clear the task lists
    clearBtn.addEventListener('click', clearTasks);
    //Fiter Tasks
    filter.addEventListener('keyup', filterTasks);
}

//Add task function for the submit button
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

    //Create li element
    const li = document.createElement('li');
    //Create class for the li 
    li.className = 'collection-item';
    //Create text node and append it to li tag
    li.appendChild(document.createTextNode(taskInput.value));
    //Create link element
    const link = document.createElement('a');
    //Add classes to the link
    link.className = 'delete-item secondary-content';
    //Create delete icon in the HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append link under li tag
    li.appendChild(link);

   //Append li to ul
    taskList.appendChild(li);

    //Store the list into the localstorage without been deleted upon refreshing the page  
    storeTaskInLocalStorage(taskInput.value);

    //Clear the Input
    taskInput.value = '';

    e.preventDefault();
}
//Store the Task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []; //if local storage is empty create an empty array
    } else {
        //get the tring value of localstorage and convert(parse) to Javascript object
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    //Push the input value on the tasks array
    tasks.push(task);

    //Convert Javascript object to string of JSON data for localstorage 
    localStorage.setItem('tasks', JSON.stringify(tasks));
} 

//Delete or remove the task
function removeTask(e) {
    //console.log(e.target);
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?'))
        e.target.parentElement.parentElement.remove();
    } 
    
} 

//Clear Tasks
function clearTasks() {
    //taskList.innerHTML = '';

    //Eficient performance for clearing the list
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter Tasks
function filterTasks(e) {
const text = e.target.value.toLowerCase();

document.querySelectorAll('.collection-item').forEach(
    function(task) {
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

//console.log(text);
}