import {Level1, Level2, Level3, Level4 } from '../levels'
import {ArrowBooster} from '../utils/booster'
import {CollisionsHandler} from '../utils/collisions'
import {MobileControlsHandler} from '../utils/mobilecontrols'
import {RainEmitter, JuiceEmitters} from '../utils/emitters'
import {TntHandler} from '../utils/tnt'
import {GameState} from '../gameState'
var level,
	collisionsHandler,
	arrowBooster,
	tntHandler,
	mobileControlsHandler;


let gState = new GameState().state;
var playState = {

	resetState: function(){
		gState.flags.canBoostFlag = true;
		gState.flags.canTntExplode = true;
	 	gState.flags.isPlayerDead = false;
	 	gState.flags.hasPlayerWon = false;
	 },

	chooseLevel: function(){
		const levels = [new Level1(), new Level2(), new Level3(), new Level4()];
		return levels[game.global.gameLevel];
	},

	create: function() {
		level = this.chooseLevel();
		window.level = level.levelObj;
		this.resetState();

		collisionsHandler = new CollisionsHandler();
		mobileControlsHandler = new MobileControlsHandler();
		gState.emitters.juiceEmitters = new JuiceEmitters();
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
		this.initMobileControls();

		gState.cursors = game.input.keyboard.createCursorKeys();

        game.camera.follow( gState.player);
	},

	update: function() {

		// collisios
	 	collisionsHandler.update();

		// animations
	 	gState.player.animations.play('stand');
	 	gState.envObjects.lava.forEachAlive(function(item) {
       	 	item.animations.play('stand');
		}, this);
		gState.envObjects.redSlimes.forEachAlive(function(item) {
       	 	item.animations.play('stand');
		}, this);


	 	// preventing "free move"
	 	if (game.device.desktop){
	    	gState.player.body.velocity.x = 0;
	 	}
	    gState.envObjects.trampolines.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
		}, this);
		gState.envObjects.fallers.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
		}, this);
		gState.envObjects.slowFallers.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
	 		item.body.velocity.y = 0;
		}, this);

	    // controls
	    if ( gState.cursors.left.isDown ){
	        gState.player.body.velocity.x = -150;
	    }
	    else if ( gState.cursors.right.isDown ){
	        gState.player.body.velocity.x = 150;
	    }
	    // jump!
	    if ( (gState.cursors.up.isDown || mobileControlsHandler.isJumpDown()) && gState.player.body.touching.down){
	    	game.add.tween( gState.player).to( { angle: 360 }, 600, Phaser.Easing.Linear.None, true);

	    	gState.emitters.juiceEmitters.spawnJumpEmitters();
	    	game.sound.play('jump');
	        gState.player.body.velocity.y = -150;
	    }

	    // overlaps
		let arcadePhysics = game.physics.arcade; // pass reference

	    arcadePhysics.overlap( gState.player, gState.envObjects.lava, this.killPlayer, null, this);
		arcadePhysics.overlap( gState.player, gState.envObjects.trampolines, this.trampolinePlayer, null, this);
		arcadePhysics.overlap( gState.player, gState.envObjects.arrows, this.arrowBoost, null, this);
		arcadePhysics.overlap( gState.envObjects.redSlimes, gState.envObjects.arrows, this.arrowBoostRedSlime, null, this);

		arcadePhysics.overlap( gState.envObjects.redSlimes, gState.envObjects.trampolines, this.trampolineSlime, null, this);
		arcadePhysics.overlap( gState.envObjects.redSlimes, gState.envObjects.lava, this.killRedSlime, null, this);
		arcadePhysics.overlap( gState.player, gState.envObjects.tnt, this.tntExplode, null, this);
	    arcadePhysics.overlap( gState.envObjects.redSlimes, gState.envObjects.tnt, this.tntExplode, null, this);

		level.handleRidersLogic();
	},

	arrowBoost: function( player, arrow ){
	 	arrowBooster.boost( arrow );
	 },

	 arrowBoostRedSlime: function( slime, arrow ){
	 	arrowBooster.boostRedSlime( slime, arrow );
	 },

	 initTnt: function(){
	 	gState.envObjects.tnt = null;
	 	level.addTnt();
	 },

	 tntExplode: function( slime, tnt){
	 		tntHandler.explode( tnt );
	 },

	killPlayer: function(){
	 	if(!gState.flags.hasPlayerWon){
	 		this.shakeCamera();
			gState.emitters.juiceEmitters.spawnPlayerKillEmitters();

	 		gState.flags.isPlayerDead = true;
		 	game.sound.play('splash-death');
		 	gState.player.kill();
		 	setTimeout(function(){
		 		game.state.start('play');
			}, 600);
	 	}
	 },

	 killRedSlime: function(redSlime){
	 	if(!gState.flags.isPlayerDead){

	 		gState.emitters.juiceEmitters.spawnKillRedSlimeEmitters(redSlime);

		 	game.sound.play('splash-death');
		 	this.shakeCamera();
		 	redSlime.kill();

		 	level.checkForCoolKillText();

		 	if(gState.envObjects.redSlimes.countLiving() <= 0){
		 		level.addEndingText(game, gState.player );
		 		gState.flags.hasPlayerWon = true;
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
		let g = gState;
		g.player = game.add.sprite(level.playerStartingX, level.playerStartingY, 'monster1');
		g.player.anchor.setTo(0.5,0.5);
		g.player.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable( g.player );
		g.player.body.bounce.y = 0.2;
   		g.player.body.gravity.y = 300;
        g.player.body.collideWorldBounds = true;
	 },

	 initPlatforms: function(){
		let env = gState.envObjects;
        level.addPlatforms( env.platforms );
        env.platforms.forEachAlive(function(item) {
        	item.body.immovable = true;
		}, this);
	 },

	 initArrows: function(){
		let env = gState.envObjects;
	 	level.addArrows( env.arrows );
   		env.arrows.forEachAlive(function(item) {
       	 	item.body.immovable = true;
		}, this);
	 },

	 initTrampolines: function(){
		let env = gState.envObjects;
        game.physics.arcade.enable( env.trampolines );
        level.addTrampolines( env.trampolines );
   		env.trampolines.forEachAlive(function(item) {
   			item.body.bounce.y = 0.2;
   			item.body.gravity.y = 300;
   			item.body.collideWorldBounds = true;
		}, this);
	 },

	 initRiders: function(){
		let env = gState.envObjects;
        game.physics.arcade.enable( env.riders );
        level.addRiders( env.riders );
        env.riders.forEachAlive(function(item) {
        	item.body.immovable = true;
        	item.body.bounce.setTo(1, 1);
       		item.body.collideWorldBounds = true;
        	item.body.velocity.setTo(-100, 0);
		}, this);
	 },

	 initRedSlimes: function(){
		let e = gState.envObjects; //pass reference
        game.physics.arcade.enable( e.redSlimes );

		level.addRedSlimes( e.redSlimes);
		e.redSlimes.forEachAlive( function( item ) {
   			item.body.bounce.y = 0.2;
			item.body.bounce.x = 1.0;
   			item.body.gravity.y = 300;
        	item.body.collideWorldBounds = true;
        	item.animations.add('stand', [0, 1, 2], 5, true);
		}, this);
	 },

	 initSwitchFallers: function(){
		let env = gState.envObjects;

	 	level.addSwitchFallers();
        game.physics.arcade.enable( env.switchFallers );

   		env.switchFallers.forEachAlive(function( item ) {
        	item.body.immovable = true;
		}, this);
	 },

	 initFallers: function(){
		let env = gState.envObjects;
        level.addFallers( env.fallers );
	 },

	 initSlowFallers: function(){
		let env = gState.envObjects;
        level.addSlowFallers( env.slowFallers );
	 },


	 initLava: function(){
		let env = gState.envObjects;
        level.addLava( env.lava);
        env.lava.forEachAlive(function(item) {
       	 	item.body.immovable = true;
       	 	item.animations.add('stand', [0, 1], 2, true);
		}, this);
	 },

	 initRain: function(){
		game.global.rainSound.play();
	 	gState.emitters.rainEmitter = new RainEmitter();
		gState.emitters.rainEmitter.start();
	 },

	 trampolineSlime: function( redSlime ){
	 	redSlime.body.velocity.y -= 200;
	 	game.sound.play('trampoline_jump');
	 },

	 trampolinePlayer: function(){
	 	gState.player.body.velocity.y -= 200;
	 	game.sound.play('trampoline_jump');
	 },

	 initMobileControls: function(){
        if (!game.device.desktop){
 			mobileControlsHandler.initButtons();

 			// setting gyroscope update frequency
        	gyro.frequency = 10;
       		gyro.startTracking(function(o) {
               // updating player velocity
               if(o.y < -0.4){
               		gState.player.body.velocity.x = 150;
               } else if(o.y > 0.4){
               		gState.player.body.velocity.x = -150;
               } else {
               		gState.player.body.velocity.x = 0;
               }
            });
        }
	},

};
module.exports = playState;
