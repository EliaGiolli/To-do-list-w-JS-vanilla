//selection elements
let todoMain = document.getElementById("todo-id");
let todoList = document.querySelector(".todo-list");
let todoInput = document.getElementById("todo-input");
let todoButton = document.querySelector(".todo-button");


//event listener

//it adds a yellow-ish background when the user types something in the input field
todoInput.addEventListener("input", () => {
    todoInput.classList.add("active");
});

//it removes the yellow-ish background when the user leaves the input field
todoInput.addEventListener("blur", () => {
    todoInput.classList.remove("active");
});

//it adds a task to the list when the user clicks the button
todoButton.addEventListener("click", function(e){
    //initial check to assure the user has typed something valid in the input field
    e.preventDefault();
    const inputText = todoInput.value.trim();
    if (inputText === "") {
        return;
    }

    const newlistContainer = document.createElement("div");
    newlistContainer.classList.add("list-container");
    const newListItem = document.createElement("li");
    newListItem.classList.add("list-item");
    const newDeleteButton = document.createElement("button");
    newDeleteButton.classList.add("delete-button");
    newDeleteButton.textContent = "Delete";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    newlistContainer.appendChild(checkbox);
    newlistContainer.appendChild(newDeleteButton);
    newlistContainer.appendChild(newListItem);
    newListItem.textContent = todoInput.value;
    todoInput.value = "";

    //eventListeners to the newly added elements
    newDeleteButton.addEventListener("click", function(e){
        newlistContainer.remove();
    });

    checkbox.addEventListener("change", function(e){
        if (checkbox.checked) {
            newListItem.style.textDecoration = "line-through";
          } else {
            newListItem.style.textDecoration = "none";
          }
    });

    todoList.appendChild(newlistContainer);

})
