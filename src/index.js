
const videoPlayerContainer = document.querySelector('.videoPlayer');
let videoPlayer = document.querySelector('.videoPlayer video');
const videoController = document.getElementById('videoController');
const playBtn = document.getElementById('playBtn');
const volumeBtn = document.getElementById('volume');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const durationSliderBar = document.getElementById('duration');
let isHidden = false;
let hideTimeout;
let showTimeout;

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

function hideMouse(){
   document.body.style.cursor = 'none';
   isHidden = true;
   clearTimeout(hideTimeout);
   videoPlayer.addEventListener('mousemove',showMouse);
   videoController.classList.add('QsE3');
}

function showMouse(){
    document.body.style.cursor = "default";
    isHidden = false;
    clearTimeout(showTimeout);
    videoController.classList.remove('QsE3');
}

function watchMouseMove(){
    hideTimeout = setTimeout(hideMouse,6000);
    showTimeout = setTimeout(showMouse,500);
}

function init(){
    playBtn.addEventListener('click',playClick);
    window.addEventListener('keydown',knowKeyCode);
    volumeBtn.addEventListener('click',volumeChange);
    videoPlayer.addEventListener('loadedmetadata',loadedTime);
    window.addEventListener('mousemove',watchMouseMove);
    setInterval(showCurrentTime,1000);
}



if(videoPlayerContainer){
    init();
}

