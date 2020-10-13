
const videoPlayerContainer = document.querySelector('.videoPlayer');
let videoPlayer = document.querySelector('.videoPlayer video');
const playBtn = document.getElementById('playBtn');
const playBtnIcon = document.querySelector('#playBtn i');
const widowKeyCode = window.event.keyCode;

function playClick(){
    if(videoPlayer.paused){
        videoPlayer.play();
        playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    }
    else{
        videoPlayer.pause();
        playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
    
    
}

function init(){
    playBtn.addEventListener('click',playClick);
}

if(videoPlayerContainer){
    init();
}