
const videoPlayerContainer = document.querySelector('.videoPlayer');
let videoPlayer = document.querySelector('.videoPlayer video');
const playBtn = document.getElementById('playBtn');
const playBtnIcon = document.querySelector('#playBtn i');

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

function knowKeyCode(event){
    const spaceBar = event.code;
    if(spaceBar === 'Space'){
        playClick();
    }
}

function init(){
    playBtn.addEventListener('click',playClick);
    window.addEventListener('keydown',knowKeyCode);
}

if(videoPlayerContainer){
    init();
}