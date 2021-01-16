var backImg;
var cat, mouse;
var catRunningImg, catSittingImg, catStandingImg,mouseDancingImg,mouseCheeseImg, mouseMagnifyImg;
function preload() {
    //load the images here
    backImg=loadImage(images/garden.png);
    catRunningImg=loadAnimation("images/tomThree", "images/tomTwo");
    catSittingImg=loadImage("images/tomOne");
    catStandingImg=loadImage("images/tomFour");
    mouseDancingImg=loadAnimation("images/jerryTwo", "images/jerryThree");
    mouseMagnifyImg=loadImage("images/jerryFour");
    mouseCheeseImg=loadAnimation("images/jerryOne");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(800,600,20,20);
   mouse=createSprite(200,600,20,20);
}

function draw() {

    background(backImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LeftArrow){
      cat.velocityX=-5;
      cat.addAnimation("catRunning", catRunningImg);
      cat.changeAnimation("catRunning");
  }

}
