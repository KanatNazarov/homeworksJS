var cvs =document.getElementById("canvas");
var ctx =cvs.getContext("2d");

var bird= new Image();
var bg= new Image();
var fg= new Image();
var pipeUp= new Image();
var pipeBottom= new Image();
bird.src= "images/bird.png";
bg.src="images/bg.png";
fg.src="images/fg.png";
pipeUp.src= "images/pipeUp.png";
pipeBottom.src= "images/pipeBottom.png";

var fly = new Audio();
var score_aud = new Audio();
fly.src="sound/fly.mp3";
score_aud.src="sound/score.mp3";
var gap =110;


document.addEventListener("keydown",moveUp,);
function moveUp() {
    yPos -=35;
    fly.play();

}


var pipe =[];
pipe[0]={
    x:cvs.width,
    y:0
}

var score=0
//
var xPos =10;
var yPos =150;
var grav =1.1;

function draw() {
ctx.drawImage(bg,0,0);
for(var i=0;i<pipe.length;i++){
    ctx.drawImage(pipeUp,pipe[i].x,pipe[i].y);
    ctx.drawImage(pipeBottom,pipe[i].x,pipe[i].y+pipeUp.height+gap);
    pipe[i].x--;
    if(pipe[i].x == 125){
        pipe.push({
            x:cvs.width,
            y:Math.floor(Math.random()* pipeUp.height)-pipeUp.height
        });
    }

//
    if(xPos +bird.width>=pipe[i].x
    && xPos <=pipe[i].x +pipeUp.width
    &&(yPos <=pipe[i].y+pipeUp.height
        || yPos + bird.height >=pipe[i].y +pipeUp.height + gap)|| yPos +bird.height >= cvs.height -fg.height){
        location.reload();
    }
      if(pipe[i].x == 5){
        score++;
        score_aud.play();
    }

}
    //

ctx.drawImage(fg,0,cvs.height -fg.height);
ctx.drawImage(bird,xPos,yPos);
    yPos += grav;
    ctx.fillStyle ="#000";
    ctx.font ="24px Veranda";
    ctx.fillText("Cчет " + score,10,cvs.height -20);

    requestAnimationFrame(draw);

}
pipeBottom.onload= draw;


