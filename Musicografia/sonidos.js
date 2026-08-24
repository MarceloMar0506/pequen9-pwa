const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audio = new AudioContext();
  const compressor = audio.createDynamicsCompressor();
  compressor.connect(audio.destination);


// const playNote = (e) => {
//   // play note according to data-frequency attribute
//   //console.log(e);
//   (new SoundPlayer(audio)).play(e.target.dataset.frequency, 0.8, "sine").stop(0.5);
//   e.cancelBubble = true;
// };
function playNote() {
    //   //console.log("pulsado" + e.target.dataset.frequency );
   (new SoundPlayer(audio)).play(e.target.dataset.frequency, 0.8, "sine").stop(0.5);
   e.cancelBubble = true;
}

for(let el of document.getElementById("piano").getElementsByTagName("div")) {
  el.addEventListener("click", playNote, false);
}
