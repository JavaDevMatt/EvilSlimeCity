var menuState = {

	create: function() {

		game.add.sprite(0, 0, 'menu-background');


		monster1 = game.add.sprite(160, game.world.height-60, 'monster1');
		monster1.animations.add('stand', [0, 1, 2], 5, true);

		monster2 = game.add.sprite(430, game.world.height-60, 'monster1');
		monster2.animations.add('stand', [0, 1, 2], 5, true);
		
	},
	
	update: function() {
		monster1.animations.play('stand');
		monster2.animations.play('stand');
	},

};