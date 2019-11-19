var app = new Vue({
  el: "#app",
  data: {
  name: "Name",
  validN: false,
  validA: false, 
  validE: false,  
  validM: true,  
  email: "email",
  message: "write in me",  
  age: "23",

}, 
  watch: {
    name: function(newValue) {
      if(newValue.length >= 2){
        this.validN = true;
      }else{
        this.validN = false;
      }
    },
    age: function(newValue) {
      if(parseInt(newValue) > 5){
        this.validA = true;
      }else if (parseInt(newValue) < 18){
        this.validA = false;
      } 
    },
        email: function(newValue) {
      var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(reg.test(newValue) === true){
        this.validE = true;
      }else{
        this.validE = false;
      }
    },
    message: function(newValue) {
      if(newValue.length >= 250){
        this.validM = false;
      }else if(newValue.length < 250){
       this.validM = true; 
    }
  }
  },
  methods: {
    submitValidator: function() {
      if(this.validM === true && this.validN === true && this.validA == true && this.validN == true ){
        alert("Congrats its Valid");
      } else {
        alert("This is not Valid");
      }
    }
  }
});
