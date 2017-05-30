var monster1, monster2;
let muteButton, hardModeButton;

var menuState = {

	create: function() {
		game.add.sprite(0, 0, 'menu-background');

		if (game.device.desktop){
			// desktop
			let startLabel = game.add.text(90, game.world.height-60, 'Press Space to start',{font: '25px Arial', fill: '#ffffff'});
		} else {
			// mobile
			let mobileStartButton = game.add.button(0, 0, 'menu-background', this.startGame, this, 2, 1, 0);
			let startLabel = game.add.text(90, game.world.height-60, 'Tap screen to start', {font: '25px Arial', fill: '#ffffff'});
		}

		game.global.music.play();
		game.global.music.volume = 1.0

		monster1 = game.add.sprite(50, game.world.height-60, 'monster1');
		monster1.animations.add('stand', [0, 1, 2], 5, true);

		monster2 = game.add.sprite(320, game.world.height-60, 'monster1');
		monster2.animations.add('stand', [0, 1, 2], 5, true);


		let spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.addOnce(this.startGame, this);

		muteButton = game.add.button(480, 60, 'mute-button', this.muteSound, this, 0, 0, 1);
		hardModeButton = game.add.button(400, 160, 'hardmode-button', this.hardModeSwitch, this, 0, 0, 1);
 
		game.global.time = 0;
	},

	update: function() {
		monster1.animations.play('stand');
		monster2.animations.play('stand');
	},

	startGame: function(){
		game.sound.play('splash');
		game.global.music.volume = 0.3;

		game.state.start('play');
	},

	hardModeSwitch: function(){
		game.sound.play('splash');
		if(!game.global.isHardMode){
			game.global.isHardMode = true;
			hardModeButton.setFrames(1, 1, 0);
		} else {
			game.global.isHardMode = false;
			hardModeButton.setFrames(0, 0, 1);
		}
	},

	muteSound: function(){
		if(game.sound.mute){
			muteButton.setFrames(0, 0, 1);
		} else {
			muteButton.setFrames(1, 1, 0);
		}
		game.sound.mute = !game.sound.mute;
	},

};
module.exports = menuState;
