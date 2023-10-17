const sidebar = document.querySelector(".sidebar");
const dropdownContent = document.querySelector(".dropdown-content");
sidebar.addEventListener("click", function() {
    // Toggle the visibility of the dropdown content
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});


document.addEventListener("DOMContentLoaded", function(){

    const todoForm=document.getElementById("todoform");
    const todoList=document.getElementById("todos-list");
    const check=document.getElementsByClassName("bi-circle");
todoForm.addEventListener("submit", function(event){
    event.preventDefault();

    const newTodoInput=document.getElementById("newtodo");
    const todoText=newTodoInput.value;

    if(todoText.trim()!==""){
        const newTodo= document.createElement("div");
        newTodo.className="todo";

newTodo.innerHTML=`
<i class="bi bi-circle"></i>
<p class="unchecked">${todoText}</p>
<i class="bi bi-pencil-square"></i>
<i class="bi bi-trash"></i>`;


    
    todoList.appendChild(newTodo);

    newTodoInput.value = ''; 

    }



});
 
todoList.addEventListener("click", function(event) {
    if (event.target.classList.contains("bi-circle")) {
        event.target.classList.remove("bi-circle");
        event.target.classList.add("bi-check-circle");

        const todoElement = event.target.closest(".todo");
        const textElement = todoElement.querySelector(".unchecked");
        textElement.classList.toggle("checked");
    } else if (event.target.classList.contains("bi-check-circle")) {
       
        event.target.classList.remove("bi-check-circle");
        event.target.classList.add("bi-circle");

       
        const todoElement = event.target.closest(".todo");
        const textElement = todoElement.querySelector(".unchecked");
        textElement.classList.toggle("checked");
    }
    else if (event.target.classList.contains("bi-pencil-square")) {
    
        const textElement = event.target.closest(".todo").querySelector(".unchecked");
        textElement.contentEditable = true;
        textElement.focus();
    } else if (event.target.classList.contains("bi-trash")) {
        
        const todoElement = event.target.closest(".todo");
        todoElement.remove();
    }


});

});
