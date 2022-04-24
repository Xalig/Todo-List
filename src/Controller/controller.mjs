export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
      this.view.init();
      this.initForm();
      this.buttonSortTasks();
      this.clearInput();
    }

    
  initForm() {
    this.view.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const newTask = data.get("task-input");
      if (newTask !== "") {
        this.view.ul.className = "allList";
        this.model.addInput(newTask);
        this.renderTodo();
        this.view.input.value = "";
      }
    });
  }


  buttonSortTasks() {
    this.view.sortButton.addEventListener("click", (e) => {
      if (e.target.className === "button-sort sort-reverse") {
        this.model.sortTasksReverse();
      } else {
        this.model.sortTasks();
      }
      this.renderTodo();
      e.target.classList.toggle("sort-reverse");
    });
  }

  renderTodo() {
    this.view.ul.innerHTML = "";

    this.model.array.forEach((el, index) => {
      this.newLi = this.view.createLi({
        class: "addNewTask",
      });

      this.newInput = this.view.createInput({
        text: el,
        name: "inputTask",
        class: "input-task",
      });

      this.newInput.addEventListener("keyup", (event) => {
        this.model.changeTask(index, event.target.value);
      });

      this.deleteButton = this.view.createButton({
        class: "deleteTask",
        type: "button",
      });

      this.deleteButton.addEventListener("click", () => {
        this.model.deleteTask(index);
        this.renderTodo();
        if (this.view.ul.innerHTML === "") {
          this.view.ul.className = "";
        }
      });
      this.view.ul.append(this.newLi);
      this.newLi.append(this.newInput);
      this.newLi.append(this.deleteButton);
    });
  }

  clearInput() {
    this.view.clearInputValue.addEventListener("click", () => {
      this.view.input.value = "";
    });
  }
  
}