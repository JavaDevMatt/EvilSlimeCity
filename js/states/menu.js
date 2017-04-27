let monster1, monster2;
let isFullScreen = false;
var menuState = {

	create: function() {
		game.add.sprite(0, 0, 'menu-background');

		if (game.device.desktop){
			// desktop
			let startLabel = game.add.text(200, game.world.height-60, 'Press Space to start',{font: '25px Arial', fill: '#ffffff'});
		} else {
			// mobile
			let startLabel = game.add.text(200, game.world.height-60, 'Tap here to start', {font: '25px Arial', fill: '#ffffff'});
			let fullScreenLabel = game.add.text(200, 140, 'Fullscreen? TAP HERE!', {font: '25px Arial', fill: '#ffffff'});
		

			let mobileFullScreenButton = game.add.button(170, 90, 'menu-button', this.swichScreenMode, this, 2, 1, 0);
			let mobileStartButton = game.add.button(170, 240, 'menu-button', this.startGame, this, 2, 1, 0);
			
		}

		game.global.music.play();
		game.global.music.volume = 1.0

		monster1 = game.add.sprite(160, game.world.height-60, 'monster1');
		monster1.animations.add('stand', [0, 1, 2], 5, true);

		monster2 = game.add.sprite(430, game.world.height-60, 'monster1');
		monster2.animations.add('stand', [0, 1, 2], 5, true);


		let spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.addOnce(this.startGame, this);
	},

	update: function() {
		monster1.animations.play('stand');
		monster2.animations.play('stand');
	},

	swichScreenMode: function(){
		if(isFullScreen){
			game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
			isFullScreen = false;
		} else {
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			isFullScreen = true;
		}
	},

	startGame: function(){
		game.sound.play('splash');
		game.global.music.volume = 0.3;

		game.state.start('play');
	},

};
module.exports = menuState;
