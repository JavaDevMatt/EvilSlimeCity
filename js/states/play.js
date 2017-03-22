var playState = {

	resetState: function(){
	 	isDead = false;
	 	hasWon = false;
	 },

	chooseLevel: function(){
		if(game.global.gameLevel == 1){
			return new Level1(); 
		}
	},

	create: function() {	
		level = this.chooseLevel();
		this.resetState();

		collisionsHandler = new CollisionsHandler();
		juiceEmitters = new JuiceEmitters();

		level.createBackground(game);
		level.addStartingText(game);

		this.initPlayer();
		this.initRedSlimes();
		this.initLava();
		this.initTrampolines();
		this.initPlatforms();
		this.initFallers();
		this.initRain();

		cursors = game.input.keyboard.createCursorKeys();

        game.camera.follow(player);
	},

	update: function() {  

		// collisios
	 	collisionsHandler.update();

		// animations
	 	player.animations.play('stand');
	 	lava.forEachAlive(function(item) {
       	 	item.animations.play('stand');
		}, this);
		redSlimes.forEachAlive(function(item) {
       	 	item.animations.play('stand');
		}, this);

	 	
	 	// preventing "free move"
	    player.body.velocity.x = 0;
	    // controls
	    if (cursors.left.isDown){
	        player.body.velocity.x = -150;
	    }
	    else if (cursors.right.isDown){
	        player.body.velocity.x = 150;
	    }
	    // jump!
	    if (cursors.up.isDown && player.body.touching.down){
	    	game.add.tween(player).to( { angle: 360 }, 600, Phaser.Easing.Linear.None, true);

	    	juiceEmitters.spawnJumpEmitters();
	    	game.sound.play('jump');
	        player.body.velocity.y = -150;
	    }

	    // overlaps
	    game.physics.arcade.overlap(player, lava, this.killPlayer, null, this);
		game.physics.arcade.overlap(player, trampolines, this.trampolinePlayer, null, this);
	},

	killPlayer: function(){
	 	if(!hasWon){
	 		this.shakeCamera();
			juiceEmitters.spawnPlayerKillEmitters();

	 		isDead = true;
		 	game.sound.play('splash-death');
		 	player.kill();
		 	setTimeout(function(){
		 		game.state.start('play');
			}, 600);
	 	}
	 },

	 shakeCamera: function(){
	 	game.camera.shake(0.01, 300);
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

	 initTrampolines: function(){
		trampolines = game.add.group();
        trampolines.enableBody = true;
        game.physics.arcade.enable(trampolines);
        level.addTrampolines(trampolines);
   		trampolines.forEachAlive(function(item) {
   			item.body.bounce.y = 0.2;
   			item.body.gravity.y = 300;
   			item.body.collideWorldBounds = true;
		}, this);
	 },

	 initRedSlimes: function(){
	 	redSlimes = game.add.group();

	 	redSlimes.enableBody = true;
        game.physics.arcade.enable(redSlimes);

		level.addRedSlimes(redSlimes);
		redSlimes.forEachAlive(function(item) {
   			item.body.bounce.y = 0.2;
			item.body.bounce.x = 1.0;
   			item.body.gravity.y = 300;
        	item.body.collideWorldBounds = true;
        	item.animations.add('stand', [0, 1, 2], 5, true);
		}, this);
	 },

	 initFallers: function(){
	 	fallers = game.add.group();
		fallers.enableBody = true;
        level.addFallers(fallers);
	 },

	 initLava: function(){
	 	lava = game.add.group();
        lava.enableBody = true;
        level.addLava(lava);
        lava.forEachAlive(function(item) {
       	 	item.body.immovable = true;
       	 	item.animations.add('stand', [0, 1], 2, true);
		}, this);
	 },

	 initRain: function(){
		game.global.rainSound.play();

	 	rainEmitter = new RainEmitter();
		rainEmitter.start();
	 },

	 trampolinePlayer: function(){
	 	player.body.velocity.y -= 200;
	 	game.sound.play('trampoline_jump');
	 },


};