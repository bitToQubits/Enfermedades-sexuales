var audioLink = document.getElementById("audioLink");
var audioPlayer = document.getElementById("audioPlayer");

audioLink.addEventListener("click", function(event) {
  event.preventDefault();
  if (audioPlayer.paused) {
    audioPlayer.play();
    audioLink.innerHTML = '<i class="fa fa-pause"></i> Pausar audio';
  } else {
    audioPlayer.pause();
    audioLink.innerHTML = '<i class="fa fa-play"></i> Reproducir audio';
  }
});

