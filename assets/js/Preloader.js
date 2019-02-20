Sizeer.Preloader = function (game) {
	// define width and height of the game
	Sizeer.GAME_WIDTH = 960;
	Sizeer.GAME_HEIGHT = 540;
};
Sizeer.Preloader.prototype = {
	preload: function () {
                         // set background color and preload image
                         this.add
                           .sprite(
                             this.world.centerX,
                             200,
                             "loadingTxt"
                           )
                           .anchor.setTo(0.5);
                         this.preloadBar = this.add.sprite((Sizeer.GAME_WIDTH - 311) / 2, (Sizeer.GAME_HEIGHT - 27) / 2, "preloaderBar");

                         this.load.setPreloadSprite(this.preloadBar);

                         /*  LOAD IMAGES */
<<<<<<< HEAD

                         this.load.image("background", "assets/img/background.png"); //BACKGROUND
                         this.load.image("backgroundGame", "assets/img/background_game.png"); //BACKGROUND IN GAME
                         this.load.image("background2", "assets/img/background2.png"); //BACKGROUND
                         this.title = this.load.image("title", "assets/img/title.png"); //TITLE SIZEER

                         this.load.image("heart", "assets/img/heart.png"); //HEART IMAGE
                         this.load.image("star", "assets/img/starImg.png"); //STAR IMAGE
                         this.load.image("extraTime", "assets/img/extraTime.png"); //EXTRATIME IMAGE
                         this.load.image("ghostBonus", "assets/img/GhostBonus.png"); //GHOST IMAGE
                         this.load.image("goldenShoe", "assets/img/goldenShoe.png"); //GAME OVER IMAGE
                         this.load.image("hud", "assets/img/hud/hud.png"); //HUD
                         this.load.image("guy", "assets/img/guy.png"); //GUY
                         this.load.image("game-over", "assets/img/gameover.png"); //GAME OVER IMAGE
                         this.load.image("background-yellow", "assets/img/background-yellow.png"); //YELLOW BACKGROUND
=======

                         this.load.image("background", "../img/background.png"); //BACKGROUND
                         this.load.image("backgroundGame", "../img/background_game.png"); //BACKGROUND IN GAME
                         this.load.image("background2", "../img/background2.png"); //BACKGROUND
                         this.title = this.load.image("title", "../img/title.png"); //TITLE SIZEER

                         this.load.image("heart", "../img/heart.png"); //HEART IMAGE
                         this.load.image("star", "../img/starImg.png"); //STAR IMAGE
                         this.load.image("extraTime", "../img/extraTime.png"); //EXTRATIME IMAGE
                         this.load.image("ghostBonus", "../img/GhostBonus.png"); //GHOST IMAGE
                         this.load.image("goldenShoe", "../img/goldenShoe.png"); //GAME OVER IMAGE
                         this.load.image("hud", "../img/hud/hud.png"); //HUD
                         this.load.image("guy", "../img/guy.png"); //GUY
                         this.load.image("game-over", "../img/gameover.png"); //GAME OVER IMAGE
                         this.load.image("background-yellow", "../img/background-yellow.png"); //YELLOW BACKGROUND
>>>>>>> v1.1
                         this.load.image("background", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/background.png"); //BACKGROUND
                         this.load.image("backgroundGame", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/background_game.png"); //BACKGROUND IN GAME
                         this.load.image("background2", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/background2.png"); //BACKGROUND
                         this.title = this.load.image("title", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/title.png"); //TITLE SIZEER

                         this.load.image("heart", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/heart.png"); //HEART IMAGE
                         this.load.image("star", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/starImg.png"); //STAR IMAGE
                         this.load.image("extraTime", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/extraTime.png"); //EXTRATIME IMAGE
                         this.load.image("ghostBonus", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/GhostBonus.png"); //GHOST IMAGE
                         this.load.image("goldenShoe", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/goldenShoe.png"); //GAME OVER IMAGE
                         this.load.image("hud", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/hud/hud.png"); //HUD
                         this.load.image("guy", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/guy.png"); //GUY
                         this.load.image("game-over", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/gameover.png"); //GAME OVER IMAGE
                         this.load.image("background-yellow", "../../wp-content/themes/sizeer/landings/FlyingPig/assets/img/background-yellow.png"); //YELLOW BACKGROUND



                         
                       
                         /*   SPRITESHEETS   */

<<<<<<< HEAD
                         this.load.spritesheet("button-start", "assets/img/button-start.png", 405, 160); //START GAME BUTTON
                         this.load.spritesheet("button-author", "assets/img/button-author.png", 271, 111); //AUTHOR BUTTON
                         this.load.spritesheet("button-mute", "assets/img/button-mute.png",106,110); //MUTE MUSIC BUTTON
                         this.load.spritesheet("button-prev", "assets/img/button-prev.png",89,92); //PREVIOUS BUTTON
                         this.load.spritesheet("button-pause", "assets/img/button-pause.png",110,112); //PAUSE BUTTON
                          this.load.spritesheet("button-restart", "assets/img/button-restart.png",76,74); //RESTART BUTTON
                         this.load.spritesheet("pig", "assets/img/pig.png", 517, 358); //PIG CHARACTER
                         this.load.spritesheet("loader-shoes", "assets/img/loader-shoes.png", 311, 27); //LOADER SHOES
=======
                         this.load.spritesheet("button-start", "../img/button-start.png", 405, 160); //START GAME BUTTON
                         this.load.spritesheet("button-author", "../img/button-author.png", 271, 111); //AUTHOR BUTTON
                         this.load.spritesheet("button-mute", "../img/button-mute.png",106,110); //MUTE MUSIC BUTTON
                         this.load.spritesheet("button-prev", "../img/button-prev.png",89,92); //PREVIOUS BUTTON
                         this.load.spritesheet("button-pause", "../img/button-pause.png",110,112); //PAUSE BUTTON
                          this.load.spritesheet("button-restart", "../img/button-restart.png",76,74); //RESTART BUTTON
                         this.load.spritesheet("pig", "../img/pig.png", 517, 358); //PIG CHARACTER
                         this.load.spritesheet("loader-shoes", "../img/loader-shoes.png", 311, 27); //LOADER SHOES
>>>>>>> v1.1

                         /*   MACHINES   */

                         this.load.spritesheet("mach2", "assets/img/machines/mach2.png", 255, 379,69);
                         this.load.spritesheet("mach3", "assets/img/machines/mach3.png", 650, 411, 6);
                         this.load.spritesheet("mach4", "assets/img/machines/mach4.png", 500,500,56);
                         this.load.spritesheet("mach5", "assets/img/machines/mach5.png", 300, 449, 12);
                         this.load.image("mach6", "assets/img/machines/mach6.png");
                         this.load.spritesheet("mach7", "assets/img/machines/mach7.png", 157,233,24);
                         this.load.image("mach8", "assets/img/machines/mach8.png");
                         this.load.spritesheet("mach9", "assets/img/machines/mach9.png", 425, 364, 45);

                         /* #### SOUNDS MP3 NOT WORKING!!!! WEBVIEW####*/
                         this.load.audio("jump", "../fx/flyUp.ogg"); //FlyUp sound
                         this.load.audio("gameOver", "../fx/endLife.ogg"); //Falling sound
                         this.load.audio("getStar", "../fx/getStar.ogg"); //GetStar sound
                         this.load.audio("loseLife", "../fx/loseLive.ogg"); //Lose Live sound
                         this.load.audio("bgSong", "../fx/bensound-summer.ogg"); //Background mmusic from https://www.bensound.com CC license.
                         this.load.audio("LvlUp", "../fx/levelUp.ogg"); //LevelUp Sound
                         this.load.audio("countTo0", "../fx/10to0.ogg");

                         //this.load.physics('physicsData', '../physics.json');

                         
                       },
	create: function () {

		// start the MainMenu state
		this.state.start('MainMenu');
	}
};