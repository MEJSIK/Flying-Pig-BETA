Sizeer.Game = function (game) {
    // define needed variables for Sizeer.Game
    this._player = null;
    Sizeer.machines;
    this._spawnSizeerTimer = 0;
    this._fontStyle = null;
    this.allowJump = null;
    // define Sizeer variables to reuse them in Sizeer.item functions
    Sizeer._scoreText = null;
    Sizeer._score = 0;
    Sizeer._totalScoreText = null;
    Sizeer._totalScore = 0;
    Sizeer._health = 3;
    Sizeer._lives = 3;
    Sizeer._totalClock = 60;
    Sizeer._goStartCount = 3; // 3.. 2.. 1.. GO!
    Sizeer._timeElapsed = 0;
    Sizeer.stars = null;
    Sizeer._speed = -150;
    Sizeer._totalTimeOfGame = 0;
    Sizeer.goldenShoes = null;
    Sizeer.machines = null;
     Sizeer.timer = null;
      Sizeer._totalShoesOfGame=0;

    Sizeer._level = 1;
    Sizeer._bgVel = 4; //bg speed

    Sizeer._pigAlpha = 1;


    Sizeer._fontColor = "#25A2F4";
Sizeer._totalShoes=0;
   







};
Sizeer.Game.prototype = {
    managePause: function () {
        // pause the game
        this.game.paused = true;
        // add proper informational text
        var pausedText = this.add.text(
            this.world.centerX,
            this.world.centerY,
            "Pauza.\nKliknij, aby wznowić.", {
                font: "24px Luckiest Guy",
                fill: Sizeer._fontColor,
                align: "center"
            }
        );
        pausedText.anchor.setTo(0.5);


        // set event listener for the user's click/tap the screen
        this.game.input.onDown.add(function () {
            // remove the pause text
            pausedText.destroy();
            // unpause the game
            this.game.paused = false;
        });
    },

    _restartState: function () {
        this.game.paused = false;
        this.game.state.restart()
    },
    restartGame: function () {
        this.allowJump = null;
        //game.events.onInputDown.removeAll();
        //this.allowJump.remove(); //delete on input jump function
        // show the game over message
        this.gameOver = this.add.sprite((Sizeer.GAME_WIDTH - 594) / 2, (Sizeer.GAME_HEIGHT - 271) / 2, "game-over");
        this.gameOver.alpha = 0;
        this.add.tween(this.gameOver).to({
                alpha: 1
            },
            2000,
            Phaser.Easing.Linear.None,
            true,
            0,
            0,
            false
        );

        // add the button that will start the game
        this._restartBtn = this.add
            .button(
                Sizeer.GAME_WIDTH *
                0.5 -
                50,
                400,
                "button-start",
                function () {
                    //Destroy current scene
                    // this.game.state.destroy(this.state.current);

                    Sizeer._lives = 3;
                    Sizeer._goStartCount = 3;
                    Sizeer._totalClock = 60;
                    Sizeer._level = 1;

                    Sizeer._totalScore = 0;
                    Sizeer._score = 0;

                   
                    this._fontStyle = null;
                    this.allowJump = null;
                    // define Sizeer variables to reuse them in Sizeer.item functions
                    Sizeer._scoreText = null;
                    Sizeer._score = 0;
                    Sizeer._totalScoreText = null;
                    Sizeer._totalScore = 0;
                    Sizeer._lives = 3;
                    Sizeer._totalClock = 60;
                    Sizeer._goStartCount = 3; // 3.. 2.. 1.. GO!
                    Sizeer._timeElapsed = 0;
                    Sizeer.stars = null;
                    Sizeer._speed = -150;
                    Sizeer._totalTimeOfGame = 0;
                    Sizeer.goldenShoes = null;
                    Sizeer.machines = null;
                    Sizeer.timer = null;
                    Sizeer._totalShoesOfGame = 0;

                    Sizeer._level = 1;
                   // Sizeer._bgVel = 4; //bg speed

                    Sizeer._pigAlpha = 1;

                    Sizeer._fontColor = "#25A2F4";
                    Sizeer._totalShoes = 0;
   



                    this._restartState();


                },
                this,
                1,
                0,
                2
            );
        Sizeer._goStartCount = -1; //Don't create any objects when GameOver is

        //Default Speed
        Sizeer._speed = -130;
        Sizeer._bgVel = 4;

        this._restartBtn.anchor.setTo(0.5);
     Sizeer.pig.kill();

        // pause the game
        //this.game.paused = true;
        //this.game.paused = true;


        //Sizeer.machines.x =0;
        //Sizeer.machines.foreach(remove.this);


    },
    preload: function () {
        //this.game.paused = false;
        game.time.advancedTiming = true;




        //Timer up on the screen
        this.clockCounterEvent = this.time.events.loop(
            1000,
            this.updateCounter,
            this
        );
        //Timer to Start Game
        this.goStartCounterEvent = this.time.events.loop(
            1000,
            this.goStartCounter,
            this);

        //Time Elapsed
        this._timeElapsedEvent = this.time.events.loop(
            3500,
            this.updateTimeElapsed,
            this);

        //Time ElapsedOfGame
        this._totalTimeOfGameEvent = this.time.events.loop(
            1000,
            this.totalTimeOfGameElapsed,
            this);


    },
    updateCounter: function () {
        if (Sizeer.pig.alive) {
            Sizeer._totalClock--;
            switch (Sizeer._totalClock) {
                case 0:
                    this.time.events.remove(this._totalTimeOfGameEvent);
                    this.restartGame();
                    break;
                case 10:
                    Sizeer.gameOverSound.play();
                    break;

            }


            this._TimerText.text = Math.floor(Sizeer._totalClock * 10) / 10;

        }
    },

    totalTimeOfGameElapsed: function () {
        Sizeer._totalTimeOfGame++;
this._restTime = Sizeer._totalTimeOfGame%game.rnd.integerInRange(2,11);
        switch (this._restTime) {
         

          case 0:
            Bonus.createGoldenShoe();
            break;
          //   var bgevent = this.add
          // .tween(this.background)
          // .to( { alpha: 0 },
          //     2000,
          //     Phaser.Easing.Linear.None,
          //     true,0,1, true);

          //     bgevent.onComplete.add(function(){
          //             this.background.loadTexture("background2");
          //     },this);

          //    this.add
          //       .tween(this.background)
          //       .to(
          //         { alpha: 1 },
          //         2000,
          //         Phaser.Easing.Linear.None,
          //         true);
        default:
          break;
        }
    },
    updateTimeElapsed: function () {
        if (Sizeer._goStartCount == 0) {
            this.machineCreate();
            //CREATING STARS
            //game.time.events.loop(Phaser.Timer.SECOND*Math.random()*game.rnd.integerInRange(0,8), createStar,this);
            Stars.createStar();


            //Creating ExtraTime in breakpoint
            switch (Sizeer._score) {
                case 20:
                    Bonus.createBonusTime();
                    break;
                case 30:
                    Bonus.createBonusTime();

                    break;
            }


        };




    },

    goStartCounter: function () {
        Sizeer._goStartCount--;



        if (Sizeer._goStartCount <= 0) {
            this.time.events.remove(this.goStartCounterEvent);
            this._goStartTimerText.text = "";


            //Touch pointer

            this.allowJump = this.game.input.onDown.add(this.jump, this);
            Sizeer.pig.body.gravity.y = 1000;



        } else {
            this._goStartTimerText.text = Math.floor(Sizeer._goStartCount * 10) / 10;
        }
    },
    machineCreate: function () {
        switch (this.rnd.integerInRange(2, 9)) {
            case 2:
                var machine = game.add.sprite(Sizeer.GAME_WIDTH, 370, "mach2");
                //Add to group
                Sizeer.machines.add(machine);
                machine.body.setSize(250, 400, 130, 130);
                break;
            case 3:
                var machine = game.add.sprite(Sizeer.GAME_WIDTH, 400, "mach3");
                //Add to group
                Sizeer.machines.add(machine);
                machine.body.setSize(450, 400, 80, 90);
                break;
            case 4:
                var machine = game.add.sprite(Sizeer.GAME_WIDTH, 370, "mach4");
                //Add to group
                Sizeer.machines.add(machine);
                machine.body.setSize(280, 450, 100, 80);
                break;
            case 5:
                var machine = game.add.sprite(Sizeer.GAME_WIDTH, 390, "mach5");
                //Add to group
                Sizeer.machines.add(machine);
                machine.body.setSize(160, 470, 60, 60);
                break;
            case 6:
                var machine = game.add.sprite(Sizeer.GAME_WIDTH, 440, "mach6");
                //Add to group
                Sizeer.machines.add(machine);
                machine.body.setCircle(100, 30, 50);
                break;
            case 7:
                var machine = game.add.sprite(Sizeer.GAME_WIDTH, 180, "mach7");
                //Add to group
                Sizeer.machines.add(machine);
                break;
            case 8:
                var machine = game.add.sprite(Sizeer.GAME_WIDTH, 445, "mach8");
                //Add to group
                Sizeer.machines.add(machine);
                break;
            case 9:
                var machine = game.add.sprite(Sizeer.GAME_WIDTH, 415, "mach9");
                //Add to group
                Sizeer.machines.add(machine);
                machine.body.setCircle(135, 50, 65);

                break;
        }




        //Sizeer.machines.callAll("anchor.y.setTo","anchor.y", 0.5);
        Sizeer.machines.forEach(function (machine) {
            machine.anchor.y = 0.5
        }, this);
        Sizeer.machines.callAll("scale.setTo", "scale", 0.7);
        Sizeer.machines.callAll('animations.add', 'animations', 'move', null, 20, true);
        Sizeer.machines.callAll('play', null, 'move');

        //Enable Physics
        this.physics.enable(Sizeer.machines, Phaser.ARCADE);


        //Speed

        machine.body.velocity.x = Sizeer._speed;


        // Automatically kill the machine when it's no longer visible 
        machine.checkWorldBounds = true;
        machine.outOfBoundsKill = true;

    },
    create: function () {





        // display images: background, floor and score
        this.background = this.add.tileSprite(0, 0, Sizeer.GAME_WIDTH, this.cache.getImage("background").height, "background");
        this.physics.arcade.enable(this.background, Phaser.Physics.ARCADE);
        this.background.body.allowGravity = false;

        // create the player
        // Create PIG
        Sizeer.pig = this.add.sprite(60, this.world.centerY, "pig", -1);

        Sizeer.pig.animations.add("fly");

        Sizeer.pig.animations.play("fly", 30, true);


        Sizeer.pig.anchor.setTo(0.5, 0.5);
        this.physics.enable(Sizeer.pig, Phaser.Physics.ARCADE);
        Sizeer.pig.body.setSize(380, 200, 100, 120);
        Sizeer.pig.body.enable = true;
        //Sizeer.pig.body.fixedRotation = true;
        //Sizeer.pig.body.bounce.setTo(1, 1);
        //Sizeer.pig.body.collideWorldBound = true;
        Sizeer.pig.alpha = 1;
        Sizeer.pig.scale.setTo(0.2);
        //Sizeer.pig.body.gravity.y = 0;

        /* CREATING MACHINES*/
        Sizeer.machines = game.add.group();
        /* TO ENABLE COLLISION */
        Sizeer.machines.enableBody = true;
        Sizeer.machines.physicsBodyType = Phaser.Physics.ARCADE;





        /* Creating Stars*/
        Sizeer.stars = game.add.group();
        Sizeer.stars.enableBody = true;
        Sizeer.stars.physicsBodyType = Phaser.Physics.ARCADE;

        /* Creating Bonus*/
        Sizeer.extraTime = game.add.group();
        Sizeer.extraTime.enableBody = true;
        Sizeer.extraTime.physicsBodyType = Phaser.Physics.ARCADE;

        Sizeer.goldenShoes = game.add.group();
        Sizeer.goldenShoes.enableBody = true;
        Sizeer.goldenShoes.physicsBodyType = Phaser.Physics.ARCADE;


        /*###################### topbar####################################### */
        this.topbar = this.add.graphics(0, 0);
        this.topbar.beginFill(0x2a2444);

        // draw a shape
        this.topbar.moveTo(0, 0);
        this.topbar.lineTo(Sizeer.GAME_WIDTH, 0);
        this.topbar.lineTo(Sizeer.GAME_WIDTH, 100);
        this.topbar.lineTo(0, 100);
        this.topbar.lineTo(0, 0);
        this.topbar.endFill();
        window.graphics = this.topbar;

        /*  HUD */
        this._hud = this.add.sprite(80, 5, "hud");
        this._hud.scale.setTo(0.9);
        //  add pause button
        this.add.button(Sizeer.GAME_WIDTH - 96 - 10, 5, "button-pause", this.managePause, this);


       Sizeer._loaderShoes = this.add.sprite(80, 55, "loader-shoes");


        Sizeer._textLives = this.add.text(
            100,
            10,
            "x" + Sizeer._lives, {
                font: "24px Luckiest Guy",
                fill: Sizeer._fontColor
            }
        );
        //SCORES
        this._scoreText = this.add.text(
            215,
            5,
            Sizeer._score, {
                font: "24px Luckiest Guy",
                fill: Sizeer._fontColor
            }
        );

        //TOTAL SCORE
        Sizeer._totalScoreText = this.add.text(
            380,
            5,
            "Wynik: " + Sizeer._totalScore, {
                font: "24px Luckiest Guy",
                fill: Sizeer._fontColor
            }
        );

        //TIMER
        this._TimerText = this.add.text(
            320,
            5,
            Sizeer._totalClock, {
                font: "24px Luckiest Guy",
                fill: Sizeer._fontColor
            }
        );

        //TIMER GO START
        this._goStartTimerText = this.add.text(
            this.world.centerX,
            300,
            Sizeer._goStartCount, {
                font: "48px Luckiest Guy",
                fill: Sizeer._fontColor
            }
        );
        //LEVEL
        Sizeer._levelText = this.add.text(
            this.world.centerX + 150,
            50,
            "Poziom " + Sizeer._level, {
                font: "24px Luckiest Guy",
                fill: "#fff"
            }
        );

        //Sounds
        Sizeer.jumpSound = this.add.audio("jump");
        Sizeer.jumpSound.volume = 0.2;

        //getStar
        Sizeer.getStarSound = this.add.audio("getStar");
        Sizeer.getStarSound.volume = 0.2;

        //loseLife
        Sizeer.loseLifeSound = this.add.audio("loseLife");
        Sizeer.loseLifeSound.volume = 0.2;

        //GAMEOVER
        Sizeer.gameOverSound = this.add.audio("gameOver");
        Sizeer.gameOverSound.volume = 0.2;


    },
    render: function () {
        //game.debug.soundInfo(Sizeer.jumpSound, 20, 32);

        //this.game.debug.sound()




        //this.game.debug.body(Sizeer.pig);
        //Sizeer.machines.forEach(this.game.debug.body, this.game.debug);
        //    Sizeer.stars.forEach(this.game.debug.body, this.game.debug);
    },
    update: function () {
        //  Run collision
        this.physics.arcade.overlap(Sizeer.pig, Sizeer.stars, Stars.starCollision, null, this); //Collision with star
        this.physics.arcade.overlap(Sizeer.pig, Sizeer.extraTime, Bonus.extraTimeCollision, null, this); //Collision with extraTime
        this.physics.arcade.overlap(Sizeer.pig, Sizeer.goldenShoes, Bonus.goldenShoeCollision, null, this); //Collision with extraTime
        //if (Sizeer.pig.alive) {
          this.physics.arcade.overlap(Sizeer.pig, Sizeer.machines, this.collision, null, this); //Collision with machines
       // }


        if (!Sizeer._goStartCount) {
            if (Sizeer.pig.angle < 60) Sizeer.pig.angle += 1;

        };
        //background moving left
        this.background.tilePosition.x -= Sizeer._bgVel;

 

  Sizeer._textLives.setText("x" + Sizeer._lives);
        if (Sizeer.pig.y > 550) {
           Sizeer._lives--;

           if (!Sizeer._lives) {
             this.restartGame();
           }
            Sizeer.loseLifeSound.play();

           Sizeer.pig.y = 100;
           
           this.opacityAnimation();
        
        };
        // 	// update timer every frame
        // 	this._spawnSizeerTimer += this.time.elapsed;
        // 	// if spawn timer reach one second (1000 miliseconds)
        // 	if(this._spawnSizeerTimer > 1000) {
        // 		// reset it
        // 		this._spawnSizeerTimer = 0;
        // 		// and spawn new candy
        // 		Sizeer.item.spawnSizeer(this);
        // 	}
        // 	// loop through all candy on the screen
        // 	this._candyGroup.forEach(function(candy){
        // 		// to rotate them accordingly
        // 		candy.angle += candy.rotateMe;
        // 	});
        // if the health of the player drops to 0, the player dies = game over

Sizeer._loaderShoes.frame = Sizeer._totalShoes;

if ((Sizeer._totalShoes==14)) {
    Sizeer._totalShoesOfGame += Sizeer._totalShoe;
    Sizeer._totalShoes=0;
  Sizeer._lives++;
  Sizeer._loaderShoes.frame = 0;
}


switch(Sizeer._totalTimeOfGame){
    case 7:
        this.background.loadTexture("backgroundGame");
            break;
        default:break;
}

    },
    collision:function(){
        
            Sizeer._lives--;
Sizeer.gameOverSound.play();
        if (!Sizeer._lives) {
          this.restartGame();
        } else {
        
          // Sizeer.pig.y = 100;

          Sizeer.pig.body.setSize(10, 10, 0, -1200);

          //Timer
          //  Create our Timer

             Sizeer.timer = game.time.create(false);
             //  Set a TimerEvent to occur after 3 seconds
             Sizeer.timer.loop(3000, function() {
                 
                
                     Sizeer.pig.body.setSize(380, 200, 100, 120);
                     Sizeer.timer.stop();
                   
                 
               }, this);
             //  Start the timer running - this is important!
             //  It won't start automatically, allowing you to hook it to button events and the like.
             Sizeer.timer.start();

          this.opacityAnimation();
        }
    },
    jump: function () {
        if (Sizeer.pig.alive) {
            Sizeer.jumpSound.play()


            Sizeer.pig.body.velocity.y = -350;
            this.add
                .tween(Sizeer.pig)
                .to({
                        angle: -20
                    },
                    100
                )
                .start();
        };
    },
    opacityAnimation: function () {
        //Sizeer.machines.enableBody = false;
        /*to(properties, duration, ease, autoStart, delay, repeat, yoyo)*/
        Sizeer._pigAlpha = this.add.tween(Sizeer.pig).to({
                alpha: 0.2
            },
            2000,
            Phaser.Easing.Bounce.Out,
            true,
            0,
            0,
            true
        );
    },




};

