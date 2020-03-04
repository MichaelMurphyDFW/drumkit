// document.querySelector(".drum").addEventListener("click",handleClick)

const soundsPath = "sounds/"
const sounds = ["kick-bass.mp3", "snare.mp3"]

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   var letter = this.textContent;
//
//   function playSound() {
//     console.log(i);
//     new Audio(soundsPath+sounds[i]).play();
//   }
//
//   document.querySelectorAll(".drum")[i].addEventListener("click", playSound)
// }

function flash(letter) {
  document.querySelector("."+letter).classList.add("pressed");
  // document.querySelector("."+letter).classList.remove("pressed");
}

function unflash(letter) {
  document.querySelector("."+letter).classList.remove("pressed");
}

function getLetter(letter) {
  switch (letter) {
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default: console.log(letter);

  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("mousedown", function() {
    var letter = this.textContent;
    getLetter(letter);
    flash(letter);
  })

  document.querySelectorAll(".drum")[i].addEventListener("mouseup", function() {
    var letter = this.textContent;
    unflash(letter);
  })

}



document.addEventListener("keydown", function(event) {
  var letter = event.key;
  getLetter(letter);
  flash(letter);
})

document.addEventListener("keyup", function(event) {
  var letter = event.key;
  unflash(letter);
})
