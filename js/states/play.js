import {Level1} from '../levels/level01'
import {Level2} from '../levels/level02'
import {Level3} from '../levels/level03'
import {ArrowBooster} from '../utils/booster'
import {CollisionsHandler} from '../utils/collisions'
import {RainEmitter, JuiceEmitters} from '../utils/emitters'
import {TntHandler} from '../utils/tnt'
var level,
	collisionsHandler,
	arrowBooster,
	tntHandler,
	rainEmitter;


// Todo: store those elements in one global object like window.game
// or pass references of objects between them
window.juiceEmitters = [];
window.tnt = {};
window.player = {};
window.lava = {};
window.redSlimes = [];
window.trampolines = [];
window.slowFallers = [];
window.platforms = [];
window.riders = [];
window.fallers = [];
window.arrows = [];
window.switchFallers = [];
window.cursors = [];
var playState = {

	resetState: function(){
		window.canBoostFlag = true;
		window.canTntExplode = true;
	 	window.isPlayerDead = false;
	 	window.hasPlayerWon = false;
	 },

	chooseLevel: function(){
		const levels = [new Level1(), new Level2(), new Level3()];
		return levels[game.global.gameLevel];
	},

	create: function() {
		level = this.chooseLevel();
		this.resetState();

		collisionsHandler = new CollisionsHandler();
		juiceEmitters = new JuiceEmitters();
		arrowBooster = new ArrowBooster();
		tntHandler = new TntHandler();

		level.createBackground(game);
		level.addStartingText(game);


		this.initTnt();
		this.initPlayer();
		this.initRedSlimes();
		this.initLava();
		this.initTrampolines();
		this.initSlowFallers();
		this.initPlatforms();
		this.initRiders();
		this.initFallers();
		this.initArrows();
		this.initSwitchFallers();
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
	    trampolines.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
		}, this);
		fallers.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
		}, this);
		slowFallers.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
	 		item.body.velocity.y = 0;
		}, this);

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
		game.physics.arcade.overlap(player, arrows, this.arrowBoost, null, this);
		game.physics.arcade.overlap(redSlimes, trampolines, this.trampolineSlime, null, this);
		game.physics.arcade.overlap(redSlimes, lava, this.killRedSlime, null, this);
		game.physics.arcade.overlap(player, tnt, this.tntExplode, null, this);
	    game.physics.arcade.overlap(redSlimes, tnt, this.tntExplode, null, this);

		level.handleRidersLogic();
	},

	arrowBoost: function(player, arrow){
	 	arrowBooster.boost(arrow);
	 },

	 initTnt: function(){
	 	tnt = null;
	 	level.addTnt();
	 },

	 tntExplode: function(){
	 		tntHandler.explode(tnt);
	 },

	killPlayer: function(){
	 	if(!window.hasPlayerWon){
	 		this.shakeCamera();
			juiceEmitters.spawnPlayerKillEmitters();

	 		window.isPlayerDead = true;
		 	game.sound.play('splash-death');
		 	player.kill();
		 	setTimeout(function(){
		 		game.state.start('play');
			}, 600);
	 	}
	 },

	 killRedSlime: function(redSlime){
	 	if(!window.isPlayerDead){

	 		juiceEmitters.spawnKillRedSlimeEmitters(redSlime);

		 	game.sound.play('splash-death');
		 	this.shakeCamera();
		 	redSlime.kill();

		 	level.checkForCoolKillText();

		 	if(redSlimes.countLiving() <= 0){
		 		level.addEndingText(game, player);
		 		window.hasPlayerWon = true;
			 	game.global.gameLevel++;

		 		setTimeout(function(){

			 		game.state.start('play');

				}, 3000);
			}
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

	 initArrows: function(){
	 	arrows = game.add.group();
	 	arrows.enableBody = true;
	 	level.addArrows(arrows);
   		arrows.forEachAlive(function(item) {
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

	 initRiders: function(){
	 	riders = game.add.group();
        riders.enableBody = true;
        game.physics.arcade.enable(riders);
        level.addRiders(riders);
        riders.forEachAlive(function(item) {
        	item.body.immovable = true;
        	item.body.bounce.setTo(1, 1);
       		item.body.collideWorldBounds = true;
        	item.body.velocity.setTo(-100, 0);
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

	 initSwitchFallers: function(){
		switchFallers = game.add.group();
	 	switchFallers.enableBody = true;

	 	level.addSwitchFallers();
        game.physics.arcade.enable(switchFallers);

   		switchFallers.forEachAlive(function(item) {
        	item.body.immovable = true;
		}, this);
	 },

	 initFallers: function(){
	 	fallers = game.add.group();
		fallers.enableBody = true;
        level.addFallers(fallers);
	 },

	 initSlowFallers: function(){
	 	slowFallers = game.add.group();
		slowFallers.enableBody = true;
        level.addSlowFallers(slowFallers);
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

	 trampolineSlime: function(redSlime){
	 	redSlime.body.velocity.y -= 200;
	 	game.sound.play('trampoline_jump');
	 },

	 trampolinePlayer: function(){
	 	player.body.velocity.y -= 200;
	 	game.sound.play('trampoline_jump');
	 },


};
module.exports = playState;
