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

    //Clear the Input
    taskInput.value = '';

    e.preventDefault();
}
