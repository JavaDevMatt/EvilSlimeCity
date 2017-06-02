import {Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9, Level10} from '../levels'
import {ArrowBooster} from '../utils/booster'
import {CollisionsHandler} from '../utils/collisions'
import {HardModeHandler} from '../utils/hardmode'
import {RainEmitter, JuiceEmitters} from '../utils/emitters'
import {TntHandler} from '../utils/tnt'
import {GameState} from '../gameState'
var level,
	collisionsHandler,
	arrowBooster,
	tntHandler,
	hardModeHandler;


let gState = new GameState().state;
let hardModeJumpCounter;

var playState = {

	resetState: function(){
		gState.flags.canBoostFlag = true;
		gState.flags.canTntExplode = true;
	 	gState.flags.isPlayerDead = false;
	 	gState.flags.hasPlayerWon = false;
	 },

	chooseLevel: function(){
		const levels = [new Level1(), new Level2(), new Level3(), new Level4(), new Level5(), new Level6(), 
		new Level7(), new Level8(), new Level9(), new Level10()];
		return levels[game.global.gameLevel];
	},

	create: function() {
		level = this.chooseLevel();
		window.level = level.levelObj;
		this.resetState();

		collisionsHandler = new CollisionsHandler();
		gState.emitters.juiceEmitters = new JuiceEmitters();
		arrowBooster = new ArrowBooster();
		tntHandler = new TntHandler();
		hardModeHandler = new HardModeHandler(game.global.isHardMode); // get this "true" from setting in menu
		hardModeHandler.setJumpLimit(level.getHardModeJumpLimit());

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

		game.input.gamepad.start();
        gState.gamePad = game.input.gamepad.pad1;
		gState.cursors = game.input.keyboard.createCursorKeys();
		gState.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        game.camera.follow( gState.player);

    	// init dummy timer
        game.time.events.loop(Phaser.Timer.SECOND, this.timerTick, this);

        if(game.global.isHardMode){
        	hardModeJumpCounter = game.add.text(10, 30, 'Jumps left: ' + hardModeHandler.getJumpLimit(), {font: '20px Courier', fill: '#fff'});
        	hardModeJumpCounter.fixedToCamera = true;
        }
        

	},

	timerTick: function() {
		// TODO dummy timer - remove later time from console
		game.global.time++;
		console.log("tick! " + game.global.time);
	},

	update: function() {

		if(hardModeHandler.getJumpLimit() < 0 && !gState.flags.isPlayerDead){
			this.killPlayer();
		}

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
		gState.envObjects.arrows.forEachAlive(function(item) {
       	 	item.animations.play('stand', 10, true);
		}, this);

		if(tntHandler.isExploding()){
			gState.envObjects.tnt.forEachAlive(function(item) {
       			 item.animations.play('exploding', 2, true);
			}, this);
		} else {
			gState.envObjects.tnt.forEachAlive(function(item) {
       			 item.animations.play('stand', 0, true);
			}, this);
		}

	 	// preventing "free move"
	    gState.player.body.velocity.x = 0;
	 	
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
	    let controlThreshold = 20;

	    if ( gState.cursors.left.isDown || 
	    	(game.touchControl.cursors.left && (game.touchControl.speed.x > controlThreshold))){
	        gState.player.body.velocity.x = -150;
	    }
	    else if ( gState.cursors.right.isDown || 
	    	(game.touchControl.cursors.right && (game.touchControl.speed.x < -controlThreshold))){
	        gState.player.body.velocity.x = 150;
	    }
	    // jump!
	    if ( (gState.cursors.up.isDown || 
	    	  (game.touchControl.cursors.up && (game.touchControl.speed.y > controlThreshold)) || 
	    	  gState.spaceKey.isDown || 
	    	  gState.gamePad.justPressed(Phaser.Gamepad.XBOX360_A)) && gState.player.body.touching.down){
	    	game.add.tween( gState.player).to( { angle: 360 }, 600, Phaser.Easing.Linear.None, true);

	    	gState.emitters.juiceEmitters.spawnJumpEmitters();
	    	game.sound.play('jump');
	        gState.player.body.velocity.y = -150;

	        hardModeHandler.minusOne();
	    }

	    // overlaps
		let arcadePhysics = game.physics.arcade; // pass reference

	    arcadePhysics.overlap( gState.player, gState.envObjects.lava, this.killPlayer, null, this);
		arcadePhysics.overlap( gState.player, gState.envObjects.trampolines, this.trampolinePlayer, null, this);
		arcadePhysics.overlap( gState.player, gState.envObjects.arrows, this.arrowBoost, null, this);
		arcadePhysics.overlap( gState.envObjects.redSlimes, gState.envObjects.arrows, this.arrowBoost, null, this);

		arcadePhysics.overlap( gState.envObjects.redSlimes, gState.envObjects.trampolines, this.trampolineSlime, null, this);
		arcadePhysics.overlap( gState.envObjects.redSlimes, gState.envObjects.lava, this.killRedSlime, null, this);
		arcadePhysics.overlap( gState.player, gState.envObjects.tnt, this.tntExplode, null, this);
	    arcadePhysics.overlap( gState.envObjects.redSlimes, gState.envObjects.tnt, this.tntExplode, null, this);

		level.handleRidersLogic();
		level.handleSpecialLevelEvents();

		// gamepad controlls
	    if (gState.gamePad.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || gState.gamePad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1) {
	        gState.player.body.velocity.x = -150;
	    }
	    else if (gState.gamePad.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || gState.gamePad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1) {
	        gState.player.body.velocity.x = 150;
	    }

	    if(game.global.isHardMode){
	    	if(hardModeHandler.getJumpLimit() >= 0){
        		hardModeJumpCounter.setText('Jumps left: ' + hardModeHandler.getJumpLimit());
		    } else if(!gState.flags.isPlayerDead && !gState.flags.hasPlayerWon) {
		    	hardModeJumpCounter.setText('DEAD!');
		    }
	    }
	    

	},

	arrowBoost: function( slime, arrow ){
		if(!gState.flags.hasPlayerWon){
	 		arrowBooster.boost( slime, arrow );
		}
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
		 		level.resetFancyLevelStuff();
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
       	 	item.animations.add('stand', [0, 1, 2, 3, 4, 5, 6]);
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
 			game.touchControl = game.plugins.add(Phaser.Plugin.TouchControl);
        	game.touchControl.inputEnable();
        	game.touchControl.settings.singleDirection = false;
	},

};
module.exports = playState;
