//add listener to all buttons with .drum and make sound on click
for(var i=0; i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
  })
}

//to make sound when the keys are pressed
document.addEventListener("keydown", function(){
  makeSound(event.key);
});

//function to make sound
function makeSound(c){
  buttonAnimation(c);
  var loc="sounds/";
  switch(c){
    case "w":
    loc+="tom-1.mp3";
    break;
    case "a":
    loc+="tom-2.mp3";
    break;
    case "s":
    loc+="tom-3.mp3";
    break;
    case "d":
    loc+="tom-4.mp3";
    break;
    case "j":
    loc+="snare.mp3";
    break;
    case "k":
    loc+="crash.mp3";
    break;
    case "l":
    loc+="kick-bass.mp3";
    break;
  }
  var audio=new Audio(loc);
  audio.play();
}

function buttonAnimation(c){
  document.querySelector("."+c).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+c).classList.remove("pressed");
  },100);
}
