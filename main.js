
song1="";
song2="";

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("frozen.mp3");
}

function setup(){
    video = createCapture(VIDEO);
    video.hide();
    
    canvas = createCanvas(600, 500);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play1(){
    song2.stop();
    song1.play();
}
function play2(){
    song1.stop();
    song2.play();
}