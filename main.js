video = "";
status = "";
objects = "";

function setup(){
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,400);
    if(status != ""){
        objectDetector.detect(video,gotResult);
        for(i = 0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_objects").innerHTML = "Number of objects dected are "+objects.length;
            fill("red");
            percent = floor(objects[i].confidence * 100);
            textSize(20);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("blue");
            rect(objects[i].x,objects[i].y,objects[i].width,
                objects[i].height);
        }
    }
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
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
