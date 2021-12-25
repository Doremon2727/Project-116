lipX = 0;
lipY = 0;

function preload() {
    lip =  loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
    canvas = createCanvas(300,230);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 230);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lip, lipX, lipY, 30, 30);
}

function take_snapshot() {
    save("filter face  Image.png");
}

function modelLoaded() {
    console.log('Posenet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        lipX = results[0].pose.nose.x-15;
        lipY = results[0].pose.nose.y+60;
        console.log("lipx = " + lipX + " lipy=" + lipY );
        
        
    
    
}
}
