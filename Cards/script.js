var app = new Vue({
  el: "#flashcards-app",
  data: {
    a: "kh",
    onOff: true,
    cards: [
      {
        question: "What year was IUPUI founded?",
        answer: "1969",
        category: "history",
        flipped: true
      },
      {
        question: "What is 2+2?",
        answer: "Fish",
        category: "math",
        flipped: true
      },
      {
        question: "Is mayonnaise an instrument?",
        answer: "No",
        category: "science",
        flipped: true
      }
    ]
  },
  methods: {
    switcher: function(bool) {
      bool = !bool;
    }
  }
});