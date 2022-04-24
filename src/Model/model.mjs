export default class Model {

  constructor() {
    this.array = [];
  }

  addInput(newTask) {
    this.array = [...this.array, newTask];
  }

  deleteTask(selectIndex) {
    this.array = this.array.filter((el, index) => index !== selectIndex);
  }

  sortTasks() {
    this.array = this.array.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? -1 : 1
    );
  }

  sortTasksReverse() {
    this.array = this.array.sort((a, b) =>
      a.toLowerCase() < b.toLowerCase() ? 1 : -1
    );
  }

  changeTask(index, newTask) {
    this.array[index] = newTask;
  }

}