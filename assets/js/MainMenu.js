Sizeer.MainMenu = function (game) {
	
};
Sizeer.MainMenu.prototype = {
	create: function () {
		/* ANIMATION CONFIG */

		// display images
	this.background = this.add.tileSprite(0, 0, Sizeer.GAME_WIDTH, this.cache.getImage("background").height, "background");
		this.pig = this.add.sprite(300, Sizeer.GAME_HEIGHT*0.5, "pig");
		this.pig.scale.setTo(0.5);
		this.pig.anchor.setTo(0.5);
		this.pig.animations.add("flyAnimation");
		this.pig.animations.play("flyAnimation", 25, true);
		
		this.title = this.add
      .sprite(200, 450, "title")
	  .anchor.setTo(0.5);

	  this.guy = this.add
	  .sprite(Sizeer.GAME_WIDTH-300,Sizeer.GAME_HEIGHT-350, "guy")
	  .scale.setTo(1);
	//   this.guy.scale.setTo(2);

		// add the button that will start the game
		this._playBtn = this.add.button(Sizeer.GAME_WIDTH*0.5, 100, "button-start", this.startGame, this, 1, 0, 2).anchor.setTo(0.5);
		this._authorBtn = this.add.button(Sizeer.GAME_WIDTH*0.5,260,"button-author",Main.startAuthors, this,1,0,2).anchor.setTo(0.5);
		
		this.mutedYN = 0;
		Sizeer._muteBtn = this.add.button(Sizeer.GAME_WIDTH*0.1,100,"button-mute",this.muteUnmute,this,0).anchor.setTo(0.5);
		Sizeer._muteBtn.frame = 0;

		Sizeer.bgSong = this.add.audio("bgSong");
		Sizeer.bgSong.volume = 0.2;
		Sizeer.bgSong.play();



	},
	muteUnmute: function(){
		switch (Sizeer._muteBtn.frame) {
			
			case 0:
			
				//mute
				Sizeer.bgSong.pause();
				
				Sizeer._muteBtn.frame = 1;
				
				console.log(Sizeer._muteBtn.frame);
				break;
			case 1:
				//unmute
				Sizeer.bgSong.resume();
				console.log(Sizeer._muteBtn.frame);
				Sizeer._muteBtn.frame = 0;
				
				break;
		}
	
		

	},
	update: function () {
		this.pig.x+=3;
		if (this.pig.x > Sizeer.GAME_WIDTH+600){
			this.pig.x = -100;
		};

		 this.background.tilePosition.x -= 2;
	},
	startGame: function () {
		// start the Game state
		this.state.start('Game');
	}
};