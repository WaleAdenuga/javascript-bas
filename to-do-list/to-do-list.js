// In javascript, if you call a function which takes parameters, and you don't pass any parameters, it will use the default value of the parameters or default to undefined

// list of objects
let todoList = JSON.parse(localStorage.getItem('todolist')) || [
    {
        name: 'what',
        date: '29-05-2022'
    },
    {
        name: 'mahomes-allen',
        date: '29-05-2024'
    }
];

renderTodoList();

// render means to display something
// creating with javascript, three step process
// -> save the data - we use an array todoList for ourselves
// -> generate the html - we use a template literal
// -> make it interactive
function renderTodoList() {
    // list is adaptablle so it's better to create your own html and have that storted in a div
    // rather than trying to map for multiple paragraphs, <p> can't be used for multiple paragraphs
    let todoListHTML = '';

    // replaced prev for loop (in.bak) and used forEach
    todoList.forEach((todoObject, index) => {
        //destructuring baby property_name: new_variable_name
        const {name:changedName, date:dueDate} = todoObject;
    
        // thank goodness for template strings having that multiline feature
        // we want to display as a grid, but it's all wrapped in one element and so looks weird when you try to group as columns, 
        // solution is to split into 3 elements with div
        const html = `
        <div>${changedName}</div>
        <div>${dueDate}</div>
        <button class="delete-button js-delete-todo">
            Delete
        </button>
        
        `; 
        todoListHTML += html;
    });

    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    // use event listener here: it has to be after button is actually created, not the string
    // query selector all gives all the elements with provided class
    // selectorall returns array-like, so use for each to loop through it
    // for each gives 2 parameters (value in the list -index )
    // onclick="deleteClick(${index});" ==> prev onclick attribute
    document.querySelectorAll('.js-delete-todo').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            deleteClick(index);
        })
    });
}

function deleteClick(index) {
    todoList.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(todoList));
    renderTodoList();
}

document.querySelector('.js-add-todo').addEventListener('click', () => {
    addTodo();
})

function addTodo() {

    let inputElement = document.querySelector('.js-name-input');
    let value = inputElement.value; // value supplied in the textbox

    let dateInputElement = document.querySelector('.js-due-date-input');
    let dueDate = dateInputElement.value;

    todoList.push({
        // property - variable name
        name: value,
        date: dueDate
    });

    localStorage.setItem('todolist', JSON.stringify(todoList));
    console.log(todoList);

    inputElement.value = ''; // reset the text in the textbox after addition

    renderTodoList();
}

function handleCostKeyDown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

