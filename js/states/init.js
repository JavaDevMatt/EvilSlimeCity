var initState = {

	preload: function(){

		var loadingLabel = game.add.text(20, 150, 'loading game data...', 
			{font: '40px Courier', fill: '#fff'});

		game.load.audio('music', 'assets/sound/music.mp3'); // http://opengameart.org/content/rise-of-spirit
		game.load.audio('jump', 'assets/sound/jump.mp3');
		game.load.audio('trampoline_jump', 'assets/sound/trampoline_jump.mp3'); // http://freesound.org/people/arteffect/sounds/349854/
		
		game.load.audio('splash-death', 'assets/sound/splash-death.mp3'); // http://freesound.org/people/Setuniman/sounds/135774/
		game.load.audio('rain', 'assets/sound/rain.mp3'); // http://freesound.org/people/jmbphilmes/sounds/200272/
		game.load.audio('ding', 'assets/sound/ding.mp3'); // http://freesound.org/people/gloriaeffect/sounds/108428/

		game.load.image('menu-background', 'assets/img/menu-background.png'); // http://opengameart.org/content/industrial-parallax-background
		game.load.image('game-background', 'assets/img/game-background.png'); // http://opengameart.org/content/industrial-parallax-background
	    game.load.image('platform', 'assets/img/platform.png');
		game.load.image('platform2', 'assets/img/platform2.png');
		game.load.image('tower1', 'assets/img/tower1.png');
		game.load.image('faller', 'assets/img/faller.png'); 
		game.load.image('trampoline', 'assets/img/trampoline.png');
		game.load.image('arrow', 'assets/img/arrow.png');
		game.load.spritesheet('lava', 'assets/img/lava.png', 56, 32);
		game.load.spritesheet('lava2', 'assets/img/lava2.png', 252, 32); 

		game.load.image('particle', 'assets/img/particle.png'); 
		game.load.image('particle2', 'assets/img/particle2.png'); 
		game.load.image('red-particle', 'assets/img/particle-red.png'); 
		game.load.image('rain', 'assets/img/rain.png');

		game.load.spritesheet('monster1', 'assets/img/monster1.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons 
		game.load.spritesheet('monster2', 'assets/img/monster2.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons 
	


	},

	init: function () {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.global.music = game.add.audio('music',1,true);
		game.global.rainSound = game.add.audio('rain',1,true);

		// playing around with scaling on mobile
		if (!game.device.desktop){
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    		this.game.scale.pageAlignHorizontally = true;
    		this.game.scale.pageAlignVertically = true;
		}
	},

	
	create: function() {
		this.init();

		game.state.start('menu');
	}

};