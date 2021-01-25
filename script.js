// Music App Preparation Code

// Set Variables

// Functions

let mySong = document.getElementById("audio");
let click = document.getElementById("click");
let mySongTwoT = document.getElementById("mySongTwoT");

function musicPlayer() {
  if (mySong.paused) {
    mySong.play();
    click.innerHTML = "I am playing";
  } else {
    mySong.pause();
    click.innerHTML = "Paused";
  }
}

click.onclick = musicPlayer;

function handleFiles(event) {
  var files = event.target.files;
  $("#src").attr("src", URL.createObjectURL(files[0]));

  document.getElementById("audio").load();
}
document
  .getElementById("upload")
  .addEventListener("change", handleFiles, false);

function handleFiles2(event2) {
  var files2 = event2.target.files;
  $("#src2").attr("src", URL.createObjectURL(files2[0]));

  document.getElementById("audio2").load();
}
document
  .getElementById("upload2")
  .addEventListener("change", handleFiles2, false);
