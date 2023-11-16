const { createApp } = Vue;

createApp({
  data() {
    return {
      errorVisible: false,
      newTodo: {
        text: "",
        done: false,
      },
      todo: [
        {
          text: "Fare lavatrice",
          done: false,
        },
        {
          text: "Prendere il latte",
          done: false,
        },
        {
          text: "Portare Fannie dalla veterinaria",
          done: false,
        },
      ],
    };
  },
  created() {
    console.log("To-do list creata");
  },
  methods: {
    checked: function (index) {
      if (this.todo[index].done === false) {
        this.todo[index].done = true;
        console.log(this.todo[index].text, ":", "Fatto");
      } else {
        this.todo[index].done = false;
        console.log(this.todo[index].text, ":", "Non fatto");
      }
    },
    eraseItem: function (index) {
      this.todo.splice(index, 1);
      console.log("Eliminato");
    },
    addNewTodo: function (event) {
      event.preventDefault();
      this.errorVisible = false;
      if (this.newTodo.text !== "") {
        const newTodoItem = { ...this.newTodo };
        this.todo.unshift(newTodoItem);
        this.newTodo.text = "";
      } else {
        this.errorVisible = true;
      }
    },
  },
}).mount("#app");
