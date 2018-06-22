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
        if (Sizeer._score >= 50 * Sizeer._level) { //lv1 =50, lv2=100,...
            Sizeer._level++;
            Sizeer._levelText.setText("Level " + Sizeer._level);
            Sizeer._bgVel += 2;
            Sizeer._speed -= 50;
            Sizeer._score = 0;
        }
    }


};


var Bonus = {
  extraTimeCollision: function(pig, extraTime) {
    Sizeer.getStarSound.play();
    //  when pig get extraTime the will dissaper
    extraTime.destroy();
    //  Increase the Time
    Sizeer._totalClock += 10;
    this._TimerText.setText(Sizeer._totalClock);
  },

  createBonusTime: function() {
    var extraTime = Sizeer.extraTime.create(
      Sizeer.GAME_WIDTH-15,
      game.rnd.integerInRange(120, Sizeer.GAME_HEIGHT - game.rnd.integerInRange(60,110)),
      "extraTime"
    );
    game.physics.enable(extraTime, Phaser.ARCADE);
    extraTime.body.velocity.x = Sizeer._speed; //body

    extraTime.checkWorldBounds = true;
    extraTime.outOfBoundsKill = true;
  },

  createGoldenShoe: function() {
    var goldenShoe = Sizeer.goldenShoes.create(
      Sizeer.GAME_WIDTH - 10,
      game.rnd.integerInRange(120, Sizeer.GAME_HEIGHT *0.5),
      "goldenShoe"
    );
    game.physics.enable(goldenShoe, Phaser.ARCADE);
    goldenShoe.body.velocity.x = Sizeer._speed; //body

    goldenShoe.checkWorldBounds = true;
    goldenShoe.outOfBoundsKill = true;
  },
  goldenShoeCollision: function(pig,goldenShoe) {
    Sizeer.getStarSound.play();
    //  when pig get extraTime the will dissaper
    goldenShoe.destroy();
    //  Increase the Time
    Sizeer._totalShoes++;
    //console.log(Sizeer._totalShoes);
    //this.drawProgresShoes;
  },
};

var Machines = {
    machinesCollision: function () {



    }
};

var Main = {
    startAuthors: function () {
        game.state.start("Authors");
    }

};

