Vue.component("list", {
  data: function() {
    return {
      isActive: true,
      inputTest: "hi",
      colorChange: "white",
      products: "",
      cost: "",
      product2: "bif",
      brand: "",
      colorTemp: "",
      nextId: 3,
      cart: [
        {
          id: 0,
          name: "test",
          type: "mayo",
          color: "blue",
          img: "https://images-na.ssl-images-amazon.com/images/I/81bmdHc90HL._SX425_.jpg",
          price: "$2"
        }
      ],
      instrument: [
        {
          id: 1,
          name: "guitar",
          type: "yamaha",
          color: "yellow",
          img: "https://images-na.ssl-images-amazon.com/images/I/81tQhEEtiEL._SY355_.jpg",
          price: "$1.50"
        },
        {
          id: 2,
          name: "mayo",
          type: "fender",
          color: "orange",
          img: "https://images-na.ssl-images-amazon.com/images/I/818-exI6lkL._SL1500_.jpg",
          price: "$1.80"
        }
      ]
    };
  },
  template:
    '<div><div class="cart"><h1>cart {{this.cart.length}}</h1><button @click="empty()">reAdd</button><button @click="ask()">Add New Instrument</button><h2 v-for="stuff in cart">{{stuff.name}}  {{stuff.price}}</h2></div><div class="card" v-for="(items, index) in instrument"><div v-on:mouseleave=colorLeave() v-on:mouseover=colorHover(index) v-bind:style="{ backgroundColor: colorChange }"><button @click=addItem(index)>Add</button><h4  v-bind:class="colorApplier(index)">{{items.name}} {{items.type}} {{items.price}}</h4><img v-bind:src="items.img"> <button @click=removeItem(index)>X</button></div></div></div>',
  methods: {
    addTodo() {
 

      this.instrument.push({
        id: this.nextId,
        name: this.products,
        type: this.brand,
        color: this.sort(),
        img: "https://images-na.ssl-images-amazon.com/images/I/81bmdHc90HL._SX425_.jpg",
        price: "$" + this.cost
      });

      this.products = "";
      this.brand = "";
      this.nextId++;
    },
    test() {
      alert("working");
    },
    colorApplier(index) {
      return {
        blue: this.instrument[index].color == "blue",
        orange: this.instrument[index].color == "orange",
        yellow: this.instrument[index].color == "yellow"
      };
    },
    removeItem(index) {
      this.instrument.splice(index, 1);
    },
    addItem(index) {
      this.cart.push({
        id: this.instrument[index].id,
        name: this.instrument[index].name,
        type: this.instrument[index].type,
        color: this.instrument[index].color
      });
      this.removeItem(index);
    },
reAdd(){
    
      for (i = 0; i < this.cart.length; i++){
        this.instrument.push({
        id: this.cart[i].id,
        name: this.cart[i].name,
        type: this.cart[i].type,
        color: this.cart[i].color,
        img: "https://images-na.ssl-images-amazon.com/images/I/81bmdHc90HL._SX425_.jpg"
      }); 

      
   }
    },
    empty(){
  
      this.reAdd();
      this.cart = [];
      
    },
    ask(){
      var product = prompt("name");
      var type = prompt("fender, yamaha, mayo");
      var cost = prompt("how much does it cost");
      this.products = product;
      this.brand = type;
      this.cost = cost;
      this.addTodo();
    },
    toggleClass: function(event){
       // Check value
       if(this.isActive){
         this.isActive = false;
       }else{
         this.isActive = true;
       }

    },
    sort() {
      if (this.brand == "fender") {
        return "orange";
      } else if (this.brand == "yamaha") {
        return "yellow";
      } else if (this.brand == "mayo") {
        return "blue";
      }
    },
    colorHover(index){
      this.colorChange = this.instrument[index].color;
    },
    colorLeave(){
      this.colorChange = "white";
    }
  },
computed: {
  styleObject: function() {
    return {
      '--color': "red",
      '--color-hover': "blue"
    }
  }
}
});

var app = new Vue({
  el: "#app",
  data: {
    test: "hello"
  }
});