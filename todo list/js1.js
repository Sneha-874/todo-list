const todoList = document.querySelector(".todo-list");
const inputBox = document.querySelector(".input-box");
const addTaskButton = document.querySelector(".addTaskButton");

function addTask(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    if (inputBox.value.trim() === '') {
        alert("You must enter something!!");
    } else {
        const newTodoText = inputBox.value;
        const newLi = document.createElement("li");
        const newLiInnerHTML = `
        <span class="text">${newTodoText}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>
        `;
        newLi.innerHTML = newLiInnerHTML;
        todoList.append(newLi);
        inputBox.value="";
        
    }
}

addTaskButton.addEventListener("click", addTask);
todoList.addEventListener("click" , (e)=>{
    // console.log(e.target);
    //check if user clicked on done
    if(e.target.classList.contains("done")){
        // console.log("you clicked on done");
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        // console.log("you clicked on remove");
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }

})