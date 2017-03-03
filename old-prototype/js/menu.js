var menuState = {


	create: function() {
		if(music != null){
			music.stop();
		}

		music = game.sound.play('music');
		music.volume = 1.0;
		game.add.sprite(0, 0, 'background');

		monster1 = game.add.sprite(160, game.world.height-60, 'monster1');
		monster1.animations.add('stand', [0, 1, 2], 5, true);

		monster2 = game.add.sprite(430, game.world.height-60, 'monster1');
		monster2.animations.add('stand', [0, 1, 2], 5, true);
		

		var startLabel = game.add.text(200, game.world.height-60,
		 'press Space to start',
			{font: '25px Arial', fill: '#ffffff'});

		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		spaceKey.onDown.addOnce(this.startGame, this);
	},

	update: function() {
		monster1.animations.play('stand');
		monster2.animations.play('stand');
	},

	startGame: function(){
		music.volume = 0.3;
		rain = game.sound.play('splash');
		rain.volume = 0.5;
		game.sound.play('rain');
		console.log('dummy startGame');
		game.state.start('play');
	},

};