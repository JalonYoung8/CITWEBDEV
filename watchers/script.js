var app = new Vue({
  el: "#app",
  data: {
    currentDay: "1",
    month: 30,
    left: "there are this many days left ",
    name: "reverse me",
    eman: "wait",
    numbers: "ill tell you how many #'s are here in this string'",
    length: 1
    
  },

  computed: {
    ddfay: function() {
      return this.left + Number(this.month - parseInt(this.currentDay));
    },
        reverse: function() {
      return this.eman = this.name.split("").reverse().join("");
    },
            numbersLength: function() {
      return this.length = this.numbers.length;
    }
  }
  });