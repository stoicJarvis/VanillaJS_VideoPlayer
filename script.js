const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player_slider');
const skipButtons = player.querySelectorAll('[data-skip]');

function togglePlay(){
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
}

function changeButton(){
    let icon = video.paused ? '►' : '❚ ❚';
    toggle.innerHTML = icon;
}

function keyPressed(e){
    if(e.keyCode == 32){
        togglePlay();
    }
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function sideKeys(e){
    if(e.keyCode == 37){
        video.currentTime += -10;
    } else if(e.keyCode == 39){
        video.currentTime += 10;
    }
}

function rangeChanged(){
    video[this.name] = this.value;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);
window.addEventListener('keydown', keyPressed);

skipButtons.forEach(button => button.addEventListener('click', skip));
window.addEventListener('keydown', sideKeys);

ranges.forEach(range => range.addEventListener('change', rangeChanged));