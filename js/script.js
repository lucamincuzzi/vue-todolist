const { createApp } = Vue;

createApp({
  data() {
    return {
      todo: [
        {
          text: "Fare lavatrice",
          done: false,
          visibility: true,
        },
        {
          text: "Prendere il latte",
          done: false,
          visibility: true,
        },
        {
          text: "Portare Fannie dalla veterinaria",
          done: false,
          visibility: true,
        },
      ],
    };
  },
  created() {
    console.log("Ciao");
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
    eraseItem: function(index) {
        this.todo[index].visibility = false
        console.log("Ciao");
    }
  },
}).mount("#app");
