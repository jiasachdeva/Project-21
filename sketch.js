var canvas;
var music;
var top1,top2,top3,top4;
var left1,left2,left3,left4;
var right1,right2,right3,right4;
var bottom1,bottom2,bottom3,bottom4;
var square;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    top1=createSprite(100,2,150,30);
    top1.shapeColor="blue";
    top2=createSprite(300,2,150,30);
    top2.shapeColor="red";
    top3=createSprite(500,2,150,30);
    top3.shapeColor="yellow";
    top4=createSprite(700,2,150,30);
    top4.shapeColor="green";

    bottom1=createSprite(100,598,150,30);
    bottom1.shapeColor="blue";
    bottom2=createSprite(300,598,150,30);
    bottom2.shapeColor="red";
    bottom3=createSprite(500,598,150,30);
    bottom3.shapeColor="yellow";
    bottom4=createSprite(700,598,150,30);
    bottom4.shapeColor="green";

    square=createSprite(400,300,50,50);
    square.shapeColor="white";

}

function draw() {
    background(0);
    //create edgeSprite (not in this pro)
    square.x=mouseX;
    square.y=mouseY;
    if(top1.x-square.x<top1.width/2+square.width/2&&
        square.x-top1.x<top1.width/2+square.width/2&&
        top1.y-square.y<top1.height/2+square.height/2&&
        top1.y-square.y<top1.height/2+square.height/2
          ){
             square.shapeColor="blue" ;
          }
          else{
           square.shapeColor="white";   
          }
          



    //add condition to check if box touching surface and make it box
    drawSprites();
}
