class Thor
{
constructor()
{

    this.width = 25;
    this.height =25 ;
    //this.visibility = true;
    this.x = windowWidth/2;
    
    this.y = windowHeight/2 + windowHeight/4;
    this.body = createSprite(this.x,this.y,this.width,this.height);

}
display(){
  
  var rand = random(20,600);
  var rand2 = random(20,600);
 
  if(World.frameCount%60 === 0){
    battleship1 = createSprite(rand, 0, 10, 10);
    battleship1.addImage("bs",bs1);
    battleship1.scale = 0.5;
    battleship1.velocityY=3;
    BattleshipGroup.add(battleship1);
   
  }
  this.body.x = World.mouseX;
  
  
if(lightninggroup.isTouching(battleship1))  
{ // console.log(battleship1.y);
  battleship1.destroy();
  //lt.destroy();
  lt.destroy();
    score = Math.round(score+10);    
}
if(lightninggroup.isTouching(sheild)){
sheild.destroy();
lt.destroy();
}
if(lightninggroup.isTouching(Thanos)){
  Thanos.destroy();
  btGroup.destroyEach();
  gameState="end";
}
if(btGroup.isTouching(this.body)){
  this.body.destroy();
  gameState="end";
  lightninggroup.destroyEach();
  }

 /*else if (lightninggroup.isTouching(battleship2))
{
  battleship2.visible = false;
}*/
}
}
