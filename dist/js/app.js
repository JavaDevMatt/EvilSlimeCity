(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./js/game.js");

},{"./js/game.js":2}],2:[function(require,module,exports){
'use strict';

var game = new Phaser.Game(640, 376, Phaser.AUTO, 'gameDiv'),
    initState = require('./states/init'),
    playState = require('./states/play'),
    menuState = require('./states/menu');

game.global = {
  gameLevel: 0,
  music: null,
  rainSound: null
};
//make the game a global object
window.game = game;
game.state.add('init', initState);
game.state.add('menu', menuState);
game.state.add('play', playState);

game.state.start('init');

},{"./states/init":7,"./states/menu":8,"./states/play":9}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultState = {
	player: {},
	enemies: {
		redSlimes: []
	},
	emitters: {
		juiceEmitters: [],
		rainEmitter: {}
	},
	envObjects: {
		tnt: {},
		lava: {},
		trampolines: {},
		platforms: {},
		riders: {},
		fallers: {},
		arrows: {},
		switchFallers: {},
		cursors: {}
	},
	flags: {
		canBoostFlag: true,
		canTntExplode: true,
		isPlayerDead: false,
		hasPlayerWon: false
	}
};
var instance = null;

var GameState = exports.GameState = function GameState() {
	_classCallCheck(this, GameState);

	if (!instance) {
		instance = this;
		instance.state = defaultState;
	}
	return instance;
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Level1 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameState = require('../gameState');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gState = new _gameState.GameState().state;
//set local pointers;

var Level1 = exports.Level1 = function () {
    function Level1() {
        _classCallCheck(this, Level1);

        this.playerStartingX = 10;
        this.playerStartingY = 10;
    }

    _createClass(Level1, [{
        key: 'addStartingText',
        value: function addStartingText() {
            var loadingLabel = game.add.text(80, 278, 'Kill the evil slime!   -->', { font: '20px Courier', fill: '#fff' });
            setTimeout(function () {
                loadingLabel.kill();
            }, 5000);
        }
    }, {
        key: 'createBackground',
        value: function createBackground() {
            game.world.setBounds(0, 0, 885, 376);

            game.add.sprite(0, 0, 'game-background');
            game.add.sprite(640, 0, 'game-background');
        }
    }, {
        key: 'addPlatforms',
        value: function addPlatforms() {
            gState.envObjects.platforms.create(0, 300, 'platform');
            gState.envObjects.platforms.create(197, 300, 'platform2');
            gState.envObjects.platforms.create(506, 300, 'platform');
            gState.envObjects.platforms.create(646, 300, 'platform');
            gState.envObjects.platforms.create(646, 112, 'tower1');
        }
    }, {
        key: 'addArrows',
        value: function addArrows(arrows) {}
    }, {
        key: 'addRedSlimes',
        value: function addRedSlimes() {
            gState.enemies.redSlimes.create(670, 10, 'monster2');
        }
    }, {
        key: 'addFallers',
        value: function addFallers() {
            gState.envObjects.fallers.create(340, 282, 'faller');
        }
    }, {
        key: 'addSlowFallers',
        value: function addSlowFallers() {}
    }, {
        key: 'addTrampolines',
        value: function addTrampolines() {
            gState.envObjects.trampolines.create(600, 270, 'trampoline');
        }
    }, {
        key: 'addLava',
        value: function addLava() {
            gState.envObjects.lava.create(141, 332, 'lava');
            gState.envObjects.lava.create(254, 332, 'lava2');
            gState.envObjects.lava.create(700, 332, 'lava2');
        }
    }, {
        key: 'addSwitchFallers',
        value: function addSwitchFallers() {}
    }, {
        key: 'addEndingText',
        value: function addEndingText() {
            game.add.text(gState.player.x - 200, 100, 'Great!', { font: '40px Courier', fill: '#fff' });
            game.add.text(gState.player.x - 200, 136, 'Time for the next one....', { font: '20px Courier', fill: '#fff' });
        }
    }, {
        key: 'addTnt',
        value: function addTnt() {}
    }, {
        key: 'addRiders',
        value: function addRiders() {}
    }, {
        key: 'handleRidersLogic',
        value: function handleRidersLogic() {}
    }, {
        key: 'checkForCoolKillText',
        value: function checkForCoolKillText() {}
    }]);

    return Level1;
}();

},{"../gameState":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Level2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameState = require('../gameState');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gState = new _gameState.GameState().state;

var Level2 = exports.Level2 = function () {
    function Level2() {
        _classCallCheck(this, Level2);

        this.playerStartingX = 10;
        this.playerStartingY = 10;
    }

    _createClass(Level2, [{
        key: 'addStartingText',
        value: function addStartingText() {
            var levelLabel = game.add.text(110, 278, 'Kill 2 red evil slimes!', { font: '20px Courier', fill: '#fff' });
            setTimeout(function () {
                levelLabel.kill();
            }, 3000);
        }
    }, {
        key: 'addEndingText',
        value: function addEndingText() {
            game.add.text(gState.player.x - 200, 100, 'Nice!', { font: '40px Courier', fill: '#fff' });
            game.add.text(gState.player.x - 200, 136, 'Get ready for more...', { font: '20px Courier', fill: '#fff' });
        }
    }, {
        key: 'createBackground',
        value: function createBackground() {
            game.world.setBounds(0, 0, 1705, 376);

            game.add.sprite(0, 0, 'game-background');
            game.add.sprite(640, 0, 'game-background');
            game.add.sprite(1280, 0, 'game-background');
        }
    }, {
        key: 'addPlatforms',
        value: function addPlatforms() {
            gState.envObjects.platforms.create(754, 172, 'tower1');
            gState.envObjects.platforms.create(887, 300, 'platform');
            gState.envObjects.platforms.create(1028, 300, 'platform');
            gState.envObjects.platforms.create(1169, 300, 'platform');
            gState.envObjects.platforms.create(1169, 272, 'tower1');
            gState.envObjects.platforms.create(1310, 300, 'platform');
            gState.envObjects.platforms.create(1451, 300, 'platform');
            gState.envObjects.platforms.create(1410, 112, 'tower1');
        }
    }, {
        key: 'addArrows',
        value: function addArrows(arrows) {
            arrows.create(1230, 240, 'arrow');
        }
    }, {
        key: 'addRedSlimes',
        value: function addRedSlimes() {
            gState.enemies.redSlimes.create(1470, 10, 'monster2');
            gState.enemies.redSlimes.create(390, 70, 'monster2');
        }
    }, {
        key: 'addFallers',
        value: function addFallers() {}
    }, {
        key: 'addTrampolines',
        value: function addTrampolines(trampolines) {
            trampolines.create(50, 270, 'trampoline');
            trampolines.create(900, 270, 'trampoline');
        }
    }, {
        key: 'addSlowFallers',
        value: function addSlowFallers() {
            gState.envObjects.slowFallers.create(20, 282, 'faller');
        }
    }, {
        key: 'addLava',
        value: function addLava() {
            gState.envObjects.lava.create(0, 332, 'lava2');
            gState.envObjects.lava.create(252, 332, 'lava2');
            gState.envObjects.lava.create(502, 332, 'lava2');
            gState.envObjects.lava.create(754, 332, 'lava2');
            gState.envObjects.lava.create(1510, 352, 'lava2');
        }
    }, {
        key: 'addRiders',
        value: function addRiders() {
            this.rider1 = gState.envObjects.riders.create(490, 200, 'faller');
        }
    }, {
        key: 'addSwitchFallers',
        value: function addSwitchFallers() {}
    }, {
        key: 'addTnt',
        value: function addTnt() {}
    }, {
        key: 'handleRidersLogic',
        value: function handleRidersLogic() {
            if (this.rider1.x > 650) {
                this.rider1.body.velocity.x = -100;
            }
        }
    }, {
        key: 'checkForCoolKillText',
        value: function checkForCoolKillText() {
            if (gState.enemies.redSlimes.countLiving() == 1) {
                var infoLabel = game.add.text(310, 278, 'One more!', { font: '20px Courier', fill: '#fff' });
                setTimeout(function () {
                    infoLabel.kill();
                }, 3000);
            }
        }
    }]);

    return Level2;
}();

},{"../gameState":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Level3 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameState = require('../gameState');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gState = new _gameState.GameState().state;

var Level3 = exports.Level3 = function () {
    function Level3() {
        _classCallCheck(this, Level3);

        this.playerStartingX = 10;
        this.playerStartingY = 10;
    }

    _createClass(Level3, [{
        key: 'addStartingText',
        value: function addStartingText() {
            var levelLabel = game.add.text(0, 0, 'Time to blow some shit up!', { font: '20px Courier', fill: '#fff' });
            setTimeout(function () {
                levelLabel.kill();
            }, 3000);
        }
    }, {
        key: 'addEndingText',
        value: function addEndingText() {
            game.add.text(200, 100, 'Survived!', { font: '40px Courier', fill: '#fff' });
            game.add.text(200, 136, 'You lucky son of a slime!', { font: '20px Courier', fill: '#fff' });
        }
    }, {
        key: 'createBackground',
        value: function createBackground() {
            game.world.setBounds(0, 0, 640, 376);

            game.add.sprite(0, 0, 'game-background');
        }
    }, {
        key: 'addplatforms',
        value: function addplatforms() {
            gState.envObjects.platforms.create(0, 112, 'tower1');
            gState.envObjects.platforms.create(1, 300, 'platform');
            gState.envObjects.platforms.create(421, 289, 'faller');
        }
    }, {
        key: 'addArrows',
        value: function addArrows(arrows) {}
    }, {
        key: 'addredSlimes',
        value: function addredSlimes() {
            gState.envObjects.redSlimes.create(350, 10, 'monster2');
            gState.envObjects.redSlimes.create(560, 10, 'monster2');
        }
    }, {
        key: 'addFallers',
        value: function addFallers() {}
    }, {
        key: 'addTrampolines',
        value: function addTrampolines(trampolines) {
            trampolines.create(160, 10, 'trampoline');
        }
    }, {
        key: 'addSlowFallers',
        value: function addSlowFallers() {}
    }, {
        key: 'addLava',
        value: function addLava() {
            gState.envObjects.lava.create(142, 332, 'lava');
            gState.envObjects.lava.create(198, 332, 'lava');
            gState.envObjects.lava.create(254, 332, 'lava2');
            gState.envObjects.lava.create(506, 332, 'lava2');
        }
    }, {
        key: 'addSwitchFallers',
        value: function addSwitchFallers() {
            gState.envObjects.switchFallers.create(136, 242, 'faller');
            gState.envObjects.switchFallers.create(330, 112, 'faller');

            gState.envObjects.switchFallers.create(208, 242, 'platform');
            gState.envObjects.switchFallers.create(349, 289, 'faller');
            gState.envObjects.switchFallers.create(493, 289, 'faller');
            gState.envObjects.switchFallers.create(565, 289, 'faller');
            gState.envObjects.switchFallers.create(530, 32, 'tower1');
        }
    }, {
        key: 'addRiders',
        value: function addRiders() {}
    }, {
        key: 'addTnt',
        value: function addTnt() {
            tnt = game.add.sprite(360, 150, 'tnt');
            game.physics.arcade.enable(tnt);
            tnt.body.bounce.y = 0.2;
            tnt.body.gravity.y = 300;
            tnt.body.collideWorldBounds = true;
        }
    }, {
        key: 'handleRidersLogic',
        value: function handleRidersLogic() {}
    }, {
        key: 'checkForCoolKillText',
        value: function checkForCoolKillText() {}
    }]);

    return Level3;
}();

},{"../gameState":3}],7:[function(require,module,exports){
'use strict';

var initState = {

	preload: function preload() {

		var loadingLabel = game.add.text(20, 150, 'loading game data...', { font: '40px Courier', fill: '#fff' });

		game.load.audio('music', 'assets/sound/music.mp3'); // http://opengameart.org/content/rise-of-spirit
		game.load.audio('jump', 'assets/sound/jump.mp3');
		game.load.audio('trampoline_jump', 'assets/sound/trampoline_jump.mp3'); // http://freesound.org/people/arteffect/sounds/349854/

		game.load.audio('splash-death', 'assets/sound/splash-death.mp3'); // http://freesound.org/people/Setuniman/sounds/135774/
		game.load.audio('rain', 'assets/sound/rain.mp3'); // http://freesound.org/people/jmbphilmes/sounds/200272/
		game.load.audio('ding', 'assets/sound/ding.mp3'); // http://freesound.org/people/gloriaeffect/sounds/108428/
		game.load.audio('tnt', 'assets/sound/tnt.mp3'); // http://freesound.org/people/ryansnook/sounds/110111/
		// http://freesound.org/people/theneedle.tv/sounds/316682/


		game.load.image('menu-background', 'assets/img/menu-background.png'); // http://opengameart.org/content/industrial-parallax-background
		game.load.image('game-background', 'assets/img/game-background.png'); // http://opengameart.org/content/industrial-parallax-background
		game.load.image('platform', 'assets/img/platform.png');
		game.load.image('platform2', 'assets/img/platform2.png');
		game.load.image('tower1', 'assets/img/tower1.png');
		game.load.image('faller', 'assets/img/faller.png');
		game.load.image('trampoline', 'assets/img/trampoline.png');
		game.load.image('arrow', 'assets/img/arrow.png');
		game.load.image('tnt', 'assets/img/tnt.png');
		game.load.spritesheet('lava', 'assets/img/lava.png', 56, 32);
		game.load.spritesheet('lava2', 'assets/img/lava2.png', 252, 32);

		game.load.image('particle', 'assets/img/particle.png');
		game.load.image('particle2', 'assets/img/particle2.png');
		game.load.image('red-particle', 'assets/img/particle-red.png');
		game.load.image('rain', 'assets/img/rain.png');

		game.load.spritesheet('monster1', 'assets/img/monster1.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons
		game.load.spritesheet('monster2', 'assets/img/monster2.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons

	},

	init: function init() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.global.music = game.add.audio('music', 1, true);
		game.global.rainSound = game.add.audio('rain', 1, true);

		// playing around with scaling on mobile
		if (!game.device.desktop) {
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.scale.pageAlignHorizontally = true;
			this.game.scale.pageAlignVertically = true;
		}
	},

	create: function create() {
		this.init();

		game.state.start('menu');
	}

};
module.exports = initState;

},{}],8:[function(require,module,exports){
'use strict';

var monster1, monster2;
var menuState = {

	create: function create() {

		game.global.music.play();
		game.global.music.volume = 1.0;

		game.add.sprite(0, 0, 'menu-background');

		monster1 = game.add.sprite(160, game.world.height - 60, 'monster1');
		monster1.animations.add('stand', [0, 1, 2], 5, true);

		monster2 = game.add.sprite(430, game.world.height - 60, 'monster1');
		monster2.animations.add('stand', [0, 1, 2], 5, true);

		if (!game.device.desktop) {
			var startLabel = game.add.text(200, game.world.height - 60, 'Tap screen to start', { font: '25px Arial', fill: '#ffffff' });
		} else {
			var startLabel = game.add.text(200, game.world.height - 60, 'Press Space to start', { font: '25px Arial', fill: '#ffffff' });
		}

		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.addOnce(this.startGame, this);
	},

	update: function update() {
		monster1.animations.play('stand');
		monster2.animations.play('stand');
	},

	startGame: function startGame() {
		game.global.music.volume = 0.3;

		game.state.start('play');
	}

};
module.exports = menuState;

},{}],9:[function(require,module,exports){
'use strict';

var _level = require('../levels/level01');

var _level2 = require('../levels/level02');

var _level3 = require('../levels/level03');

var _booster = require('../utils/booster');

var _collisions = require('../utils/collisions');

var _emitters = require('../utils/emitters');

var _tnt = require('../utils/tnt');

var _gameState = require('../gameState');

var level, collisionsHandler, arrowBooster, tntHandler;

// Todo: store those elements in one global object like window.game
// or pass references of objects between them

var gState = new _gameState.GameState().state;
var playState = {

	resetState: function resetState() {
		gState.flags.canBoostFlag = true;
		gState.flags.canTntExplode = true;
		gState.flags.isPlayerDead = false;
		gState.flags.hasPlayerWon = false;
	},

	chooseLevel: function chooseLevel() {
		var levels = [new _level.Level1(), new _level2.Level2(), new _level3.Level3()];
		return levels[game.global.gameLevel];
	},

	create: function create() {
		level = this.chooseLevel();
		this.resetState();

		collisionsHandler = new _collisions.CollisionsHandler();
		gState.emitters.juiceEmitters = new _emitters.JuiceEmitters();
		arrowBooster = new _booster.ArrowBooster();
		tntHandler = new _tnt.TntHandler();

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

		gState.envObjects.cursors = game.input.keyboard.createCursorKeys();

		game.camera.follow(gState.player);
	},

	update: function update() {

		// collisios
		collisionsHandler.update();

		// animations
		gState.player.animations.play('stand');
		gState.envObjects.lava.forEachAlive(function (item) {
			item.animations.play('stand');
		}, this);
		gState.enemies.redSlimes.forEachAlive(function (item) {
			item.animations.play('stand');
		}, this);

		// preventing "free move"
		gState.player.body.velocity.x = 0;
		gState.envObjects.trampolines.forEachAlive(function (item) {
			item.body.velocity.x = 0;
		}, this);
		gState.envObjects.fallers.forEachAlive(function (item) {
			item.body.velocity.x = 0;
		}, this);
		gState.envObjects.slowFallers.forEachAlive(function (item) {
			item.body.velocity.x = 0;
			item.body.velocity.y = 0;
		}, this);

		// controls
		if (gState.envObjects.cursors.left.isDown) {
			gState.player.body.velocity.x = -150;
		} else if (gState.envObjects.cursors.right.isDown) {
			gState.player.body.velocity.x = 150;
		}
		// jump!
		if (gState.envObjects.cursors.up.isDown && gState.player.body.touching.down) {
			game.add.tween(gState.player).to({ angle: 360 }, 600, Phaser.Easing.Linear.None, true);

			gState.emitters.juiceEmitters.spawnJumpEmitters();
			game.sound.play('jump');
			gState.player.body.velocity.y = -150;
		}

		// overlaps
		var arcadePhysics = game.physics.arcade; // pass reference

		arcadePhysics.overlap(gState.player, gState.envObjects.lava, this.killPlayer, null, this);
		arcadePhysics.overlap(gState.player, gState.envObjects.trampolines, this.trampolinePlayer, null, this);
		arcadePhysics.overlap(gState.player, gState.envObjects.arrows, this.arrowBoost, null, this);
		arcadePhysics.overlap(gState.enemies.redSlimes, gState.envObjects.trampolines, this.trampolineSlime, null, this);
		arcadePhysics.overlap(gState.enemies.redSlimes, gState.envObjects.lava, this.killRedSlime, null, this);
		arcadePhysics.overlap(gState.player, gState.envObjects.tnt, this.tntExplode, null, this);
		arcadePhysics.overlap(gState.enemies.redSlimes, gState.envObjects.tnt, this.tntExplode, null, this);

		level.handleRidersLogic();
	},

	arrowBoost: function arrowBoost(player, arrow) {
		arrowBooster.boost(arrow);
	},

	initTnt: function initTnt() {
		gState.envObjects.tnt = null;
		level.addTnt();
	},

	tntExplode: function tntExplode() {
		tntHandler.explode(gState.envObjects.tnt);
	},

	killPlayer: function killPlayer() {
		if (!gState.flags.hasPlayerWon) {
			this.shakeCamera();
			gState.emitters.juiceEmitters.spawnPlayerKillEmitters();

			gState.flags.isPlayerDead = true;
			game.sound.play('splash-death');
			gState.player.kill();
			setTimeout(function () {
				game.state.start('play');
			}, 600);
		}
	},

	killRedSlime: function killRedSlime(redSlime) {
		if (!gState.flags.isPlayerDead) {

			gState.emitters.juiceEmitters.spawnKillRedSlimeEmitters(redSlime);

			game.sound.play('splash-death');
			this.shakeCamera();
			redSlime.kill();

			level.checkForCoolKillText();

			if (gState.enemies.redSlimes.countLiving() <= 0) {
				level.addEndingText(game, gState.player);
				gState.flags.hasPlayerWon = true;
				game.global.gameLevel++;

				setTimeout(function () {

					game.state.start('play');
				}, 3000);
			}
		}
	},

	shakeCamera: function shakeCamera() {
		game.camera.shake(0.01, 300);
	},

	initPlayer: function initPlayer() {
		var g = gState;
		g.player = game.add.sprite(level.playerStartingX, level.playerStartingY, 'monster1');
		g.player.anchor.setTo(0.5, 0.5);
		g.player.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable(g.player);
		g.player.body.bounce.y = 0.2;
		g.player.body.gravity.y = 300;
		g.player.body.collideWorldBounds = true;
	},

	initPlatforms: function initPlatforms() {
		var env = gState.envObjects;
		env.platforms = game.add.group();
		env.platforms.enableBody = true;
		level.addPlatforms(env.platforms);
		env.platforms.forEachAlive(function (item) {
			item.body.immovable = true;
		}, this);
	},

	initArrows: function initArrows() {
		var env = gState.envObjects;
		env.arrows = game.add.group();
		env.arrows.enableBody = true;
		level.addArrows(env.arrows);
		env.arrows.forEachAlive(function (item) {
			item.body.immovable = true;
		}, this);
	},

	initTrampolines: function initTrampolines() {
		var env = gState.envObjects;
		env.trampolines = game.add.group();
		env.trampolines.enableBody = true;
		game.physics.arcade.enable(env.trampolines);
		level.addTrampolines(env.trampolines);
		env.trampolines.forEachAlive(function (item) {
			item.body.bounce.y = 0.2;
			item.body.gravity.y = 300;
			item.body.collideWorldBounds = true;
		}, this);
	},

	initRiders: function initRiders() {
		var env = gState.envObjects;
		env.riders = game.add.group();
		env.riders.enableBody = true;
		game.physics.arcade.enable(env.riders);
		level.addRiders(env.riders);
		env.riders.forEachAlive(function (item) {
			item.body.immovable = true;
			item.body.bounce.setTo(1, 1);
			item.body.collideWorldBounds = true;
			item.body.velocity.setTo(-100, 0);
		}, this);
	},

	initRedSlimes: function initRedSlimes() {
		var e = gState.enemies; //pass reference
		e.redSlimes = game.add.group();
		e.redSlimes.enableBody = true;
		game.physics.arcade.enable(e.redSlimes);

		level.addRedSlimes(e.redSlimes);
		e.redSlimes.forEachAlive(function (item) {
			item.body.bounce.y = 0.2;
			item.body.bounce.x = 1.0;
			item.body.gravity.y = 300;
			item.body.collideWorldBounds = true;
			item.animations.add('stand', [0, 1, 2], 5, true);
		}, this);
	},

	initSwitchFallers: function initSwitchFallers() {
		var env = gState.envObjects;
		env.switchFallers = game.add.group();
		env.switchFallers.enableBody = true;

		level.addSwitchFallers();
		game.physics.arcade.enable(env.switchFallers);

		env.switchFallers.forEachAlive(function (item) {
			item.body.immovable = true;
		}, this);
	},

	initFallers: function initFallers() {
		var env = gState.envObjects;
		env.fallers = game.add.group();
		env.fallers.enableBody = true;
		level.addFallers(env.fallers);
	},

	initSlowFallers: function initSlowFallers() {
		var env = gState.envObjects;
		env.slowFallers = game.add.group();
		env.slowFallers.enableBody = true;
		level.addSlowFallers(env.slowFallers);
	},

	initLava: function initLava() {
		var env = gState.envObjects;
		env.lava = game.add.group();
		env.lava.enableBody = true;
		level.addLava(env.lava);
		env.lava.forEachAlive(function (item) {
			item.body.immovable = true;
			item.animations.add('stand', [0, 1], 2, true);
		}, this);
	},

	initRain: function initRain() {
		game.global.rainSound.play();

		gState.emitters.rainEmitter = new _emitters.RainEmitter();
		gState.emitters.rainEmitter.start();
	},

	trampolineSlime: function trampolineSlime(redSlime) {
		redSlime.body.velocity.y -= 200;
		game.sound.play('trampoline_jump');
	},

	trampolinePlayer: function trampolinePlayer() {
		gState.player.body.velocity.y -= 200;
		game.sound.play('trampoline_jump');
	}

};
module.exports = playState;

},{"../gameState":3,"../levels/level01":4,"../levels/level02":5,"../levels/level03":6,"../utils/booster":10,"../utils/collisions":11,"../utils/emitters":12,"../utils/tnt":13}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ArrowBooster = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameState = require('../gameState');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var g = new _gameState.GameState().state;

var ArrowBooster = exports.ArrowBooster = function () {
	function ArrowBooster() {
		_classCallCheck(this, ArrowBooster);
	}

	_createClass(ArrowBooster, [{
		key: 'boost',
		value: function boost(arrow) {
			if (window.canBoostFlag) {
				var boostTween = game.add.tween(g.player).to({ alpha: 0 }, 50, Phaser.Easing.Linear.None, true, 0, 1000, true);

				game.sound.play('ding');
				window.canBoostFlag = false;
				arrow.kill();

				var l1 = game.add.text(g.player.x - 8, g.player.y - 30, '3!', { font: '20px Courier', fill: '#fff' });

				var l2, l3;

				setTimeout(function () {
					l1.kill();
					l2 = game.add.text(g.player.x - 8, g.player.y - 30, '2!', { font: '20px Courier', fill: '#fff' });
				}, 1000);

				setTimeout(function () {
					l2.kill();
					l3 = game.add.text(g.player.x - 8, g.player.y - 30, '1!', { font: '20px Courier', fill: '#fff' });
				}, 2000);

				setTimeout(function () {
					boostTween.stop();
					game.add.tween(g.player).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);

					l3.kill();
					juiceEmitters.spawnPlayerBoostEmitters();

					window.canBoostFlag = true;
					g.player.body.velocity.y = -500;
				}, 3000);
			}
		}
	}]);

	return ArrowBooster;
}();

},{"../gameState":3}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CollisionsHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameState = require('../gameState');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var g = new _gameState.GameState().state;

var CollisionsHandler = exports.CollisionsHandler = function () {
	function CollisionsHandler() {
		_classCallCheck(this, CollisionsHandler);
	}

	_createClass(CollisionsHandler, [{
		key: 'update',
		value: function update() {
			game.physics.arcade.collide(g.player, g.envObjects.platforms);
			game.physics.arcade.collide(g.player, g.envObjects.riders);
			game.physics.arcade.collide(g.player, g.envObjects.fallers);
			game.physics.arcade.collide(g.player, g.envObjects.trampolines);
			game.physics.arcade.collide(g.player, g.envObjects.slowFallersfallers);
			game.physics.arcade.collide(g.player, g.envObjects.switchFallers);
			game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.platforms);
			game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.trampolines);
			game.physics.arcade.collide(g.envObjects.slowFallersfallers, g.envObjects.platforms);
			game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.platforms);
			game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.switchFallers);
			game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.fallers);
			game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.trampolines);
			game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.switchFallers);
			game.physics.arcade.collide(g.player, g.enemies.redSlimes);
			game.physics.arcade.collide(g.envObjects.platforms, g.enemies.redSlimes);
			game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.slowFallersfallers);
			game.physics.arcade.collide(g.envObjects.slowFallersfallers, g.envObjects.trampolines);
			game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.riders);
			game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.switchFallers);
			game.physics.arcade.collide(g.envObjects.switchFallers, g.envObjects.switchFallers);
		}
	}]);

	return CollisionsHandler;
}();

},{"../gameState":3}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.JuiceEmitters = exports.RainEmitter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameState = require('../gameState');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var g = new _gameState.GameState().state;

var RainEmitter = exports.RainEmitter = function () {
	function RainEmitter() {
		_classCallCheck(this, RainEmitter);

		this.emitter = game.add.emitter(game.world.centerX, 0, 400);
		this.initEmitter();
	}

	_createClass(RainEmitter, [{
		key: 'initEmitter',
		value: function initEmitter() {
			this.emitter.width = game.world.width;
			this.emitter.angle = -3;
			this.emitter.makeParticles('rain');

			this.emitter.minParticleScale = 0.1;
			this.emitter.maxParticleScale = 0.5;

			this.emitter.setYSpeed(300, 500);
			this.emitter.setXSpeed(-5, 5);

			this.emitter.minRotation = 0;
			this.emitter.maxRotation = 0;
		}
	}, {
		key: 'start',
		value: function start() {
			this.emitter.start(false, 800, 5, 0);
		}
	}]);

	return RainEmitter;
}();

var JuiceEmitters = exports.JuiceEmitters = function () {
	function JuiceEmitters() {
		_classCallCheck(this, JuiceEmitters);
	}

	_createClass(JuiceEmitters, [{
		key: 'spawnJumpEmitters',
		value: function spawnJumpEmitters() {
			this.emitter1 = game.add.emitter(0, 0, 100);
			this.emitter1.makeParticles('particle');
			this.emitter1.gravity = 200;

			this.emitter1.x = g.player.x;
			this.emitter1.y = g.player.y + 5;
			this.emitter1.start(true, 2000, null, 20);
		}
	}, {
		key: 'spawnKillRedSlimeEmitters',
		value: function spawnKillRedSlimeEmitters(redSlime) {
			this.emitterRed = game.add.emitter(0, 0, 100);
			this.emitterRed.makeParticles('red-particle');
			this.emitterRed.gravity = 50;
			this.emitterRed.setScale(1.0, 0, 1.0, 0, 1500);
			this.emitterRed.x = redSlime.x + 15;
			this.emitterRed.y = redSlime.y + 25;
			this.emitterRed.start(true, 3000, null, 20);
		}
	}, {
		key: 'spawnPlayerBoostEmitters',
		value: function spawnPlayerBoostEmitters() {
			this.emitter3 = game.add.emitter(0, 0, 100);
			this.emitter3.makeParticles('particle2');
			this.emitter3.gravity = 50;
			this.emitter3.setScale(1.0, 0, 1.0, 0, 2000);

			this.emitter3.x = g.player.x;
			this.emitter3.y = g.player.y;
			this.emitter3.start(true, 5000, null, 500);
		}
	}, {
		key: 'spawnPlayerKillEmitters',
		value: function spawnPlayerKillEmitters() {
			this.emitter2 = game.add.emitter(0, 0, 100);
			this.emitter2.makeParticles('particle2');
			this.emitter2.gravity = 50;
			this.emitter2.setScale(1.0, 0, 1.0, 0, 2000);

			this.emitter2.x = g.player.x + 15;
			this.emitter2.y = g.player.y + 25;
			this.emitter2.start(true, 600, null, 600);
		}
	}]);

	return JuiceEmitters;
}();

},{"../gameState":3}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TntHandler = exports.TntHandler = function () {
	function TntHandler() {
		_classCallCheck(this, TntHandler);
	}

	_createClass(TntHandler, [{
		key: 'explode',
		value: function explode(tnt) {
			if (window.canTntExplode) {
				game.add.tween(tnt).to({ alpha: 0 }, 700, Phaser.Easing.Linear.None, true, 0, 1000, true);
				game.sound.play('tnt');
				window.canTntExplode = false;
				var l1 = game.add.text(tnt.x + 11, tnt.y - 30, '3!', { font: '20px Courier', fill: '#fff' });

				var l2, l3;

				setTimeout(function () {
					l1.kill();
					l2 = game.add.text(tnt.x + 11, tnt.y - 30, '2!', { font: '20px Courier', fill: '#fff' });
				}, 1000);

				setTimeout(function () {
					l2.kill();
					l3 = game.add.text(tnt.x + 11, tnt.y - 30, '1!', { font: '20px Courier', fill: '#fff' });
				}, 2000);

				setTimeout(function () {
					game.camera.shake(0.04, 2000, true);
					l3.kill();

					setTimeout(function () {
						tnt.kill();
					}, 1000);

					switchFallers.forEachAlive(function (item) {
						item.body.immovable = false;
					}, this);
				}, 3000);
			}
		}
	}]);

	return TntHandler;
}();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImpzL2dhbWUuanMiLCJqcy9nYW1lU3RhdGUuanMiLCJqcy9sZXZlbHMvbGV2ZWwwMS5qcyIsImpzL2xldmVscy9sZXZlbDAyLmpzIiwianMvbGV2ZWxzL2xldmVsMDMuanMiLCJqcy9zdGF0ZXMvaW5pdC5qcyIsImpzL3N0YXRlcy9tZW51LmpzIiwianMvc3RhdGVzL3BsYXkuanMiLCJqcy91dGlscy9ib29zdGVyLmpzIiwianMvdXRpbHMvY29sbGlzaW9ucy5qcyIsImpzL3V0aWxzL2VtaXR0ZXJzLmpzIiwianMvdXRpbHMvdG50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFTLGNBQVQ7Ozs7O0FDQUEsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFYLENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLE9BQU8sSUFBakMsRUFBdUMsU0FBdkMsQ0FBWDtBQUFBLElBQ0ksWUFBWSxRQUFTLGVBQVQsQ0FEaEI7QUFBQSxJQUVJLFlBQVksUUFBUyxlQUFULENBRmhCO0FBQUEsSUFHSSxZQUFZLFFBQVMsZUFBVCxDQUhoQjs7QUFLQSxLQUFLLE1BQUwsR0FBYztBQUNiLGFBQVksQ0FEQztBQUViLFNBQVEsSUFGSztBQUdiLGFBQVk7QUFIQyxDQUFkO0FBS0E7QUFDQSxPQUFPLElBQVAsR0FBYyxJQUFkO0FBQ0EsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE1BQWYsRUFBdUIsU0FBdkI7QUFDQSxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsTUFBZixFQUF1QixTQUF2QjtBQUNBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLFNBQXZCOztBQUVBLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakI7Ozs7Ozs7Ozs7O0FDaEJBLElBQUksZUFBZTtBQUNsQixTQUFRLEVBRFU7QUFFbEIsVUFBUztBQUNSLGFBQVc7QUFE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LElBQUksQ0FBSixHQUFRLEVBQXRCLEVBQTBCLElBQUksQ0FBSixHQUFRLEVBQWxDLEVBQXNDLElBQXRDLEVBQ00sRUFBQyxNQUFNLGNBQVAsRUFBdUIsTUFBTSxNQUE3QixFQUROLENBQUw7QUFFRCxLQUpELEVBSUcsSUFKSDs7QUFNQyxlQUFXLFlBQVU7QUFDcEIsVUFBSyxNQUFMLENBQVksS0FBWixDQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QixJQUE5QjtBQUNBLFFBQUcsSUFBSDs7QUFFRCxnQkFBVyxZQUFVO0FBQ25CLFVBQUksSUFBSjtBQUNELE1BRkQsRUFFRyxJQUZIOztBQUlDLG1CQUFjLFlBQWQsQ0FBMkIsVUFBUyxJQUFULEVBQWU7QUFDcEMsV0FBSyxJQUFMLENBQVUsU0FBVixHQUFzQixLQUF0QjtBQUNOLE1BRkEsRUFFRSxJQUZGO0FBSUQsS0FaQSxFQVlFLElBWkY7QUFhQTtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUgKFwiLi9qcy9nYW1lLmpzXCIpO1xuIiwidmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoNjQwLCAzNzYsIFBoYXNlci5BVVRPLCAnZ2FtZURpdicpLFxuICAgIGluaXRTdGF0ZSA9IHJlcXVpcmUoICcuL3N0YXRlcy9pbml0JyApLFxuICAgIHBsYXlTdGF0ZSA9IHJlcXVpcmUoICcuL3N0YXRlcy9wbGF5JyApLFxuICAgIG1lbnVTdGF0ZSA9IHJlcXVpcmUoICcuL3N0YXRlcy9tZW51JyApO1xuXG5nYW1lLmdsb2JhbCA9IHtcbiBnYW1lTGV2ZWwgOiAwLFxuIG11c2ljIDogbnVsbCxcbiByYWluU291bmQgOiBudWxsXG59XG4vL21ha2UgdGhlIGdhbWUgYSBnbG9iYWwgb2JqZWN0XG53aW5kb3cuZ2FtZSA9IGdhbWU7XG5nYW1lLnN0YXRlLmFkZCgnaW5pdCcsIGluaXRTdGF0ZSk7XG5nYW1lLnN0YXRlLmFkZCgnbWVudScsIG1lbnVTdGF0ZSk7XG5nYW1lLnN0YXRlLmFkZCgncGxheScsIHBsYXlTdGF0ZSk7XG5cbmdhbWUuc3RhdGUuc3RhcnQoJ2luaXQnKTtcbiIsImxldCBkZWZhdWx0U3RhdGUgPSB7XG5cdHBsYXllcjoge30sXG5cdGVuZW1pZXM6IHtcblx0XHRyZWRTbGltZXM6IFtdXG5cdH0sXG5cdGVtaXR0ZXJzOiB7XG5cdFx0anVpY2VFbWl0dGVyczogW10sXG5cdFx0cmFpbkVtaXR0ZXI6IHt9XG5cdH0sXG5cdGVudk9iamVjdHM6IHtcblx0XHR0bnQ6IHt9LFxuXHRcdGxhdmE6IHt9LFxuXHRcdHRyYW1wb2xpbmVzOiB7fSxcblx0XHRwbGF0Zm9ybXM6IHt9LFxuXHRcdHJpZGVyczoge30sXG5cdFx0ZmFsbGVyczoge30sXG5cdFx0YXJyb3dzOiB7fSxcblx0XHRzd2l0Y2hGYWxsZXJzOiB7fSxcblx0XHRjdXJzb3JzOiB7fVxuXHR9LFxuXHRmbGFnczoge1xuXHRcdGNhbkJvb3N0RmxhZyA6IHRydWUsXG5cdFx0Y2FuVG50RXhwbG9kZSA6IHRydWUsXG5cdFx0aXNQbGF5ZXJEZWFkIDogZmFsc2UsXG5cdFx0aGFzUGxheWVyV29uIDogZmFsc2Vcblx0fVxufVxubGV0IGluc3RhbmNlID0gbnVsbDtcblxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYoICFpbnN0YW5jZSApIHtcbiAgICAgICAgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBpbnN0YW5jZS5zdGF0ZSA9IGRlZmF1bHRTdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuLi9nYW1lU3RhdGUnXG5sZXQgZ1N0YXRlID0gbmV3IEdhbWVTdGF0ZSgpLnN0YXRlO1xuLy9zZXQgbG9jYWwgcG9pbnRlcnM7XG5cbmV4cG9ydCBjbGFzcyBMZXZlbDF7XG5cblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdCBcdHRoaXMucGxheWVyU3RhcnRpbmdYID0gMTA7XG5cdCBcdHRoaXMucGxheWVyU3RhcnRpbmdZID0gMTA7XG4gXHQgfVxuXG4gXHQgYWRkU3RhcnRpbmdUZXh0KCl7XG4gICAgICAgICAgICAgICAgdmFyIGxvYWRpbmdMYWJlbCA9IGdhbWUuYWRkLnRleHQoODAsIDI3OCwgJ0tpbGwgdGhlIGV2aWwgc2xpbWUhICAgLS0+Jywge2ZvbnQ6ICcyMHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nTGFiZWwua2lsbCgpO1xuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgIH1cblxuIFx0IGNyZWF0ZUJhY2tncm91bmQoKXtcbiBcdCBcdGdhbWUud29ybGQuc2V0Qm91bmRzKDAsIDAsIDg4NSwgMzc2KTtcblxuIFx0IFx0Z2FtZS5hZGQuc3ByaXRlKDAsIDAsICdnYW1lLWJhY2tncm91bmQnKTtcblx0IFx0Z2FtZS5hZGQuc3ByaXRlKDY0MCwgMCwgJ2dhbWUtYmFja2dyb3VuZCcpO1xuIFx0IH1cblxuIFx0IGFkZFBsYXRmb3Jtcygpe1xuIFx0IFx0Z1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSgwLCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDE5NywgMzAwLCAncGxhdGZvcm0yJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoNTA2LCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDY0NiwgMzAwLCAncGxhdGZvcm0nKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSg2NDYsIDExMiwgJ3Rvd2VyMScpO1xuIFx0IH1cblxuICAgICBhZGRBcnJvd3MoYXJyb3dzKXtcbiAgICAgfVxuXG4gXHQgYWRkUmVkU2xpbWVzKCl7XG4gICAgICAgIGdTdGF0ZS5lbmVtaWVzLnJlZFNsaW1lcy5jcmVhdGUoNjcwLCAxMCwgJ21vbnN0ZXIyJyk7XG4gICAgIH1cblxuIFx0IGFkZEZhbGxlcnMoKXtcbiBcdCBcdGdTdGF0ZS5lbnZPYmplY3RzLmZhbGxlcnMuY3JlYXRlKDM0MCwgMjgyLCAnZmFsbGVyJyk7XG4gXHQgfVxuXG4gXHQgYWRkU2xvd0ZhbGxlcnMoKXtcbiAgICAgfVxuXG4gXHQgYWRkVHJhbXBvbGluZXMoKXtcbiBcdCBcdGdTdGF0ZS5lbnZPYmplY3RzLnRyYW1wb2xpbmVzLmNyZWF0ZSg2MDAsIDI3MCwgJ3RyYW1wb2xpbmUnKTtcbiBcdCB9XG5cbiBcdCBhZGRMYXZhKCl7XG4gXHQgXHRnU3RhdGUuZW52T2JqZWN0cy5sYXZhLmNyZWF0ZSgxNDEsIDMzMiwgJ2xhdmEnKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMubGF2YS5jcmVhdGUoMjU0LCAzMzIsICdsYXZhMicpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5sYXZhLmNyZWF0ZSg3MDAsIDMzMiwgJ2xhdmEyJyk7XG4gXHQgfVxuXG4gICAgIGFkZFN3aXRjaEZhbGxlcnMoKXtcbiAgICAgfVxuXG4gXHQgYWRkRW5kaW5nVGV4dCgpe1xuICAgICAgICBnYW1lLmFkZC50ZXh0KGdTdGF0ZS5wbGF5ZXIueCAtIDIwMCwgMTAwLCAnR3JlYXQhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzQwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIGdhbWUuYWRkLnRleHQoZ1N0YXRlLnBsYXllci54IC0gMjAwLCAxMzYsICdUaW1lIGZvciB0aGUgbmV4dCBvbmUuLi4uJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgIH1cblxuICAgIGFkZFRudCgpe1xuICAgIH1cblxuICAgIGFkZFJpZGVycygpe1xuICAgIH1cblxuICAgIGhhbmRsZVJpZGVyc0xvZ2ljKCl7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JDb29sS2lsbFRleHQoKXtcbiAgICAgfVxuXG5cbn1cbiIsImltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuLi9nYW1lU3RhdGUnXG5sZXQgZ1N0YXRlID0gbmV3IEdhbWVTdGF0ZSgpLnN0YXRlO1xuZXhwb3J0IGNsYXNzIExldmVsMntcblxuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1ggPSAxMDtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1kgPSAxMDtcbiBcdCB9XG5cbiBcdCBhZGRTdGFydGluZ1RleHQoKXtcbiAgICAgICAgICAgICAgICB2YXIgbGV2ZWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMTEwLCAyNzgsICdLaWxsIDIgcmVkIGV2aWwgc2xpbWVzIScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsTGFiZWwua2lsbCgpO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIGFkZEVuZGluZ1RleHQoKXtcbiAgICAgICAgZ2FtZS5hZGQudGV4dChnU3RhdGUucGxheWVyLnggLSAyMDAsIDEwMCwgJ05pY2UhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzQwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIGdhbWUuYWRkLnRleHQoZ1N0YXRlLnBsYXllci54IC0gMjAwLCAxMzYsICdHZXQgcmVhZHkgZm9yIG1vcmUuLi4nLFxuICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgfVxuXG4gXHQgY3JlYXRlQmFja2dyb3VuZCgpe1xuICAgICAgICBnYW1lLndvcmxkLnNldEJvdW5kcygwLCAwLCAxNzA1LCAzNzYpO1xuXG4gICAgICAgIGdhbWUuYWRkLnNwcml0ZSgwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG4gICAgICAgIGdhbWUuYWRkLnNwcml0ZSg2NDAsIDAsICdnYW1lLWJhY2tncm91bmQnKTtcbiAgICAgICAgZ2FtZS5hZGQuc3ByaXRlKDEyODAsIDAsICdnYW1lLWJhY2tncm91bmQnKTtcbiAgICAgfVxuXG4gICAgIGFkZFBsYXRmb3Jtcygpe1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDc1NCwgMTcyLCAndG93ZXIxJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoODg3LCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDEwMjgsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoMTE2OSwgMzAwLCAncGxhdGZvcm0nKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSgxMTY5LCAyNzIsICd0b3dlcjEnKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSgxMzEwLCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDE0NTEsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoMTQxMCwgMTEyLCAndG93ZXIxJyk7XG4gICAgIH1cblxuICAgIGFkZEFycm93cyggYXJyb3dzICl7XG4gICAgICAgIGFycm93cy5jcmVhdGUoMTIzMCwgMjQwLCAnYXJyb3cnKTtcbiAgICAgfVxuXG4gXHQgYWRkUmVkU2xpbWVzKCl7XG4gICAgICAgIGdTdGF0ZS5lbmVtaWVzLnJlZFNsaW1lcy5jcmVhdGUoMTQ3MCwgMTAsICdtb25zdGVyMicpO1xuICAgICAgICBnU3RhdGUuZW5lbWllcy5yZWRTbGltZXMuY3JlYXRlKDM5MCwgNzAsICdtb25zdGVyMicpO1xuICAgICB9XG5cbiBcdCBhZGRGYWxsZXJzKCl7XG4gXHQgfVxuXG4gXHQgYWRkVHJhbXBvbGluZXMoIHRyYW1wb2xpbmVzKXtcbiAgICAgICAgdHJhbXBvbGluZXMuY3JlYXRlKDUwLCAyNzAsICd0cmFtcG9saW5lJyk7XG4gICAgICAgIHRyYW1wb2xpbmVzLmNyZWF0ZSg5MDAsIDI3MCwgJ3RyYW1wb2xpbmUnKTtcbiAgICAgfVxuXG4gICAgIGFkZFNsb3dGYWxsZXJzKCl7XG4gICAgICAgICAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMuc2xvd0ZhbGxlcnMuY3JlYXRlKDIwLCAyODIsICdmYWxsZXInKTtcbiAgICAgfVxuXG5cbiBcdCBhZGRMYXZhKCl7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuY3JlYXRlKDAsIDMzMiwgJ2xhdmEyJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuY3JlYXRlKDI1MiwgMzMyLCAnbGF2YTInKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMubGF2YS5jcmVhdGUoNTAyLCAzMzIsICdsYXZhMicpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5sYXZhLmNyZWF0ZSg3NTQsIDMzMiwgJ2xhdmEyJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuY3JlYXRlKDE1MTAsIDM1MiwgJ2xhdmEyJyk7XG4gXHQgfVxuXG4gICAgIGFkZFJpZGVycygpe1xuICAgICAgICB0aGlzLnJpZGVyMSA9IGdTdGF0ZS5lbnZPYmplY3RzLnJpZGVycy5jcmVhdGUoNDkwLCAyMDAsICdmYWxsZXInKTtcbiAgICAgfVxuXG4gICAgIGFkZFN3aXRjaEZhbGxlcnMoKXtcblx0IH1cblxuICAgICBhZGRUbnQoKXtcbiAgICAgfVxuXG4gICAgIGhhbmRsZVJpZGVyc0xvZ2ljKCl7XG4gICAgICAgIGlmKHRoaXMucmlkZXIxLnggPiA2NTApe1xuICAgICAgICAgICAgdGhpcy5yaWRlcjEuYm9keS52ZWxvY2l0eS54ID0gLTEwMDtcbiAgICAgICAgfVxuICAgICB9XG5cbiAgICAgY2hlY2tGb3JDb29sS2lsbFRleHQoKXtcbiAgICAgICAgaWYoIGdTdGF0ZS5lbmVtaWVzLnJlZFNsaW1lcy5jb3VudExpdmluZygpID09IDEgKXtcbiAgICAgICAgICAgICAgICB2YXIgaW5mb0xhYmVsID0gZ2FtZS5hZGQudGV4dCgzMTAsIDI3OCwgJ09uZSBtb3JlIScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9MYWJlbC5raWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi4vZ2FtZVN0YXRlJ1xubGV0IGdTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoKS5zdGF0ZTtcbmV4cG9ydCBjbGFzcyBMZXZlbDN7XG5cblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdCBcdHRoaXMucGxheWVyU3RhcnRpbmdYID0gMTA7XG5cdCBcdHRoaXMucGxheWVyU3RhcnRpbmdZID0gMTA7XG4gXHQgfVxuXG4gXHQgYWRkU3RhcnRpbmdUZXh0KCl7XG4gICAgICAgICAgICAgICAgdmFyIGxldmVsTGFiZWwgPSBnYW1lLmFkZC50ZXh0KDAsIDAsICdUaW1lIHRvIGJsb3cgc29tZSBzaGl0IHVwIScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsTGFiZWwua2lsbCgpO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIGFkZEVuZGluZ1RleHQoKXtcbiAgICAgICAgZ2FtZS5hZGQudGV4dCgyMDAsIDEwMCwgJ1N1cnZpdmVkIScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICc0MHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcbiAgICAgICAgICAgICAgICBnYW1lLmFkZC50ZXh0KDIwMCwgMTM2LCAnWW91IGx1Y2t5IHNvbiBvZiBhIHNsaW1lIScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICcyMHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcbiAgICB9XG5cbiBcdCBjcmVhdGVCYWNrZ3JvdW5kKCl7XG4gICAgICAgIGdhbWUud29ybGQuc2V0Qm91bmRzKDAsIDAsIDY0MCwgMzc2KTtcblxuICAgICAgICBnYW1lLmFkZC5zcHJpdGUoMCwgMCwgJ2dhbWUtYmFja2dyb3VuZCcpO1xuICAgICB9XG5cbiAgICAgYWRkcGxhdGZvcm1zKCl7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoMCwgMTEyLCAndG93ZXIxJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoMSwgMzAwLCAncGxhdGZvcm0nKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSg0MjEsIDI4OSwgJ2ZhbGxlcicpO1xuICAgICB9XG5cbiAgICBhZGRBcnJvd3MoIGFycm93cyl7XG4gICAgIH1cblxuIFx0IGFkZHJlZFNsaW1lcygpe1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5yZWRTbGltZXMuY3JlYXRlKDM1MCwgMTAsICdtb25zdGVyMicpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5yZWRTbGltZXMuY3JlYXRlKDU2MCwgMTAsICdtb25zdGVyMicpO1xuICAgICB9XG5cbiBcdCBhZGRGYWxsZXJzKCl7XG4gXHQgfVxuXG4gXHQgYWRkVHJhbXBvbGluZXMoIHRyYW1wb2xpbmVzKXtcbiAgICAgICAgIHRyYW1wb2xpbmVzLmNyZWF0ZSgxNjAsIDEwLCAndHJhbXBvbGluZScpO1xuICAgICB9XG5cbiAgICAgYWRkU2xvd0ZhbGxlcnMoKXtcbiAgICAgfVxuXG5cbiBcdCBhZGRMYXZhKCl7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuY3JlYXRlKDE0MiwgMzMyLCAnbGF2YScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5sYXZhLmNyZWF0ZSgxOTgsIDMzMiwgJ2xhdmEnKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMubGF2YS5jcmVhdGUoMjU0LCAzMzIsICdsYXZhMicpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5sYXZhLmNyZWF0ZSg1MDYsIDMzMiwgJ2xhdmEyJyk7XG4gXHQgfVxuXG4gICAgIGFkZFN3aXRjaEZhbGxlcnMoKXtcblx0XHQgZ1N0YXRlLmVudk9iamVjdHMuc3dpdGNoRmFsbGVycy5jcmVhdGUoMTM2LCAyNDIsICdmYWxsZXInKTtcbiAgICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnN3aXRjaEZhbGxlcnMuY3JlYXRlKDMzMCwgMTEyLCAnZmFsbGVyJyk7XG5cbiAgICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnN3aXRjaEZhbGxlcnMuY3JlYXRlKDIwOCwgMjQyLCAncGxhdGZvcm0nKTtcbiAgICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnN3aXRjaEZhbGxlcnMuY3JlYXRlKDM0OSwgMjg5LCAnZmFsbGVyJyk7XG4gICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5zd2l0Y2hGYWxsZXJzLmNyZWF0ZSg0OTMsIDI4OSwgJ2ZhbGxlcicpO1xuICAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMuc3dpdGNoRmFsbGVycy5jcmVhdGUoNTY1LCAyODksICdmYWxsZXInKTtcbiAgICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnN3aXRjaEZhbGxlcnMuY3JlYXRlKDUzMCwgMzIsICd0b3dlcjEnKTtcbiAgICAgfVxuXG4gICAgIGFkZFJpZGVycygpe1xuICAgICB9XG5cbiAgICAgYWRkVG50KCl7XG4gICAgICAgIHRudCA9IGdhbWUuYWRkLnNwcml0ZSgzNjAsIDE1MCwgJ3RudCcpO1xuICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0bnQpO1xuICAgICAgICB0bnQuYm9keS5ib3VuY2UueSA9IDAuMjtcbiAgICAgICAgdG50LmJvZHkuZ3Jhdml0eS55ID0gMzAwO1xuICAgICAgICB0bnQuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICB9XG5cbiAgICAgaGFuZGxlUmlkZXJzTG9naWMoKXtcbiAgICAgfVxuXG4gICAgIGNoZWNrRm9yQ29vbEtpbGxUZXh0KCl7XG4gICAgfVxuXG59XG4iLCJ2YXIgaW5pdFN0YXRlID0ge1xuXG5cdHByZWxvYWQ6IGZ1bmN0aW9uKCl7XG5cblx0XHR2YXIgbG9hZGluZ0xhYmVsID0gZ2FtZS5hZGQudGV4dCgyMCwgMTUwLCAnbG9hZGluZyBnYW1lIGRhdGEuLi4nLFxuXHRcdFx0e2ZvbnQ6ICc0MHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcblxuXHRcdGdhbWUubG9hZC5hdWRpbygnbXVzaWMnLCAnYXNzZXRzL3NvdW5kL211c2ljLm1wMycpOyAvLyBodHRwOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvcmlzZS1vZi1zcGlyaXRcblx0XHRnYW1lLmxvYWQuYXVkaW8oJ2p1bXAnLCAnYXNzZXRzL3NvdW5kL2p1bXAubXAzJyk7XG5cdFx0Z2FtZS5sb2FkLmF1ZGlvKCd0cmFtcG9saW5lX2p1bXAnLCAnYXNzZXRzL3NvdW5kL3RyYW1wb2xpbmVfanVtcC5tcDMnKTsgLy8gaHR0cDovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL2FydGVmZmVjdC9zb3VuZHMvMzQ5ODU0L1xuXG5cdFx0Z2FtZS5sb2FkLmF1ZGlvKCdzcGxhc2gtZGVhdGgnLCAnYXNzZXRzL3NvdW5kL3NwbGFzaC1kZWF0aC5tcDMnKTsgLy8gaHR0cDovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL1NldHVuaW1hbi9zb3VuZHMvMTM1Nzc0L1xuXHRcdGdhbWUubG9hZC5hdWRpbygncmFpbicsICdhc3NldHMvc291bmQvcmFpbi5tcDMnKTsgLy8gaHR0cDovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL2ptYnBoaWxtZXMvc291bmRzLzIwMDI3Mi9cblx0XHRnYW1lLmxvYWQuYXVkaW8oJ2RpbmcnLCAnYXNzZXRzL3NvdW5kL2RpbmcubXAzJyk7IC8vIGh0dHA6Ly9mcmVlc291bmQub3JnL3Blb3BsZS9nbG9yaWFlZmZlY3Qvc291bmRzLzEwODQyOC9cblx0XHRnYW1lLmxvYWQuYXVkaW8oJ3RudCcsICdhc3NldHMvc291bmQvdG50Lm1wMycpOyAvLyBodHRwOi8vZnJlZXNvdW5kLm9yZy9wZW9wbGUvcnlhbnNub29rL3NvdW5kcy8xMTAxMTEvXG5cdFx0Ly8gaHR0cDovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL3RoZW5lZWRsZS50di9zb3VuZHMvMzE2NjgyL1xuXG5cblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ21lbnUtYmFja2dyb3VuZCcsICdhc3NldHMvaW1nL21lbnUtYmFja2dyb3VuZC5wbmcnKTsgLy8gaHR0cDovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2luZHVzdHJpYWwtcGFyYWxsYXgtYmFja2dyb3VuZFxuXHRcdGdhbWUubG9hZC5pbWFnZSgnZ2FtZS1iYWNrZ3JvdW5kJywgJ2Fzc2V0cy9pbWcvZ2FtZS1iYWNrZ3JvdW5kLnBuZycpOyAvLyBodHRwOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaW5kdXN0cmlhbC1wYXJhbGxheC1iYWNrZ3JvdW5kXG5cdCAgICBnYW1lLmxvYWQuaW1hZ2UoJ3BsYXRmb3JtJywgJ2Fzc2V0cy9pbWcvcGxhdGZvcm0ucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCdwbGF0Zm9ybTInLCAnYXNzZXRzL2ltZy9wbGF0Zm9ybTIucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCd0b3dlcjEnLCAnYXNzZXRzL2ltZy90b3dlcjEucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCdmYWxsZXInLCAnYXNzZXRzL2ltZy9mYWxsZXIucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCd0cmFtcG9saW5lJywgJ2Fzc2V0cy9pbWcvdHJhbXBvbGluZS5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ2Fycm93JywgJ2Fzc2V0cy9pbWcvYXJyb3cucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCd0bnQnLCAnYXNzZXRzL2ltZy90bnQucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdsYXZhJywgJ2Fzc2V0cy9pbWcvbGF2YS5wbmcnLCA1NiwgMzIpO1xuXHRcdGdhbWUubG9hZC5zcHJpdGVzaGVldCgnbGF2YTInLCAnYXNzZXRzL2ltZy9sYXZhMi5wbmcnLCAyNTIsIDMyKTtcblxuXHRcdGdhbWUubG9hZC5pbWFnZSgncGFydGljbGUnLCAnYXNzZXRzL2ltZy9wYXJ0aWNsZS5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3BhcnRpY2xlMicsICdhc3NldHMvaW1nL3BhcnRpY2xlMi5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3JlZC1wYXJ0aWNsZScsICdhc3NldHMvaW1nL3BhcnRpY2xlLXJlZC5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3JhaW4nLCAnYXNzZXRzL2ltZy9yYWluLnBuZycpO1xuXG5cdFx0Z2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdtb25zdGVyMScsICdhc3NldHMvaW1nL21vbnN0ZXIxLnBuZycsIDMwLCAyMyk7IC8vIGh0dHA6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9zY2lmaS1jcmVhdHVyZS10aWxlc2V0LW1pbmktMzJ4MzItc2NpZmktY3JlYXR1cmUtaWNvbnNcblx0XHRnYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ21vbnN0ZXIyJywgJ2Fzc2V0cy9pbWcvbW9uc3RlcjIucG5nJywgMzAsIDIzKTsgLy8gaHR0cDovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3NjaWZpLWNyZWF0dXJlLXRpbGVzZXQtbWluaS0zMngzMi1zY2lmaS1jcmVhdHVyZS1pY29uc1xuXG5cblxuXHR9LFxuXG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRnYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcblx0XHRnYW1lLmdsb2JhbC5tdXNpYyA9IGdhbWUuYWRkLmF1ZGlvKCdtdXNpYycsMSx0cnVlKTtcblx0XHRnYW1lLmdsb2JhbC5yYWluU291bmQgPSBnYW1lLmFkZC5hdWRpbygncmFpbicsMSx0cnVlKTtcblxuXHRcdC8vIHBsYXlpbmcgYXJvdW5kIHdpdGggc2NhbGluZyBvbiBtb2JpbGVcblx0XHRpZiAoIWdhbWUuZGV2aWNlLmRlc2t0b3Ape1xuXHRcdFx0dGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG4gICAgXHRcdHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgIFx0XHR0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXG5cblx0Y3JlYXRlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmluaXQoKTtcblxuXHRcdGdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcblx0fVxuXG59O1xubW9kdWxlLmV4cG9ydHMgPSBpbml0U3RhdGU7XG4iLCJ2YXIgbW9uc3RlcjEsIG1vbnN0ZXIyO1xudmFyIG1lbnVTdGF0ZSA9IHtcblxuXHRjcmVhdGU6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Z2FtZS5nbG9iYWwubXVzaWMucGxheSgpO1xuXHRcdGdhbWUuZ2xvYmFsLm11c2ljLnZvbHVtZSA9IDEuMFxuXG5cblx0XHRnYW1lLmFkZC5zcHJpdGUoMCwgMCwgJ21lbnUtYmFja2dyb3VuZCcpO1xuXG5cdFx0bW9uc3RlcjEgPSBnYW1lLmFkZC5zcHJpdGUoMTYwLCBnYW1lLndvcmxkLmhlaWdodC02MCwgJ21vbnN0ZXIxJyk7XG5cdFx0bW9uc3RlcjEuYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgWzAsIDEsIDJdLCA1LCB0cnVlKTtcblxuXHRcdG1vbnN0ZXIyID0gZ2FtZS5hZGQuc3ByaXRlKDQzMCwgZ2FtZS53b3JsZC5oZWlnaHQtNjAsICdtb25zdGVyMScpO1xuXHRcdG1vbnN0ZXIyLmFuaW1hdGlvbnMuYWRkKCdzdGFuZCcsIFswLCAxLCAyXSwgNSwgdHJ1ZSk7XG5cblx0XHRpZiAoIWdhbWUuZGV2aWNlLmRlc2t0b3Ape1xuXHRcdFx0dmFyIHN0YXJ0TGFiZWwgPSBnYW1lLmFkZC50ZXh0KDIwMCwgZ2FtZS53b3JsZC5oZWlnaHQtNjAsICdUYXAgc2NyZWVuIHRvIHN0YXJ0Jywge2ZvbnQ6ICcyNXB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBzdGFydExhYmVsID0gZ2FtZS5hZGQudGV4dCgyMDAsIGdhbWUud29ybGQuaGVpZ2h0LTYwLCAnUHJlc3MgU3BhY2UgdG8gc3RhcnQnLHtmb250OiAnMjVweCBBcmlhbCcsIGZpbGw6ICcjZmZmZmZmJ30pO1xuXHRcdH1cblxuXG5cdFx0dmFyIHNwYWNlS2V5ID0gZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSKTtcblx0XHRzcGFjZUtleS5vbkRvd24uYWRkT25jZSh0aGlzLnN0YXJ0R2FtZSwgdGhpcyk7XG5cdH0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRtb25zdGVyMS5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJyk7XG5cdFx0bW9uc3RlcjIuYW5pbWF0aW9ucy5wbGF5KCdzdGFuZCcpO1xuXHR9LFxuXG5cdHN0YXJ0R2FtZTogZnVuY3Rpb24oKXtcblx0XHRnYW1lLmdsb2JhbC5tdXNpYy52b2x1bWUgPSAwLjM7XG5cblx0XHRnYW1lLnN0YXRlLnN0YXJ0KCdwbGF5Jyk7XG5cdH0sXG5cbn07XG5tb2R1bGUuZXhwb3J0cyA9IG1lbnVTdGF0ZTtcbiIsImltcG9ydCB7TGV2ZWwxfSBmcm9tICcuLi9sZXZlbHMvbGV2ZWwwMSdcbmltcG9ydCB7TGV2ZWwyfSBmcm9tICcuLi9sZXZlbHMvbGV2ZWwwMidcbmltcG9ydCB7TGV2ZWwzfSBmcm9tICcuLi9sZXZlbHMvbGV2ZWwwMydcbmltcG9ydCB7QXJyb3dCb29zdGVyfSBmcm9tICcuLi91dGlscy9ib29zdGVyJ1xuaW1wb3J0IHtDb2xsaXNpb25zSGFuZGxlcn0gZnJvbSAnLi4vdXRpbHMvY29sbGlzaW9ucydcbmltcG9ydCB7UmFpbkVtaXR0ZXIsIEp1aWNlRW1pdHRlcnN9IGZyb20gJy4uL3V0aWxzL2VtaXR0ZXJzJ1xuaW1wb3J0IHtUbnRIYW5kbGVyfSBmcm9tICcuLi91dGlscy90bnQnXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi4vZ2FtZVN0YXRlJ1xudmFyIGxldmVsLFxuXHRjb2xsaXNpb25zSGFuZGxlcixcblx0YXJyb3dCb29zdGVyLFxuXHR0bnRIYW5kbGVyO1xuXG5cbi8vIFRvZG86IHN0b3JlIHRob3NlIGVsZW1lbnRzIGluIG9uZSBnbG9iYWwgb2JqZWN0IGxpa2Ugd2luZG93LmdhbWVcbi8vIG9yIHBhc3MgcmVmZXJlbmNlcyBvZiBvYmplY3RzIGJldHdlZW4gdGhlbVxuXG5sZXQgZ1N0YXRlID0gbmV3IEdhbWVTdGF0ZSgpLnN0YXRlO1xudmFyIHBsYXlTdGF0ZSA9IHtcblxuXHRyZXNldFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdGdTdGF0ZS5mbGFncy5jYW5Cb29zdEZsYWcgPSB0cnVlO1xuXHRcdGdTdGF0ZS5mbGFncy5jYW5UbnRFeHBsb2RlID0gdHJ1ZTtcblx0IFx0Z1N0YXRlLmZsYWdzLmlzUGxheWVyRGVhZCA9IGZhbHNlO1xuXHQgXHRnU3RhdGUuZmxhZ3MuaGFzUGxheWVyV29uID0gZmFsc2U7XG5cdCB9LFxuXG5cdGNob29zZUxldmVsOiBmdW5jdGlvbigpe1xuXHRcdGNvbnN0IGxldmVscyA9IFtuZXcgTGV2ZWwxKCksIG5ldyBMZXZlbDIoKSwgbmV3IExldmVsMygpXTtcblx0XHRyZXR1cm4gbGV2ZWxzW2dhbWUuZ2xvYmFsLmdhbWVMZXZlbF07XG5cdH0sXG5cblx0Y3JlYXRlOiBmdW5jdGlvbigpIHtcblx0XHRsZXZlbCA9IHRoaXMuY2hvb3NlTGV2ZWwoKTtcblx0XHR0aGlzLnJlc2V0U3RhdGUoKTtcblxuXHRcdGNvbGxpc2lvbnNIYW5kbGVyID0gbmV3IENvbGxpc2lvbnNIYW5kbGVyKCk7XG5cdFx0Z1N0YXRlLmVtaXR0ZXJzLmp1aWNlRW1pdHRlcnMgPSBuZXcgSnVpY2VFbWl0dGVycygpO1xuXHRcdGFycm93Qm9vc3RlciA9IG5ldyBBcnJvd0Jvb3N0ZXIoKTtcblx0XHR0bnRIYW5kbGVyID0gbmV3IFRudEhhbmRsZXIoKTtcblxuXHRcdGxldmVsLmNyZWF0ZUJhY2tncm91bmQoZ2FtZSk7XG5cdFx0bGV2ZWwuYWRkU3RhcnRpbmdUZXh0KGdhbWUpO1xuXG5cblx0XHR0aGlzLmluaXRUbnQoKTtcblx0XHR0aGlzLmluaXRQbGF5ZXIoKTtcblx0XHR0aGlzLmluaXRSZWRTbGltZXMoKTtcblx0XHR0aGlzLmluaXRMYXZhKCk7XG5cdFx0dGhpcy5pbml0VHJhbXBvbGluZXMoKTtcblx0XHR0aGlzLmluaXRTbG93RmFsbGVycygpO1xuXHRcdHRoaXMuaW5pdFBsYXRmb3JtcygpO1xuXHRcdHRoaXMuaW5pdFJpZGVycygpO1xuXHRcdHRoaXMuaW5pdEZhbGxlcnMoKTtcblx0XHR0aGlzLmluaXRBcnJvd3MoKTtcblx0XHR0aGlzLmluaXRTd2l0Y2hGYWxsZXJzKCk7XG5cdFx0dGhpcy5pbml0UmFpbigpO1xuXG5cdFx0Z1N0YXRlLmVudk9iamVjdHMuY3Vyc29ycyA9IGdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuXG4gICAgICAgIGdhbWUuY2FtZXJhLmZvbGxvdyggZ1N0YXRlLnBsYXllcik7XG5cdH0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbigpIHtcblxuXHRcdC8vIGNvbGxpc2lvc1xuXHQgXHRjb2xsaXNpb25zSGFuZGxlci51cGRhdGUoKTtcblxuXHRcdC8vIGFuaW1hdGlvbnNcblx0IFx0Z1N0YXRlLnBsYXllci5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJyk7XG5cdCBcdGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICBcdCBcdGl0ZW0uYW5pbWF0aW9ucy5wbGF5KCdzdGFuZCcpO1xuXHRcdH0sIHRoaXMpO1xuXHRcdGdTdGF0ZS5lbmVtaWVzLnJlZFNsaW1lcy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgIFx0IFx0aXRlbS5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJyk7XG5cdFx0fSwgdGhpcyk7XG5cblxuXHQgXHQvLyBwcmV2ZW50aW5nIFwiZnJlZSBtb3ZlXCJcblx0ICAgIGdTdGF0ZS5wbGF5ZXIuYm9keS52ZWxvY2l0eS54ID0gMDtcblx0ICAgIGdTdGF0ZS5lbnZPYmplY3RzLnRyYW1wb2xpbmVzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG5cdCAgICBcdGl0ZW0uYm9keS52ZWxvY2l0eS54ID0gMDtcblx0XHR9LCB0aGlzKTtcblx0XHRnU3RhdGUuZW52T2JqZWN0cy5mYWxsZXJzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG5cdCAgICBcdGl0ZW0uYm9keS52ZWxvY2l0eS54ID0gMDtcblx0XHR9LCB0aGlzKTtcblx0XHRnU3RhdGUuZW52T2JqZWN0cy5zbG93RmFsbGVycy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuXHQgICAgXHRpdGVtLmJvZHkudmVsb2NpdHkueCA9IDA7XG5cdCBcdFx0aXRlbS5ib2R5LnZlbG9jaXR5LnkgPSAwO1xuXHRcdH0sIHRoaXMpO1xuXG5cdCAgICAvLyBjb250cm9sc1xuXHQgICAgaWYgKCBnU3RhdGUuZW52T2JqZWN0cy5jdXJzb3JzLmxlZnQuaXNEb3duICl7XG5cdCAgICAgICAgZ1N0YXRlLnBsYXllci5ib2R5LnZlbG9jaXR5LnggPSAtMTUwO1xuXHQgICAgfVxuXHQgICAgZWxzZSBpZiAoIGdTdGF0ZS5lbnZPYmplY3RzLmN1cnNvcnMucmlnaHQuaXNEb3duICl7XG5cdCAgICAgICAgZ1N0YXRlLnBsYXllci5ib2R5LnZlbG9jaXR5LnggPSAxNTA7XG5cdCAgICB9XG5cdCAgICAvLyBqdW1wIVxuXHQgICAgaWYgKCBnU3RhdGUuZW52T2JqZWN0cy5jdXJzb3JzLnVwLmlzRG93biAmJiBnU3RhdGUucGxheWVyLmJvZHkudG91Y2hpbmcuZG93bil7XG5cdCAgICBcdGdhbWUuYWRkLnR3ZWVuKCBnU3RhdGUucGxheWVyKS50byggeyBhbmdsZTogMzYwIH0sIDYwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSk7XG5cblx0ICAgIFx0Z1N0YXRlLmVtaXR0ZXJzLmp1aWNlRW1pdHRlcnMuc3Bhd25KdW1wRW1pdHRlcnMoKTtcblx0ICAgIFx0Z2FtZS5zb3VuZC5wbGF5KCdqdW1wJyk7XG5cdCAgICAgICAgZ1N0YXRlLnBsYXllci5ib2R5LnZlbG9jaXR5LnkgPSAtMTUwO1xuXHQgICAgfVxuXG5cdCAgICAvLyBvdmVybGFwc1xuXHRcdGxldCBhcmNhZGVQaHlzaWNzID0gZ2FtZS5waHlzaWNzLmFyY2FkZTsgLy8gcGFzcyByZWZlcmVuY2VcblxuXHQgICAgYXJjYWRlUGh5c2ljcy5vdmVybGFwKCBnU3RhdGUucGxheWVyLCBnU3RhdGUuZW52T2JqZWN0cy5sYXZhLCB0aGlzLmtpbGxQbGF5ZXIsIG51bGwsIHRoaXMpO1xuXHRcdGFyY2FkZVBoeXNpY3Mub3ZlcmxhcCggZ1N0YXRlLnBsYXllciwgZ1N0YXRlLmVudk9iamVjdHMudHJhbXBvbGluZXMsIHRoaXMudHJhbXBvbGluZVBsYXllciwgbnVsbCwgdGhpcyk7XG5cdFx0YXJjYWRlUGh5c2ljcy5vdmVybGFwKCBnU3RhdGUucGxheWVyLCBnU3RhdGUuZW52T2JqZWN0cy5hcnJvd3MsIHRoaXMuYXJyb3dCb29zdCwgbnVsbCwgdGhpcyk7XG5cdFx0YXJjYWRlUGh5c2ljcy5vdmVybGFwKCBnU3RhdGUuZW5lbWllcy5yZWRTbGltZXMsIGdTdGF0ZS5lbnZPYmplY3RzLnRyYW1wb2xpbmVzLCB0aGlzLnRyYW1wb2xpbmVTbGltZSwgbnVsbCwgdGhpcyk7XG5cdFx0YXJjYWRlUGh5c2ljcy5vdmVybGFwKCBnU3RhdGUuZW5lbWllcy5yZWRTbGltZXMsIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEsIHRoaXMua2lsbFJlZFNsaW1lLCBudWxsLCB0aGlzKTtcblx0XHRhcmNhZGVQaHlzaWNzLm92ZXJsYXAoIGdTdGF0ZS5wbGF5ZXIsIGdTdGF0ZS5lbnZPYmplY3RzLnRudCwgdGhpcy50bnRFeHBsb2RlLCBudWxsLCB0aGlzKTtcblx0ICAgIGFyY2FkZVBoeXNpY3Mub3ZlcmxhcCggZ1N0YXRlLmVuZW1pZXMucmVkU2xpbWVzLCBnU3RhdGUuZW52T2JqZWN0cy50bnQsIHRoaXMudG50RXhwbG9kZSwgbnVsbCwgdGhpcyk7XG5cblx0XHRsZXZlbC5oYW5kbGVSaWRlcnNMb2dpYygpO1xuXHR9LFxuXG5cdGFycm93Qm9vc3Q6IGZ1bmN0aW9uKHBsYXllciwgYXJyb3cpe1xuXHQgXHRhcnJvd0Jvb3N0ZXIuYm9vc3QoYXJyb3cpO1xuXHQgfSxcblxuXHQgaW5pdFRudDogZnVuY3Rpb24oKXtcblx0IFx0Z1N0YXRlLmVudk9iamVjdHMudG50ID0gbnVsbDtcblx0IFx0bGV2ZWwuYWRkVG50KCk7XG5cdCB9LFxuXG5cdCB0bnRFeHBsb2RlOiBmdW5jdGlvbigpe1xuXHQgXHRcdHRudEhhbmRsZXIuZXhwbG9kZSggZ1N0YXRlLmVudk9iamVjdHMudG50KTtcblx0IH0sXG5cblx0a2lsbFBsYXllcjogZnVuY3Rpb24oKXtcblx0IFx0aWYoIWdTdGF0ZS5mbGFncy5oYXNQbGF5ZXJXb24pe1xuXHQgXHRcdHRoaXMuc2hha2VDYW1lcmEoKTtcblx0XHRcdGdTdGF0ZS5lbWl0dGVycy5qdWljZUVtaXR0ZXJzLnNwYXduUGxheWVyS2lsbEVtaXR0ZXJzKCk7XG5cblx0IFx0XHRnU3RhdGUuZmxhZ3MuaXNQbGF5ZXJEZWFkID0gdHJ1ZTtcblx0XHQgXHRnYW1lLnNvdW5kLnBsYXkoJ3NwbGFzaC1kZWF0aCcpO1xuXHRcdCBcdGdTdGF0ZS5wbGF5ZXIua2lsbCgpO1xuXHRcdCBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHQgXHRcdGdhbWUuc3RhdGUuc3RhcnQoJ3BsYXknKTtcblx0XHRcdH0sIDYwMCk7XG5cdCBcdH1cblx0IH0sXG5cblx0IGtpbGxSZWRTbGltZTogZnVuY3Rpb24ocmVkU2xpbWUpe1xuXHQgXHRpZighZ1N0YXRlLmZsYWdzLmlzUGxheWVyRGVhZCl7XG5cblx0IFx0XHRnU3RhdGUuZW1pdHRlcnMuanVpY2VFbWl0dGVycy5zcGF3bktpbGxSZWRTbGltZUVtaXR0ZXJzKHJlZFNsaW1lKTtcblxuXHRcdCBcdGdhbWUuc291bmQucGxheSgnc3BsYXNoLWRlYXRoJyk7XG5cdFx0IFx0dGhpcy5zaGFrZUNhbWVyYSgpO1xuXHRcdCBcdHJlZFNsaW1lLmtpbGwoKTtcblxuXHRcdCBcdGxldmVsLmNoZWNrRm9yQ29vbEtpbGxUZXh0KCk7XG5cblx0XHQgXHRpZihnU3RhdGUuZW5lbWllcy5yZWRTbGltZXMuY291bnRMaXZpbmcoKSA8PSAwKXtcblx0XHQgXHRcdGxldmVsLmFkZEVuZGluZ1RleHQoZ2FtZSwgZ1N0YXRlLnBsYXllciApO1xuXHRcdCBcdFx0Z1N0YXRlLmZsYWdzLmhhc1BsYXllcldvbiA9IHRydWU7XG5cdFx0XHQgXHRnYW1lLmdsb2JhbC5nYW1lTGV2ZWwrKztcblxuXHRcdCBcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXG5cdFx0XHQgXHRcdGdhbWUuc3RhdGUuc3RhcnQoJ3BsYXknKTtcblxuXHRcdFx0XHR9LCAzMDAwKTtcblx0XHRcdH1cblx0IFx0fVxuXG5cdCB9LFxuXG5cdCBzaGFrZUNhbWVyYTogZnVuY3Rpb24oKXtcblx0IFx0Z2FtZS5jYW1lcmEuc2hha2UoMC4wMSwgMzAwKTtcblx0IH0sXG5cblx0aW5pdFBsYXllcjogZnVuY3Rpb24oKXtcblx0XHRsZXQgZyA9IGdTdGF0ZTtcblx0XHRnLnBsYXllciA9IGdhbWUuYWRkLnNwcml0ZShsZXZlbC5wbGF5ZXJTdGFydGluZ1gsIGxldmVsLnBsYXllclN0YXJ0aW5nWSwgJ21vbnN0ZXIxJyk7XG5cdFx0Zy5wbGF5ZXIuYW5jaG9yLnNldFRvKDAuNSwwLjUpO1xuXHRcdGcucGxheWVyLmFuaW1hdGlvbnMuYWRkKCdzdGFuZCcsIFswLCAxLCAyXSwgNSwgdHJ1ZSk7XG5cdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoIGcucGxheWVyICk7XG5cdFx0Zy5wbGF5ZXIuYm9keS5ib3VuY2UueSA9IDAuMjtcbiAgIFx0XHRnLnBsYXllci5ib2R5LmdyYXZpdHkueSA9IDMwMDtcbiAgICAgICAgZy5wbGF5ZXIuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuXHQgfSxcblxuXHQgaW5pdFBsYXRmb3JtczogZnVuY3Rpb24oKXtcblx0XHRsZXQgZW52ID0gZ1N0YXRlLmVudk9iamVjdHM7XG5cdFx0ZW52LnBsYXRmb3JtcyA9IGdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIGVudi5wbGF0Zm9ybXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIGxldmVsLmFkZFBsYXRmb3JtcyggZW52LnBsYXRmb3JtcyApO1xuICAgICAgICBlbnYucGxhdGZvcm1zLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cdFx0fSwgdGhpcyk7XG5cdCB9LFxuXG5cdCBpbml0QXJyb3dzOiBmdW5jdGlvbigpe1xuXHRcdGxldCBlbnYgPSBnU3RhdGUuZW52T2JqZWN0cztcblx0IFx0ZW52LmFycm93cyA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdCBcdGVudi5hcnJvd3MuZW5hYmxlQm9keSA9IHRydWU7XG5cdCBcdGxldmVsLmFkZEFycm93cyggZW52LmFycm93cyApO1xuICAgXHRcdGVudi5hcnJvd3MuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICBcdCBcdGl0ZW0uYm9keS5pbW1vdmFibGUgPSB0cnVlO1xuXHRcdH0sIHRoaXMpO1xuXHQgfSxcblxuXHQgaW5pdFRyYW1wb2xpbmVzOiBmdW5jdGlvbigpe1xuXHRcdGxldCBlbnYgPSBnU3RhdGUuZW52T2JqZWN0cztcblx0XHRlbnYudHJhbXBvbGluZXMgPSBnYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICBlbnYudHJhbXBvbGluZXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKCBlbnYudHJhbXBvbGluZXMgKTtcbiAgICAgICAgbGV2ZWwuYWRkVHJhbXBvbGluZXMoIGVudi50cmFtcG9saW5lcyApO1xuICAgXHRcdGVudi50cmFtcG9saW5lcy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgXHRcdFx0aXRlbS5ib2R5LmJvdW5jZS55ID0gMC4yO1xuICAgXHRcdFx0aXRlbS5ib2R5LmdyYXZpdHkueSA9IDMwMDtcbiAgIFx0XHRcdGl0ZW0uYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuXHRcdH0sIHRoaXMpO1xuXHQgfSxcblxuXHQgaW5pdFJpZGVyczogZnVuY3Rpb24oKXtcblx0XHRsZXQgZW52ID0gZ1N0YXRlLmVudk9iamVjdHM7XG5cdCBcdGVudi5yaWRlcnMgPSBnYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICBlbnYucmlkZXJzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSggZW52LnJpZGVycyApO1xuICAgICAgICBsZXZlbC5hZGRSaWRlcnMoIGVudi5yaWRlcnMgKTtcbiAgICAgICAgZW52LnJpZGVycy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBcdGl0ZW0uYm9keS5pbW1vdmFibGUgPSB0cnVlO1xuICAgICAgICBcdGl0ZW0uYm9keS5ib3VuY2Uuc2V0VG8oMSwgMSk7XG4gICAgICAgXHRcdGl0ZW0uYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICBcdGl0ZW0uYm9keS52ZWxvY2l0eS5zZXRUbygtMTAwLCAwKTtcblx0XHR9LCB0aGlzKTtcblx0IH0sXG5cblx0IGluaXRSZWRTbGltZXM6IGZ1bmN0aW9uKCl7XG5cdFx0bGV0IGUgPSBnU3RhdGUuZW5lbWllczsgLy9wYXNzIHJlZmVyZW5jZVxuXHQgXHRlLnJlZFNsaW1lcyA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdCBcdGUucmVkU2xpbWVzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSggZS5yZWRTbGltZXMgKTtcblxuXHRcdGxldmVsLmFkZFJlZFNsaW1lcyggZS5yZWRTbGltZXMpO1xuXHRcdGUucmVkU2xpbWVzLmZvckVhY2hBbGl2ZSggZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICBcdFx0XHRpdGVtLmJvZHkuYm91bmNlLnkgPSAwLjI7XG5cdFx0XHRpdGVtLmJvZHkuYm91bmNlLnggPSAxLjA7XG4gICBcdFx0XHRpdGVtLmJvZHkuZ3Jhdml0eS55ID0gMzAwO1xuICAgICAgICBcdGl0ZW0uYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICBcdGl0ZW0uYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgWzAsIDEsIDJdLCA1LCB0cnVlKTtcblx0XHR9LCB0aGlzKTtcblx0IH0sXG5cblx0IGluaXRTd2l0Y2hGYWxsZXJzOiBmdW5jdGlvbigpe1xuXHRcdGxldCBlbnYgPSBnU3RhdGUuZW52T2JqZWN0cztcblx0XHRlbnYuc3dpdGNoRmFsbGVycyA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdCBcdGVudi5zd2l0Y2hGYWxsZXJzLmVuYWJsZUJvZHkgPSB0cnVlO1xuXG5cdCBcdGxldmVsLmFkZFN3aXRjaEZhbGxlcnMoKTtcbiAgICAgICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoIGVudi5zd2l0Y2hGYWxsZXJzICk7XG5cbiAgIFx0XHRlbnYuc3dpdGNoRmFsbGVycy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oIGl0ZW0gKSB7XG4gICAgICAgIFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cdFx0fSwgdGhpcyk7XG5cdCB9LFxuXG5cdCBpbml0RmFsbGVyczogZnVuY3Rpb24oKXtcblx0XHRsZXQgZW52ID0gZ1N0YXRlLmVudk9iamVjdHM7XG5cdCBcdGVudi5mYWxsZXJzID0gZ2FtZS5hZGQuZ3JvdXAoKTtcblx0XHRlbnYuZmFsbGVycy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgbGV2ZWwuYWRkRmFsbGVycyggZW52LmZhbGxlcnMgKTtcblx0IH0sXG5cblx0IGluaXRTbG93RmFsbGVyczogZnVuY3Rpb24oKXtcblx0XHRsZXQgZW52ID0gZ1N0YXRlLmVudk9iamVjdHM7XG5cdCBcdGVudi5zbG93RmFsbGVycyA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdFx0ZW52LnNsb3dGYWxsZXJzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICBsZXZlbC5hZGRTbG93RmFsbGVycyggZW52LnNsb3dGYWxsZXJzICk7XG5cdCB9LFxuXG5cblx0IGluaXRMYXZhOiBmdW5jdGlvbigpe1xuXHRcdGxldCBlbnYgPSBnU3RhdGUuZW52T2JqZWN0cztcblx0IFx0ZW52LmxhdmEgPSBnYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICBlbnYubGF2YS5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgbGV2ZWwuYWRkTGF2YSggZW52LmxhdmEpO1xuICAgICAgICBlbnYubGF2YS5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgIFx0IFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG4gICAgICAgXHQgXHRpdGVtLmFuaW1hdGlvbnMuYWRkKCdzdGFuZCcsIFswLCAxXSwgMiwgdHJ1ZSk7XG5cdFx0fSwgdGhpcyk7XG5cdCB9LFxuXG5cdCBpbml0UmFpbjogZnVuY3Rpb24oKXtcblx0XHRnYW1lLmdsb2JhbC5yYWluU291bmQucGxheSgpO1xuXG5cdCBcdGdTdGF0ZS5lbWl0dGVycy5yYWluRW1pdHRlciA9IG5ldyBSYWluRW1pdHRlcigpO1xuXHRcdGdTdGF0ZS5lbWl0dGVycy5yYWluRW1pdHRlci5zdGFydCgpO1xuXHQgfSxcblxuXHQgdHJhbXBvbGluZVNsaW1lOiBmdW5jdGlvbiggcmVkU2xpbWUgKXtcblx0IFx0cmVkU2xpbWUuYm9keS52ZWxvY2l0eS55IC09IDIwMDtcblx0IFx0Z2FtZS5zb3VuZC5wbGF5KCd0cmFtcG9saW5lX2p1bXAnKTtcblx0IH0sXG5cblx0IHRyYW1wb2xpbmVQbGF5ZXI6IGZ1bmN0aW9uKCl7XG5cdCBcdGdTdGF0ZS5wbGF5ZXIuYm9keS52ZWxvY2l0eS55IC09IDIwMDtcblx0IFx0Z2FtZS5zb3VuZC5wbGF5KCd0cmFtcG9saW5lX2p1bXAnKTtcblx0IH0sXG5cblxufTtcbm1vZHVsZS5leHBvcnRzID0gcGxheVN0YXRlO1xuIiwiaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uL2dhbWVTdGF0ZSdcbmxldCBnID0gbmV3IEdhbWVTdGF0ZSgpLnN0YXRlO1xuZXhwb3J0IGNsYXNzIEFycm93Qm9vc3RlcntcblxuXHRib29zdChhcnJvdyl7XG5cdFx0aWYod2luZG93LmNhbkJvb3N0RmxhZyl7XG5cdFx0XHR2YXIgYm9vc3RUd2VlbiA9IGdhbWUuYWRkLnR3ZWVuKGcucGxheWVyKS50byggeyBhbHBoYTogMCB9LCA1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMTAwMCwgdHJ1ZSk7XG5cblx0XHRcdGdhbWUuc291bmQucGxheSgnZGluZycpXG5cdCBcdFx0d2luZG93LmNhbkJvb3N0RmxhZyA9IGZhbHNlO1xuXHQgXHRcdGFycm93LmtpbGwoKTtcblxuXHQgXHRcdHZhciBsMSA9IGdhbWUuYWRkLnRleHQoZy5wbGF5ZXIueCAtIDgsIGcucGxheWVyLnkgLSAzMCwgJzMhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuXG5cdCBcdFx0dmFyIGwyLCBsMztcblxuXHQgXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0IFx0XHRcdGwxLmtpbGwoKTtcblx0IFx0XHRcdGwyID0gZ2FtZS5hZGQudGV4dChnLnBsYXllci54IC0gOCwgZy5wbGF5ZXIueSAtIDMwLCAnMiEnLFxuICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG5cdFx0XHR9LCAxMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHQgXHRcdFx0bDIua2lsbCgpO1xuXHQgXHRcdFx0bDMgPSBnYW1lLmFkZC50ZXh0KGcucGxheWVyLnggLSA4LCBnLnBsYXllci55IC0gMzAsICcxIScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICcyMHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcblx0XHRcdH0sIDIwMDApO1xuXG5cdFx0IFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdCBcdFx0Ym9vc3RUd2Vlbi5zdG9wKCk7XG5cdCAgICBcdFx0Z2FtZS5hZGQudHdlZW4oZy5wbGF5ZXIpLnRvKCB7IGFscGhhOiAxIH0sIDUwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSk7XG5cblx0XHQgXHRcdGwzLmtpbGwoKTtcblx0XHQgXHRcdGp1aWNlRW1pdHRlcnMuc3Bhd25QbGF5ZXJCb29zdEVtaXR0ZXJzKCk7XG5cblx0XHQgXHRcdHdpbmRvdy5jYW5Cb29zdEZsYWcgPSB0cnVlO1xuXHRcdCBcdFx0Zy5wbGF5ZXIuYm9keS52ZWxvY2l0eS55ID0gLTUwMDtcblx0XHRcdH0sIDMwMDApO1xuXHRcdCB9XG5cdH1cblxufVxuIiwiaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uL2dhbWVTdGF0ZSdcbmxldCBnID0gbmV3IEdhbWVTdGF0ZSgpLnN0YXRlO1xuXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uc0hhbmRsZXJ7XG5cblx0dXBkYXRlKCl7XG5cdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcucGxheWVyLCBnLmVudk9iamVjdHMucGxhdGZvcm1zKTtcblx0XHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5wbGF5ZXIsIGcuZW52T2JqZWN0cy5yaWRlcnMpO1xuXHRcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLnBsYXllciwgZy5lbnZPYmplY3RzLmZhbGxlcnMpO1xuXHRcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLnBsYXllciwgZy5lbnZPYmplY3RzLnRyYW1wb2xpbmVzKTtcblx0XHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5wbGF5ZXIsIGcuZW52T2JqZWN0cy5zbG93RmFsbGVyc2ZhbGxlcnMpO1xuXHRcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLnBsYXllciwgZy5lbnZPYmplY3RzLnN3aXRjaEZhbGxlcnMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbnZPYmplY3RzLnRyYW1wb2xpbmVzLCBnLmVudk9iamVjdHMucGxhdGZvcm1zKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcuZW52T2JqZWN0cy50cmFtcG9saW5lcywgZy5lbnZPYmplY3RzLnRyYW1wb2xpbmVzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcuZW52T2JqZWN0cy5zbG93RmFsbGVyc2ZhbGxlcnMsIGcuZW52T2JqZWN0cy5wbGF0Zm9ybXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbnZPYmplY3RzLnRyYW1wb2xpbmVzLCBnLmVudk9iamVjdHMucGxhdGZvcm1zKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcuZW52T2JqZWN0cy50cmFtcG9saW5lcywgZy5lbnZPYmplY3RzLnN3aXRjaEZhbGxlcnMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbmVtaWVzLnJlZFNsaW1lcywgZy5lbnZPYmplY3RzLmZhbGxlcnMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbmVtaWVzLnJlZFNsaW1lcywgZy5lbnZPYmplY3RzLnRyYW1wb2xpbmVzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcuZW5lbWllcy5yZWRTbGltZXMsIGcuZW52T2JqZWN0cy5zd2l0Y2hGYWxsZXJzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcucGxheWVyLCBnLmVuZW1pZXMucmVkU2xpbWVzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcuZW52T2JqZWN0cy5wbGF0Zm9ybXMsIGcuZW5lbWllcy5yZWRTbGltZXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbmVtaWVzLnJlZFNsaW1lcywgZy5lbnZPYmplY3RzLnNsb3dGYWxsZXJzZmFsbGVycyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLmVudk9iamVjdHMuc2xvd0ZhbGxlcnNmYWxsZXJzLCBnLmVudk9iamVjdHMudHJhbXBvbGluZXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbmVtaWVzLnJlZFNsaW1lcywgZy5lbnZPYmplY3RzLnJpZGVycyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLmVudk9iamVjdHMudHJhbXBvbGluZXMsIGcuZW52T2JqZWN0cy5zd2l0Y2hGYWxsZXJzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcuZW52T2JqZWN0cy5zd2l0Y2hGYWxsZXJzLCBnLmVudk9iamVjdHMuc3dpdGNoRmFsbGVycyk7XG5cdH1cblxufVxuIiwiaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uL2dhbWVTdGF0ZSdcbmxldCBnID0gbmV3IEdhbWVTdGF0ZSgpLnN0YXRlO1xuZXhwb3J0IGNsYXNzIFJhaW5FbWl0dGVye1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuICAgIFx0dGhpcy5lbWl0dGVyID0gZ2FtZS5hZGQuZW1pdHRlcihnYW1lLndvcmxkLmNlbnRlclgsIDAsIDQwMCk7XG4gICAgXHR0aGlzLmluaXRFbWl0dGVyKCk7XG4gIFx0fVxuXG5cdGluaXRFbWl0dGVyKCl7XG4gICAgICAgIHRoaXMuZW1pdHRlci53aWR0aCA9IGdhbWUud29ybGQud2lkdGg7XG4gICAgICAgIHRoaXMuZW1pdHRlci5hbmdsZSA9IC0zO1xuICAgICAgICB0aGlzLmVtaXR0ZXIubWFrZVBhcnRpY2xlcygncmFpbicpO1xuXG5cdFx0dGhpcy5lbWl0dGVyLm1pblBhcnRpY2xlU2NhbGUgPSAwLjE7XG5cdFx0dGhpcy5lbWl0dGVyLm1heFBhcnRpY2xlU2NhbGUgPSAwLjU7XG5cblx0XHR0aGlzLmVtaXR0ZXIuc2V0WVNwZWVkKDMwMCwgNTAwKTtcblx0XHR0aGlzLmVtaXR0ZXIuc2V0WFNwZWVkKC01LCA1KTtcblxuXHRcdHRoaXMuZW1pdHRlci5taW5Sb3RhdGlvbiA9IDA7XG5cdFx0dGhpcy5lbWl0dGVyLm1heFJvdGF0aW9uID0gMDtcblx0fVxuXG5cdHN0YXJ0KCl7XG5cdFx0dGhpcy5lbWl0dGVyLnN0YXJ0KGZhbHNlLCA4MDAsIDUsIDApO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEp1aWNlRW1pdHRlcnN7XG5cblx0c3Bhd25KdW1wRW1pdHRlcnMoKXtcblx0XHR0aGlzLmVtaXR0ZXIxID0gZ2FtZS5hZGQuZW1pdHRlcigwLCAwLCAxMDApO1xuICAgXHRcdHRoaXMuZW1pdHRlcjEubWFrZVBhcnRpY2xlcygncGFydGljbGUnKTtcblx0XHR0aGlzLmVtaXR0ZXIxLmdyYXZpdHkgPSAyMDA7XG5cblx0XHR0aGlzLmVtaXR0ZXIxLnggPSBnLnBsYXllci54O1xuICAgIFx0dGhpcy5lbWl0dGVyMS55ID0gZy5wbGF5ZXIueSArIDU7XG5cdFx0dGhpcy5lbWl0dGVyMS5zdGFydCh0cnVlLCAyMDAwLCBudWxsLCAyMCk7XG5cdH1cblxuXHRzcGF3bktpbGxSZWRTbGltZUVtaXR0ZXJzKHJlZFNsaW1lKXtcblx0XHR0aGlzLmVtaXR0ZXJSZWQgPSBnYW1lLmFkZC5lbWl0dGVyKDAsIDAsIDEwMCk7XG4gICBcdFx0dGhpcy5lbWl0dGVyUmVkLm1ha2VQYXJ0aWNsZXMoJ3JlZC1wYXJ0aWNsZScpO1xuXHRcdHRoaXMuZW1pdHRlclJlZC5ncmF2aXR5ID0gNTA7XG5cdFx0dGhpcy5lbWl0dGVyUmVkLnNldFNjYWxlKDEuMCwgMCwgMS4wLCAwLCAxNTAwKTtcbiAgIFx0XHR0aGlzLmVtaXR0ZXJSZWQueCA9IHJlZFNsaW1lLnggKyAxNTtcbiAgICBcdHRoaXMuZW1pdHRlclJlZC55ID0gcmVkU2xpbWUueSArIDI1O1xuXHRcdHRoaXMuZW1pdHRlclJlZC5zdGFydCh0cnVlLCAzMDAwLCBudWxsLCAyMCk7XG5cdH1cblxuXHRzcGF3blBsYXllckJvb3N0RW1pdHRlcnMoKXtcblx0XHR0aGlzLmVtaXR0ZXIzID0gZ2FtZS5hZGQuZW1pdHRlcigwLCAwLCAxMDApO1xuICAgXHRcdHRoaXMuZW1pdHRlcjMubWFrZVBhcnRpY2xlcygncGFydGljbGUyJyk7XG5cdFx0dGhpcy5lbWl0dGVyMy5ncmF2aXR5ID0gNTA7XG5cdFx0dGhpcy5lbWl0dGVyMy5zZXRTY2FsZSgxLjAsIDAsIDEuMCwgMCwgMjAwMCk7XG5cbiAgXHRcdHRoaXMuZW1pdHRlcjMueCA9IGcucGxheWVyLng7XG4gICAgXHR0aGlzLmVtaXR0ZXIzLnkgPSBnLnBsYXllci55O1xuXHRcdHRoaXMuZW1pdHRlcjMuc3RhcnQodHJ1ZSwgNTAwMCwgbnVsbCwgNTAwKTtcblx0fVxuXG4gIFx0c3Bhd25QbGF5ZXJLaWxsRW1pdHRlcnMoKXtcbiAgXHRcdHRoaXMuZW1pdHRlcjIgPSBnYW1lLmFkZC5lbWl0dGVyKDAsIDAsIDEwMCk7XG4gICBcdFx0dGhpcy5lbWl0dGVyMi5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZTInKTtcblx0XHR0aGlzLmVtaXR0ZXIyLmdyYXZpdHkgPSA1MDtcblx0XHR0aGlzLmVtaXR0ZXIyLnNldFNjYWxlKDEuMCwgMCwgMS4wLCAwLCAyMDAwKTtcblxuICBcdFx0dGhpcy5lbWl0dGVyMi54ID0gZy5wbGF5ZXIueCArIDE1O1xuICAgIFx0dGhpcy5lbWl0dGVyMi55ID0gZy5wbGF5ZXIueSArIDI1O1xuXHRcdHRoaXMuZW1pdHRlcjIuc3RhcnQodHJ1ZSwgNjAwLCBudWxsLCA2MDApO1xuICBcdH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUbnRIYW5kbGVye1xuXG5cdGV4cGxvZGUodG50KXtcblx0XHRpZih3aW5kb3cuY2FuVG50RXhwbG9kZSl7XG5cdFx0XHRnYW1lLmFkZC50d2Vlbih0bnQpLnRvKCB7IGFscGhhOiAwIH0sIDcwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMTAwMCwgdHJ1ZSk7XG5cdCBcdFx0Z2FtZS5zb3VuZC5wbGF5KCd0bnQnKVxuXHQgXHRcdHdpbmRvdy5jYW5UbnRFeHBsb2RlID0gZmFsc2U7XG5cdCBcdFx0dmFyIGwxID0gZ2FtZS5hZGQudGV4dCh0bnQueCArIDExLCB0bnQueSAtIDMwLCAnMyEnLFxuICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG5cblx0IFx0XHR2YXIgbDIsIGwzO1xuXG5cdCBcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHQgXHRcdFx0bDEua2lsbCgpO1xuXHQgXHRcdFx0bDIgPSBnYW1lLmFkZC50ZXh0KHRudC54ICsgMTEsIHRudC55IC0gMzAsICcyIScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICcyMHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcblx0XHRcdH0sIDEwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdCBcdFx0XHRsMi5raWxsKCk7XG5cdCBcdFx0XHRsMyA9IGdhbWUuYWRkLnRleHQodG50LnggKyAxMSwgdG50LnkgLSAzMCwgJzEhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuXHRcdFx0fSwgMjAwMCk7XG5cblx0XHQgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0IFx0XHRnYW1lLmNhbWVyYS5zaGFrZSgwLjA0LCAyMDAwLCB0cnVlKTtcblx0XHQgXHRcdGwzLmtpbGwoKTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0IFx0XHRcdHRudC5raWxsKCk7XG5cdFx0XHRcdH0sIDEwMDApO1xuXG5cdFx0IFx0XHRzd2l0Y2hGYWxsZXJzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIFx0XHRcdGl0ZW0uYm9keS5pbW1vdmFibGUgPSBmYWxzZTtcblx0XHRcdFx0fSwgdGhpcyk7XG5cblx0XHRcdH0sIDMwMDApO1xuXHRcdCB9XG5cdH1cblxufVxuIl19
