var fixrect;
var movingrect;

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);

 fixrect = createSprite(400,200,50,100);
  fixrect.shapeColor= "blue";

 movingrect = createSprite(40,80,100,50);
 movingrect.shapeColor = "blue";

}

function draw() {
  background(0,0,0);  

 movingrect.x = mouseX;
 movingrect.y = mouseY;

 if(fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2&&
  movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2&&
  fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2&&
  movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2)
  {
 
    fixrect.shapeColor= "green";
 }

else fixrect.shapeColor= "blue";


  drawSprites();




}