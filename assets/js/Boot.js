var Sizeer = {
    
};

Sizeer.mutedYN = 0;
Sizeer.Boot = function (game) {

};
Sizeer.Boot.prototype = {

  preload: function () {

    /* PRELOADER */
    this.load.image(
      "preloaderBar",

      "assets/img/loading-bar.png"
    );
    

  },
  create: function () {
                       //HACK TO PRELOAD A CUSTOM FONT
  this.game.add.text(0, 0, "hack", {font:"1px Luckiest Guy", fill:"#FFFFFF"});
  
                      // start the physics engine
        this.physics.startSystem(Phaser.Physics.ARCADE);
        // set the global gravity
        this.physics.arcade.gravity.y = 0;

                       
                        // set scale options
                        this.input.maxPointers = 1;
                        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                        this.scale.pageAlignHorizontally = true;
                        this.scale.pageAlignVertically = true;
                        this.scale.setMinMax(320, 180, 960, 540);
                        this.scale.updateLayout(true);

                        // start the Preloader state
                        this.state.start("Preloader");

                      
                      }
};