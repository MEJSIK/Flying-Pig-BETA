var timerValues = {
    timerEvent: function () {
        //clockCounterEvent = Sizeer.Game.preload.time.events.loop(1000, this.updateCounter, this);
        console.log("rgrgrg");
    }
};

/*  MACHINES */






/* COLISION */
//game.physics.arcade.overlap(pig, stars, collisionHandler, null, this);
var machinesConf = {
   
        machineCreate: function () {
           
        switch (game.rnd.integerInRange(1, 1)) {
            case 1:
                this.machine = this.machines.create(Sizeer.GAME_WIDTH * len * 0.5, 250, "mach2", 0);
                this.machine.body.setSize(230, 300, 90, 150);
                this.machine.scale.setTo(0.7);
                this.machine.animations.add("move", null, 7, true, true);
                this.machine.animations.play("move", true);
                len++;
                break;
            case 2:
                var machine = this.machines.create(Sizeer.GAME_WIDTH * len * 0.5, 320, "mach3", 0);
                this.machine.body.setSize(400, 300, 80, 70);
                this.machine.scale.setTo(0.7);
                this.machine.animations.add("move", null, 7, true, true);
                this.machine.animations.play("move", true);
                len++;
                break;
            case 3:
            this.machine = this.machines.create(Sizeer.GAME_WIDTH * len * 0.5, 250, "mach4", 0);
                this.machine.body.setSize(300, 400, 60, 50);
                this.machine.scale.setTo(0.7);
                this.machine.animations.add("move", null, 7, true, true);
                this.machine.animations.play("move", true);
                this.len++;
                break;
            case 4:
                this.machine = this.machines.create(Sizeer.GAME_WIDTH * len * 0.5, 300, "mach5", 0);
                this.machine.body.setSize(180, 350, 40, 45);
                this.machine.scale.setTo(0.7);
                this.machine.animations.add("move", null, 7, true, true);
                this.machine.animations.play("move", true);
                len++;
                break;
            case 5:
            this.machine = this.machines.create(Sizeer.GAME_WIDTH * len * 0.5, 350, "mach6", 0);
            this.machine.body.setSize(100, 350, 25, 5);
                len++;
                break;
            case 6:
            this.machine = this.machines.create(Sizeer.GAME_WIDTH * len * 0.5, 100, "mach7", 0);
            this.machine.body.setSize(40, 20, 40, 20);
            this.machine.scale.setTo(3);
                len++;
                break;
            case 7:
            this.machine = this.machines.create(Sizeer.GAME_WIDTH * len * 0.5, 440, "mach8", 0);
            this.machine.body.setSize(50, 50);
            this.machine.scale.setTo(3);
                len++;
                break;
            case 8:
            this.machine = this.machines.create(Sizeer.GAME_WIDTH * len * 0.5, 300, "mach9", 0);
            this.machine.body.setSize(100, 100, 0, 20);
            this.machine.scale.setTo(3);
                len++;
                break;
            default:
                len++;
                break;
        }
    },
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
