class Form {

  constructor() {
    this.title = createElement('h2');
    this.input = createInput("Name");
    this.button = createButton('START');
    this.greeting = createElement('h1');
  }
  hide(){
    removeElements();
  }

  display(){
    var title = createElement('h2')
    title.html("1200m --- Hurdles Race");
    title.position(displayWidth/2 - 50 , 0);
    this.input.position(displayWidth/2 - 20,displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30,displayHeight/2);
    text = createElement('h2','Hi,Please Enter five players name to continue');
    text.position(48,131);

      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 50,displayHeight/4);
    });

   


  }
}