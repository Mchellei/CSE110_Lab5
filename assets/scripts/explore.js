// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");


function init() {
  // TODO
  const synth = window.speechSynthesis; 
  const voiceSelect = document.querySelector("select"); 
  let voices = []; 

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList(); 
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const button = document.querySelector("button"); 
  const textInput = document.getElementById("text-to-speak");
  const img = document.querySelector("img"); 

  button.addEventListener("click", function(e){
    const utterThis = new SpeechSynthesisUtterance(textInput.value); 
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name"); 

    for(let i = 0; i < voices.length; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis); 
    if(synth.speaking) {
      img.src = "assets/images/smiling-open.png";
    }

    utterThis.onend = () => {
      img.src = "assets/images/smiling.png"; 
    }; 
    
  }) 

}