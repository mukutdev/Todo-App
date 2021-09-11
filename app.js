// Selectors

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addTodo");
const todoText = document.getElementById("todo-text");
const todoContainer = document.getElementById("todoList");



// enter key event handlers
todoInput.addEventListener('keyup', (event) =>
{
  if (event.keyCode === 13)
  {
    event.preventDefault();
    addBtn.click();
   
  } 
})


// add todo event listener
const addTodo = () => {
  if (!todoInput.value.trim()) {
    alert("Please tell us whats on your mind");
  } else {
    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("class", "todo");
    todoDiv.innerHTML = `<li>${todoInput.value}</li>
        <button title="mark as complete"  onclick ="deleteOrCheckItem(event)" class="completed"><i class="fas fa-check"></i></button>
        <button title="mark as delete" onclick ="deleteOrCheckItem(event)" class="trash"><i class="fas fa-trash-alt"></i></button>`;
    todoContainer.appendChild(todoDiv);
    todoInput.value = "";


  }
};

// Delete or check items listener

const deleteOrCheckItem = (event) => {
  const parentEle = event.currentTarget;
  const getParent = parentEle.parentElement;

  if (parentEle.classList == "completed") {
    getParent.classList.toggle("completedText");
  }
  if (parentEle.classList == "trash") {
    getParent.classList.add("fall");

    getParent.addEventListener("transitionend", () => {
      getParent.remove();
    });
  }
};

// todo filter option

const filterOption = (event) => {
  const todoElements = todoContainer.children;

  for (let i = 0; i < todoElements.length; i++) {
    const element = todoElements[i];
    switch (event.target.value) {
      case "all":
        element.style.display = "flex";
        break;
      case "completed":
        if (element.classList.contains("completedText")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        break;
      case "incomplete":
        if (!element.classList.contains("completedText")) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
    }
  }
};
