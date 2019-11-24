Vue.component("tweet", {
  data: function() {
    return {
      color: "red",
      codeToggle: true,
      counter: 0
    };
  },
  props: ["username", "code", "message"],
  template:
    '<div><h1 v-if="codeToggle" v-on:click="toggleName()">{{username}}</h1><h1 v-else v-on:click="toggleName()">{{code}}</h1><p>{{message}}</p><button v-bind:style="{backgroundColor: color}" v-on:click="add()">like {{this.counter}}</button></div>',
  methods: {
    add: function() {
      this.toggle = !this.toggle;
              this.counter=this.counter+1;
            this.$emit("add");

      if (this.counter >= 20) {
        this.color = "blue";
      } else {
        this.color = "red";
      }
    },
     toggleName: function() {
      this.codeToggle = !this.codeToggle;
    }

  }
});

new Vue({
  el: "#app",
  data: {
    test: "hello",

    toggle: false,

    arry: [
      {
        username: "Leeroy",
        codeName: "fox",
        tweet: "High five"
      },
      {
        username: "Veggie",
        codeName: "dog",
        tweet: "I hat kakarots"
      },
      {
        username: "Jerry",
        codeName: "fox",
        tweet: "My name is Jerry"
      }
    ]
  }
});