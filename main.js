video = "";
status = "";

function setup(){
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,350);
}

function start(){
    objectDetector = ml5.objectDetector('Cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object Detected";
    object_name = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Cocossd is successfully loaded");
    status = true;
}