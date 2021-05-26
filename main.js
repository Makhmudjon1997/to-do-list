//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//const filterOption = document.querySelector('.filter-todo')
var createdTime;

//Event Listeners

todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
//filterOption.addEventListener('click', filterToDo);

//Functions

function addToDo(event){
    //Prevent form from submitting
    event.preventDefault();
    
    //toDo DIV
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    
    //create li
    const newToDo = document.createElement("li");
    newToDo.innerText = todoInput.value;
    newToDo.classList.add("todo-item");
    newToDo.style.overflow = 'hidden';
    newToDo.dataset.createdTime = Date.now();
    
    toDoDiv.appendChild(newToDo);
    
    //Check Mark button
    
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class = "fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    
    toDoDiv.appendChild(completedButton);
    
    //Check Trash button
    
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class = "fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    
    toDoDiv.appendChild(trashButton);
    
    
    //Append to List
    
    todoList.appendChild(toDoDiv)
    
    //clear todoInput.value
    
    todoInput.value = '';
    
    //adding dataset to the input
    
    createdTime =  todoList.dataset.createdTime = Date.now();
}

function deleteCheck(e){
    const item = e.target;
    //const createdTime = todoList.dataset.createdTime = Date.now();
    //Delete todo

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
        
    }

    //Check Mark

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        alert(`You spend ${Math.round((Date.now() - createdTime) / 1000)} seconds to complete this task`)
    }
    
}


// filter todo

// function filterToDo(e){
//     const todos = todoList.childNodes;
//     todos.forEach( function (todo) {
//         switch(e.target.value){
//             case "all":
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 if(todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 } else{
//                     todo.style.display = "none"
//                 }
//                 break;
//             case "uncompleted":
//                 if(!todo.classList.contains("completed")){
//                     todo.style.display = "flex";
//                 } else{
//                     todo.style.display = "none"
//                 }
//                 break;
//         }
//     });
// }