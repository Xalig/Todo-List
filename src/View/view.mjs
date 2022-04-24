export default class View {
  constructor() {
    this.root = document.getElementById("root");
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.id && (button.id = props.id);
    props.class && (button.className = props.class);
    props.type && (button.type = props.type);

    return button;
  }

  createDiv(props) {
    const div = document.createElement("div");

    props.text && (div.innerText = props.text);
    props.id && (div.id = props.id);

    return div;
  }

  createForm(props) {
    const form = document.createElement("form");

    props.id && (form.id = props.id);

    return form;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.text && (input.value = props.text);
    props.class && (input.className = props.class);
    props.name && (input.name = props.name);
    props.id && (input.id = props.id);

    return input;
  }

  createImg(props) {
    const img = document.createElement("img");

    props.text && (img.innerText = props.text);
    props.class && (img.className = props.class);
    props.id && (img.id = props.id);

    return img;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.id && (ul.id = props.id);

    return ul;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerHTML = props.text);
    props.class && (li.className = props.class);

    return li;
  }

  init() {
    this.top = this.createDiv({
      id: "top-yellow",
    });

    this.buttonAdd = this.createButton({
      id: "buttonAdd",
    });

    this.buttonText = this.createDiv({
      text: "Добавить",
      id: "button-text",
    });

    this.plus = this.createDiv({
      text: "+",
      id: "plus",
    });
    
    this.form = this.createForm({
      id: "form",
    });

    this.input = this.createInput({
      id: "input",
      name: "task-input",
    });

    this.inputSortDiv = this.createDiv({
      text: "To-do list",
      id: "todo-text",
    });

    this.clearInputValue = this.createButton({
      id: "clearInputValue",
      type: "button",
    });

    this.ul = this.createUl({
      id: "allList",
    });

    this.li = this.createLi({
      id: "listElement",
    });

    this.sortButton = this.createButton({
      class: "button-sort",
      type: "button",
    });
    

    this.buttonAdd.append(this.buttonText)
    this.buttonAdd.append(this.plus)

    this.inputSortDiv.append(this.sortButton);
    this.inputSortDiv.append(this.clearInputValue);
    this.inputSortDiv.append(this.input);

    this.form.append(this.top);
    this.form.append(this.inputSortDiv);
    this.form.append(this.ul);
    this.form.append(this.buttonAdd);

    this.root.append(this.form);
  }
}