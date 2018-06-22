Sizeer.Authors = function(game){



};


Sizeer.Authors.prototype ={
    preload: function(){

    },
    create:function(){
      /* ANIMATION CONFIG */

		// display images
	this.background = this.add.tileSprite(0, 0, Sizeer.GAME_WIDTH, this.cache.getImage("background").height, "background");
		this.bgYellow = this.add.sprite(Sizeer.GAME_WIDTH * 0.5, 300, "background-yellow");
    this.bgYellow.anchor.setTo(0.5);
    this.bgYellow.scale.setTo(2);

    this.add.text(Sizeer.GAME_WIDTH*0.5,250,"Lorem Ipsum",{
        
                font: "24px Luckiest Guy",
                fill: Sizeer._fontColor
            
    }).anchor.setTo(0.5);
    
		this.title = this.add
      .sprite(200, 450, "title")
	  .anchor.setTo(0.5);

	  this.guy = this.add
	  .sprite(Sizeer.GAME_WIDTH-300,Sizeer.GAME_HEIGHT-350, "guy")
	  .scale.setTo(1);
    //   this.guy.scale.setTo(2);
    
    

		// add the button that will start the game
		this._playBtn = this.add.button(Sizeer.GAME_WIDTH*0.9, 100, "button-prev", function(game){
        	this.state.start("MainMenu"); 
        }, this, 1, 0, 2).anchor.setTo(0.5);
		


    },
    update:function(){
         this.background.tilePosition.x -= 2;
    }
};

