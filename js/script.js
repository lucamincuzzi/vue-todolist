const { createApp } = Vue;

createApp({
  data() {
    return {
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
  },
}).mount("#app");
