class Form{
    constructor(){
        this.input= createInput('Name');
        this.button = createButton("Play");
        this.greeting = createElement('h2');
        this.title = createElement('h2');

    }

    hide(){
      this.greeting.hide();
      this.button.hide();
      this.title.hide();
      this.input();

    
    }

    display(){

        this.title.html("TP Car Racing Game");
        this.title.position(displayWidth/2 - 50,0,0);

        this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30,displayHeight/2);
        //this.input.position(200,200);

    

        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide(); 
        playerCount+=1; 
        player.name = this.input.value;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount); 
        this.greeting.html("Hello " + player.name);
        this.greeting.position(displayWidth/2 -70 ,displayHeight/4) 

        });

        }

}