/*
 <ul class="todo-items-container" id="todoItemsContainer">
                            <li class="todo-item-container d-flex flex-row">
                                <input type="checkbox" class="checkbox-input" id="checkboxInput">
                                <div class="label-container d-flex flex-row">
                                    <label for="checkboxInput" class="checkbox-label">
                                        Learn HTML
                                    </label>
                                    <div class="delete-icon-container m-auto">   
                                        <i class="fa-sharp fa-solid fa-trash"></i>
                                    </div>
                                </div> 
                            </li>
    </ul>
*/

let todoList=[
    {
        text : "Learn HTML",
        uniqueKey : 1
    },

    {
        text : "Learn CSS",
        uniqueKey : 2
    },

    {
        text : "Learn JavaScript",
        uniqueKey : 3
    }
]

let todoCount=todoList.length;       //length of intial todo-list

function onToDoStatusChanged(checkboxId,labelId)
{
   /* let checkboxElement=document.getElementById(checkboxId); */
    let labelElement=document.getElementById(labelId);
    /*if(checkboxElement.checked === true){
        labelElement.classList.add("checked");
    }
    else{
        labelElement.classList.remove("checked");
    }*/
    labelElement.classList.toggle("checked");
}

function onDeleteToDo(todoId)
{
    let todoElement=document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);   
}



function createAndAppend(todo){
    let checkboxId="checkbox"+todo.uniqueKey;  //creating a unique id for each checkbox
    let labelId="label"+todo.uniqueKey;        //creating a unique id for each label-item
    let todoId="todo"+todo.uniqueKey;          //creating a unique id for each todo item

    let todoElement=document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoElement.id=todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement=document.createElement("input");
    inputElement.type="checkbox";
    inputElement.classList.add("checkbox-input");
    inputElement.id=checkboxId;


    inputElement.onclick=function()
    {
        onToDoStatusChanged(checkboxId,labelId);
    }

    todoElement.appendChild(inputElement);

    let labelContainer=document.createElement("div");
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement=document.createElement("label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent=todo.text;
    labelElement.id=labelId;                         //adding label id
    labelContainer.appendChild(labelElement);

    let deleteIconContainer=document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container","m-auto");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon=document.createElement("i");
    deleteIcon.classList.add("fa-sharp","fa-solid","fa-trash");
    
    deleteIcon.onclick=function()
    {
        onDeleteToDo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);

}

/*createAndAppend(todoList[0]);
createAndAppend(todoList[1]);
createAndAppend(todoList[2]);*/

for(let todo of todoList){
    createAndAppend(todo);
}

function onAddToDo()                                              //function for adding new todo-item
{
    let userInputElement=document.getElementById("todoUserInput");
    let userInputValue=userInputElement.value;
    if(userInputValue === "")
    {
        alert("Enter Valid Text");
        return;
    }
    todoCount=todoCount+1;
    let newTodo={
        text : userInputValue,
        uniqueKey : todoCount
    }

    createAndAppend(newTodo);    

}

let addButtonElement=document.getElementById("addTodoButton");
addButtonElement.onclick=function()
{
    onAddToDo();
}


//console.log(todoItemsContainer);