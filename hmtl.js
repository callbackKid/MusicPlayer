const musicContainer = document.getElementsByClassName('music-container');
const  playBtn = document.querySelector('#play');
const  prevBtn = document.querySelector('#prev');
const  nextBtn = document.querySelector('#next');
const  audio= document.querySelector('#audio');
const  progress = document.querySelector('.progress');
const  progressContainer= document.querySelector('.progressContainer');
const  title = document.querySelector('#title');
const  cover = document.querySelector('#cover');

//array of the songs
const songs = ['summer', 'hey', 'ukulele'];

//a track of a song
let songIndex = 0;

//song info from a DOM
loadSong(songs[songIndex]);


//update a song info
function loadSong(song) {
title.innerText = song;
audio.src = `music/${song}.mp3`;
cover.src = `image/${song}.jpeg`;
}

function playSong(){
musicContainer.classList.add('play');
playBtn.querySelector('i.fas').classList.remove('fa-play');
playBtn.querySelector('i.fas').classList.add('fa-pause');

audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong (){
songIndex--;
if(songIndex < 0) {
    songIndex = song.length-1;
}
loadSong(songs[songIndex]);

playSong();
}

function nextSong(){

}

// event listeners
playBtn.addEventListener('click', () => {
    //check if a song is playing 
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
