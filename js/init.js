var initState = {

	preload: function(){

		var loadingLabel = game.add.text(20, 150, 'loading game data...', 
			{font: '40px Courier', fill: '#fff'});

		game.load.image('menu-background', 'assets/menu-background.png'); // http://opengameart.org/content/industrial-parallax-background
	
		game.load.spritesheet('monster1', 'assets/monster1.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons 
		game.load.spritesheet('monster2', 'assets/monster2.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons 
	},

	
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		game.state.start('menu');
	}

};