var playState = {

	chooseLevel: function(){
		if(game.global.gameLevel == 1){
			return new Level1(); 
		}
	},

	create: function() {	
		level = this.chooseLevel();
		collisionsHandler = new CollisionsHandler();

		level.createBackground(game);

		this.initPlayer();
		this.initPlatforms();

		cursors = game.input.keyboard.createCursorKeys();

        game.camera.follow(player);
	},

	update: function() {  

		// collisios
	 	collisionsHandler.update();

		// animations
	 	player.animations.play('stand');

	 	// controls
	    if (cursors.left.isDown){
	        player.body.velocity.x = -150;
	    }
	    else if (cursors.right.isDown){
	        player.body.velocity.x = 150;
	    }
	},

	initPlayer: function(){
		player = game.add.sprite(level.playerStartingX, level.playerStartingY, 'monster1');
		player.anchor.setTo(0.5,0.5);
		player.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
   		player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;
	 },

	 initPlatforms: function(){
		platforms = game.add.group();
        platforms.enableBody = true;
        level.addPlatforms(platforms);
        platforms.forEachAlive(function(item) {
        	item.body.immovable = true;
		}, this);
	 },

};