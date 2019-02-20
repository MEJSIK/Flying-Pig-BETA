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

    this.add.text(Sizeer.GAME_WIDTH*0.5,250,"Bartłomiej Walasik",{
                font: "32px Luckiest Guy",
                fill: 0xfff
            
    }).anchor.setTo(0.5);
    this.add
      .text(Sizeer.GAME_WIDTH * 0.5, 300, "Szymon Wojciechowski", {
        font: "32px Luckiest Guy",
        fill: 0xfff
      })
      .anchor.setTo(0.5);

       Sizeer.pig = this.add.sprite(60, 200, "pig", -1);
       Sizeer.pig.scale.setTo(0.5);
        Sizeer.pig.animations.add("fly");

        Sizeer.pig.animations.play("fly", 20, true);
    
		this.title = this.add
      .sprite(200, 450, "title")
	  .anchor.setTo(0.5);

	  this.guy = this.add
	  .sprite(Sizeer.GAME_WIDTH-300,Sizeer.GAME_HEIGHT-350, "guy")
	  .scale.setTo(1);
    //   this.guy.scale.setTo(2);
    
    

		// add the button that will start the game
		this._playBtn = this.add.button(Sizeer.GAME_WIDTH*0.1, 100, "button-prev", function(game){
        	this.state.start("MainMenu"); 
        }, this, 1, 0, 2).anchor.setTo(0.5);
		


    },
    update:function(){
         this.background.tilePosition.x -= 2;
    }
};

