var timerValues = {
    timerEvent: function () {
        //clockCounterEvent = Sizeer.Game.preload.time.events.loop(1000, this.updateCounter, this);
        
    }
};

/*  MACHINES */






/* COLISION */
//game.physics.arcade.overlap(pig, stars, collisionHandler, null, this);
var machinesConf = {
   
        
    
    machineColision: function () {

        game.physics.arcade.overlap(pig, machines, machinesConf.machineColision(), null, this);


        pig.body.setSize(10, 10, 0, -700);
        //Timer
        //  Create our Timer
        timer = game.time.create(false);
        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1500, updateCounter, this);
        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();


        //game.paused = true;
        //game.time.events.loop(Phaser.Timer.SECOND*Math.random()*2, createStar,this);
        // 			console.log(lives);
        this.loseLifeSound.play();
        opacityAnimation();
        pig.y = 100;
        //var afterCollPig = game.add.tween(pig).to( {body.enable: false}, 2000, Phaser.Easing.Bounce.Out);
        //afterCollPig.yoyo(true,3000); 



        lives--;
        if (lives < 0) {
            game.paused = true;
            restartGame();
        }

        textLives.setText("x" + lives);


    },



 

};
