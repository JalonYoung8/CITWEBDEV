Vue.component('counter',{
  data:function(){
    return{
      counter:0
    }
  },
  props:["hello", "add"],
  template: '<button v-on:click="add()">{{hello}} {{this.counter}}</button>',
  methods:{
    add:function(){
      this.counter=this.counter+1;
      this.$emit("add");
    }
  }
})

new Vue({
  el: "#app",
  data: {
  test: "hello", 
  buttons:[
    {
      test1:"hello1"
    },
    {
      test1:"hfie"
    }
  ],
    total: 0 
},
  methods: {
    increase: function(){
      this.counter=this.total+=1
    }
  }
});