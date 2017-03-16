var initState = {

	preload: function(){

		var loadingLabel = game.add.text(20, 150, 'loading game data...', 
			{font: '40px Courier', fill: '#fff'});

		game.load.image('menu-background', 'assets/menu-background.png'); // http://opengameart.org/content/industrial-parallax-background
	},

	
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		game.state.start('menu');
	}

};