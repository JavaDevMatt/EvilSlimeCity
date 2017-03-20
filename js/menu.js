var menuState = {

	create: function() {
		game.add.sprite(0, 0, 'menu-background');
		game.sound.play('music');


		monster1 = game.add.sprite(160, game.world.height-60, 'monster1');
		monster1.animations.add('stand', [0, 1, 2], 5, true);

		monster2 = game.add.sprite(430, game.world.height-60, 'monster1');
		monster2.animations.add('stand', [0, 1, 2], 5, true);

		if (!game.device.desktop){
			var startLabel = game.add.text(200, game.world.height-60, 'Tap screen to start', {font: '25px Arial', fill: '#ffffff'});
		} else {
			var startLabel = game.add.text(200, game.world.height-60, 'Press Space to start',{font: '25px Arial', fill: '#ffffff'});
		}
		
	},

	update: function() {
		monster1.animations.play('stand');
		monster2.animations.play('stand');
	},

};