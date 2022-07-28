// SELECTOR

const todoInput = document.querySelector (".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");




// ALERT
const alertWarning = document.querySelector(".alert-warning");
const alertSuccess = document.querySelector(".alert-success");



todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filterTodo);

                        // fonctions
//add to-do
function addTodo(e){
    e.preventDefault();



    const isEmpy = str => !str.trim().length;

    if(isEmpy(todoInput.value)) {
        alertWarning.style.display= "block";
        setTimeout(() =>{
            alertWarning.style.display = "none";
        }, 1000);
        todoInput.value = "";
        
       
        
    }else{
        alertSuccess.style.display = "block";
        setTimeout(()=>{
            alertSuccess.style.display = "none";
        }, 1000);

        saveLocalTodos(todoInput.value);
        
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
     
   // todoControl.innerText ="control";
   // document.body.appendChild(todoControl);
    //todoControl.classList.add("control-button");

    //button-left
    const completedButton = document.createElement("button");
     completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton)
     completedButton.classList.add("complated-button");
     
    // todo content
        const newTodo = document.createElement("li")
        newTodo.innerHTML = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

    //button-right
    const clearButton = document.createElement("button");
     clearButton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
     clearButton.classList.add("clear-btn");
     todoDiv.appendChild(clearButton);
     clearButton.classList.add("clear-button");

     

     //append to list
    todoList.appendChild(todoDiv);


    //input clear

    todoInput.value = "";

}



    e.preventDefault();


}

//delete to-do
function deleteCheck(e){
    //delete
    const item = e.target;

    if(item.classList[0] === "clear-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        clearLocalTodos(todo);
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    //okey
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("complete");
    }
}

//fliter to-do
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function (item) {
       switch (e.target.value) {
        case "all":
            item.style.display = "flex";
            
            break;
        case "completed":
             if(item.classList.contains("complete")){
                item.style.display = "flex";
             }else{
                item.style.display = "none";
             }break
        case "uncompleted":
            if(!item.classList.contains("complete")){
                item.style.display = "flex";
            }else{
                item.style.display = "none"
            }break      
       }
    })
}


//local storage save
function saveLocalTodos(todo){
    

     let todos = JSON.parse(localStorage.getItem("todos")) || [];
     todos.push(todo);
     localStorage.setItem("todos", JSON.stringify(todos));
    
}

//get to-do
function getTodos() {
    let todos;
   
    
    if(localStorage.getItem("todos") === null){
        todos = [];
      }else{
        todos = JSON.parse(localStorage.getItem("todos"));
      }

        ///////
     todos.forEach((todo)=>{
          // todo div
        const todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");
    

     //button-left
        const completedButton = document.createElement("button");
     completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton)
     completedButton.classList.add("complated-button");
     
     // todo content
        const newTodo = document.createElement("li")
        newTodo.innerHTML = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        //button-right
     const clearButton = document.createElement("button");
     clearButton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
     clearButton.classList.add("clear-btn");
     todoDiv.appendChild(clearButton);
     clearButton.classList.add("clear-button");

        //append to list
        todoList.appendChild(todoDiv);

    
        

    });
}


//local storage clear

function clearLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = todo.children[1].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

getTodos();