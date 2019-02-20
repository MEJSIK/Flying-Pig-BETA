var Stars = {
  createStar: function () {
    var star = Sizeer.stars.create(Sizeer.GAME_WIDTH, game.rnd.integerInRange(120, Sizeer.GAME_HEIGHT - 100), "star", -1);
    star.scale.setTo(0.2);
    game.physics.enable(star, Phaser.ARCADE);
    star.body.velocity.x = Sizeer._speed; //body 

    // Automatically kill star when it's no longer visible 
    star.checkWorldBounds = true;
    star.outOfBoundsKill = true;

  },
  starCollision: function (pig, star) {

    Sizeer.getStarSound.play();
    //  when pig getStar the will dissaper
    star.destroy();
    //  Increase the score
    Sizeer._score += 10;
    Sizeer._totalScore += 10;
    this._scoreText.setText(Sizeer._score);
    Sizeer._totalScoreText.setText("Wynik:" + Sizeer._totalScore);

    /* NEXT LEVEL */
    if (Sizeer._score >= 100 * Sizeer._level) { //lv1 =50, lv2=100,...
      Sizeer._level++;
      Sizeer._levelText.setText("Level " + Sizeer._level);
      Sizeer._bgVel += 3;
      Sizeer._speed -= 100;
      Sizeer._score = 0;
      Sizeer.lvlUpSound.play();
    }
  }


};


var Bonus = {
  extraTimeCollision: function (pig, extraTime) {
    Sizeer.getStarSound.play();
    //  when pig get extraTime the will dissaper
    extraTime.destroy();
    //  Increase the Time
    Sizeer._totalClock += 10;
    this._TimerText.setText(Sizeer._totalClock);
  },

  createBonusTime: function () {
    var extraTime = Sizeer.extraTime.create(
      Sizeer.GAME_WIDTH - 15,
      game.rnd.integerInRange(
        120,
        Sizeer.GAME_HEIGHT - game.rnd.integerInRange(60, 110)
      ),
      "extraTime"
    );
    game.physics.enable(extraTime, Phaser.ARCADE);
    extraTime.body.velocity.x = Sizeer._speed; //body

    extraTime.checkWorldBounds = true;
    extraTime.outOfBoundsKill = true;
  },

  createGoldenShoe: function () {
    var goldenShoe = Sizeer.goldenShoes.create(
      Sizeer.GAME_WIDTH - 10,
      game.rnd.integerInRange(120, Sizeer.GAME_HEIGHT * 0.5),
      "goldenShoe"
    );
    game.physics.enable(goldenShoe, Phaser.ARCADE);
    goldenShoe.body.velocity.x = Sizeer._speed; //body

    goldenShoe.checkWorldBounds = true;
    goldenShoe.outOfBoundsKill = true;
  },
  goldenShoeCollision: function (pig, goldenShoe) {
    Sizeer.getStarSound.play();
    //  when pig get extraTime the will dissaper
    goldenShoe.destroy();
    //  Increase the Time
    Sizeer._totalShoes++;
    //console.log(Sizeer._totalShoes);
    //this.drawProgresShoes;
  },
  createGhost: function () {
    if (!Sizeer._goStartCount) {
      var Ghost = Sizeer.ghosts.create(
        Sizeer.GAME_WIDTH - 10,
        game.rnd.integerInRange(120, Sizeer.GAME_HEIGHT * 0.5),
        "ghostBonus"
      );
      Ghost.scale.setTo(0.6);
      game.physics.enable(Ghost, Phaser.ARCADE);
      Ghost.body.velocity.x = Sizeer._speed; //body

      Ghost.checkWorldBounds = true;
      Ghost.outOfBoundsKill = true;
    }
  },
  ghostsCollision: function (pig, ghost) {
                                           console.log("Duszek zebrany!");
                                           // Sizeer.getStarSound.play();
                                           //  when pig get ghost the will dissaper
                                           ghost.destroy();

                                           // //Set body offset to over the screen
                                           Sizeer.machines.forEach(
                                             function(
                                               machine
                                             ) {
                                               machine.body.offset.y += 1000;
                                             },
                                             this
                                           );

                                           Sizeer.timerGhost = game.time.create(false);
                                           //  Set a TimerEvent to occur after 4 seconds
                                           Sizeer.timerGhost.loop(3000, function() {
                                               
                                               //Set body offset to default
                                               Sizeer.machines.forEach(
                                                 function(
                                                   machine
                                                 ) {
                                                   //machine.body.offset.y = 0;
                                                 },
                                                 this
                                               );

                                               Sizeer.timerGhost.stop();
                                             }, this);
                                           //  Start the timer running - this is important!
                                           //  It won't start automatically, allowing you to hook it to button events and the like.
                                           Sizeer.timerGhost.start();

                                           _a = this.add
                                             .tween(Sizeer.machines)
                                             .to({ alpha: 0.2 }, 3000, Phaser.Easing.Bounce.Out, true, 0, 0)
                                             .yoyo(3000);
                                           _a.onComplete.add(
                                             function() {
                                               Sizeer.machines.alpha = 1;
                                             },
                                             this
                                           );
                                         },
  bonusMachinesCollision: function (machine, object) {
    //Sizeer.getStarSound.play();
    //  when pig get extraTime the will dissaper
    object.destroy();
    //  Increase the Time
    //Sizeer._totalShoes++;

    //this.drawProgresShoes;
  }
};

var Machines = {
  machinesCollision: function () {



  }
};

var Main = {
  startAuthors: function () {
    game.state.start("Authors");
  },
  backToMenu: function () {
    this.game.input.onDown.add(function () {
      if (game.pause) {
        game.pause = false;
        this.destroy();
        Sizeer._muteBtn.frame = 1;
      } else {
        //game.pause = true;
        Sizeer._muteBtn.frame = 2;
      }
    });

    game.state.start("MainMenu");
  },
  managePause: function (event) {
    if (Sizeer._PasuedYN) {
      game.paused = true;
      Main.addPauseMenu();
    }
  },
  addPauseMenu: function () {
    Sizeer._pauseBtn.frame = 1;
    bgYellow = game.add.sprite(Sizeer.GAME_WIDTH * 0.5, 300, "background-yellow");
    bgYellow.anchor.setTo(0.5);
    bgYellow.scale.setTo(2);

    pausedText = game.add.text(
      game.world.centerX,
      game.world.centerY,
      "Pauza.\nKliknij, aby wznowić.", {
        font: "24px Luckiest Guy",
        fill: Sizeer._fontColor,
        align: "center"
      }
    );
    pausedText.anchor.setTo(0.5);

  
    Main.unpause();
  },
  unpause: function (_cursorX, _cursorY) {
console.log(_cursorX + ", " + _cursorY);
    if (game.paused) {
      // Calculate the corners of the menu
      // var x1 = Sizeer.GAME_WIDTH / 2 - 360 / 2, //480 - 240/2
      //   x2 = Sizeer.GAME_WIDTH / 2 + 540 / 2,
      //   y1 = Sizeer.GAME_HEIGHT / 2 - 270 / 2, //270 - 270/2
      //   y2 = Sizeer.GAME_HEIGHT / 2 + 720 / 2;

      var x1 = 222,
        x2 =730,
        y1 =136,
        y2 = 460;

console.log(" ");
console.log("_cursorX > x1:" + _cursorX + ", " + x1);
console.log("_cursorX < x2:" + _cursorX + ", " + x2);
console.log("_cursorY > y1:" + _cursorY + ", " + y1);
console.log("_cursorY < y2:" + _cursorY + ", " + y2);
      // Check if the click was inside the menu
      if (_cursorX > x1 && _cursorX < x2 && _cursorY > y1 && _cursorY < y2) {
        
        

        // The choicemap is an array that will help us see which item was clicked
       
        // Get menu local coordinates for the click
        var x = _cursorX - x1,
          y = _cursorY - y1;

       
        // Calculate the choice
        if (x>122 && x<202 && y>183 && y<265){
           game.paused = false;
           game.state.start("MainMenu");
        }
        //console.log(x + ", " + y + ", choice: " + choise);

      if (x > 323 && x < 387 && y > 190 && y < 253) {
        game.paused = false;
        this.restartGameState();
        game.state.restart();
      }

      } else {
        if(typeof restartBtn !== "null"){
                  
        pausedText.destroy();
        restartBtn.destroy();
        backToMenuBtn.destroy();
        bgYellow.destroy();
                }
        Sizeer._pauseBtn.frame = 0; //CHANGE ICON FRAME
        game.paused = false;
      }
    }
  },
  restartGameState: function () {
    //Destroy current scene
    // this.game.state.destroy(this.state.current);

    Sizeer._lives = 3;
    Sizeer._goStartCount = 3;
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
    Sizeer._speed = -160;
    Sizeer._totalTimeOfGame = 0;
    Sizeer.goldenShoes = null;
    Sizeer.ghosts = null;
    Sizeer.machines = null;
    Sizeer.timer = null;
    Sizeer._totalShoesOfGame = 0;

    
     Sizeer._bgVel = 5; //bg speed

    Sizeer._pigAlpha = 1;

    Sizeer._fontColor = "#25A2F4";
    Sizeer._totalShoes = 0;


  }


};