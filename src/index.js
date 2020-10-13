
const videoPlayerContainer = document.querySelector('.videoPlayer');
let videoPlayer = document.querySelector('.videoPlayer video');
const playBtn = document.getElementById('playBtn');
const volumeBtn = document.getElementById('volume');

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

function volumeChange(){
    if(videoPlayer.muted === false){
        videoPlayer.muted = true;
        volumeBtn.innerHTML = `<i class="fas fa-volume-off"></i>`;
    }
    else{
        videoPlayer.muted = false;
        volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
    }
}

function init(){
    playBtn.addEventListener('click',playClick);
    window.addEventListener('keydown',knowKeyCode);
    volumeBtn.addEventListener('click',volumeChange);
}

if(videoPlayerContainer){
    init();
}