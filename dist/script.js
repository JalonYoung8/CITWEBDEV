new Vue({
  el: "#destiny-app",
  data: {
    cards: [
      {
        name: "Rey",
        rarity: 'legendary',
        setNumber: 100,
        affl: "hero",
        color: "blue",
        health: 10,
        img: "https://swdestinydb.com/bundles/cards/en/01/01038.jpg"
      },
      {
        name: "Han Solo",
        rarity: 'rare',
        setNumber: 36,
        affl: "hero",
        color: "yellow",
        health: 10,
        img:
          "http://images-cdn.fantasyflightgames.com/filer_public/3b/15/3b1513ab-1bf2-46f9-93ec-9fb0246e567b/sws17_main.png"
      },
      {
        name: "General Grievous",
        rarity: 'rare',
        setNumber: 50,
        affl: "villain",
        color: "red",
        health: 13,
        img:
          "https://i.pinimg.com/originals/67/fe/ca/67feca5ed7040713e386d568860701a8.jpg"
      },
      {
        name: "Darth Vader",
        rarity: 'legendary',
        setNumber: 5,
        affl: "villain",
        color: "blue",
        health: 11,
        img:
          "http://images-cdn.fantasyflightgames.com/filer_public/70/2d/702dba51-4b9f-46db-ad74-36216b9fdbe9/swd13_preview2.jpg"
      }
    ]
  },
  methods: {
    classApplier(color) {
      return {
        blue: color === "blue",
        red: color === "red",
        yellow: color === "yellow"
      };
    },
    rareApplier(bool) {
      return {
        rare:bool === 'rare',
        legendary:bool === 'legendary'
      };
    },
    afflApplier(affl) {
      return {
        hero: affl === "hero",
        villain: affl === "villain",
        neutral: affl === "neutral"
      };
    },
    imgStyler(image){
      return{
        backgroundImage: 'url(' + image + ')'
      }
    }
  }
});