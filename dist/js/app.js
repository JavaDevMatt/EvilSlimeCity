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
			game.physics.arcade.collide(g.player, g.envObjects.slowFallers);
			game.physics.arcade.collide(g.player, g.envObjects.switchFallers);
			game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.platforms);
			game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.trampolines);
			game.physics.arcade.collide(g.envObjects.slowFallers, g.envObjects.platforms);
			game.physics.arcade.collide(g.envObjects.tnt, g.envObjects.platforms);
			game.physics.arcade.collide(g.envObjects.tnt, g.envObjects.switchFallers);
			game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.fallers);
			game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.trampolines);
			game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.switchFallers);
			game.physics.arcade.collide(g.player, g.enemies.redSlimes);
			game.physics.arcade.collide(g.envObjects.platforms, g.enemies.redSlimes);
			game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.slowFallers);
			game.physics.arcade.collide(g.envObjects.slowFallers, g.envObjects.trampolines);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImpzL2dhbWUuanMiLCJqcy9nYW1lU3RhdGUuanMiLCJqcy9sZXZlbHMvbGV2ZWwwMS5qcyIsImpzL2xldmVscy9sZXZlbDAyLmpzIiwianMvbGV2ZWxzL2xldmVsMDMuanMiLCJqcy9zdGF0ZXMvaW5pdC5qcyIsImpzL3N0YXRlcy9tZW51LmpzIiwianMvc3RhdGVzL3BsYXkuanMiLCJqcy91dGlscy9ib29zdGVyLmpzIiwianMvdXRpbHMvY29sbGlzaW9ucy5qcyIsImpzL3V0aWxzL2VtaXR0ZXJzLmpzIiwianMvdXRpbHMvdG50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFTLGNBQVQ7Ozs7O0FDQUEsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFYLENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLE9BQU8sSUFBakMsRUFBdUMsU0FBdkMsQ0FBWDtBQUFBLElBQ0ksWUFBWSxRQUFTLGVBQVQsQ0FEaEI7QUFBQSxJQUVJLFlBQVksUUFBUyxlQUFULENBRmhCO0FBQUEsSUFHSSxZQUFZLFFBQVMsZUFBVCxDQUhoQjs7QUFLQSxLQUFLLE1BQUwsR0FBYztBQUNiLGFBQVksQ0FEQztBQUViLFNBQVEsSUFGSztBQUdiLGFBQVk7QUFIQyxDQUFkO0FBS0E7QUFDQSxPQUFPLElBQVAsR0FBYyxJQUFkO0FBQ0EsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE1BQWYsRUFBdUIsU0FBdkI7QUFDQSxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsTUFBZixFQUF1QixTQUF2QjtBQUNBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLFNBQXZCOztBQUVBLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakI7Ozs7Ozs7Ozs7O0FDaEJBLElBQUksZUFBZTtBQUNsQixTQUFRLEVBRFU7QUFFbEIsVUFBUztBQUNSLGFBQVc7QUFE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SSxDQUFKLEdBQVEsRUFBdEIsRUFBMEIsSUFBSSxDQUFKLEdBQVEsRUFBbEMsRUFBc0MsSUFBdEMsRUFDTSxFQUFDLE1BQU0sY0FBUCxFQUF1QixNQUFNLE1BQTdCLEVBRE4sQ0FBTDtBQUVELEtBSkQsRUFJRyxJQUpIOztBQU1DLGVBQVcsWUFBVTtBQUNwQixVQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLElBQTlCO0FBQ0EsUUFBRyxJQUFIOztBQUVELGdCQUFXLFlBQVU7QUFDbkIsVUFBSSxJQUFKO0FBQ0QsTUFGRCxFQUVHLElBRkg7O0FBSUMsbUJBQWMsWUFBZCxDQUEyQixVQUFTLElBQVQsRUFBZTtBQUNwQyxXQUFLLElBQUwsQ0FBVSxTQUFWLEdBQXNCLEtBQXRCO0FBQ04sTUFGQSxFQUVFLElBRkY7QUFJRCxLQVpBLEVBWUUsSUFaRjtBQWFBO0FBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZSAoXCIuL2pzL2dhbWUuanNcIik7XG4iLCJ2YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg2NDAsIDM3NiwgUGhhc2VyLkFVVE8sICdnYW1lRGl2JyksXG4gICAgaW5pdFN0YXRlID0gcmVxdWlyZSggJy4vc3RhdGVzL2luaXQnICksXG4gICAgcGxheVN0YXRlID0gcmVxdWlyZSggJy4vc3RhdGVzL3BsYXknICksXG4gICAgbWVudVN0YXRlID0gcmVxdWlyZSggJy4vc3RhdGVzL21lbnUnICk7XG5cbmdhbWUuZ2xvYmFsID0ge1xuIGdhbWVMZXZlbCA6IDAsXG4gbXVzaWMgOiBudWxsLFxuIHJhaW5Tb3VuZCA6IG51bGxcbn1cbi8vbWFrZSB0aGUgZ2FtZSBhIGdsb2JhbCBvYmplY3RcbndpbmRvdy5nYW1lID0gZ2FtZTtcbmdhbWUuc3RhdGUuYWRkKCdpbml0JywgaW5pdFN0YXRlKTtcbmdhbWUuc3RhdGUuYWRkKCdtZW51JywgbWVudVN0YXRlKTtcbmdhbWUuc3RhdGUuYWRkKCdwbGF5JywgcGxheVN0YXRlKTtcblxuZ2FtZS5zdGF0ZS5zdGFydCgnaW5pdCcpO1xuIiwibGV0IGRlZmF1bHRTdGF0ZSA9IHtcblx0cGxheWVyOiB7fSxcblx0ZW5lbWllczoge1xuXHRcdHJlZFNsaW1lczogW11cblx0fSxcblx0ZW1pdHRlcnM6IHtcblx0XHRqdWljZUVtaXR0ZXJzOiBbXSxcblx0XHRyYWluRW1pdHRlcjoge31cblx0fSxcblx0ZW52T2JqZWN0czoge1xuXHRcdHRudDoge30sXG5cdFx0bGF2YToge30sXG5cdFx0dHJhbXBvbGluZXM6IHt9LFxuXHRcdHBsYXRmb3Jtczoge30sXG5cdFx0cmlkZXJzOiB7fSxcblx0XHRmYWxsZXJzOiB7fSxcblx0XHRhcnJvd3M6IHt9LFxuXHRcdHN3aXRjaEZhbGxlcnM6IHt9LFxuXHRcdGN1cnNvcnM6IHt9XG5cdH0sXG5cdGZsYWdzOiB7XG5cdFx0Y2FuQm9vc3RGbGFnIDogdHJ1ZSxcblx0XHRjYW5UbnRFeHBsb2RlIDogdHJ1ZSxcblx0XHRpc1BsYXllckRlYWQgOiBmYWxzZSxcblx0XHRoYXNQbGF5ZXJXb24gOiBmYWxzZVxuXHR9XG59XG5sZXQgaW5zdGFuY2UgPSBudWxsO1xuXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiggIWluc3RhbmNlICkge1xuICAgICAgICBpbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGluc3RhbmNlLnN0YXRlID0gZGVmYXVsdFN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uL2dhbWVTdGF0ZSdcbmxldCBnU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCkuc3RhdGU7XG4vL3NldCBsb2NhbCBwb2ludGVycztcblxuZXhwb3J0IGNsYXNzIExldmVsMXtcblxuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1ggPSAxMDtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1kgPSAxMDtcbiBcdCB9XG5cbiBcdCBhZGRTdGFydGluZ1RleHQoKXtcbiAgICAgICAgICAgICAgICB2YXIgbG9hZGluZ0xhYmVsID0gZ2FtZS5hZGQudGV4dCg4MCwgMjc4LCAnS2lsbCB0aGUgZXZpbCBzbGltZSEgICAtLT4nLCB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdMYWJlbC5raWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgfVxuXG4gXHQgY3JlYXRlQmFja2dyb3VuZCgpe1xuIFx0IFx0Z2FtZS53b3JsZC5zZXRCb3VuZHMoMCwgMCwgODg1LCAzNzYpO1xuXG4gXHQgXHRnYW1lLmFkZC5zcHJpdGUoMCwgMCwgJ2dhbWUtYmFja2dyb3VuZCcpO1xuXHQgXHRnYW1lLmFkZC5zcHJpdGUoNjQwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG4gXHQgfVxuXG4gXHQgYWRkUGxhdGZvcm1zKCl7XG4gXHQgXHRnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDAsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoMTk3LCAzMDAsICdwbGF0Zm9ybTInKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSg1MDYsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoNjQ2LCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDY0NiwgMTEyLCAndG93ZXIxJyk7XG4gXHQgfVxuXG4gICAgIGFkZEFycm93cyhhcnJvd3Mpe1xuICAgICB9XG5cbiBcdCBhZGRSZWRTbGltZXMoKXtcbiAgICAgICAgZ1N0YXRlLmVuZW1pZXMucmVkU2xpbWVzLmNyZWF0ZSg2NzAsIDEwLCAnbW9uc3RlcjInKTtcbiAgICAgfVxuXG4gXHQgYWRkRmFsbGVycygpe1xuIFx0IFx0Z1N0YXRlLmVudk9iamVjdHMuZmFsbGVycy5jcmVhdGUoMzQwLCAyODIsICdmYWxsZXInKTtcbiBcdCB9XG5cbiBcdCBhZGRTbG93RmFsbGVycygpe1xuICAgICB9XG5cbiBcdCBhZGRUcmFtcG9saW5lcygpe1xuIFx0IFx0Z1N0YXRlLmVudk9iamVjdHMudHJhbXBvbGluZXMuY3JlYXRlKDYwMCwgMjcwLCAndHJhbXBvbGluZScpO1xuIFx0IH1cblxuIFx0IGFkZExhdmEoKXtcbiBcdCBcdGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuY3JlYXRlKDE0MSwgMzMyLCAnbGF2YScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5sYXZhLmNyZWF0ZSgyNTQsIDMzMiwgJ2xhdmEyJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuY3JlYXRlKDcwMCwgMzMyLCAnbGF2YTInKTtcbiBcdCB9XG5cbiAgICAgYWRkU3dpdGNoRmFsbGVycygpe1xuICAgICB9XG5cbiBcdCBhZGRFbmRpbmdUZXh0KCl7XG4gICAgICAgIGdhbWUuYWRkLnRleHQoZ1N0YXRlLnBsYXllci54IC0gMjAwLCAxMDAsICdHcmVhdCEnLFxuICAgICAgICAgICAgICAgIHtmb250OiAnNDBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgICAgICAgICAgICAgZ2FtZS5hZGQudGV4dChnU3RhdGUucGxheWVyLnggLSAyMDAsIDEzNiwgJ1RpbWUgZm9yIHRoZSBuZXh0IG9uZS4uLi4nLFxuICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgfVxuXG4gICAgYWRkVG50KCl7XG4gICAgfVxuXG4gICAgYWRkUmlkZXJzKCl7XG4gICAgfVxuXG4gICAgaGFuZGxlUmlkZXJzTG9naWMoKXtcbiAgICB9XG5cbiAgICBjaGVja0ZvckNvb2xLaWxsVGV4dCgpe1xuICAgICB9XG5cblxufVxuIiwiaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uL2dhbWVTdGF0ZSdcbmxldCBnU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCkuc3RhdGU7XG5leHBvcnQgY2xhc3MgTGV2ZWwye1xuXG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHQgXHR0aGlzLnBsYXllclN0YXJ0aW5nWCA9IDEwO1xuXHQgXHR0aGlzLnBsYXllclN0YXJ0aW5nWSA9IDEwO1xuIFx0IH1cblxuIFx0IGFkZFN0YXJ0aW5nVGV4dCgpe1xuICAgICAgICAgICAgICAgIHZhciBsZXZlbExhYmVsID0gZ2FtZS5hZGQudGV4dCgxMTAsIDI3OCwgJ0tpbGwgMiByZWQgZXZpbCBzbGltZXMhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxMYWJlbC5raWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgYWRkRW5kaW5nVGV4dCgpe1xuICAgICAgICBnYW1lLmFkZC50ZXh0KGdTdGF0ZS5wbGF5ZXIueCAtIDIwMCwgMTAwLCAnTmljZSEnLFxuICAgICAgICAgICAgICAgIHtmb250OiAnNDBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgICAgICAgICAgICAgZ2FtZS5hZGQudGV4dChnU3RhdGUucGxheWVyLnggLSAyMDAsIDEzNiwgJ0dldCByZWFkeSBmb3IgbW9yZS4uLicsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICcyMHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcbiAgICB9XG5cbiBcdCBjcmVhdGVCYWNrZ3JvdW5kKCl7XG4gICAgICAgIGdhbWUud29ybGQuc2V0Qm91bmRzKDAsIDAsIDE3MDUsIDM3Nik7XG5cbiAgICAgICAgZ2FtZS5hZGQuc3ByaXRlKDAsIDAsICdnYW1lLWJhY2tncm91bmQnKTtcbiAgICAgICAgZ2FtZS5hZGQuc3ByaXRlKDY0MCwgMCwgJ2dhbWUtYmFja2dyb3VuZCcpO1xuICAgICAgICBnYW1lLmFkZC5zcHJpdGUoMTI4MCwgMCwgJ2dhbWUtYmFja2dyb3VuZCcpO1xuICAgICB9XG5cbiAgICAgYWRkUGxhdGZvcm1zKCl7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoNzU0LCAxNzIsICd0b3dlcjEnKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSg4ODcsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoMTAyOCwgMzAwLCAncGxhdGZvcm0nKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSgxMTY5LCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDExNjksIDI3MiwgJ3Rvd2VyMScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDEzMTAsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnBsYXRmb3Jtcy5jcmVhdGUoMTQ1MSwgMzAwLCAncGxhdGZvcm0nKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSgxNDEwLCAxMTIsICd0b3dlcjEnKTtcbiAgICAgfVxuXG4gICAgYWRkQXJyb3dzKCBhcnJvd3MgKXtcbiAgICAgICAgYXJyb3dzLmNyZWF0ZSgxMjMwLCAyNDAsICdhcnJvdycpO1xuICAgICB9XG5cbiBcdCBhZGRSZWRTbGltZXMoKXtcbiAgICAgICAgZ1N0YXRlLmVuZW1pZXMucmVkU2xpbWVzLmNyZWF0ZSgxNDcwLCAxMCwgJ21vbnN0ZXIyJyk7XG4gICAgICAgIGdTdGF0ZS5lbmVtaWVzLnJlZFNsaW1lcy5jcmVhdGUoMzkwLCA3MCwgJ21vbnN0ZXIyJyk7XG4gICAgIH1cblxuIFx0IGFkZEZhbGxlcnMoKXtcbiBcdCB9XG5cbiBcdCBhZGRUcmFtcG9saW5lcyggdHJhbXBvbGluZXMpe1xuICAgICAgICB0cmFtcG9saW5lcy5jcmVhdGUoNTAsIDI3MCwgJ3RyYW1wb2xpbmUnKTtcbiAgICAgICAgdHJhbXBvbGluZXMuY3JlYXRlKDkwMCwgMjcwLCAndHJhbXBvbGluZScpO1xuICAgICB9XG5cbiAgICAgYWRkU2xvd0ZhbGxlcnMoKXtcbiAgICAgICAgICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5zbG93RmFsbGVycy5jcmVhdGUoMjAsIDI4MiwgJ2ZhbGxlcicpO1xuICAgICB9XG5cblxuIFx0IGFkZExhdmEoKXtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMubGF2YS5jcmVhdGUoMCwgMzMyLCAnbGF2YTInKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMubGF2YS5jcmVhdGUoMjUyLCAzMzIsICdsYXZhMicpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5sYXZhLmNyZWF0ZSg1MDIsIDMzMiwgJ2xhdmEyJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuY3JlYXRlKDc1NCwgMzMyLCAnbGF2YTInKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMubGF2YS5jcmVhdGUoMTUxMCwgMzUyLCAnbGF2YTInKTtcbiBcdCB9XG5cbiAgICAgYWRkUmlkZXJzKCl7XG4gICAgICAgIHRoaXMucmlkZXIxID0gZ1N0YXRlLmVudk9iamVjdHMucmlkZXJzLmNyZWF0ZSg0OTAsIDIwMCwgJ2ZhbGxlcicpO1xuICAgICB9XG5cbiAgICAgYWRkU3dpdGNoRmFsbGVycygpe1xuXHQgfVxuXG4gICAgIGFkZFRudCgpe1xuICAgICB9XG5cbiAgICAgaGFuZGxlUmlkZXJzTG9naWMoKXtcbiAgICAgICAgaWYodGhpcy5yaWRlcjEueCA+IDY1MCl7XG4gICAgICAgICAgICB0aGlzLnJpZGVyMS5ib2R5LnZlbG9jaXR5LnggPSAtMTAwO1xuICAgICAgICB9XG4gICAgIH1cblxuICAgICBjaGVja0ZvckNvb2xLaWxsVGV4dCgpe1xuICAgICAgICBpZiggZ1N0YXRlLmVuZW1pZXMucmVkU2xpbWVzLmNvdW50TGl2aW5nKCkgPT0gMSApe1xuICAgICAgICAgICAgICAgIHZhciBpbmZvTGFiZWwgPSBnYW1lLmFkZC50ZXh0KDMxMCwgMjc4LCAnT25lIG1vcmUhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb0xhYmVsLmtpbGwoKTtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuLi9nYW1lU3RhdGUnXG5sZXQgZ1N0YXRlID0gbmV3IEdhbWVTdGF0ZSgpLnN0YXRlO1xuZXhwb3J0IGNsYXNzIExldmVsM3tcblxuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1ggPSAxMDtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1kgPSAxMDtcbiBcdCB9XG5cbiBcdCBhZGRTdGFydGluZ1RleHQoKXtcbiAgICAgICAgICAgICAgICB2YXIgbGV2ZWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgJ1RpbWUgdG8gYmxvdyBzb21lIHNoaXQgdXAhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxMYWJlbC5raWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgYWRkRW5kaW5nVGV4dCgpe1xuICAgICAgICBnYW1lLmFkZC50ZXh0KDIwMCwgMTAwLCAnU3Vydml2ZWQhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzQwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIGdhbWUuYWRkLnRleHQoMjAwLCAxMzYsICdZb3UgbHVja3kgc29uIG9mIGEgc2xpbWUhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgIH1cblxuIFx0IGNyZWF0ZUJhY2tncm91bmQoKXtcbiAgICAgICAgZ2FtZS53b3JsZC5zZXRCb3VuZHMoMCwgMCwgNjQwLCAzNzYpO1xuXG4gICAgICAgIGdhbWUuYWRkLnNwcml0ZSgwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG4gICAgIH1cblxuICAgICBhZGRwbGF0Zm9ybXMoKXtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSgwLCAxMTIsICd0b3dlcjEnKTtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMucGxhdGZvcm1zLmNyZWF0ZSgxLCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5wbGF0Zm9ybXMuY3JlYXRlKDQyMSwgMjg5LCAnZmFsbGVyJyk7XG4gICAgIH1cblxuICAgIGFkZEFycm93cyggYXJyb3dzKXtcbiAgICAgfVxuXG4gXHQgYWRkcmVkU2xpbWVzKCl7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnJlZFNsaW1lcy5jcmVhdGUoMzUwLCAxMCwgJ21vbnN0ZXIyJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnJlZFNsaW1lcy5jcmVhdGUoNTYwLCAxMCwgJ21vbnN0ZXIyJyk7XG4gICAgIH1cblxuIFx0IGFkZEZhbGxlcnMoKXtcbiBcdCB9XG5cbiBcdCBhZGRUcmFtcG9saW5lcyggdHJhbXBvbGluZXMpe1xuICAgICAgICAgdHJhbXBvbGluZXMuY3JlYXRlKDE2MCwgMTAsICd0cmFtcG9saW5lJyk7XG4gICAgIH1cblxuICAgICBhZGRTbG93RmFsbGVycygpe1xuICAgICB9XG5cblxuIFx0IGFkZExhdmEoKXtcbiAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMubGF2YS5jcmVhdGUoMTQyLCAzMzIsICdsYXZhJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuY3JlYXRlKDE5OCwgMzMyLCAnbGF2YScpO1xuICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5sYXZhLmNyZWF0ZSgyNTQsIDMzMiwgJ2xhdmEyJyk7XG4gICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEuY3JlYXRlKDUwNiwgMzMyLCAnbGF2YTInKTtcbiBcdCB9XG5cbiAgICAgYWRkU3dpdGNoRmFsbGVycygpe1xuXHRcdCBnU3RhdGUuZW52T2JqZWN0cy5zd2l0Y2hGYWxsZXJzLmNyZWF0ZSgxMzYsIDI0MiwgJ2ZhbGxlcicpO1xuICAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMuc3dpdGNoRmFsbGVycy5jcmVhdGUoMzMwLCAxMTIsICdmYWxsZXInKTtcblxuICAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMuc3dpdGNoRmFsbGVycy5jcmVhdGUoMjA4LCAyNDIsICdwbGF0Zm9ybScpO1xuICAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMuc3dpdGNoRmFsbGVycy5jcmVhdGUoMzQ5LCAyODksICdmYWxsZXInKTtcbiAgICAgICAgIGdTdGF0ZS5lbnZPYmplY3RzLnN3aXRjaEZhbGxlcnMuY3JlYXRlKDQ5MywgMjg5LCAnZmFsbGVyJyk7XG4gICAgICAgICBnU3RhdGUuZW52T2JqZWN0cy5zd2l0Y2hGYWxsZXJzLmNyZWF0ZSg1NjUsIDI4OSwgJ2ZhbGxlcicpO1xuICAgICAgICAgZ1N0YXRlLmVudk9iamVjdHMuc3dpdGNoRmFsbGVycy5jcmVhdGUoNTMwLCAzMiwgJ3Rvd2VyMScpO1xuICAgICB9XG5cbiAgICAgYWRkUmlkZXJzKCl7XG4gICAgIH1cblxuICAgICBhZGRUbnQoKXtcbiAgICAgICAgdG50ID0gZ2FtZS5hZGQuc3ByaXRlKDM2MCwgMTUwLCAndG50Jyk7XG4gICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRudCk7XG4gICAgICAgIHRudC5ib2R5LmJvdW5jZS55ID0gMC4yO1xuICAgICAgICB0bnQuYm9keS5ncmF2aXR5LnkgPSAzMDA7XG4gICAgICAgIHRudC5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgIH1cblxuICAgICBoYW5kbGVSaWRlcnNMb2dpYygpe1xuICAgICB9XG5cbiAgICAgY2hlY2tGb3JDb29sS2lsbFRleHQoKXtcbiAgICB9XG5cbn1cbiIsInZhciBpbml0U3RhdGUgPSB7XG5cblx0cHJlbG9hZDogZnVuY3Rpb24oKXtcblxuXHRcdHZhciBsb2FkaW5nTGFiZWwgPSBnYW1lLmFkZC50ZXh0KDIwLCAxNTAsICdsb2FkaW5nIGdhbWUgZGF0YS4uLicsXG5cdFx0XHR7Zm9udDogJzQwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuXG5cdFx0Z2FtZS5sb2FkLmF1ZGlvKCdtdXNpYycsICdhc3NldHMvc291bmQvbXVzaWMubXAzJyk7IC8vIGh0dHA6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9yaXNlLW9mLXNwaXJpdFxuXHRcdGdhbWUubG9hZC5hdWRpbygnanVtcCcsICdhc3NldHMvc291bmQvanVtcC5tcDMnKTtcblx0XHRnYW1lLmxvYWQuYXVkaW8oJ3RyYW1wb2xpbmVfanVtcCcsICdhc3NldHMvc291bmQvdHJhbXBvbGluZV9qdW1wLm1wMycpOyAvLyBodHRwOi8vZnJlZXNvdW5kLm9yZy9wZW9wbGUvYXJ0ZWZmZWN0L3NvdW5kcy8zNDk4NTQvXG5cblx0XHRnYW1lLmxvYWQuYXVkaW8oJ3NwbGFzaC1kZWF0aCcsICdhc3NldHMvc291bmQvc3BsYXNoLWRlYXRoLm1wMycpOyAvLyBodHRwOi8vZnJlZXNvdW5kLm9yZy9wZW9wbGUvU2V0dW5pbWFuL3NvdW5kcy8xMzU3NzQvXG5cdFx0Z2FtZS5sb2FkLmF1ZGlvKCdyYWluJywgJ2Fzc2V0cy9zb3VuZC9yYWluLm1wMycpOyAvLyBodHRwOi8vZnJlZXNvdW5kLm9yZy9wZW9wbGUvam1icGhpbG1lcy9zb3VuZHMvMjAwMjcyL1xuXHRcdGdhbWUubG9hZC5hdWRpbygnZGluZycsICdhc3NldHMvc291bmQvZGluZy5tcDMnKTsgLy8gaHR0cDovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL2dsb3JpYWVmZmVjdC9zb3VuZHMvMTA4NDI4L1xuXHRcdGdhbWUubG9hZC5hdWRpbygndG50JywgJ2Fzc2V0cy9zb3VuZC90bnQubXAzJyk7IC8vIGh0dHA6Ly9mcmVlc291bmQub3JnL3Blb3BsZS9yeWFuc25vb2svc291bmRzLzExMDExMS9cblx0XHQvLyBodHRwOi8vZnJlZXNvdW5kLm9yZy9wZW9wbGUvdGhlbmVlZGxlLnR2L3NvdW5kcy8zMTY2ODIvXG5cblxuXHRcdGdhbWUubG9hZC5pbWFnZSgnbWVudS1iYWNrZ3JvdW5kJywgJ2Fzc2V0cy9pbWcvbWVudS1iYWNrZ3JvdW5kLnBuZycpOyAvLyBodHRwOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaW5kdXN0cmlhbC1wYXJhbGxheC1iYWNrZ3JvdW5kXG5cdFx0Z2FtZS5sb2FkLmltYWdlKCdnYW1lLWJhY2tncm91bmQnLCAnYXNzZXRzL2ltZy9nYW1lLWJhY2tncm91bmQucG5nJyk7IC8vIGh0dHA6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9pbmR1c3RyaWFsLXBhcmFsbGF4LWJhY2tncm91bmRcblx0ICAgIGdhbWUubG9hZC5pbWFnZSgncGxhdGZvcm0nLCAnYXNzZXRzL2ltZy9wbGF0Zm9ybS5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3BsYXRmb3JtMicsICdhc3NldHMvaW1nL3BsYXRmb3JtMi5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3Rvd2VyMScsICdhc3NldHMvaW1nL3Rvd2VyMS5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ2ZhbGxlcicsICdhc3NldHMvaW1nL2ZhbGxlci5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3RyYW1wb2xpbmUnLCAnYXNzZXRzL2ltZy90cmFtcG9saW5lLnBuZycpO1xuXHRcdGdhbWUubG9hZC5pbWFnZSgnYXJyb3cnLCAnYXNzZXRzL2ltZy9hcnJvdy5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3RudCcsICdhc3NldHMvaW1nL3RudC5wbmcnKTtcblx0XHRnYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2xhdmEnLCAnYXNzZXRzL2ltZy9sYXZhLnBuZycsIDU2LCAzMik7XG5cdFx0Z2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdsYXZhMicsICdhc3NldHMvaW1nL2xhdmEyLnBuZycsIDI1MiwgMzIpO1xuXG5cdFx0Z2FtZS5sb2FkLmltYWdlKCdwYXJ0aWNsZScsICdhc3NldHMvaW1nL3BhcnRpY2xlLnBuZycpO1xuXHRcdGdhbWUubG9hZC5pbWFnZSgncGFydGljbGUyJywgJ2Fzc2V0cy9pbWcvcGFydGljbGUyLnBuZycpO1xuXHRcdGdhbWUubG9hZC5pbWFnZSgncmVkLXBhcnRpY2xlJywgJ2Fzc2V0cy9pbWcvcGFydGljbGUtcmVkLnBuZycpO1xuXHRcdGdhbWUubG9hZC5pbWFnZSgncmFpbicsICdhc3NldHMvaW1nL3JhaW4ucG5nJyk7XG5cblx0XHRnYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ21vbnN0ZXIxJywgJ2Fzc2V0cy9pbWcvbW9uc3RlcjEucG5nJywgMzAsIDIzKTsgLy8gaHR0cDovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3NjaWZpLWNyZWF0dXJlLXRpbGVzZXQtbWluaS0zMngzMi1zY2lmaS1jcmVhdHVyZS1pY29uc1xuXHRcdGdhbWUubG9hZC5zcHJpdGVzaGVldCgnbW9uc3RlcjInLCAnYXNzZXRzL2ltZy9tb25zdGVyMi5wbmcnLCAzMCwgMjMpOyAvLyBodHRwOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvc2NpZmktY3JlYXR1cmUtdGlsZXNldC1taW5pLTMyeDMyLXNjaWZpLWNyZWF0dXJlLWljb25zXG5cblxuXG5cdH0sXG5cblx0aW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdGdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuXHRcdGdhbWUuZ2xvYmFsLm11c2ljID0gZ2FtZS5hZGQuYXVkaW8oJ211c2ljJywxLHRydWUpO1xuXHRcdGdhbWUuZ2xvYmFsLnJhaW5Tb3VuZCA9IGdhbWUuYWRkLmF1ZGlvKCdyYWluJywxLHRydWUpO1xuXG5cdFx0Ly8gcGxheWluZyBhcm91bmQgd2l0aCBzY2FsaW5nIG9uIG1vYmlsZVxuXHRcdGlmICghZ2FtZS5kZXZpY2UuZGVza3RvcCl7XG5cdFx0XHR0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcbiAgICBcdFx0dGhpcy5nYW1lLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgXHRcdHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cblxuXHRjcmVhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXG5cdFx0Z2FtZS5zdGF0ZS5zdGFydCgnbWVudScpO1xuXHR9XG5cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGluaXRTdGF0ZTtcbiIsInZhciBtb25zdGVyMSwgbW9uc3RlcjI7XG52YXIgbWVudVN0YXRlID0ge1xuXG5cdGNyZWF0ZTogZnVuY3Rpb24oKSB7XG5cblx0XHRnYW1lLmdsb2JhbC5tdXNpYy5wbGF5KCk7XG5cdFx0Z2FtZS5nbG9iYWwubXVzaWMudm9sdW1lID0gMS4wXG5cblxuXHRcdGdhbWUuYWRkLnNwcml0ZSgwLCAwLCAnbWVudS1iYWNrZ3JvdW5kJyk7XG5cblx0XHRtb25zdGVyMSA9IGdhbWUuYWRkLnNwcml0ZSgxNjAsIGdhbWUud29ybGQuaGVpZ2h0LTYwLCAnbW9uc3RlcjEnKTtcblx0XHRtb25zdGVyMS5hbmltYXRpb25zLmFkZCgnc3RhbmQnLCBbMCwgMSwgMl0sIDUsIHRydWUpO1xuXG5cdFx0bW9uc3RlcjIgPSBnYW1lLmFkZC5zcHJpdGUoNDMwLCBnYW1lLndvcmxkLmhlaWdodC02MCwgJ21vbnN0ZXIxJyk7XG5cdFx0bW9uc3RlcjIuYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgWzAsIDEsIDJdLCA1LCB0cnVlKTtcblxuXHRcdGlmICghZ2FtZS5kZXZpY2UuZGVza3RvcCl7XG5cdFx0XHR2YXIgc3RhcnRMYWJlbCA9IGdhbWUuYWRkLnRleHQoMjAwLCBnYW1lLndvcmxkLmhlaWdodC02MCwgJ1RhcCBzY3JlZW4gdG8gc3RhcnQnLCB7Zm9udDogJzI1cHggQXJpYWwnLCBmaWxsOiAnI2ZmZmZmZid9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHN0YXJ0TGFiZWwgPSBnYW1lLmFkZC50ZXh0KDIwMCwgZ2FtZS53b3JsZC5oZWlnaHQtNjAsICdQcmVzcyBTcGFjZSB0byBzdGFydCcse2ZvbnQ6ICcyNXB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnfSk7XG5cdFx0fVxuXG5cblx0XHR2YXIgc3BhY2VLZXkgPSBnYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIpO1xuXHRcdHNwYWNlS2V5Lm9uRG93bi5hZGRPbmNlKHRoaXMuc3RhcnRHYW1lLCB0aGlzKTtcblx0fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdG1vbnN0ZXIxLmFuaW1hdGlvbnMucGxheSgnc3RhbmQnKTtcblx0XHRtb25zdGVyMi5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJyk7XG5cdH0sXG5cblx0c3RhcnRHYW1lOiBmdW5jdGlvbigpe1xuXHRcdGdhbWUuZ2xvYmFsLm11c2ljLnZvbHVtZSA9IDAuMztcblxuXHRcdGdhbWUuc3RhdGUuc3RhcnQoJ3BsYXknKTtcblx0fSxcblxufTtcbm1vZHVsZS5leHBvcnRzID0gbWVudVN0YXRlO1xuIiwiaW1wb3J0IHtMZXZlbDF9IGZyb20gJy4uL2xldmVscy9sZXZlbDAxJ1xuaW1wb3J0IHtMZXZlbDJ9IGZyb20gJy4uL2xldmVscy9sZXZlbDAyJ1xuaW1wb3J0IHtMZXZlbDN9IGZyb20gJy4uL2xldmVscy9sZXZlbDAzJ1xuaW1wb3J0IHtBcnJvd0Jvb3N0ZXJ9IGZyb20gJy4uL3V0aWxzL2Jvb3N0ZXInXG5pbXBvcnQge0NvbGxpc2lvbnNIYW5kbGVyfSBmcm9tICcuLi91dGlscy9jb2xsaXNpb25zJ1xuaW1wb3J0IHtSYWluRW1pdHRlciwgSnVpY2VFbWl0dGVyc30gZnJvbSAnLi4vdXRpbHMvZW1pdHRlcnMnXG5pbXBvcnQge1RudEhhbmRsZXJ9IGZyb20gJy4uL3V0aWxzL3RudCdcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuLi9nYW1lU3RhdGUnXG52YXIgbGV2ZWwsXG5cdGNvbGxpc2lvbnNIYW5kbGVyLFxuXHRhcnJvd0Jvb3N0ZXIsXG5cdHRudEhhbmRsZXI7XG5cblxuLy8gVG9kbzogc3RvcmUgdGhvc2UgZWxlbWVudHMgaW4gb25lIGdsb2JhbCBvYmplY3QgbGlrZSB3aW5kb3cuZ2FtZVxuLy8gb3IgcGFzcyByZWZlcmVuY2VzIG9mIG9iamVjdHMgYmV0d2VlbiB0aGVtXG5cbmxldCBnU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCkuc3RhdGU7XG52YXIgcGxheVN0YXRlID0ge1xuXG5cdHJlc2V0U3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0Z1N0YXRlLmZsYWdzLmNhbkJvb3N0RmxhZyA9IHRydWU7XG5cdFx0Z1N0YXRlLmZsYWdzLmNhblRudEV4cGxvZGUgPSB0cnVlO1xuXHQgXHRnU3RhdGUuZmxhZ3MuaXNQbGF5ZXJEZWFkID0gZmFsc2U7XG5cdCBcdGdTdGF0ZS5mbGFncy5oYXNQbGF5ZXJXb24gPSBmYWxzZTtcblx0IH0sXG5cblx0Y2hvb3NlTGV2ZWw6IGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3QgbGV2ZWxzID0gW25ldyBMZXZlbDEoKSwgbmV3IExldmVsMigpLCBuZXcgTGV2ZWwzKCldO1xuXHRcdHJldHVybiBsZXZlbHNbZ2FtZS5nbG9iYWwuZ2FtZUxldmVsXTtcblx0fSxcblxuXHRjcmVhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdGxldmVsID0gdGhpcy5jaG9vc2VMZXZlbCgpO1xuXHRcdHRoaXMucmVzZXRTdGF0ZSgpO1xuXG5cdFx0Y29sbGlzaW9uc0hhbmRsZXIgPSBuZXcgQ29sbGlzaW9uc0hhbmRsZXIoKTtcblx0XHRnU3RhdGUuZW1pdHRlcnMuanVpY2VFbWl0dGVycyA9IG5ldyBKdWljZUVtaXR0ZXJzKCk7XG5cdFx0YXJyb3dCb29zdGVyID0gbmV3IEFycm93Qm9vc3RlcigpO1xuXHRcdHRudEhhbmRsZXIgPSBuZXcgVG50SGFuZGxlcigpO1xuXG5cdFx0bGV2ZWwuY3JlYXRlQmFja2dyb3VuZChnYW1lKTtcblx0XHRsZXZlbC5hZGRTdGFydGluZ1RleHQoZ2FtZSk7XG5cblxuXHRcdHRoaXMuaW5pdFRudCgpO1xuXHRcdHRoaXMuaW5pdFBsYXllcigpO1xuXHRcdHRoaXMuaW5pdFJlZFNsaW1lcygpO1xuXHRcdHRoaXMuaW5pdExhdmEoKTtcblx0XHR0aGlzLmluaXRUcmFtcG9saW5lcygpO1xuXHRcdHRoaXMuaW5pdFNsb3dGYWxsZXJzKCk7XG5cdFx0dGhpcy5pbml0UGxhdGZvcm1zKCk7XG5cdFx0dGhpcy5pbml0UmlkZXJzKCk7XG5cdFx0dGhpcy5pbml0RmFsbGVycygpO1xuXHRcdHRoaXMuaW5pdEFycm93cygpO1xuXHRcdHRoaXMuaW5pdFN3aXRjaEZhbGxlcnMoKTtcblx0XHR0aGlzLmluaXRSYWluKCk7XG5cblx0XHRnU3RhdGUuZW52T2JqZWN0cy5jdXJzb3JzID0gZ2FtZS5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG5cbiAgICAgICAgZ2FtZS5jYW1lcmEuZm9sbG93KCBnU3RhdGUucGxheWVyKTtcblx0fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gY29sbGlzaW9zXG5cdCBcdGNvbGxpc2lvbnNIYW5kbGVyLnVwZGF0ZSgpO1xuXG5cdFx0Ly8gYW5pbWF0aW9uc1xuXHQgXHRnU3RhdGUucGxheWVyLmFuaW1hdGlvbnMucGxheSgnc3RhbmQnKTtcblx0IFx0Z1N0YXRlLmVudk9iamVjdHMubGF2YS5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgIFx0IFx0aXRlbS5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJyk7XG5cdFx0fSwgdGhpcyk7XG5cdFx0Z1N0YXRlLmVuZW1pZXMucmVkU2xpbWVzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgXHQgXHRpdGVtLmFuaW1hdGlvbnMucGxheSgnc3RhbmQnKTtcblx0XHR9LCB0aGlzKTtcblxuXG5cdCBcdC8vIHByZXZlbnRpbmcgXCJmcmVlIG1vdmVcIlxuXHQgICAgZ1N0YXRlLnBsYXllci5ib2R5LnZlbG9jaXR5LnggPSAwO1xuXHQgICAgZ1N0YXRlLmVudk9iamVjdHMudHJhbXBvbGluZXMuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGl0ZW0pIHtcblx0ICAgIFx0aXRlbS5ib2R5LnZlbG9jaXR5LnggPSAwO1xuXHRcdH0sIHRoaXMpO1xuXHRcdGdTdGF0ZS5lbnZPYmplY3RzLmZhbGxlcnMuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGl0ZW0pIHtcblx0ICAgIFx0aXRlbS5ib2R5LnZlbG9jaXR5LnggPSAwO1xuXHRcdH0sIHRoaXMpO1xuXHRcdGdTdGF0ZS5lbnZPYmplY3RzLnNsb3dGYWxsZXJzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG5cdCAgICBcdGl0ZW0uYm9keS52ZWxvY2l0eS54ID0gMDtcblx0IFx0XHRpdGVtLmJvZHkudmVsb2NpdHkueSA9IDA7XG5cdFx0fSwgdGhpcyk7XG5cblx0ICAgIC8vIGNvbnRyb2xzXG5cdCAgICBpZiAoIGdTdGF0ZS5lbnZPYmplY3RzLmN1cnNvcnMubGVmdC5pc0Rvd24gKXtcblx0ICAgICAgICBnU3RhdGUucGxheWVyLmJvZHkudmVsb2NpdHkueCA9IC0xNTA7XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmICggZ1N0YXRlLmVudk9iamVjdHMuY3Vyc29ycy5yaWdodC5pc0Rvd24gKXtcblx0ICAgICAgICBnU3RhdGUucGxheWVyLmJvZHkudmVsb2NpdHkueCA9IDE1MDtcblx0ICAgIH1cblx0ICAgIC8vIGp1bXAhXG5cdCAgICBpZiAoIGdTdGF0ZS5lbnZPYmplY3RzLmN1cnNvcnMudXAuaXNEb3duICYmIGdTdGF0ZS5wbGF5ZXIuYm9keS50b3VjaGluZy5kb3duKXtcblx0ICAgIFx0Z2FtZS5hZGQudHdlZW4oIGdTdGF0ZS5wbGF5ZXIpLnRvKCB7IGFuZ2xlOiAzNjAgfSwgNjAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlKTtcblxuXHQgICAgXHRnU3RhdGUuZW1pdHRlcnMuanVpY2VFbWl0dGVycy5zcGF3bkp1bXBFbWl0dGVycygpO1xuXHQgICAgXHRnYW1lLnNvdW5kLnBsYXkoJ2p1bXAnKTtcblx0ICAgICAgICBnU3RhdGUucGxheWVyLmJvZHkudmVsb2NpdHkueSA9IC0xNTA7XG5cdCAgICB9XG5cblx0ICAgIC8vIG92ZXJsYXBzXG5cdFx0bGV0IGFyY2FkZVBoeXNpY3MgPSBnYW1lLnBoeXNpY3MuYXJjYWRlOyAvLyBwYXNzIHJlZmVyZW5jZVxuXG5cdCAgICBhcmNhZGVQaHlzaWNzLm92ZXJsYXAoIGdTdGF0ZS5wbGF5ZXIsIGdTdGF0ZS5lbnZPYmplY3RzLmxhdmEsIHRoaXMua2lsbFBsYXllciwgbnVsbCwgdGhpcyk7XG5cdFx0YXJjYWRlUGh5c2ljcy5vdmVybGFwKCBnU3RhdGUucGxheWVyLCBnU3RhdGUuZW52T2JqZWN0cy50cmFtcG9saW5lcywgdGhpcy50cmFtcG9saW5lUGxheWVyLCBudWxsLCB0aGlzKTtcblx0XHRhcmNhZGVQaHlzaWNzLm92ZXJsYXAoIGdTdGF0ZS5wbGF5ZXIsIGdTdGF0ZS5lbnZPYmplY3RzLmFycm93cywgdGhpcy5hcnJvd0Jvb3N0LCBudWxsLCB0aGlzKTtcblx0XHRhcmNhZGVQaHlzaWNzLm92ZXJsYXAoIGdTdGF0ZS5lbmVtaWVzLnJlZFNsaW1lcywgZ1N0YXRlLmVudk9iamVjdHMudHJhbXBvbGluZXMsIHRoaXMudHJhbXBvbGluZVNsaW1lLCBudWxsLCB0aGlzKTtcblx0XHRhcmNhZGVQaHlzaWNzLm92ZXJsYXAoIGdTdGF0ZS5lbmVtaWVzLnJlZFNsaW1lcywgZ1N0YXRlLmVudk9iamVjdHMubGF2YSwgdGhpcy5raWxsUmVkU2xpbWUsIG51bGwsIHRoaXMpO1xuXHRcdGFyY2FkZVBoeXNpY3Mub3ZlcmxhcCggZ1N0YXRlLnBsYXllciwgZ1N0YXRlLmVudk9iamVjdHMudG50LCB0aGlzLnRudEV4cGxvZGUsIG51bGwsIHRoaXMpO1xuXHQgICAgYXJjYWRlUGh5c2ljcy5vdmVybGFwKCBnU3RhdGUuZW5lbWllcy5yZWRTbGltZXMsIGdTdGF0ZS5lbnZPYmplY3RzLnRudCwgdGhpcy50bnRFeHBsb2RlLCBudWxsLCB0aGlzKTtcblxuXHRcdGxldmVsLmhhbmRsZVJpZGVyc0xvZ2ljKCk7XG5cdH0sXG5cblx0YXJyb3dCb29zdDogZnVuY3Rpb24ocGxheWVyLCBhcnJvdyl7XG5cdCBcdGFycm93Qm9vc3Rlci5ib29zdChhcnJvdyk7XG5cdCB9LFxuXG5cdCBpbml0VG50OiBmdW5jdGlvbigpe1xuXHQgXHRnU3RhdGUuZW52T2JqZWN0cy50bnQgPSBudWxsO1xuXHQgXHRsZXZlbC5hZGRUbnQoKTtcblx0IH0sXG5cblx0IHRudEV4cGxvZGU6IGZ1bmN0aW9uKCl7XG5cdCBcdFx0dG50SGFuZGxlci5leHBsb2RlKCBnU3RhdGUuZW52T2JqZWN0cy50bnQpO1xuXHQgfSxcblxuXHRraWxsUGxheWVyOiBmdW5jdGlvbigpe1xuXHQgXHRpZighZ1N0YXRlLmZsYWdzLmhhc1BsYXllcldvbil7XG5cdCBcdFx0dGhpcy5zaGFrZUNhbWVyYSgpO1xuXHRcdFx0Z1N0YXRlLmVtaXR0ZXJzLmp1aWNlRW1pdHRlcnMuc3Bhd25QbGF5ZXJLaWxsRW1pdHRlcnMoKTtcblxuXHQgXHRcdGdTdGF0ZS5mbGFncy5pc1BsYXllckRlYWQgPSB0cnVlO1xuXHRcdCBcdGdhbWUuc291bmQucGxheSgnc3BsYXNoLWRlYXRoJyk7XG5cdFx0IFx0Z1N0YXRlLnBsYXllci5raWxsKCk7XG5cdFx0IFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdCBcdFx0Z2FtZS5zdGF0ZS5zdGFydCgncGxheScpO1xuXHRcdFx0fSwgNjAwKTtcblx0IFx0fVxuXHQgfSxcblxuXHQga2lsbFJlZFNsaW1lOiBmdW5jdGlvbihyZWRTbGltZSl7XG5cdCBcdGlmKCFnU3RhdGUuZmxhZ3MuaXNQbGF5ZXJEZWFkKXtcblxuXHQgXHRcdGdTdGF0ZS5lbWl0dGVycy5qdWljZUVtaXR0ZXJzLnNwYXduS2lsbFJlZFNsaW1lRW1pdHRlcnMocmVkU2xpbWUpO1xuXG5cdFx0IFx0Z2FtZS5zb3VuZC5wbGF5KCdzcGxhc2gtZGVhdGgnKTtcblx0XHQgXHR0aGlzLnNoYWtlQ2FtZXJhKCk7XG5cdFx0IFx0cmVkU2xpbWUua2lsbCgpO1xuXG5cdFx0IFx0bGV2ZWwuY2hlY2tGb3JDb29sS2lsbFRleHQoKTtcblxuXHRcdCBcdGlmKGdTdGF0ZS5lbmVtaWVzLnJlZFNsaW1lcy5jb3VudExpdmluZygpIDw9IDApe1xuXHRcdCBcdFx0bGV2ZWwuYWRkRW5kaW5nVGV4dChnYW1lLCBnU3RhdGUucGxheWVyICk7XG5cdFx0IFx0XHRnU3RhdGUuZmxhZ3MuaGFzUGxheWVyV29uID0gdHJ1ZTtcblx0XHRcdCBcdGdhbWUuZ2xvYmFsLmdhbWVMZXZlbCsrO1xuXG5cdFx0IFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cblx0XHRcdCBcdFx0Z2FtZS5zdGF0ZS5zdGFydCgncGxheScpO1xuXG5cdFx0XHRcdH0sIDMwMDApO1xuXHRcdFx0fVxuXHQgXHR9XG5cblx0IH0sXG5cblx0IHNoYWtlQ2FtZXJhOiBmdW5jdGlvbigpe1xuXHQgXHRnYW1lLmNhbWVyYS5zaGFrZSgwLjAxLCAzMDApO1xuXHQgfSxcblxuXHRpbml0UGxheWVyOiBmdW5jdGlvbigpe1xuXHRcdGxldCBnID0gZ1N0YXRlO1xuXHRcdGcucGxheWVyID0gZ2FtZS5hZGQuc3ByaXRlKGxldmVsLnBsYXllclN0YXJ0aW5nWCwgbGV2ZWwucGxheWVyU3RhcnRpbmdZLCAnbW9uc3RlcjEnKTtcblx0XHRnLnBsYXllci5hbmNob3Iuc2V0VG8oMC41LDAuNSk7XG5cdFx0Zy5wbGF5ZXIuYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgWzAsIDEsIDJdLCA1LCB0cnVlKTtcblx0XHRnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSggZy5wbGF5ZXIgKTtcblx0XHRnLnBsYXllci5ib2R5LmJvdW5jZS55ID0gMC4yO1xuICAgXHRcdGcucGxheWVyLmJvZHkuZ3Jhdml0eS55ID0gMzAwO1xuICAgICAgICBnLnBsYXllci5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cdCB9LFxuXG5cdCBpbml0UGxhdGZvcm1zOiBmdW5jdGlvbigpe1xuXHRcdGxldCBlbnYgPSBnU3RhdGUuZW52T2JqZWN0cztcblx0XHRlbnYucGxhdGZvcm1zID0gZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgZW52LnBsYXRmb3Jtcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgbGV2ZWwuYWRkUGxhdGZvcm1zKCBlbnYucGxhdGZvcm1zICk7XG4gICAgICAgIGVudi5wbGF0Zm9ybXMuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgXHRpdGVtLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZTtcblx0XHR9LCB0aGlzKTtcblx0IH0sXG5cblx0IGluaXRBcnJvd3M6IGZ1bmN0aW9uKCl7XG5cdFx0bGV0IGVudiA9IGdTdGF0ZS5lbnZPYmplY3RzO1xuXHQgXHRlbnYuYXJyb3dzID0gZ2FtZS5hZGQuZ3JvdXAoKTtcblx0IFx0ZW52LmFycm93cy5lbmFibGVCb2R5ID0gdHJ1ZTtcblx0IFx0bGV2ZWwuYWRkQXJyb3dzKCBlbnYuYXJyb3dzICk7XG4gICBcdFx0ZW52LmFycm93cy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgIFx0IFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cdFx0fSwgdGhpcyk7XG5cdCB9LFxuXG5cdCBpbml0VHJhbXBvbGluZXM6IGZ1bmN0aW9uKCl7XG5cdFx0bGV0IGVudiA9IGdTdGF0ZS5lbnZPYmplY3RzO1xuXHRcdGVudi50cmFtcG9saW5lcyA9IGdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIGVudi50cmFtcG9saW5lcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoIGVudi50cmFtcG9saW5lcyApO1xuICAgICAgICBsZXZlbC5hZGRUcmFtcG9saW5lcyggZW52LnRyYW1wb2xpbmVzICk7XG4gICBcdFx0ZW52LnRyYW1wb2xpbmVzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICBcdFx0XHRpdGVtLmJvZHkuYm91bmNlLnkgPSAwLjI7XG4gICBcdFx0XHRpdGVtLmJvZHkuZ3Jhdml0eS55ID0gMzAwO1xuICAgXHRcdFx0aXRlbS5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cdFx0fSwgdGhpcyk7XG5cdCB9LFxuXG5cdCBpbml0UmlkZXJzOiBmdW5jdGlvbigpe1xuXHRcdGxldCBlbnYgPSBnU3RhdGUuZW52T2JqZWN0cztcblx0IFx0ZW52LnJpZGVycyA9IGdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIGVudi5yaWRlcnMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKCBlbnYucmlkZXJzICk7XG4gICAgICAgIGxldmVsLmFkZFJpZGVycyggZW52LnJpZGVycyApO1xuICAgICAgICBlbnYucmlkZXJzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG4gICAgICAgIFx0aXRlbS5ib2R5LmJvdW5jZS5zZXRUbygxLCAxKTtcbiAgICAgICBcdFx0aXRlbS5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIFx0aXRlbS5ib2R5LnZlbG9jaXR5LnNldFRvKC0xMDAsIDApO1xuXHRcdH0sIHRoaXMpO1xuXHQgfSxcblxuXHQgaW5pdFJlZFNsaW1lczogZnVuY3Rpb24oKXtcblx0XHRsZXQgZSA9IGdTdGF0ZS5lbmVtaWVzOyAvL3Bhc3MgcmVmZXJlbmNlXG5cdCBcdGUucmVkU2xpbWVzID0gZ2FtZS5hZGQuZ3JvdXAoKTtcblx0IFx0ZS5yZWRTbGltZXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKCBlLnJlZFNsaW1lcyApO1xuXG5cdFx0bGV2ZWwuYWRkUmVkU2xpbWVzKCBlLnJlZFNsaW1lcyk7XG5cdFx0ZS5yZWRTbGltZXMuZm9yRWFjaEFsaXZlKCBmdW5jdGlvbiggaXRlbSApIHtcbiAgIFx0XHRcdGl0ZW0uYm9keS5ib3VuY2UueSA9IDAuMjtcblx0XHRcdGl0ZW0uYm9keS5ib3VuY2UueCA9IDEuMDtcbiAgIFx0XHRcdGl0ZW0uYm9keS5ncmF2aXR5LnkgPSAzMDA7XG4gICAgICAgIFx0aXRlbS5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG4gICAgICAgIFx0aXRlbS5hbmltYXRpb25zLmFkZCgnc3RhbmQnLCBbMCwgMSwgMl0sIDUsIHRydWUpO1xuXHRcdH0sIHRoaXMpO1xuXHQgfSxcblxuXHQgaW5pdFN3aXRjaEZhbGxlcnM6IGZ1bmN0aW9uKCl7XG5cdFx0bGV0IGVudiA9IGdTdGF0ZS5lbnZPYmplY3RzO1xuXHRcdGVudi5zd2l0Y2hGYWxsZXJzID0gZ2FtZS5hZGQuZ3JvdXAoKTtcblx0IFx0ZW52LnN3aXRjaEZhbGxlcnMuZW5hYmxlQm9keSA9IHRydWU7XG5cblx0IFx0bGV2ZWwuYWRkU3dpdGNoRmFsbGVycygpO1xuICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSggZW52LnN3aXRjaEZhbGxlcnMgKTtcblxuICAgXHRcdGVudi5zd2l0Y2hGYWxsZXJzLmZvckVhY2hBbGl2ZShmdW5jdGlvbiggaXRlbSApIHtcbiAgICAgICAgXHRpdGVtLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZTtcblx0XHR9LCB0aGlzKTtcblx0IH0sXG5cblx0IGluaXRGYWxsZXJzOiBmdW5jdGlvbigpe1xuXHRcdGxldCBlbnYgPSBnU3RhdGUuZW52T2JqZWN0cztcblx0IFx0ZW52LmZhbGxlcnMgPSBnYW1lLmFkZC5ncm91cCgpO1xuXHRcdGVudi5mYWxsZXJzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICBsZXZlbC5hZGRGYWxsZXJzKCBlbnYuZmFsbGVycyApO1xuXHQgfSxcblxuXHQgaW5pdFNsb3dGYWxsZXJzOiBmdW5jdGlvbigpe1xuXHRcdGxldCBlbnYgPSBnU3RhdGUuZW52T2JqZWN0cztcblx0IFx0ZW52LnNsb3dGYWxsZXJzID0gZ2FtZS5hZGQuZ3JvdXAoKTtcblx0XHRlbnYuc2xvd0ZhbGxlcnMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIGxldmVsLmFkZFNsb3dGYWxsZXJzKCBlbnYuc2xvd0ZhbGxlcnMgKTtcblx0IH0sXG5cblxuXHQgaW5pdExhdmE6IGZ1bmN0aW9uKCl7XG5cdFx0bGV0IGVudiA9IGdTdGF0ZS5lbnZPYmplY3RzO1xuXHQgXHRlbnYubGF2YSA9IGdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIGVudi5sYXZhLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICBsZXZlbC5hZGRMYXZhKCBlbnYubGF2YSk7XG4gICAgICAgIGVudi5sYXZhLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgXHQgXHRpdGVtLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZTtcbiAgICAgICBcdCBcdGl0ZW0uYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgWzAsIDFdLCAyLCB0cnVlKTtcblx0XHR9LCB0aGlzKTtcblx0IH0sXG5cblx0IGluaXRSYWluOiBmdW5jdGlvbigpe1xuXHRcdGdhbWUuZ2xvYmFsLnJhaW5Tb3VuZC5wbGF5KCk7XG5cblx0IFx0Z1N0YXRlLmVtaXR0ZXJzLnJhaW5FbWl0dGVyID0gbmV3IFJhaW5FbWl0dGVyKCk7XG5cdFx0Z1N0YXRlLmVtaXR0ZXJzLnJhaW5FbWl0dGVyLnN0YXJ0KCk7XG5cdCB9LFxuXG5cdCB0cmFtcG9saW5lU2xpbWU6IGZ1bmN0aW9uKCByZWRTbGltZSApe1xuXHQgXHRyZWRTbGltZS5ib2R5LnZlbG9jaXR5LnkgLT0gMjAwO1xuXHQgXHRnYW1lLnNvdW5kLnBsYXkoJ3RyYW1wb2xpbmVfanVtcCcpO1xuXHQgfSxcblxuXHQgdHJhbXBvbGluZVBsYXllcjogZnVuY3Rpb24oKXtcblx0IFx0Z1N0YXRlLnBsYXllci5ib2R5LnZlbG9jaXR5LnkgLT0gMjAwO1xuXHQgXHRnYW1lLnNvdW5kLnBsYXkoJ3RyYW1wb2xpbmVfanVtcCcpO1xuXHQgfSxcblxuXG59O1xubW9kdWxlLmV4cG9ydHMgPSBwbGF5U3RhdGU7XG4iLCJpbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi4vZ2FtZVN0YXRlJ1xubGV0IGcgPSBuZXcgR2FtZVN0YXRlKCkuc3RhdGU7XG5leHBvcnQgY2xhc3MgQXJyb3dCb29zdGVye1xuXG5cdGJvb3N0KGFycm93KXtcblx0XHRpZih3aW5kb3cuY2FuQm9vc3RGbGFnKXtcblx0XHRcdHZhciBib29zdFR3ZWVuID0gZ2FtZS5hZGQudHdlZW4oZy5wbGF5ZXIpLnRvKCB7IGFscGhhOiAwIH0sIDUwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAxMDAwLCB0cnVlKTtcblxuXHRcdFx0Z2FtZS5zb3VuZC5wbGF5KCdkaW5nJylcblx0IFx0XHR3aW5kb3cuY2FuQm9vc3RGbGFnID0gZmFsc2U7XG5cdCBcdFx0YXJyb3cua2lsbCgpO1xuXG5cdCBcdFx0dmFyIGwxID0gZ2FtZS5hZGQudGV4dChnLnBsYXllci54IC0gOCwgZy5wbGF5ZXIueSAtIDMwLCAnMyEnLFxuICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG5cblx0IFx0XHR2YXIgbDIsIGwzO1xuXG5cdCBcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHQgXHRcdFx0bDEua2lsbCgpO1xuXHQgXHRcdFx0bDIgPSBnYW1lLmFkZC50ZXh0KGcucGxheWVyLnggLSA4LCBnLnBsYXllci55IC0gMzAsICcyIScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICcyMHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcblx0XHRcdH0sIDEwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdCBcdFx0XHRsMi5raWxsKCk7XG5cdCBcdFx0XHRsMyA9IGdhbWUuYWRkLnRleHQoZy5wbGF5ZXIueCAtIDgsIGcucGxheWVyLnkgLSAzMCwgJzEhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuXHRcdFx0fSwgMjAwMCk7XG5cblx0XHQgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0IFx0XHRib29zdFR3ZWVuLnN0b3AoKTtcblx0ICAgIFx0XHRnYW1lLmFkZC50d2VlbihnLnBsYXllcikudG8oIHsgYWxwaGE6IDEgfSwgNTAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlKTtcblxuXHRcdCBcdFx0bDMua2lsbCgpO1xuXHRcdCBcdFx0anVpY2VFbWl0dGVycy5zcGF3blBsYXllckJvb3N0RW1pdHRlcnMoKTtcblxuXHRcdCBcdFx0d2luZG93LmNhbkJvb3N0RmxhZyA9IHRydWU7XG5cdFx0IFx0XHRnLnBsYXllci5ib2R5LnZlbG9jaXR5LnkgPSAtNTAwO1xuXHRcdFx0fSwgMzAwMCk7XG5cdFx0IH1cblx0fVxuXG59XG4iLCJpbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi4vZ2FtZVN0YXRlJ1xubGV0IGcgPSBuZXcgR2FtZVN0YXRlKCkuc3RhdGU7XG5cbmV4cG9ydCBjbGFzcyBDb2xsaXNpb25zSGFuZGxlcntcblxuXHR1cGRhdGUoKXtcblx0XHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5wbGF5ZXIsIGcuZW52T2JqZWN0cy5wbGF0Zm9ybXMpO1xuXHRcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLnBsYXllciwgZy5lbnZPYmplY3RzLnJpZGVycyk7XG5cdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcucGxheWVyLCBnLmVudk9iamVjdHMuZmFsbGVycyk7XG5cdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcucGxheWVyLCBnLmVudk9iamVjdHMudHJhbXBvbGluZXMpO1xuXHRcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLnBsYXllciwgZy5lbnZPYmplY3RzLnNsb3dGYWxsZXJzKTtcblx0XHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5wbGF5ZXIsIGcuZW52T2JqZWN0cy5zd2l0Y2hGYWxsZXJzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcuZW52T2JqZWN0cy50cmFtcG9saW5lcywgZy5lbnZPYmplY3RzLnBsYXRmb3Jtcyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLmVudk9iamVjdHMudHJhbXBvbGluZXMsIGcuZW52T2JqZWN0cy50cmFtcG9saW5lcyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLmVudk9iamVjdHMuc2xvd0ZhbGxlcnMsIGcuZW52T2JqZWN0cy5wbGF0Zm9ybXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbnZPYmplY3RzLnRudCwgZy5lbnZPYmplY3RzLnBsYXRmb3Jtcyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLmVudk9iamVjdHMudG50LCBnLmVudk9iamVjdHMuc3dpdGNoRmFsbGVycyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLmVuZW1pZXMucmVkU2xpbWVzLCBnLmVudk9iamVjdHMuZmFsbGVycyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLmVuZW1pZXMucmVkU2xpbWVzLCBnLmVudk9iamVjdHMudHJhbXBvbGluZXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbmVtaWVzLnJlZFNsaW1lcywgZy5lbnZPYmplY3RzLnN3aXRjaEZhbGxlcnMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5wbGF5ZXIsIGcuZW5lbWllcy5yZWRTbGltZXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbnZPYmplY3RzLnBsYXRmb3JtcywgZy5lbmVtaWVzLnJlZFNsaW1lcyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLmVuZW1pZXMucmVkU2xpbWVzLCBnLmVudk9iamVjdHMuc2xvd0ZhbGxlcnMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbnZPYmplY3RzLnNsb3dGYWxsZXJzLCBnLmVudk9iamVjdHMudHJhbXBvbGluZXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoZy5lbmVtaWVzLnJlZFNsaW1lcywgZy5lbnZPYmplY3RzLnJpZGVycyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShnLmVudk9iamVjdHMudHJhbXBvbGluZXMsIGcuZW52T2JqZWN0cy5zd2l0Y2hGYWxsZXJzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGcuZW52T2JqZWN0cy5zd2l0Y2hGYWxsZXJzLCBnLmVudk9iamVjdHMuc3dpdGNoRmFsbGVycyk7XG5cdH1cblxufVxuIiwiaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uL2dhbWVTdGF0ZSdcbmxldCBnID0gbmV3IEdhbWVTdGF0ZSgpLnN0YXRlO1xuZXhwb3J0IGNsYXNzIFJhaW5FbWl0dGVye1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuICAgIFx0dGhpcy5lbWl0dGVyID0gZ2FtZS5hZGQuZW1pdHRlcihnYW1lLndvcmxkLmNlbnRlclgsIDAsIDQwMCk7XG4gICAgXHR0aGlzLmluaXRFbWl0dGVyKCk7XG4gIFx0fVxuXG5cdGluaXRFbWl0dGVyKCl7XG4gICAgICAgIHRoaXMuZW1pdHRlci53aWR0aCA9IGdhbWUud29ybGQud2lkdGg7XG4gICAgICAgIHRoaXMuZW1pdHRlci5hbmdsZSA9IC0zO1xuICAgICAgICB0aGlzLmVtaXR0ZXIubWFrZVBhcnRpY2xlcygncmFpbicpO1xuXG5cdFx0dGhpcy5lbWl0dGVyLm1pblBhcnRpY2xlU2NhbGUgPSAwLjE7XG5cdFx0dGhpcy5lbWl0dGVyLm1heFBhcnRpY2xlU2NhbGUgPSAwLjU7XG5cblx0XHR0aGlzLmVtaXR0ZXIuc2V0WVNwZWVkKDMwMCwgNTAwKTtcblx0XHR0aGlzLmVtaXR0ZXIuc2V0WFNwZWVkKC01LCA1KTtcblxuXHRcdHRoaXMuZW1pdHRlci5taW5Sb3RhdGlvbiA9IDA7XG5cdFx0dGhpcy5lbWl0dGVyLm1heFJvdGF0aW9uID0gMDtcblx0fVxuXG5cdHN0YXJ0KCl7XG5cdFx0dGhpcy5lbWl0dGVyLnN0YXJ0KGZhbHNlLCA4MDAsIDUsIDApO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEp1aWNlRW1pdHRlcnN7XG5cblx0c3Bhd25KdW1wRW1pdHRlcnMoKXtcblx0XHR0aGlzLmVtaXR0ZXIxID0gZ2FtZS5hZGQuZW1pdHRlcigwLCAwLCAxMDApO1xuICAgXHRcdHRoaXMuZW1pdHRlcjEubWFrZVBhcnRpY2xlcygncGFydGljbGUnKTtcblx0XHR0aGlzLmVtaXR0ZXIxLmdyYXZpdHkgPSAyMDA7XG5cblx0XHR0aGlzLmVtaXR0ZXIxLnggPSBnLnBsYXllci54O1xuICAgIFx0dGhpcy5lbWl0dGVyMS55ID0gZy5wbGF5ZXIueSArIDU7XG5cdFx0dGhpcy5lbWl0dGVyMS5zdGFydCh0cnVlLCAyMDAwLCBudWxsLCAyMCk7XG5cdH1cblxuXHRzcGF3bktpbGxSZWRTbGltZUVtaXR0ZXJzKHJlZFNsaW1lKXtcblx0XHR0aGlzLmVtaXR0ZXJSZWQgPSBnYW1lLmFkZC5lbWl0dGVyKDAsIDAsIDEwMCk7XG4gICBcdFx0dGhpcy5lbWl0dGVyUmVkLm1ha2VQYXJ0aWNsZXMoJ3JlZC1wYXJ0aWNsZScpO1xuXHRcdHRoaXMuZW1pdHRlclJlZC5ncmF2aXR5ID0gNTA7XG5cdFx0dGhpcy5lbWl0dGVyUmVkLnNldFNjYWxlKDEuMCwgMCwgMS4wLCAwLCAxNTAwKTtcbiAgIFx0XHR0aGlzLmVtaXR0ZXJSZWQueCA9IHJlZFNsaW1lLnggKyAxNTtcbiAgICBcdHRoaXMuZW1pdHRlclJlZC55ID0gcmVkU2xpbWUueSArIDI1O1xuXHRcdHRoaXMuZW1pdHRlclJlZC5zdGFydCh0cnVlLCAzMDAwLCBudWxsLCAyMCk7XG5cdH1cblxuXHRzcGF3blBsYXllckJvb3N0RW1pdHRlcnMoKXtcblx0XHR0aGlzLmVtaXR0ZXIzID0gZ2FtZS5hZGQuZW1pdHRlcigwLCAwLCAxMDApO1xuICAgXHRcdHRoaXMuZW1pdHRlcjMubWFrZVBhcnRpY2xlcygncGFydGljbGUyJyk7XG5cdFx0dGhpcy5lbWl0dGVyMy5ncmF2aXR5ID0gNTA7XG5cdFx0dGhpcy5lbWl0dGVyMy5zZXRTY2FsZSgxLjAsIDAsIDEuMCwgMCwgMjAwMCk7XG5cbiAgXHRcdHRoaXMuZW1pdHRlcjMueCA9IGcucGxheWVyLng7XG4gICAgXHR0aGlzLmVtaXR0ZXIzLnkgPSBnLnBsYXllci55O1xuXHRcdHRoaXMuZW1pdHRlcjMuc3RhcnQodHJ1ZSwgNTAwMCwgbnVsbCwgNTAwKTtcblx0fVxuXG4gIFx0c3Bhd25QbGF5ZXJLaWxsRW1pdHRlcnMoKXtcbiAgXHRcdHRoaXMuZW1pdHRlcjIgPSBnYW1lLmFkZC5lbWl0dGVyKDAsIDAsIDEwMCk7XG4gICBcdFx0dGhpcy5lbWl0dGVyMi5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZTInKTtcblx0XHR0aGlzLmVtaXR0ZXIyLmdyYXZpdHkgPSA1MDtcblx0XHR0aGlzLmVtaXR0ZXIyLnNldFNjYWxlKDEuMCwgMCwgMS4wLCAwLCAyMDAwKTtcblxuICBcdFx0dGhpcy5lbWl0dGVyMi54ID0gZy5wbGF5ZXIueCArIDE1O1xuICAgIFx0dGhpcy5lbWl0dGVyMi55ID0gZy5wbGF5ZXIueSArIDI1O1xuXHRcdHRoaXMuZW1pdHRlcjIuc3RhcnQodHJ1ZSwgNjAwLCBudWxsLCA2MDApO1xuICBcdH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUbnRIYW5kbGVye1xuXG5cdGV4cGxvZGUodG50KXtcblx0XHRpZih3aW5kb3cuY2FuVG50RXhwbG9kZSl7XG5cdFx0XHRnYW1lLmFkZC50d2Vlbih0bnQpLnRvKCB7IGFscGhhOiAwIH0sIDcwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMTAwMCwgdHJ1ZSk7XG5cdCBcdFx0Z2FtZS5zb3VuZC5wbGF5KCd0bnQnKVxuXHQgXHRcdHdpbmRvdy5jYW5UbnRFeHBsb2RlID0gZmFsc2U7XG5cdCBcdFx0dmFyIGwxID0gZ2FtZS5hZGQudGV4dCh0bnQueCArIDExLCB0bnQueSAtIDMwLCAnMyEnLFxuICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG5cblx0IFx0XHR2YXIgbDIsIGwzO1xuXG5cdCBcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHQgXHRcdFx0bDEua2lsbCgpO1xuXHQgXHRcdFx0bDIgPSBnYW1lLmFkZC50ZXh0KHRudC54ICsgMTEsIHRudC55IC0gMzAsICcyIScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICcyMHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcblx0XHRcdH0sIDEwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdCBcdFx0XHRsMi5raWxsKCk7XG5cdCBcdFx0XHRsMyA9IGdhbWUuYWRkLnRleHQodG50LnggKyAxMSwgdG50LnkgLSAzMCwgJzEhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuXHRcdFx0fSwgMjAwMCk7XG5cblx0XHQgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0IFx0XHRnYW1lLmNhbWVyYS5zaGFrZSgwLjA0LCAyMDAwLCB0cnVlKTtcblx0XHQgXHRcdGwzLmtpbGwoKTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0IFx0XHRcdHRudC5raWxsKCk7XG5cdFx0XHRcdH0sIDEwMDApO1xuXG5cdFx0IFx0XHRzd2l0Y2hGYWxsZXJzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIFx0XHRcdGl0ZW0uYm9keS5pbW1vdmFibGUgPSBmYWxzZTtcblx0XHRcdFx0fSwgdGhpcyk7XG5cblx0XHRcdH0sIDMwMDApO1xuXHRcdCB9XG5cdH1cblxufVxuIl19
