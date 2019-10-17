var wrapper = document.body.querySelector(".wrap");
var array = [
  {
    name:"Leo",
    color:"blue",
    noise:"Slash"
  },
  {
    name:"Donnie",
    color:"purple",
    noise:"Bonk"
  },
  {
    name:"Raph",
    color:"red",
    noise:"Kachink"
  },
  {
    name:"Mikey",
    color:"orange",
    noise:"Whack"
  }
]

 var messageEle = document.createElement("div");

wrapper.appendChild(messageEle);

for(var i = 0; i < array.length; i++){
  var userEle = document.createElement("div");
  userEle.id = "id" + i;  
  userEle.style.color = "white";
  userEle.style.height = "100px";
  userEle.style.width = "100px";  
  userEle.style.background = "green";
  userEle.style.marginBottom = "20px";
  userEle.innerHTML = array[i].name;
  const color = array[i].color;

  userEle.addEventListener("mouseover", function(){
    
      this.style.border = `.5em solid ${color}`;
  })

  const noise = array[i].noise
  
    userEle.addEventListener("click", function(){
      messageEle.innerHTML = noise;
  })
  
userEle.addEventListener("mouseout", function(){
        this.style.border = 'none';
})  
  
 
  wrapper.appendChild(userEle);
}

 