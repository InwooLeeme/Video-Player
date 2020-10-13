
const videoPlayerContainer = document.querySelector('.videoPlayer');
let videoPlayer = document.querySelector('.videoPlayer video');
const playBtn = document.getElementById('playBtn');
const volumeBtn = document.getElementById('volume');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const durationSliderBar = document.getElementById('duration');

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

function loadedTime(){
    const totalDuration = Math.floor(videoPlayer.duration);
    totalTime.innerHTML = `00:${totalDuration}`;
}

const showCurrentTime = () =>{
    let currentDuration = Math.floor(videoPlayer.currentTime);
    currentTime.innerHTML = `00:${currentDuration < 10 ? `0${currentDuration}` : `${currentDuration}`}`;
    const totalDuration = Math.floor(videoPlayer.duration);
    durationSliderBar.value = currentDuration;
    durationSliderBar.max = totalDuration;
    if(totalDuration === currentDuration){
        videoPlayer.load();
    }
}

function init(){
    playBtn.addEventListener('click',playClick);
    window.addEventListener('keydown',knowKeyCode);
    volumeBtn.addEventListener('click',volumeChange);
    videoPlayer.addEventListener('loadedmetadata',loadedTime);
    setInterval(showCurrentTime,1000);
}

if(videoPlayerContainer){
    init();
}

