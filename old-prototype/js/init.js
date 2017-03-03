var initState = {

	preload: function(){

		var loadingLabel = game.add.text(20, 150, 'loading game data...', 
			{font: '40px Courier', fill: '#fff'});

		// add content loadin here
		game.load.audio('music', 'assets/music.mp3'); // http://opengameart.org/content/rise-of-spirit
		game.load.audio('music2', 'assets/music2.mp3'); // http://opengameart.org/content/tragic-ambient-main-menu
		

		game.load.image('background', 'assets/background.png'); // http://opengameart.org/content/industrial-parallax-background
		game.load.image('background2', 'assets/background2.png');
		game.load.image('platform', 'assets/platform.png');
		game.load.image('platform2', 'assets/platform2.png');
		game.load.image('rain', 'assets/rain.png');
		game.load.image('tower1', 'assets/tower1.png');
		game.load.image('faller', 'assets/faller.png'); 
		game.load.image('particle', 'assets/particle.png'); 
		game.load.image('particle2', 'assets/particle2.png'); 
		game.load.image('red-particle', 'assets/red-particle.png'); 
		game.load.image('trampoline', 'assets/trampoline.png');
		game.load.image('arrow', 'assets/arrow.png');
		game.load.image('tnt', 'assets/tnt.png');


		game.load.spritesheet('monster1', 'assets/monster1.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons 
		game.load.spritesheet('monster2', 'assets/monster2.png', 30, 23);
		game.load.spritesheet('lava', 'assets/lava.png', 56, 32);
		game.load.spritesheet('lava2', 'assets/lava2.png', 252, 32); 

		//
		game.load.audio('splash', 'assets/splash.mp3'); // http://opengameart.org/content/lava-splash
		game.load.audio('splash-death', 'assets/splash-death.mp3'); // http://freesound.org/people/Setuniman/sounds/135774/
		game.load.audio('ding', 'assets/ding.mp3'); // http://freesound.org/people/gloriaeffect/sounds/108428/
		game.load.audio('jump', 'assets/jump.mp3');
		game.load.audio('tnt', 'assets/tnt.mp3'); // http://freesound.org/people/ryansnook/sounds/110111/
		// http://freesound.org/people/theneedle.tv/sounds/316682/

		game.load.audio('rain', 'assets/rain.mp3'); // http://freesound.org/people/jmbphilmes/sounds/200272/
		game.load.audio('trampoline_jump', 'assets/trampoline_jump.mp3'); // http://freesound.org/people/arteffect/sounds/349854/
		game.load.audio('die', 'assets/die.mp3');
	},

	initStuff: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},

	create: function() {
		this.initStuff();
		
		game.state.start('menu');
	}

};