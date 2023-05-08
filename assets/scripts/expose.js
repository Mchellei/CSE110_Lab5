// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("[alt=\"No image selected\"]");  
  const audio = document.querySelector("audio"); 

  hornSelect.addEventListener("change", function(e){
    image.src = `assets/images/${e.target.value}.svg`; 
    audio.src = `assets/audio/${e.target.value}.mp3`; 
  })

  const volume = document.getElementById("volume"); 
  const volumeIcon = document.querySelector("[alt=\"Volume level 2\"]");

  volume.addEventListener("input", function(e){
    var value = e.target.value; 
    if (value == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg"; 
    }else if(value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg"; 
    }else if (value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg"; 
    }else {
      volumeIcon.src = "assets/icons/volume-level-3.svg"
    }
    audio.volume = value / 100; 
   })
   

   const button = document.querySelector("button"); 
   const jsConfetti = new JSConfetti(); 
   
   button.addEventListener("click", function(){
    audio.play(); 
    if(audio.src.includes("party")) {
      jsConfetti.addConfetti(); 
    }
   })

}