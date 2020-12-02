const songs = [
        "Omah-Lay-Confession.mp3",
        "Qdot-Ft.-Patoranking-Magbe.mp3",
        "Tekno-Enjoy.mp3",
        "Master-KG-Ft.-Nomcebo-Jerusalema.mp3"
];

const player = document.getElementById('player');

function createSongList() {
  const list = document.createElement("ol");
  for(let i = 0; i < songs.length; i++){
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
}

const links = document.querySelectorAll("li");
for(const link of links) {
  link.addEventListener('click', setSong);
}

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

songList.onclick = function(e) {
  document.querySelector("#headphones").classList.remove("pulse");

  const source = document.getElementById("source");
  source.src = "Songs/" + e.target.innerText;

  document.querySelector("#currentSong").innerText = `Now Playing: ${e.target.innerText}`;

  const player = document.getElementById('player');
  player.load();
  player.play();
  document.querySelector("#headphones").classList.add("pulse");
};

function playAudio() {
  if(player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function(e) {
  const volume = e.target.value;
  player.volume = volume;
};

function updateProgress(){
  if(player.currentTime > 0) {
    const progressBar = document.getElementById('progress');
  progressBar.value = (player.currentTime / player.duration) * 100;
  }
}