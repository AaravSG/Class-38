class Form{

    constructor(){

        this.title = createElement("h2");
        this.input = createInput("NAME");
        this.button = createButton("PLAY");
        this.greeting= createElement("h3");
        this.resetButton = createButton("RESTART")
        
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        
    }


    display(){
        
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-30,0);
        
        
        this.input.position(displayWidth/2-30,displayHeight/2-100);
        
        
        this.button.position(displayWidth/2+30,displayHeight/2); 

        this.resetButton.position(50,40)
        
        this.button.mousePressed( () =>{

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount ++;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();

            
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/2-30,displayHeight/2-40);

        })

        this.resetButton.mousePressed(()=>{

            game.updateState(0);
            player.updateCount(0);
            database.ref("/").update({
                players : null
            })



        })
    }

   
    
}