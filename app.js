//Selectors
const todoInput = document.querySelector('.todo-input') ;
const todoButton = document.querySelector('.todo-button') ;
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo")

//Event Listeners

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
//Functions

function addTodo(event) {
    event.preventDefault();
    //Create Div
    console.log(todoInput.value)
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //Create Li
    const newTodoLi = document.createElement("li");
    newTodoLi.innerText = todoInput.value;
    newTodoLi.classList.add("todo-item");
    todoDiv.appendChild(newTodoLi);

    //Create Mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML =' <i class="fas fa-check-circle"></i>'; //icon
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML =' <i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Add todo to local storage
    saveLocalTodos(todoInput.value)
 
    //Append to the main list in html file
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value="";
}

function deleteCheck(event) {

    const item = event.target;
    // Delete todo
    if(item.classList.value === "trash-btn"){
        // console.log("trash clicked");
        const todo = item.parentElement; //get parent then remove it if this happens
        //Animation
        todo.classList.add("fall");//deleting animation
        // todo.remove();
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }

    // Complete button
    if(item.classList.value === "complete-btn"){
        // console.log("check clicked");
        const todo = item.parentElement;
        todo.classList.toggle("completed"); //returns true or false based on class is present or not
    }

}

function filterTodo(event) {
    const todos = todoList.childNodes;
    // console.log(todos);
    todos.forEach(function(todo) {
        // console.log(todo)
        console.log(event.target.value)
        switch (event.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';    
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';    
                }
                break;
        }
    });
}

//Save the list to local directory

function saveLocalTodos(todo) {
    //Check whether i have anything or not
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

