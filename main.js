function setup()
{
    video=createCapture(VIDEO);
    video.size=(500,400);
    canvas=createCanvas(600,445); 
    canvas.position(800,143);

    poseNet=ml5.poseNet(video,modelLoaded); 
    poseNet.on('pose',gotPoses);
}

function draw()
{
background('#FF00FF');
}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
    }
}