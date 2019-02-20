Sizeer.MainMenu = function (game) {

	
};
Sizeer.MainMenu.prototype = {
	create: function () {
		
			
	/* ANIMATION CONFIG */

      // display images
      this.background = this.add.tileSprite(0, 0, Sizeer.GAME_WIDTH, this.cache.getImage("background").height, "background");
		this.pig = this.add.sprite(300, Sizeer.GAME_HEIGHT * 0.5, "pig");
		this.pig.scale.setTo(0.5);
		this.pig.anchor.setTo(0.5);
		this.pig.animations.add("flyAnimation");
		this.pig.animations.play("flyAnimation", 25, true);

		this.title = this.add
			.sprite(200, 450, "title")
			.anchor.setTo(0.5);

		this.guy = this.add
			.sprite(Sizeer.GAME_WIDTH - 300, Sizeer.GAME_HEIGHT - 350, "guy")
			.scale.setTo(1);
		//   this.guy.scale.setTo(2);
		if(typeof Sizeer.bgSong == "undefined"){
Sizeer.bgSong = this.add.audio("bgSong");
Sizeer.bgSong.volume = 0.2;
		}
		
		switch (Sizeer.mutedYN) {
	  case 0:
	  if (typeof Sizeer._muteBtn !== "undefined") Sizeer._muteBtn.frame = 1;
        Sizeer.bgSong.play();
        break;
      case 1:
        if (typeof Sizeer._muteBtn !== "undefined") Sizeer._muteBtn.frame = 2;
        Sizeer.bgSong.mute;
        break;
    }



		// add the button that will start the game
		this._playBtn = this.add.button(Sizeer.GAME_WIDTH * 0.5, 100, "button-start", this.startGame, this, 1, 0, 2).anchor.setTo(0.5);
		this._authorBtn = this.add.button(Sizeer.GAME_WIDTH * 0.5, 260, "button-author", Main.startAuthors, this, 1, 0, 2).anchor.setTo(0.5);

		Sizeer._muteBtn = this.add.button(Sizeer.GAME_WIDTH * 0.1, 100, "button-mute", this.muteUnmute, this);
		Sizeer._muteBtn.anchor.setTo(0.5);
		Sizeer._muteBtn.frame = 1;


	},
	muteUnmute: function () {
		if (Sizeer.bgSong.mute) {

			Sizeer.bgSong.mute = false;
			Sizeer.mutedYN = 0;
			Sizeer._muteBtn.frame = 1;
		} else {
			Sizeer.bgSong.mute = true;
			Sizeer.mutedYN = 1;
			Sizeer._muteBtn.frame = 2;
		}











	},
	update: function () {
		this.pig.x += 3;
		if (this.pig.x > Sizeer.GAME_WIDTH + 600) {
			this.pig.x = -100;
		};

		this.background.tilePosition.x -= 2;

		//console.log(Sizeer.mutedYN);
if (typeof Sizeer.bgSong !== "undefined") {
  if (Sizeer.bgSong.mute) {
    Sizeer._muteBtn.frame = 2;
  }
}
		

	},
	startGame: function () {
		// start the Game state
		this.state.start('Game');
	}
};