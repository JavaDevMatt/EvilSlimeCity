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

},{"./states/init":6,"./states/menu":7,"./states/play":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
            platforms.create(0, 300, 'platform');
            platforms.create(197, 300, 'platform2');
            platforms.create(506, 300, 'platform');
            platforms.create(646, 300, 'platform');
            platforms.create(646, 112, 'tower1');
        }
    }, {
        key: 'addArrows',
        value: function addArrows(arrows) {}
    }, {
        key: 'addRedSlimes',
        value: function addRedSlimes() {
            redSlimes.create(670, 10, 'monster2');
        }
    }, {
        key: 'addFallers',
        value: function addFallers() {
            fallers.create(340, 282, 'faller');
        }
    }, {
        key: 'addSlowFallers',
        value: function addSlowFallers() {}
    }, {
        key: 'addTrampolines',
        value: function addTrampolines() {
            trampolines.create(600, 270, 'trampoline');
        }
    }, {
        key: 'addLava',
        value: function addLava() {
            lava.create(141, 332, 'lava');
            lava.create(254, 332, 'lava2');
            lava.create(700, 332, 'lava2');
        }
    }, {
        key: 'addSwitchFallers',
        value: function addSwitchFallers() {}
    }, {
        key: 'addEndingText',
        value: function addEndingText() {
            game.add.text(player.x - 200, 100, 'Great!', { font: '40px Courier', fill: '#fff' });
            game.add.text(player.x - 200, 136, 'Time for the next one....', { font: '20px Courier', fill: '#fff' });
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

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
                        game.add.text(player.x - 200, 100, 'Nice!', { font: '40px Courier', fill: '#fff' });
                        game.add.text(player.x - 200, 136, 'Get ready for more...', { font: '20px Courier', fill: '#fff' });
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
                        platforms.create(754, 172, 'tower1');
                        platforms.create(887, 300, 'platform');
                        platforms.create(1028, 300, 'platform');
                        platforms.create(1169, 300, 'platform');
                        platforms.create(1169, 272, 'tower1');
                        platforms.create(1310, 300, 'platform');
                        platforms.create(1451, 300, 'platform');
                        platforms.create(1410, 112, 'tower1');
                }
        }, {
                key: 'addArrows',
                value: function addArrows(arrows) {
                        arrows.create(1230, 240, 'arrow');
                }
        }, {
                key: 'addRedSlimes',
                value: function addRedSlimes() {
                        redSlimes.create(1470, 10, 'monster2');
                        redSlimes.create(390, 70, 'monster2');
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
                        slowFallers.create(20, 282, 'faller');
                }
        }, {
                key: 'addLava',
                value: function addLava() {
                        lava.create(0, 332, 'lava2');
                        lava.create(252, 332, 'lava2');
                        lava.create(502, 332, 'lava2');
                        lava.create(754, 332, 'lava2');
                        lava.create(1510, 352, 'lava2');
                }
        }, {
                key: 'addRiders',
                value: function addRiders() {
                        this.rider1 = riders.create(490, 200, 'faller');
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
                        if (redSlimes.countLiving() == 1) {
                                var infoLabel = game.add.text(310, 278, 'One more!', { font: '20px Courier', fill: '#fff' });
                                setTimeout(function () {
                                        infoLabel.kill();
                                }, 3000);
                        }
                }
        }]);

        return Level2;
}();

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
      key: 'addPlatforms',
      value: function addPlatforms() {
         platforms.create(0, 112, 'tower1');
         platforms.create(1, 300, 'platform');
         platforms.create(421, 289, 'faller');
      }
   }, {
      key: 'addArrows',
      value: function addArrows(arrows) {}
   }, {
      key: 'addRedSlimes',
      value: function addRedSlimes() {
         redSlimes.create(350, 10, 'monster2');
         redSlimes.create(560, 10, 'monster2');
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
         lava.create(142, 332, 'lava');
         lava.create(198, 332, 'lava');
         lava.create(254, 332, 'lava2');
         lava.create(506, 332, 'lava2');
      }
   }, {
      key: 'addSwitchFallers',
      value: function addSwitchFallers() {
         switchFallers.create(136, 242, 'faller');
         switchFallers.create(330, 112, 'faller');

         switchFallers.create(208, 242, 'platform');
         switchFallers.create(349, 289, 'faller');
         switchFallers.create(493, 289, 'faller');
         switchFallers.create(565, 289, 'faller');
         switchFallers.create(530, 32, 'tower1');
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

var _level = require('../levels/level01');

var _level2 = require('../levels/level02');

var _level3 = require('../levels/level03');

var _booster = require('../utils/booster');

var _collisions = require('../utils/collisions');

var _emitters = require('../utils/emitters');

var _tnt = require('../utils/tnt');

var level, collisionsHandler, arrowBooster, tntHandler, rainEmitter;

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

	resetState: function resetState() {
		window.canBoostFlag = true;
		window.canTntExplode = true;
		window.isPlayerDead = false;
		window.hasPlayerWon = false;
	},

	chooseLevel: function chooseLevel() {
		var levels = [new _level.Level1(), new _level2.Level2(), new _level3.Level3()];
		return levels[game.global.gameLevel];
	},

	create: function create() {
		level = this.chooseLevel();
		this.resetState();

		collisionsHandler = new _collisions.CollisionsHandler();
		juiceEmitters = new _emitters.JuiceEmitters();
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

		cursors = game.input.keyboard.createCursorKeys();

		game.camera.follow(player);
	},

	update: function update() {

		// collisios
		collisionsHandler.update();

		// animations
		player.animations.play('stand');
		lava.forEachAlive(function (item) {
			item.animations.play('stand');
		}, this);
		redSlimes.forEachAlive(function (item) {
			item.animations.play('stand');
		}, this);

		// preventing "free move"
		player.body.velocity.x = 0;
		trampolines.forEachAlive(function (item) {
			item.body.velocity.x = 0;
		}, this);
		fallers.forEachAlive(function (item) {
			item.body.velocity.x = 0;
		}, this);
		slowFallers.forEachAlive(function (item) {
			item.body.velocity.x = 0;
			item.body.velocity.y = 0;
		}, this);

		// controls
		if (cursors.left.isDown) {
			player.body.velocity.x = -150;
		} else if (cursors.right.isDown) {
			player.body.velocity.x = 150;
		}
		// jump!
		if (cursors.up.isDown && player.body.touching.down) {
			game.add.tween(player).to({ angle: 360 }, 600, Phaser.Easing.Linear.None, true);

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

	arrowBoost: function arrowBoost(player, arrow) {
		arrowBooster.boost(arrow);
	},

	initTnt: function initTnt() {
		tnt = null;
		level.addTnt();
	},

	tntExplode: function tntExplode() {
		tntHandler.explode(tnt);
	},

	killPlayer: function killPlayer() {
		if (!window.hasPlayerWon) {
			this.shakeCamera();
			juiceEmitters.spawnPlayerKillEmitters();

			window.isPlayerDead = true;
			game.sound.play('splash-death');
			player.kill();
			setTimeout(function () {
				game.state.start('play');
			}, 600);
		}
	},

	killRedSlime: function killRedSlime(redSlime) {
		if (!window.isPlayerDead) {

			juiceEmitters.spawnKillRedSlimeEmitters(redSlime);

			game.sound.play('splash-death');
			this.shakeCamera();
			redSlime.kill();

			level.checkForCoolKillText();

			if (redSlimes.countLiving() <= 0) {
				level.addEndingText(game, player);
				window.hasPlayerWon = true;
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
		player = game.add.sprite(level.playerStartingX, level.playerStartingY, 'monster1');
		player.anchor.setTo(0.5, 0.5);
		player.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
	},

	initPlatforms: function initPlatforms() {
		platforms = game.add.group();
		platforms.enableBody = true;
		level.addPlatforms(platforms);
		platforms.forEachAlive(function (item) {
			item.body.immovable = true;
		}, this);
	},

	initArrows: function initArrows() {
		arrows = game.add.group();
		arrows.enableBody = true;
		level.addArrows(arrows);
		arrows.forEachAlive(function (item) {
			item.body.immovable = true;
		}, this);
	},

	initTrampolines: function initTrampolines() {
		trampolines = game.add.group();
		trampolines.enableBody = true;
		game.physics.arcade.enable(trampolines);
		level.addTrampolines(trampolines);
		trampolines.forEachAlive(function (item) {
			item.body.bounce.y = 0.2;
			item.body.gravity.y = 300;
			item.body.collideWorldBounds = true;
		}, this);
	},

	initRiders: function initRiders() {
		riders = game.add.group();
		riders.enableBody = true;
		game.physics.arcade.enable(riders);
		level.addRiders(riders);
		riders.forEachAlive(function (item) {
			item.body.immovable = true;
			item.body.bounce.setTo(1, 1);
			item.body.collideWorldBounds = true;
			item.body.velocity.setTo(-100, 0);
		}, this);
	},

	initRedSlimes: function initRedSlimes() {
		redSlimes = game.add.group();

		redSlimes.enableBody = true;
		game.physics.arcade.enable(redSlimes);

		level.addRedSlimes(redSlimes);
		redSlimes.forEachAlive(function (item) {
			item.body.bounce.y = 0.2;
			item.body.bounce.x = 1.0;
			item.body.gravity.y = 300;
			item.body.collideWorldBounds = true;
			item.animations.add('stand', [0, 1, 2], 5, true);
		}, this);
	},

	initSwitchFallers: function initSwitchFallers() {
		switchFallers = game.add.group();
		switchFallers.enableBody = true;

		level.addSwitchFallers();
		game.physics.arcade.enable(switchFallers);

		switchFallers.forEachAlive(function (item) {
			item.body.immovable = true;
		}, this);
	},

	initFallers: function initFallers() {
		fallers = game.add.group();
		fallers.enableBody = true;
		level.addFallers(fallers);
	},

	initSlowFallers: function initSlowFallers() {
		slowFallers = game.add.group();
		slowFallers.enableBody = true;
		level.addSlowFallers(slowFallers);
	},

	initLava: function initLava() {
		lava = game.add.group();
		lava.enableBody = true;
		level.addLava(lava);
		lava.forEachAlive(function (item) {
			item.body.immovable = true;
			item.animations.add('stand', [0, 1], 2, true);
		}, this);
	},

	initRain: function initRain() {
		game.global.rainSound.play();

		rainEmitter = new _emitters.RainEmitter();
		rainEmitter.start();
	},

	trampolineSlime: function trampolineSlime(redSlime) {
		redSlime.body.velocity.y -= 200;
		game.sound.play('trampoline_jump');
	},

	trampolinePlayer: function trampolinePlayer() {
		player.body.velocity.y -= 200;
		game.sound.play('trampoline_jump');
	}

};
module.exports = playState;

},{"../levels/level01":3,"../levels/level02":4,"../levels/level03":5,"../utils/booster":9,"../utils/collisions":10,"../utils/emitters":11,"../utils/tnt":12}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrowBooster = exports.ArrowBooster = function () {
	function ArrowBooster() {
		_classCallCheck(this, ArrowBooster);
	}

	_createClass(ArrowBooster, [{
		key: 'boost',
		value: function boost(arrow) {
			if (window.canBoostFlag) {
				var boostTween = game.add.tween(player).to({ alpha: 0 }, 50, Phaser.Easing.Linear.None, true, 0, 1000, true);

				game.sound.play('ding');
				window.canBoostFlag = false;
				arrow.kill();

				var l1 = game.add.text(player.x - 8, player.y - 30, '3!', { font: '20px Courier', fill: '#fff' });

				var l2, l3;

				setTimeout(function () {
					l1.kill();
					l2 = game.add.text(player.x - 8, player.y - 30, '2!', { font: '20px Courier', fill: '#fff' });
				}, 1000);

				setTimeout(function () {
					l2.kill();
					l3 = game.add.text(player.x - 8, player.y - 30, '1!', { font: '20px Courier', fill: '#fff' });
				}, 2000);

				setTimeout(function () {
					boostTween.stop();
					game.add.tween(player).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);

					l3.kill();
					juiceEmitters.spawnPlayerBoostEmitters();

					window.canBoostFlag = true;
					player.body.velocity.y = -500;
				}, 3000);
			}
		}
	}]);

	return ArrowBooster;
}();

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CollisionsHandler = exports.CollisionsHandler = function () {
	function CollisionsHandler() {
		_classCallCheck(this, CollisionsHandler);
	}

	_createClass(CollisionsHandler, [{
		key: "update",
		value: function update() {
			game.physics.arcade.collide(player, platforms);
			game.physics.arcade.collide(player, riders);
			game.physics.arcade.collide(player, fallers);
			game.physics.arcade.collide(player, trampolines);
			game.physics.arcade.collide(player, slowFallers);
			game.physics.arcade.collide(player, switchFallers);
			game.physics.arcade.collide(trampolines, platforms);
			game.physics.arcade.collide(trampolines, trampolines);
			game.physics.arcade.collide(slowFallers, platforms);
			game.physics.arcade.collide(tnt, platforms);
			game.physics.arcade.collide(tnt, switchFallers);
			game.physics.arcade.collide(redSlimes, fallers);
			game.physics.arcade.collide(redSlimes, trampolines);
			game.physics.arcade.collide(redSlimes, switchFallers);
			game.physics.arcade.collide(player, redSlimes);
			game.physics.arcade.collide(platforms, redSlimes);
			game.physics.arcade.collide(redSlimes, slowFallers);
			game.physics.arcade.collide(slowFallers, trampolines);
			game.physics.arcade.collide(redSlimes, riders);
			game.physics.arcade.collide(trampolines, switchFallers);
			game.physics.arcade.collide(switchFallers, switchFallers);
		}
	}]);

	return CollisionsHandler;
}();

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

			this.emitter1.x = player.x;
			this.emitter1.y = player.y + 5;
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

			this.emitter3.x = player.x;
			this.emitter3.y = player.y;
			this.emitter3.start(true, 5000, null, 500);
		}
	}, {
		key: 'spawnPlayerKillEmitters',
		value: function spawnPlayerKillEmitters() {
			this.emitter2 = game.add.emitter(0, 0, 100);
			this.emitter2.makeParticles('particle2');
			this.emitter2.gravity = 50;
			this.emitter2.setScale(1.0, 0, 1.0, 0, 2000);

			this.emitter2.x = player.x + 15;
			this.emitter2.y = player.y + 25;
			this.emitter2.start(true, 600, null, 600);
		}
	}]);

	return JuiceEmitters;
}();

},{}],12:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImpzL2dhbWUuanMiLCJqcy9sZXZlbHMvbGV2ZWwwMS5qcyIsImpzL2xldmVscy9sZXZlbDAyLmpzIiwianMvbGV2ZWxzL2xldmVsMDMuanMiLCJqcy9zdGF0ZXMvaW5pdC5qcyIsImpzL3N0YXRlcy9tZW51LmpzIiwianMvc3RhdGVzL3BsYXkuanMiLCJqcy91dGlscy9ib29zdGVyLmpzIiwianMvdXRpbHMvY29sbGlzaW9ucy5qcyIsImpzL3V0aWxzL2VtaXR0ZXJzLmpzIiwianMvdXRpbHMvdG50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFTLGNBQVQ7Ozs7O0FDQUEsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFYLENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLE9BQU8sSUFBakMsRUFBdUMsU0FBdkMsQ0FBWDtBQUFBLElBQ0ksWUFBWSxRQUFTLGVBQVQsQ0FEaEI7QUFBQSxJQUVJLFlBQVksUUFBUyxlQUFULENBRmhCO0FBQUEsSUFHSSxZQUFZLFFBQVMsZUFBVCxDQUhoQjs7QUFLQSxLQUFLLE1BQUwsR0FBYztBQUNiLGFBQVksQ0FEQztBQUViLFNBQVEsSUFGSztBQUdiLGFBQVk7QUFIQyxDQUFkO0FBS0E7QUFDQSxPQUFPLElBQVAsR0FBYyxJQUFkO0FBQ0EsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE1BQWYsRUFBdUIsU0FBdkI7QUFDQSxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsTUFBZixFQUF1QixTQUF2QjtBQUNBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLFNBQXZCOztBQUVBLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakI7Ozs7Ozs7Ozs7Ozs7SUNoQmEsTSxXQUFBLE07QUFFWCxzQkFBYztBQUFBOztBQUNiLGFBQUssZUFBTCxHQUF1QixFQUF2QjtBQUNBLGFBQUssZUFB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R0FBUSxFQUFsQyxFQUFzQyxJQUF0QyxFQUNNLEVBQUMsTUFBTSxjQUFQLEVBQXVCLE1BQU0sTUFBN0IsRUFETixDQUFMO0FBRUQsS0FKRCxFQUlHLElBSkg7O0FBTUMsZUFBVyxZQUFVO0FBQ3BCLFVBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUI7QUFDQSxRQUFHLElBQUg7O0FBRUQsZ0JBQVcsWUFBVTtBQUNuQixVQUFJLElBQUo7QUFDRCxNQUZELEVBRUcsSUFGSDs7QUFJQyxtQkFBYyxZQUFkLENBQTJCLFVBQVMsSUFBVCxFQUFlO0FBQ3BDLFdBQUssSUFBTCxDQUFVLFNBQVYsR0FBc0IsS0FBdEI7QUFDTixNQUZBLEVBRUUsSUFGRjtBQUlELEtBWkEsRUFZRSxJQVpGO0FBYUE7QUFDRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlIChcIi4vanMvZ2FtZS5qc1wiKTtcbiIsInZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDY0MCwgMzc2LCBQaGFzZXIuQVVUTywgJ2dhbWVEaXYnKSxcbiAgICBpbml0U3RhdGUgPSByZXF1aXJlKCAnLi9zdGF0ZXMvaW5pdCcgKSxcbiAgICBwbGF5U3RhdGUgPSByZXF1aXJlKCAnLi9zdGF0ZXMvcGxheScgKSxcbiAgICBtZW51U3RhdGUgPSByZXF1aXJlKCAnLi9zdGF0ZXMvbWVudScgKTtcblxuZ2FtZS5nbG9iYWwgPSB7XG4gZ2FtZUxldmVsIDogMCxcbiBtdXNpYyA6IG51bGwsXG4gcmFpblNvdW5kIDogbnVsbFxufVxuLy9tYWtlIHRoZSBnYW1lIGEgZ2xvYmFsIG9iamVjdFxud2luZG93LmdhbWUgPSBnYW1lO1xuZ2FtZS5zdGF0ZS5hZGQoJ2luaXQnLCBpbml0U3RhdGUpO1xuZ2FtZS5zdGF0ZS5hZGQoJ21lbnUnLCBtZW51U3RhdGUpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3BsYXknLCBwbGF5U3RhdGUpO1xuXG5nYW1lLnN0YXRlLnN0YXJ0KCdpbml0Jyk7XG4iLCJleHBvcnQgY2xhc3MgTGV2ZWwxe1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1ggPSAxMDtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1kgPSAxMDtcbiBcdCB9XG5cbiBcdCBhZGRTdGFydGluZ1RleHQoKXtcbiAgICAgICAgICAgICAgICB2YXIgbG9hZGluZ0xhYmVsID0gZ2FtZS5hZGQudGV4dCg4MCwgMjc4LCAnS2lsbCB0aGUgZXZpbCBzbGltZSEgICAtLT4nLCB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdMYWJlbC5raWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgfVxuXG4gXHQgY3JlYXRlQmFja2dyb3VuZCgpe1xuIFx0IFx0Z2FtZS53b3JsZC5zZXRCb3VuZHMoMCwgMCwgODg1LCAzNzYpO1xuXG4gXHQgXHRnYW1lLmFkZC5zcHJpdGUoMCwgMCwgJ2dhbWUtYmFja2dyb3VuZCcpO1xuXHQgXHRnYW1lLmFkZC5zcHJpdGUoNjQwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG4gXHQgfVxuXG4gXHQgYWRkUGxhdGZvcm1zKCl7XG4gXHQgXHRwbGF0Zm9ybXMuY3JlYXRlKDAsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIHBsYXRmb3Jtcy5jcmVhdGUoMTk3LCAzMDAsICdwbGF0Zm9ybTInKTtcbiAgICAgICAgcGxhdGZvcm1zLmNyZWF0ZSg1MDYsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIHBsYXRmb3Jtcy5jcmVhdGUoNjQ2LCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBwbGF0Zm9ybXMuY3JlYXRlKDY0NiwgMTEyLCAndG93ZXIxJyk7XG4gXHQgfVxuXG4gICAgIGFkZEFycm93cyhhcnJvd3Mpe1xuICAgICB9XG5cbiBcdCBhZGRSZWRTbGltZXMoKXtcbiAgICAgICAgcmVkU2xpbWVzLmNyZWF0ZSg2NzAsIDEwLCAnbW9uc3RlcjInKTtcbiAgICAgfVxuXG4gXHQgYWRkRmFsbGVycygpe1xuIFx0IFx0ZmFsbGVycy5jcmVhdGUoMzQwLCAyODIsICdmYWxsZXInKTtcbiBcdCB9XG5cbiBcdCBhZGRTbG93RmFsbGVycygpe1xuICAgICB9XG5cbiBcdCBhZGRUcmFtcG9saW5lcygpe1xuIFx0IFx0dHJhbXBvbGluZXMuY3JlYXRlKDYwMCwgMjcwLCAndHJhbXBvbGluZScpO1xuIFx0IH1cblxuIFx0IGFkZExhdmEoKXtcbiBcdCBcdGxhdmEuY3JlYXRlKDE0MSwgMzMyLCAnbGF2YScpO1xuICAgICAgICBsYXZhLmNyZWF0ZSgyNTQsIDMzMiwgJ2xhdmEyJyk7XG4gICAgICAgIGxhdmEuY3JlYXRlKDcwMCwgMzMyLCAnbGF2YTInKTtcbiBcdCB9XG5cbiAgICAgYWRkU3dpdGNoRmFsbGVycygpe1xuICAgICB9XG5cbiBcdCBhZGRFbmRpbmdUZXh0KCl7XG4gICAgICAgIGdhbWUuYWRkLnRleHQocGxheWVyLnggLSAyMDAsIDEwMCwgJ0dyZWF0IScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICc0MHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcbiAgICAgICAgICAgICAgICBnYW1lLmFkZC50ZXh0KHBsYXllci54IC0gMjAwLCAxMzYsICdUaW1lIGZvciB0aGUgbmV4dCBvbmUuLi4uJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgIH1cblxuICAgIGFkZFRudCgpe1xuICAgIH1cblxuICAgIGFkZFJpZGVycygpe1xuICAgIH1cblxuICAgIGhhbmRsZVJpZGVyc0xvZ2ljKCl7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JDb29sS2lsbFRleHQoKXtcbiAgICAgfVxuXG5cbn1cbiIsImV4cG9ydCBjbGFzcyBMZXZlbDJ7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHQgXHR0aGlzLnBsYXllclN0YXJ0aW5nWCA9IDEwO1xuXHQgXHR0aGlzLnBsYXllclN0YXJ0aW5nWSA9IDEwO1xuIFx0IH1cblxuIFx0IGFkZFN0YXJ0aW5nVGV4dCgpe1xuICAgICAgICAgICAgICAgIHZhciBsZXZlbExhYmVsID0gZ2FtZS5hZGQudGV4dCgxMTAsIDI3OCwgJ0tpbGwgMiByZWQgZXZpbCBzbGltZXMhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxMYWJlbC5raWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgYWRkRW5kaW5nVGV4dCgpe1xuICAgICAgICBnYW1lLmFkZC50ZXh0KHBsYXllci54IC0gMjAwLCAxMDAsICdOaWNlIScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICc0MHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcbiAgICAgICAgICAgICAgICBnYW1lLmFkZC50ZXh0KHBsYXllci54IC0gMjAwLCAxMzYsICdHZXQgcmVhZHkgZm9yIG1vcmUuLi4nLFxuICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgfVxuXG4gXHQgY3JlYXRlQmFja2dyb3VuZCgpe1xuICAgICAgICBnYW1lLndvcmxkLnNldEJvdW5kcygwLCAwLCAxNzA1LCAzNzYpO1xuXG4gICAgICAgIGdhbWUuYWRkLnNwcml0ZSgwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG4gICAgICAgIGdhbWUuYWRkLnNwcml0ZSg2NDAsIDAsICdnYW1lLWJhY2tncm91bmQnKTtcbiAgICAgICAgZ2FtZS5hZGQuc3ByaXRlKDEyODAsIDAsICdnYW1lLWJhY2tncm91bmQnKTtcbiAgICAgfVxuXG4gICAgIGFkZFBsYXRmb3Jtcygpe1xuICAgICAgICBwbGF0Zm9ybXMuY3JlYXRlKDc1NCwgMTcyLCAndG93ZXIxJyk7XG4gICAgICAgIHBsYXRmb3Jtcy5jcmVhdGUoODg3LCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBwbGF0Zm9ybXMuY3JlYXRlKDEwMjgsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIHBsYXRmb3Jtcy5jcmVhdGUoMTE2OSwgMzAwLCAncGxhdGZvcm0nKTtcbiAgICAgICAgcGxhdGZvcm1zLmNyZWF0ZSgxMTY5LCAyNzIsICd0b3dlcjEnKTtcbiAgICAgICAgcGxhdGZvcm1zLmNyZWF0ZSgxMzEwLCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBwbGF0Zm9ybXMuY3JlYXRlKDE0NTEsIDMwMCwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIHBsYXRmb3Jtcy5jcmVhdGUoMTQxMCwgMTEyLCAndG93ZXIxJyk7XG4gICAgIH1cblxuICAgIGFkZEFycm93cyhhcnJvd3Mpe1xuICAgICAgICBhcnJvd3MuY3JlYXRlKDEyMzAsIDI0MCwgJ2Fycm93Jyk7XG4gICAgIH1cblxuIFx0IGFkZFJlZFNsaW1lcygpe1xuICAgICAgICByZWRTbGltZXMuY3JlYXRlKDE0NzAsIDEwLCAnbW9uc3RlcjInKTtcbiAgICAgICAgcmVkU2xpbWVzLmNyZWF0ZSgzOTAsIDcwLCAnbW9uc3RlcjInKTtcbiAgICAgfVxuXG4gXHQgYWRkRmFsbGVycygpe1xuIFx0IH1cblxuIFx0IGFkZFRyYW1wb2xpbmVzKHRyYW1wb2xpbmVzKXtcbiAgICAgICAgdHJhbXBvbGluZXMuY3JlYXRlKDUwLCAyNzAsICd0cmFtcG9saW5lJyk7XG4gICAgICAgIHRyYW1wb2xpbmVzLmNyZWF0ZSg5MDAsIDI3MCwgJ3RyYW1wb2xpbmUnKTtcbiAgICAgfVxuXG4gICAgIGFkZFNsb3dGYWxsZXJzKCl7XG4gICAgICAgICAgICAgICAgc2xvd0ZhbGxlcnMuY3JlYXRlKDIwLCAyODIsICdmYWxsZXInKTtcbiAgICAgfVxuXG5cbiBcdCBhZGRMYXZhKCl7XG4gICAgICAgIGxhdmEuY3JlYXRlKDAsIDMzMiwgJ2xhdmEyJyk7XG4gICAgICAgIGxhdmEuY3JlYXRlKDI1MiwgMzMyLCAnbGF2YTInKTtcbiAgICAgICAgbGF2YS5jcmVhdGUoNTAyLCAzMzIsICdsYXZhMicpO1xuICAgICAgICBsYXZhLmNyZWF0ZSg3NTQsIDMzMiwgJ2xhdmEyJyk7XG4gICAgICAgIGxhdmEuY3JlYXRlKDE1MTAsIDM1MiwgJ2xhdmEyJyk7XG4gXHQgfVxuXG4gICAgIGFkZFJpZGVycygpe1xuICAgICAgICB0aGlzLnJpZGVyMSA9IHJpZGVycy5jcmVhdGUoNDkwLCAyMDAsICdmYWxsZXInKTtcbiAgICAgfVxuXG4gICAgIGFkZFN3aXRjaEZhbGxlcnMoKXtcbiAgICAgfVxuXG4gICAgIGFkZFRudCgpe1xuICAgICB9XG5cbiAgICAgaGFuZGxlUmlkZXJzTG9naWMoKXtcbiAgICAgICAgaWYodGhpcy5yaWRlcjEueCA+IDY1MCl7XG4gICAgICAgICAgICB0aGlzLnJpZGVyMS5ib2R5LnZlbG9jaXR5LnggPSAtMTAwO1xuICAgICAgICB9XG4gICAgIH1cblxuICAgICBjaGVja0ZvckNvb2xLaWxsVGV4dCgpe1xuICAgICAgICBpZihyZWRTbGltZXMuY291bnRMaXZpbmcoKSA9PSAxKXtcbiAgICAgICAgICAgICAgICB2YXIgaW5mb0xhYmVsID0gZ2FtZS5hZGQudGV4dCgzMTAsIDI3OCwgJ09uZSBtb3JlIScsXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9MYWJlbC5raWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJleHBvcnQgY2xhc3MgTGV2ZWwze1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1ggPSAxMDtcblx0IFx0dGhpcy5wbGF5ZXJTdGFydGluZ1kgPSAxMDtcbiBcdCB9XG5cbiBcdCBhZGRTdGFydGluZ1RleHQoKXtcbiAgICAgICAgICAgICAgICB2YXIgbGV2ZWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgJ1RpbWUgdG8gYmxvdyBzb21lIHNoaXQgdXAhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxMYWJlbC5raWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgYWRkRW5kaW5nVGV4dCgpe1xuICAgICAgICBnYW1lLmFkZC50ZXh0KDIwMCwgMTAwLCAnU3Vydml2ZWQhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzQwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgICAgICAgICAgICAgIGdhbWUuYWRkLnRleHQoMjAwLCAxMzYsICdZb3UgbHVja3kgc29uIG9mIGEgc2xpbWUhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuICAgIH1cblxuIFx0IGNyZWF0ZUJhY2tncm91bmQoKXtcbiAgICAgICAgZ2FtZS53b3JsZC5zZXRCb3VuZHMoMCwgMCwgNjQwLCAzNzYpO1xuXG4gICAgICAgIGdhbWUuYWRkLnNwcml0ZSgwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG4gICAgIH1cblxuICAgICBhZGRQbGF0Zm9ybXMoKXtcbiAgICAgICAgcGxhdGZvcm1zLmNyZWF0ZSgwLCAxMTIsICd0b3dlcjEnKTtcbiAgICAgICAgcGxhdGZvcm1zLmNyZWF0ZSgxLCAzMDAsICdwbGF0Zm9ybScpO1xuICAgICAgICBwbGF0Zm9ybXMuY3JlYXRlKDQyMSwgMjg5LCAnZmFsbGVyJyk7XG4gICAgIH1cblxuICAgIGFkZEFycm93cyhhcnJvd3Mpe1xuICAgICB9XG5cbiBcdCBhZGRSZWRTbGltZXMoKXtcbiAgICAgICAgcmVkU2xpbWVzLmNyZWF0ZSgzNTAsIDEwLCAnbW9uc3RlcjInKTtcbiAgICAgICAgcmVkU2xpbWVzLmNyZWF0ZSg1NjAsIDEwLCAnbW9uc3RlcjInKTtcbiAgICAgfVxuXG4gXHQgYWRkRmFsbGVycygpe1xuIFx0IH1cblxuIFx0IGFkZFRyYW1wb2xpbmVzKHRyYW1wb2xpbmVzKXtcbiAgICAgICAgIHRyYW1wb2xpbmVzLmNyZWF0ZSgxNjAsIDEwLCAndHJhbXBvbGluZScpO1xuICAgICB9XG5cbiAgICAgYWRkU2xvd0ZhbGxlcnMoKXtcbiAgICAgfVxuXG5cbiBcdCBhZGRMYXZhKCl7XG4gICAgICAgIGxhdmEuY3JlYXRlKDE0MiwgMzMyLCAnbGF2YScpO1xuICAgICAgICBsYXZhLmNyZWF0ZSgxOTgsIDMzMiwgJ2xhdmEnKTtcbiAgICAgICAgbGF2YS5jcmVhdGUoMjU0LCAzMzIsICdsYXZhMicpO1xuICAgICAgICBsYXZhLmNyZWF0ZSg1MDYsIDMzMiwgJ2xhdmEyJyk7XG4gXHQgfVxuXG4gICAgIGFkZFN3aXRjaEZhbGxlcnMoKXtcbiAgICAgICAgc3dpdGNoRmFsbGVycy5jcmVhdGUoMTM2LCAyNDIsICdmYWxsZXInKTtcbiAgICAgICAgc3dpdGNoRmFsbGVycy5jcmVhdGUoMzMwLCAxMTIsICdmYWxsZXInKTtcblxuICAgICAgICBzd2l0Y2hGYWxsZXJzLmNyZWF0ZSgyMDgsIDI0MiwgJ3BsYXRmb3JtJyk7XG4gICAgICAgIHN3aXRjaEZhbGxlcnMuY3JlYXRlKDM0OSwgMjg5LCAnZmFsbGVyJyk7XG4gICAgICAgIHN3aXRjaEZhbGxlcnMuY3JlYXRlKDQ5MywgMjg5LCAnZmFsbGVyJyk7XG4gICAgICAgIHN3aXRjaEZhbGxlcnMuY3JlYXRlKDU2NSwgMjg5LCAnZmFsbGVyJyk7XG4gICAgICAgIHN3aXRjaEZhbGxlcnMuY3JlYXRlKDUzMCwgMzIsICd0b3dlcjEnKTtcbiAgICAgfVxuXG4gICAgIGFkZFJpZGVycygpe1xuICAgICB9XG5cbiAgICAgYWRkVG50KCl7XG4gICAgICAgIHRudCA9IGdhbWUuYWRkLnNwcml0ZSgzNjAsIDE1MCwgJ3RudCcpO1xuICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0bnQpO1xuICAgICAgICB0bnQuYm9keS5ib3VuY2UueSA9IDAuMjtcbiAgICAgICAgdG50LmJvZHkuZ3Jhdml0eS55ID0gMzAwO1xuICAgICAgICB0bnQuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICB9XG5cbiAgICAgaGFuZGxlUmlkZXJzTG9naWMoKXtcbiAgICAgfVxuXG4gICAgIGNoZWNrRm9yQ29vbEtpbGxUZXh0KCl7XG4gICAgfVxuXG59XG4iLCJ2YXIgaW5pdFN0YXRlID0ge1xuXG5cdHByZWxvYWQ6IGZ1bmN0aW9uKCl7XG5cblx0XHR2YXIgbG9hZGluZ0xhYmVsID0gZ2FtZS5hZGQudGV4dCgyMCwgMTUwLCAnbG9hZGluZyBnYW1lIGRhdGEuLi4nLFxuXHRcdFx0e2ZvbnQ6ICc0MHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcblxuXHRcdGdhbWUubG9hZC5hdWRpbygnbXVzaWMnLCAnYXNzZXRzL3NvdW5kL211c2ljLm1wMycpOyAvLyBodHRwOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvcmlzZS1vZi1zcGlyaXRcblx0XHRnYW1lLmxvYWQuYXVkaW8oJ2p1bXAnLCAnYXNzZXRzL3NvdW5kL2p1bXAubXAzJyk7XG5cdFx0Z2FtZS5sb2FkLmF1ZGlvKCd0cmFtcG9saW5lX2p1bXAnLCAnYXNzZXRzL3NvdW5kL3RyYW1wb2xpbmVfanVtcC5tcDMnKTsgLy8gaHR0cDovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL2FydGVmZmVjdC9zb3VuZHMvMzQ5ODU0L1xuXG5cdFx0Z2FtZS5sb2FkLmF1ZGlvKCdzcGxhc2gtZGVhdGgnLCAnYXNzZXRzL3NvdW5kL3NwbGFzaC1kZWF0aC5tcDMnKTsgLy8gaHR0cDovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL1NldHVuaW1hbi9zb3VuZHMvMTM1Nzc0L1xuXHRcdGdhbWUubG9hZC5hdWRpbygncmFpbicsICdhc3NldHMvc291bmQvcmFpbi5tcDMnKTsgLy8gaHR0cDovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL2ptYnBoaWxtZXMvc291bmRzLzIwMDI3Mi9cblx0XHRnYW1lLmxvYWQuYXVkaW8oJ2RpbmcnLCAnYXNzZXRzL3NvdW5kL2RpbmcubXAzJyk7IC8vIGh0dHA6Ly9mcmVlc291bmQub3JnL3Blb3BsZS9nbG9yaWFlZmZlY3Qvc291bmRzLzEwODQyOC9cblx0XHRnYW1lLmxvYWQuYXVkaW8oJ3RudCcsICdhc3NldHMvc291bmQvdG50Lm1wMycpOyAvLyBodHRwOi8vZnJlZXNvdW5kLm9yZy9wZW9wbGUvcnlhbnNub29rL3NvdW5kcy8xMTAxMTEvXG5cdFx0Ly8gaHR0cDovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL3RoZW5lZWRsZS50di9zb3VuZHMvMzE2NjgyL1xuXG5cblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ21lbnUtYmFja2dyb3VuZCcsICdhc3NldHMvaW1nL21lbnUtYmFja2dyb3VuZC5wbmcnKTsgLy8gaHR0cDovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2luZHVzdHJpYWwtcGFyYWxsYXgtYmFja2dyb3VuZFxuXHRcdGdhbWUubG9hZC5pbWFnZSgnZ2FtZS1iYWNrZ3JvdW5kJywgJ2Fzc2V0cy9pbWcvZ2FtZS1iYWNrZ3JvdW5kLnBuZycpOyAvLyBodHRwOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaW5kdXN0cmlhbC1wYXJhbGxheC1iYWNrZ3JvdW5kXG5cdCAgICBnYW1lLmxvYWQuaW1hZ2UoJ3BsYXRmb3JtJywgJ2Fzc2V0cy9pbWcvcGxhdGZvcm0ucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCdwbGF0Zm9ybTInLCAnYXNzZXRzL2ltZy9wbGF0Zm9ybTIucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCd0b3dlcjEnLCAnYXNzZXRzL2ltZy90b3dlcjEucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCdmYWxsZXInLCAnYXNzZXRzL2ltZy9mYWxsZXIucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCd0cmFtcG9saW5lJywgJ2Fzc2V0cy9pbWcvdHJhbXBvbGluZS5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ2Fycm93JywgJ2Fzc2V0cy9pbWcvYXJyb3cucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLmltYWdlKCd0bnQnLCAnYXNzZXRzL2ltZy90bnQucG5nJyk7XG5cdFx0Z2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdsYXZhJywgJ2Fzc2V0cy9pbWcvbGF2YS5wbmcnLCA1NiwgMzIpO1xuXHRcdGdhbWUubG9hZC5zcHJpdGVzaGVldCgnbGF2YTInLCAnYXNzZXRzL2ltZy9sYXZhMi5wbmcnLCAyNTIsIDMyKTtcblxuXHRcdGdhbWUubG9hZC5pbWFnZSgncGFydGljbGUnLCAnYXNzZXRzL2ltZy9wYXJ0aWNsZS5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3BhcnRpY2xlMicsICdhc3NldHMvaW1nL3BhcnRpY2xlMi5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3JlZC1wYXJ0aWNsZScsICdhc3NldHMvaW1nL3BhcnRpY2xlLXJlZC5wbmcnKTtcblx0XHRnYW1lLmxvYWQuaW1hZ2UoJ3JhaW4nLCAnYXNzZXRzL2ltZy9yYWluLnBuZycpO1xuXG5cdFx0Z2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdtb25zdGVyMScsICdhc3NldHMvaW1nL21vbnN0ZXIxLnBuZycsIDMwLCAyMyk7IC8vIGh0dHA6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9zY2lmaS1jcmVhdHVyZS10aWxlc2V0LW1pbmktMzJ4MzItc2NpZmktY3JlYXR1cmUtaWNvbnNcblx0XHRnYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ21vbnN0ZXIyJywgJ2Fzc2V0cy9pbWcvbW9uc3RlcjIucG5nJywgMzAsIDIzKTsgLy8gaHR0cDovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3NjaWZpLWNyZWF0dXJlLXRpbGVzZXQtbWluaS0zMngzMi1zY2lmaS1jcmVhdHVyZS1pY29uc1xuXG5cblxuXHR9LFxuXG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRnYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcblx0XHRnYW1lLmdsb2JhbC5tdXNpYyA9IGdhbWUuYWRkLmF1ZGlvKCdtdXNpYycsMSx0cnVlKTtcblx0XHRnYW1lLmdsb2JhbC5yYWluU291bmQgPSBnYW1lLmFkZC5hdWRpbygncmFpbicsMSx0cnVlKTtcblxuXHRcdC8vIHBsYXlpbmcgYXJvdW5kIHdpdGggc2NhbGluZyBvbiBtb2JpbGVcblx0XHRpZiAoIWdhbWUuZGV2aWNlLmRlc2t0b3Ape1xuXHRcdFx0dGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG4gICAgXHRcdHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgIFx0XHR0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXG5cblx0Y3JlYXRlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmluaXQoKTtcblxuXHRcdGdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcblx0fVxuXG59O1xubW9kdWxlLmV4cG9ydHMgPSBpbml0U3RhdGU7XG4iLCJ2YXIgbW9uc3RlcjEsIG1vbnN0ZXIyO1xudmFyIG1lbnVTdGF0ZSA9IHtcblxuXHRjcmVhdGU6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Z2FtZS5nbG9iYWwubXVzaWMucGxheSgpO1xuXHRcdGdhbWUuZ2xvYmFsLm11c2ljLnZvbHVtZSA9IDEuMFxuXG5cblx0XHRnYW1lLmFkZC5zcHJpdGUoMCwgMCwgJ21lbnUtYmFja2dyb3VuZCcpO1xuXG5cdFx0bW9uc3RlcjEgPSBnYW1lLmFkZC5zcHJpdGUoMTYwLCBnYW1lLndvcmxkLmhlaWdodC02MCwgJ21vbnN0ZXIxJyk7XG5cdFx0bW9uc3RlcjEuYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgWzAsIDEsIDJdLCA1LCB0cnVlKTtcblxuXHRcdG1vbnN0ZXIyID0gZ2FtZS5hZGQuc3ByaXRlKDQzMCwgZ2FtZS53b3JsZC5oZWlnaHQtNjAsICdtb25zdGVyMScpO1xuXHRcdG1vbnN0ZXIyLmFuaW1hdGlvbnMuYWRkKCdzdGFuZCcsIFswLCAxLCAyXSwgNSwgdHJ1ZSk7XG5cblx0XHRpZiAoIWdhbWUuZGV2aWNlLmRlc2t0b3Ape1xuXHRcdFx0dmFyIHN0YXJ0TGFiZWwgPSBnYW1lLmFkZC50ZXh0KDIwMCwgZ2FtZS53b3JsZC5oZWlnaHQtNjAsICdUYXAgc2NyZWVuIHRvIHN0YXJ0Jywge2ZvbnQ6ICcyNXB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBzdGFydExhYmVsID0gZ2FtZS5hZGQudGV4dCgyMDAsIGdhbWUud29ybGQuaGVpZ2h0LTYwLCAnUHJlc3MgU3BhY2UgdG8gc3RhcnQnLHtmb250OiAnMjVweCBBcmlhbCcsIGZpbGw6ICcjZmZmZmZmJ30pO1xuXHRcdH1cblxuXG5cdFx0dmFyIHNwYWNlS2V5ID0gZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSKTtcblx0XHRzcGFjZUtleS5vbkRvd24uYWRkT25jZSh0aGlzLnN0YXJ0R2FtZSwgdGhpcyk7XG5cdH0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRtb25zdGVyMS5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJyk7XG5cdFx0bW9uc3RlcjIuYW5pbWF0aW9ucy5wbGF5KCdzdGFuZCcpO1xuXHR9LFxuXG5cdHN0YXJ0R2FtZTogZnVuY3Rpb24oKXtcblx0XHRnYW1lLmdsb2JhbC5tdXNpYy52b2x1bWUgPSAwLjM7XG5cblx0XHRnYW1lLnN0YXRlLnN0YXJ0KCdwbGF5Jyk7XG5cdH0sXG5cbn07XG5tb2R1bGUuZXhwb3J0cyA9IG1lbnVTdGF0ZTtcbiIsImltcG9ydCB7TGV2ZWwxfSBmcm9tICcuLi9sZXZlbHMvbGV2ZWwwMSdcbmltcG9ydCB7TGV2ZWwyfSBmcm9tICcuLi9sZXZlbHMvbGV2ZWwwMidcbmltcG9ydCB7TGV2ZWwzfSBmcm9tICcuLi9sZXZlbHMvbGV2ZWwwMydcbmltcG9ydCB7QXJyb3dCb29zdGVyfSBmcm9tICcuLi91dGlscy9ib29zdGVyJ1xuaW1wb3J0IHtDb2xsaXNpb25zSGFuZGxlcn0gZnJvbSAnLi4vdXRpbHMvY29sbGlzaW9ucydcbmltcG9ydCB7UmFpbkVtaXR0ZXIsIEp1aWNlRW1pdHRlcnN9IGZyb20gJy4uL3V0aWxzL2VtaXR0ZXJzJ1xuaW1wb3J0IHtUbnRIYW5kbGVyfSBmcm9tICcuLi91dGlscy90bnQnXG52YXIgbGV2ZWwsXG5cdGNvbGxpc2lvbnNIYW5kbGVyLFxuXHRhcnJvd0Jvb3N0ZXIsXG5cdHRudEhhbmRsZXIsXG5cdHJhaW5FbWl0dGVyO1xuXG5cbi8vIFRvZG86IHN0b3JlIHRob3NlIGVsZW1lbnRzIGluIG9uZSBnbG9iYWwgb2JqZWN0IGxpa2Ugd2luZG93LmdhbWVcbi8vIG9yIHBhc3MgcmVmZXJlbmNlcyBvZiBvYmplY3RzIGJldHdlZW4gdGhlbVxud2luZG93Lmp1aWNlRW1pdHRlcnMgPSBbXTtcbndpbmRvdy50bnQgPSB7fTtcbndpbmRvdy5wbGF5ZXIgPSB7fTtcbndpbmRvdy5sYXZhID0ge307XG53aW5kb3cucmVkU2xpbWVzID0gW107XG53aW5kb3cudHJhbXBvbGluZXMgPSBbXTtcbndpbmRvdy5zbG93RmFsbGVycyA9IFtdO1xud2luZG93LnBsYXRmb3JtcyA9IFtdO1xud2luZG93LnJpZGVycyA9IFtdO1xud2luZG93LmZhbGxlcnMgPSBbXTtcbndpbmRvdy5hcnJvd3MgPSBbXTtcbndpbmRvdy5zd2l0Y2hGYWxsZXJzID0gW107XG53aW5kb3cuY3Vyc29ycyA9IFtdO1xudmFyIHBsYXlTdGF0ZSA9IHtcblxuXHRyZXNldFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHdpbmRvdy5jYW5Cb29zdEZsYWcgPSB0cnVlO1xuXHRcdHdpbmRvdy5jYW5UbnRFeHBsb2RlID0gdHJ1ZTtcblx0IFx0d2luZG93LmlzUGxheWVyRGVhZCA9IGZhbHNlO1xuXHQgXHR3aW5kb3cuaGFzUGxheWVyV29uID0gZmFsc2U7XG5cdCB9LFxuXG5cdGNob29zZUxldmVsOiBmdW5jdGlvbigpe1xuXHRcdGNvbnN0IGxldmVscyA9IFtuZXcgTGV2ZWwxKCksIG5ldyBMZXZlbDIoKSwgbmV3IExldmVsMygpXTtcblx0XHRyZXR1cm4gbGV2ZWxzW2dhbWUuZ2xvYmFsLmdhbWVMZXZlbF07XG5cdH0sXG5cblx0Y3JlYXRlOiBmdW5jdGlvbigpIHtcblx0XHRsZXZlbCA9IHRoaXMuY2hvb3NlTGV2ZWwoKTtcblx0XHR0aGlzLnJlc2V0U3RhdGUoKTtcblxuXHRcdGNvbGxpc2lvbnNIYW5kbGVyID0gbmV3IENvbGxpc2lvbnNIYW5kbGVyKCk7XG5cdFx0anVpY2VFbWl0dGVycyA9IG5ldyBKdWljZUVtaXR0ZXJzKCk7XG5cdFx0YXJyb3dCb29zdGVyID0gbmV3IEFycm93Qm9vc3RlcigpO1xuXHRcdHRudEhhbmRsZXIgPSBuZXcgVG50SGFuZGxlcigpO1xuXG5cdFx0bGV2ZWwuY3JlYXRlQmFja2dyb3VuZChnYW1lKTtcblx0XHRsZXZlbC5hZGRTdGFydGluZ1RleHQoZ2FtZSk7XG5cblxuXHRcdHRoaXMuaW5pdFRudCgpO1xuXHRcdHRoaXMuaW5pdFBsYXllcigpO1xuXHRcdHRoaXMuaW5pdFJlZFNsaW1lcygpO1xuXHRcdHRoaXMuaW5pdExhdmEoKTtcblx0XHR0aGlzLmluaXRUcmFtcG9saW5lcygpO1xuXHRcdHRoaXMuaW5pdFNsb3dGYWxsZXJzKCk7XG5cdFx0dGhpcy5pbml0UGxhdGZvcm1zKCk7XG5cdFx0dGhpcy5pbml0UmlkZXJzKCk7XG5cdFx0dGhpcy5pbml0RmFsbGVycygpO1xuXHRcdHRoaXMuaW5pdEFycm93cygpO1xuXHRcdHRoaXMuaW5pdFN3aXRjaEZhbGxlcnMoKTtcblx0XHR0aGlzLmluaXRSYWluKCk7XG5cblx0XHRjdXJzb3JzID0gZ2FtZS5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG5cbiAgICAgICAgZ2FtZS5jYW1lcmEuZm9sbG93KHBsYXllcik7XG5cdH0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbigpIHtcblxuXHRcdC8vIGNvbGxpc2lvc1xuXHQgXHRjb2xsaXNpb25zSGFuZGxlci51cGRhdGUoKTtcblxuXHRcdC8vIGFuaW1hdGlvbnNcblx0IFx0cGxheWVyLmFuaW1hdGlvbnMucGxheSgnc3RhbmQnKTtcblx0IFx0bGF2YS5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgIFx0IFx0aXRlbS5hbmltYXRpb25zLnBsYXkoJ3N0YW5kJyk7XG5cdFx0fSwgdGhpcyk7XG5cdFx0cmVkU2xpbWVzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgXHQgXHRpdGVtLmFuaW1hdGlvbnMucGxheSgnc3RhbmQnKTtcblx0XHR9LCB0aGlzKTtcblxuXG5cdCBcdC8vIHByZXZlbnRpbmcgXCJmcmVlIG1vdmVcIlxuXHQgICAgcGxheWVyLmJvZHkudmVsb2NpdHkueCA9IDA7XG5cdCAgICB0cmFtcG9saW5lcy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuXHQgICAgXHRpdGVtLmJvZHkudmVsb2NpdHkueCA9IDA7XG5cdFx0fSwgdGhpcyk7XG5cdFx0ZmFsbGVycy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuXHQgICAgXHRpdGVtLmJvZHkudmVsb2NpdHkueCA9IDA7XG5cdFx0fSwgdGhpcyk7XG5cdFx0c2xvd0ZhbGxlcnMuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGl0ZW0pIHtcblx0ICAgIFx0aXRlbS5ib2R5LnZlbG9jaXR5LnggPSAwO1xuXHQgXHRcdGl0ZW0uYm9keS52ZWxvY2l0eS55ID0gMDtcblx0XHR9LCB0aGlzKTtcblxuXHQgICAgLy8gY29udHJvbHNcblx0ICAgIGlmIChjdXJzb3JzLmxlZnQuaXNEb3duKXtcblx0ICAgICAgICBwbGF5ZXIuYm9keS52ZWxvY2l0eS54ID0gLTE1MDtcblx0ICAgIH1cblx0ICAgIGVsc2UgaWYgKGN1cnNvcnMucmlnaHQuaXNEb3duKXtcblx0ICAgICAgICBwbGF5ZXIuYm9keS52ZWxvY2l0eS54ID0gMTUwO1xuXHQgICAgfVxuXHQgICAgLy8ganVtcCFcblx0ICAgIGlmIChjdXJzb3JzLnVwLmlzRG93biAmJiBwbGF5ZXIuYm9keS50b3VjaGluZy5kb3duKXtcblx0ICAgIFx0Z2FtZS5hZGQudHdlZW4ocGxheWVyKS50byggeyBhbmdsZTogMzYwIH0sIDYwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSk7XG5cblx0ICAgIFx0anVpY2VFbWl0dGVycy5zcGF3bkp1bXBFbWl0dGVycygpO1xuXHQgICAgXHRnYW1lLnNvdW5kLnBsYXkoJ2p1bXAnKTtcblx0ICAgICAgICBwbGF5ZXIuYm9keS52ZWxvY2l0eS55ID0gLTE1MDtcblx0ICAgIH1cblxuXHQgICAgLy8gb3ZlcmxhcHNcblx0ICAgIGdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChwbGF5ZXIsIGxhdmEsIHRoaXMua2lsbFBsYXllciwgbnVsbCwgdGhpcyk7XG5cdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHBsYXllciwgdHJhbXBvbGluZXMsIHRoaXMudHJhbXBvbGluZVBsYXllciwgbnVsbCwgdGhpcyk7XG5cdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHBsYXllciwgYXJyb3dzLCB0aGlzLmFycm93Qm9vc3QsIG51bGwsIHRoaXMpO1xuXHRcdGdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChyZWRTbGltZXMsIHRyYW1wb2xpbmVzLCB0aGlzLnRyYW1wb2xpbmVTbGltZSwgbnVsbCwgdGhpcyk7XG5cdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHJlZFNsaW1lcywgbGF2YSwgdGhpcy5raWxsUmVkU2xpbWUsIG51bGwsIHRoaXMpO1xuXHRcdGdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChwbGF5ZXIsIHRudCwgdGhpcy50bnRFeHBsb2RlLCBudWxsLCB0aGlzKTtcblx0ICAgIGdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcChyZWRTbGltZXMsIHRudCwgdGhpcy50bnRFeHBsb2RlLCBudWxsLCB0aGlzKTtcblxuXHRcdGxldmVsLmhhbmRsZVJpZGVyc0xvZ2ljKCk7XG5cdH0sXG5cblx0YXJyb3dCb29zdDogZnVuY3Rpb24ocGxheWVyLCBhcnJvdyl7XG5cdCBcdGFycm93Qm9vc3Rlci5ib29zdChhcnJvdyk7XG5cdCB9LFxuXG5cdCBpbml0VG50OiBmdW5jdGlvbigpe1xuXHQgXHR0bnQgPSBudWxsO1xuXHQgXHRsZXZlbC5hZGRUbnQoKTtcblx0IH0sXG5cblx0IHRudEV4cGxvZGU6IGZ1bmN0aW9uKCl7XG5cdCBcdFx0dG50SGFuZGxlci5leHBsb2RlKHRudCk7XG5cdCB9LFxuXG5cdGtpbGxQbGF5ZXI6IGZ1bmN0aW9uKCl7XG5cdCBcdGlmKCF3aW5kb3cuaGFzUGxheWVyV29uKXtcblx0IFx0XHR0aGlzLnNoYWtlQ2FtZXJhKCk7XG5cdFx0XHRqdWljZUVtaXR0ZXJzLnNwYXduUGxheWVyS2lsbEVtaXR0ZXJzKCk7XG5cblx0IFx0XHR3aW5kb3cuaXNQbGF5ZXJEZWFkID0gdHJ1ZTtcblx0XHQgXHRnYW1lLnNvdW5kLnBsYXkoJ3NwbGFzaC1kZWF0aCcpO1xuXHRcdCBcdHBsYXllci5raWxsKCk7XG5cdFx0IFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdCBcdFx0Z2FtZS5zdGF0ZS5zdGFydCgncGxheScpO1xuXHRcdFx0fSwgNjAwKTtcblx0IFx0fVxuXHQgfSxcblxuXHQga2lsbFJlZFNsaW1lOiBmdW5jdGlvbihyZWRTbGltZSl7XG5cdCBcdGlmKCF3aW5kb3cuaXNQbGF5ZXJEZWFkKXtcblxuXHQgXHRcdGp1aWNlRW1pdHRlcnMuc3Bhd25LaWxsUmVkU2xpbWVFbWl0dGVycyhyZWRTbGltZSk7XG5cblx0XHQgXHRnYW1lLnNvdW5kLnBsYXkoJ3NwbGFzaC1kZWF0aCcpO1xuXHRcdCBcdHRoaXMuc2hha2VDYW1lcmEoKTtcblx0XHQgXHRyZWRTbGltZS5raWxsKCk7XG5cblx0XHQgXHRsZXZlbC5jaGVja0ZvckNvb2xLaWxsVGV4dCgpO1xuXG5cdFx0IFx0aWYocmVkU2xpbWVzLmNvdW50TGl2aW5nKCkgPD0gMCl7XG5cdFx0IFx0XHRsZXZlbC5hZGRFbmRpbmdUZXh0KGdhbWUsIHBsYXllcik7XG5cdFx0IFx0XHR3aW5kb3cuaGFzUGxheWVyV29uID0gdHJ1ZTtcblx0XHRcdCBcdGdhbWUuZ2xvYmFsLmdhbWVMZXZlbCsrO1xuXG5cdFx0IFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cblx0XHRcdCBcdFx0Z2FtZS5zdGF0ZS5zdGFydCgncGxheScpO1xuXG5cdFx0XHRcdH0sIDMwMDApO1xuXHRcdFx0fVxuXHQgXHR9XG5cblx0IH0sXG5cblx0IHNoYWtlQ2FtZXJhOiBmdW5jdGlvbigpe1xuXHQgXHRnYW1lLmNhbWVyYS5zaGFrZSgwLjAxLCAzMDApO1xuXHQgfSxcblxuXHRpbml0UGxheWVyOiBmdW5jdGlvbigpe1xuXHRcdHBsYXllciA9IGdhbWUuYWRkLnNwcml0ZShsZXZlbC5wbGF5ZXJTdGFydGluZ1gsIGxldmVsLnBsYXllclN0YXJ0aW5nWSwgJ21vbnN0ZXIxJyk7XG5cdFx0cGxheWVyLmFuY2hvci5zZXRUbygwLjUsMC41KTtcblx0XHRwbGF5ZXIuYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgWzAsIDEsIDJdLCA1LCB0cnVlKTtcblx0XHRnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShwbGF5ZXIpO1xuXHRcdHBsYXllci5ib2R5LmJvdW5jZS55ID0gMC4yO1xuICAgXHRcdHBsYXllci5ib2R5LmdyYXZpdHkueSA9IDMwMDtcbiAgICAgICAgcGxheWVyLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcblx0IH0sXG5cblx0IGluaXRQbGF0Zm9ybXM6IGZ1bmN0aW9uKCl7XG5cdFx0cGxhdGZvcm1zID0gZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgcGxhdGZvcm1zLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICBsZXZlbC5hZGRQbGF0Zm9ybXMocGxhdGZvcm1zKTtcbiAgICAgICAgcGxhdGZvcm1zLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cdFx0fSwgdGhpcyk7XG5cdCB9LFxuXG5cdCBpbml0QXJyb3dzOiBmdW5jdGlvbigpe1xuXHQgXHRhcnJvd3MgPSBnYW1lLmFkZC5ncm91cCgpO1xuXHQgXHRhcnJvd3MuZW5hYmxlQm9keSA9IHRydWU7XG5cdCBcdGxldmVsLmFkZEFycm93cyhhcnJvd3MpO1xuICAgXHRcdGFycm93cy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgIFx0IFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cdFx0fSwgdGhpcyk7XG5cdCB9LFxuXG5cdCBpbml0VHJhbXBvbGluZXM6IGZ1bmN0aW9uKCl7XG5cdFx0dHJhbXBvbGluZXMgPSBnYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0cmFtcG9saW5lcy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodHJhbXBvbGluZXMpO1xuICAgICAgICBsZXZlbC5hZGRUcmFtcG9saW5lcyh0cmFtcG9saW5lcyk7XG4gICBcdFx0dHJhbXBvbGluZXMuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgIFx0XHRcdGl0ZW0uYm9keS5ib3VuY2UueSA9IDAuMjtcbiAgIFx0XHRcdGl0ZW0uYm9keS5ncmF2aXR5LnkgPSAzMDA7XG4gICBcdFx0XHRpdGVtLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcblx0XHR9LCB0aGlzKTtcblx0IH0sXG5cblx0IGluaXRSaWRlcnM6IGZ1bmN0aW9uKCl7XG5cdCBcdHJpZGVycyA9IGdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIHJpZGVycy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUocmlkZXJzKTtcbiAgICAgICAgbGV2ZWwuYWRkUmlkZXJzKHJpZGVycyk7XG4gICAgICAgIHJpZGVycy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBcdGl0ZW0uYm9keS5pbW1vdmFibGUgPSB0cnVlO1xuICAgICAgICBcdGl0ZW0uYm9keS5ib3VuY2Uuc2V0VG8oMSwgMSk7XG4gICAgICAgXHRcdGl0ZW0uYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICBcdGl0ZW0uYm9keS52ZWxvY2l0eS5zZXRUbygtMTAwLCAwKTtcblx0XHR9LCB0aGlzKTtcblx0IH0sXG5cblx0IGluaXRSZWRTbGltZXM6IGZ1bmN0aW9uKCl7XG5cdCBcdHJlZFNsaW1lcyA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cblx0IFx0cmVkU2xpbWVzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShyZWRTbGltZXMpO1xuXG5cdFx0bGV2ZWwuYWRkUmVkU2xpbWVzKHJlZFNsaW1lcyk7XG5cdFx0cmVkU2xpbWVzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICBcdFx0XHRpdGVtLmJvZHkuYm91bmNlLnkgPSAwLjI7XG5cdFx0XHRpdGVtLmJvZHkuYm91bmNlLnggPSAxLjA7XG4gICBcdFx0XHRpdGVtLmJvZHkuZ3Jhdml0eS55ID0gMzAwO1xuICAgICAgICBcdGl0ZW0uYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICBcdGl0ZW0uYW5pbWF0aW9ucy5hZGQoJ3N0YW5kJywgWzAsIDEsIDJdLCA1LCB0cnVlKTtcblx0XHR9LCB0aGlzKTtcblx0IH0sXG5cblx0IGluaXRTd2l0Y2hGYWxsZXJzOiBmdW5jdGlvbigpe1xuXHRcdHN3aXRjaEZhbGxlcnMgPSBnYW1lLmFkZC5ncm91cCgpO1xuXHQgXHRzd2l0Y2hGYWxsZXJzLmVuYWJsZUJvZHkgPSB0cnVlO1xuXG5cdCBcdGxldmVsLmFkZFN3aXRjaEZhbGxlcnMoKTtcbiAgICAgICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoc3dpdGNoRmFsbGVycyk7XG5cbiAgIFx0XHRzd2l0Y2hGYWxsZXJzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cdFx0fSwgdGhpcyk7XG5cdCB9LFxuXG5cdCBpbml0RmFsbGVyczogZnVuY3Rpb24oKXtcblx0IFx0ZmFsbGVycyA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdFx0ZmFsbGVycy5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgbGV2ZWwuYWRkRmFsbGVycyhmYWxsZXJzKTtcblx0IH0sXG5cblx0IGluaXRTbG93RmFsbGVyczogZnVuY3Rpb24oKXtcblx0IFx0c2xvd0ZhbGxlcnMgPSBnYW1lLmFkZC5ncm91cCgpO1xuXHRcdHNsb3dGYWxsZXJzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgICAgICBsZXZlbC5hZGRTbG93RmFsbGVycyhzbG93RmFsbGVycyk7XG5cdCB9LFxuXG5cblx0IGluaXRMYXZhOiBmdW5jdGlvbigpe1xuXHQgXHRsYXZhID0gZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICAgICAgbGF2YS5lbmFibGVCb2R5ID0gdHJ1ZTtcbiAgICAgICAgbGV2ZWwuYWRkTGF2YShsYXZhKTtcbiAgICAgICAgbGF2YS5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgIFx0IFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG4gICAgICAgXHQgXHRpdGVtLmFuaW1hdGlvbnMuYWRkKCdzdGFuZCcsIFswLCAxXSwgMiwgdHJ1ZSk7XG5cdFx0fSwgdGhpcyk7XG5cdCB9LFxuXG5cdCBpbml0UmFpbjogZnVuY3Rpb24oKXtcblx0XHRnYW1lLmdsb2JhbC5yYWluU291bmQucGxheSgpO1xuXG5cdCBcdHJhaW5FbWl0dGVyID0gbmV3IFJhaW5FbWl0dGVyKCk7XG5cdFx0cmFpbkVtaXR0ZXIuc3RhcnQoKTtcblx0IH0sXG5cblx0IHRyYW1wb2xpbmVTbGltZTogZnVuY3Rpb24ocmVkU2xpbWUpe1xuXHQgXHRyZWRTbGltZS5ib2R5LnZlbG9jaXR5LnkgLT0gMjAwO1xuXHQgXHRnYW1lLnNvdW5kLnBsYXkoJ3RyYW1wb2xpbmVfanVtcCcpO1xuXHQgfSxcblxuXHQgdHJhbXBvbGluZVBsYXllcjogZnVuY3Rpb24oKXtcblx0IFx0cGxheWVyLmJvZHkudmVsb2NpdHkueSAtPSAyMDA7XG5cdCBcdGdhbWUuc291bmQucGxheSgndHJhbXBvbGluZV9qdW1wJyk7XG5cdCB9LFxuXG5cbn07XG5tb2R1bGUuZXhwb3J0cyA9IHBsYXlTdGF0ZTtcbiIsImV4cG9ydCBjbGFzcyBBcnJvd0Jvb3N0ZXJ7XG5cblx0Ym9vc3QoYXJyb3cpe1xuXHRcdGlmKHdpbmRvdy5jYW5Cb29zdEZsYWcpe1xuXHRcdFx0dmFyIGJvb3N0VHdlZW4gPSBnYW1lLmFkZC50d2VlbihwbGF5ZXIpLnRvKCB7IGFscGhhOiAwIH0sIDUwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAxMDAwLCB0cnVlKTtcblxuXHRcdFx0Z2FtZS5zb3VuZC5wbGF5KCdkaW5nJylcblx0IFx0XHR3aW5kb3cuY2FuQm9vc3RGbGFnID0gZmFsc2U7XG5cdCBcdFx0YXJyb3cua2lsbCgpO1xuXG5cdCBcdFx0dmFyIGwxID0gZ2FtZS5hZGQudGV4dChwbGF5ZXIueCAtIDgsIHBsYXllci55IC0gMzAsICczIScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICcyMHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcblxuXHQgXHRcdHZhciBsMiwgbDM7XG5cblx0IFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdCBcdFx0XHRsMS5raWxsKCk7XG5cdCBcdFx0XHRsMiA9IGdhbWUuYWRkLnRleHQocGxheWVyLnggLSA4LCBwbGF5ZXIueSAtIDMwLCAnMiEnLFxuICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG5cdFx0XHR9LCAxMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHQgXHRcdFx0bDIua2lsbCgpO1xuXHQgXHRcdFx0bDMgPSBnYW1lLmFkZC50ZXh0KHBsYXllci54IC0gOCwgcGxheWVyLnkgLSAzMCwgJzEhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuXHRcdFx0fSwgMjAwMCk7XG5cblx0XHQgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0IFx0XHRib29zdFR3ZWVuLnN0b3AoKTtcblx0ICAgIFx0XHRnYW1lLmFkZC50d2VlbihwbGF5ZXIpLnRvKCB7IGFscGhhOiAxIH0sIDUwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSk7XG5cblx0XHQgXHRcdGwzLmtpbGwoKTtcblx0XHQgXHRcdGp1aWNlRW1pdHRlcnMuc3Bhd25QbGF5ZXJCb29zdEVtaXR0ZXJzKCk7XG5cblx0XHQgXHRcdHdpbmRvdy5jYW5Cb29zdEZsYWcgPSB0cnVlO1xuXHRcdCBcdFx0cGxheWVyLmJvZHkudmVsb2NpdHkueSA9IC01MDA7XG5cdFx0XHR9LCAzMDAwKTtcblx0XHQgfVxuXHR9XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBDb2xsaXNpb25zSGFuZGxlcntcblxuXHR1cGRhdGUoKXtcblx0XHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUocGxheWVyLCBwbGF0Zm9ybXMpO1xuXHRcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShwbGF5ZXIsIHJpZGVycyk7XG5cdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHBsYXllciwgZmFsbGVycyk7XG5cdFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHBsYXllciwgdHJhbXBvbGluZXMpO1xuXHRcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShwbGF5ZXIsIHNsb3dGYWxsZXJzKTtcblx0XHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUocGxheWVyLCBzd2l0Y2hGYWxsZXJzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHRyYW1wb2xpbmVzLCBwbGF0Zm9ybXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodHJhbXBvbGluZXMsIHRyYW1wb2xpbmVzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHNsb3dGYWxsZXJzLCBwbGF0Zm9ybXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodG50LCBwbGF0Zm9ybXMpO1xuXHQgXHRnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUodG50LCBzd2l0Y2hGYWxsZXJzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHJlZFNsaW1lcywgZmFsbGVycyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShyZWRTbGltZXMsIHRyYW1wb2xpbmVzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHJlZFNsaW1lcywgc3dpdGNoRmFsbGVycyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShwbGF5ZXIsIHJlZFNsaW1lcyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShwbGF0Zm9ybXMsIHJlZFNsaW1lcyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShyZWRTbGltZXMsIHNsb3dGYWxsZXJzKTtcblx0IFx0Z2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHNsb3dGYWxsZXJzLCB0cmFtcG9saW5lcyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShyZWRTbGltZXMsIHJpZGVycyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0cmFtcG9saW5lcywgc3dpdGNoRmFsbGVycyk7XG5cdCBcdGdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZShzd2l0Y2hGYWxsZXJzLCBzd2l0Y2hGYWxsZXJzKTtcblx0fVxuXG59XG4iLCJleHBvcnQgY2xhc3MgUmFpbkVtaXR0ZXJ7XG5cblx0Y29uc3RydWN0b3IoKSB7XG4gICAgXHR0aGlzLmVtaXR0ZXIgPSBnYW1lLmFkZC5lbWl0dGVyKGdhbWUud29ybGQuY2VudGVyWCwgMCwgNDAwKTtcbiAgICBcdHRoaXMuaW5pdEVtaXR0ZXIoKTtcbiAgXHR9XG5cblx0aW5pdEVtaXR0ZXIoKXtcbiAgICAgICAgdGhpcy5lbWl0dGVyLndpZHRoID0gZ2FtZS53b3JsZC53aWR0aDtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmFuZ2xlID0gLTM7XG4gICAgICAgIHRoaXMuZW1pdHRlci5tYWtlUGFydGljbGVzKCdyYWluJyk7XG5cblx0XHR0aGlzLmVtaXR0ZXIubWluUGFydGljbGVTY2FsZSA9IDAuMTtcblx0XHR0aGlzLmVtaXR0ZXIubWF4UGFydGljbGVTY2FsZSA9IDAuNTtcblxuXHRcdHRoaXMuZW1pdHRlci5zZXRZU3BlZWQoMzAwLCA1MDApO1xuXHRcdHRoaXMuZW1pdHRlci5zZXRYU3BlZWQoLTUsIDUpO1xuXG5cdFx0dGhpcy5lbWl0dGVyLm1pblJvdGF0aW9uID0gMDtcblx0XHR0aGlzLmVtaXR0ZXIubWF4Um90YXRpb24gPSAwO1xuXHR9XG5cblx0c3RhcnQoKXtcblx0XHR0aGlzLmVtaXR0ZXIuc3RhcnQoZmFsc2UsIDgwMCwgNSwgMCk7XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgSnVpY2VFbWl0dGVyc3tcblxuXHRzcGF3bkp1bXBFbWl0dGVycygpe1xuXHRcdHRoaXMuZW1pdHRlcjEgPSBnYW1lLmFkZC5lbWl0dGVyKDAsIDAsIDEwMCk7XG4gICBcdFx0dGhpcy5lbWl0dGVyMS5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZScpO1xuXHRcdHRoaXMuZW1pdHRlcjEuZ3Jhdml0eSA9IDIwMDtcblxuXHRcdHRoaXMuZW1pdHRlcjEueCA9IHBsYXllci54O1xuICAgIFx0dGhpcy5lbWl0dGVyMS55ID0gcGxheWVyLnkgKyA1O1xuXHRcdHRoaXMuZW1pdHRlcjEuc3RhcnQodHJ1ZSwgMjAwMCwgbnVsbCwgMjApO1xuXHR9XG5cblx0c3Bhd25LaWxsUmVkU2xpbWVFbWl0dGVycyhyZWRTbGltZSl7XG5cdFx0dGhpcy5lbWl0dGVyUmVkID0gZ2FtZS5hZGQuZW1pdHRlcigwLCAwLCAxMDApO1xuICAgXHRcdHRoaXMuZW1pdHRlclJlZC5tYWtlUGFydGljbGVzKCdyZWQtcGFydGljbGUnKTtcblx0XHR0aGlzLmVtaXR0ZXJSZWQuZ3Jhdml0eSA9IDUwO1xuXHRcdHRoaXMuZW1pdHRlclJlZC5zZXRTY2FsZSgxLjAsIDAsIDEuMCwgMCwgMTUwMCk7XG4gICBcdFx0dGhpcy5lbWl0dGVyUmVkLnggPSByZWRTbGltZS54ICsgMTU7XG4gICAgXHR0aGlzLmVtaXR0ZXJSZWQueSA9IHJlZFNsaW1lLnkgKyAyNTtcblx0XHR0aGlzLmVtaXR0ZXJSZWQuc3RhcnQodHJ1ZSwgMzAwMCwgbnVsbCwgMjApO1xuXHR9XG5cblx0c3Bhd25QbGF5ZXJCb29zdEVtaXR0ZXJzKCl7XG5cdFx0dGhpcy5lbWl0dGVyMyA9IGdhbWUuYWRkLmVtaXR0ZXIoMCwgMCwgMTAwKTtcbiAgIFx0XHR0aGlzLmVtaXR0ZXIzLm1ha2VQYXJ0aWNsZXMoJ3BhcnRpY2xlMicpO1xuXHRcdHRoaXMuZW1pdHRlcjMuZ3Jhdml0eSA9IDUwO1xuXHRcdHRoaXMuZW1pdHRlcjMuc2V0U2NhbGUoMS4wLCAwLCAxLjAsIDAsIDIwMDApO1xuXG4gIFx0XHR0aGlzLmVtaXR0ZXIzLnggPSBwbGF5ZXIueDtcbiAgICBcdHRoaXMuZW1pdHRlcjMueSA9IHBsYXllci55O1xuXHRcdHRoaXMuZW1pdHRlcjMuc3RhcnQodHJ1ZSwgNTAwMCwgbnVsbCwgNTAwKTtcblx0fVxuXG4gIFx0c3Bhd25QbGF5ZXJLaWxsRW1pdHRlcnMoKXtcbiAgXHRcdHRoaXMuZW1pdHRlcjIgPSBnYW1lLmFkZC5lbWl0dGVyKDAsIDAsIDEwMCk7XG4gICBcdFx0dGhpcy5lbWl0dGVyMi5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZTInKTtcblx0XHR0aGlzLmVtaXR0ZXIyLmdyYXZpdHkgPSA1MDtcblx0XHR0aGlzLmVtaXR0ZXIyLnNldFNjYWxlKDEuMCwgMCwgMS4wLCAwLCAyMDAwKTtcblxuICBcdFx0dGhpcy5lbWl0dGVyMi54ID0gcGxheWVyLnggKyAxNTtcbiAgICBcdHRoaXMuZW1pdHRlcjIueSA9IHBsYXllci55ICsgMjU7XG5cdFx0dGhpcy5lbWl0dGVyMi5zdGFydCh0cnVlLCA2MDAsIG51bGwsIDYwMCk7XG4gIFx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIFRudEhhbmRsZXJ7XG5cblx0ZXhwbG9kZSh0bnQpe1xuXHRcdGlmKHdpbmRvdy5jYW5UbnRFeHBsb2RlKXtcblx0XHRcdGdhbWUuYWRkLnR3ZWVuKHRudCkudG8oIHsgYWxwaGE6IDAgfSwgNzAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAxMDAwLCB0cnVlKTtcblx0IFx0XHRnYW1lLnNvdW5kLnBsYXkoJ3RudCcpXG5cdCBcdFx0d2luZG93LmNhblRudEV4cGxvZGUgPSBmYWxzZTtcblx0IFx0XHR2YXIgbDEgPSBnYW1lLmFkZC50ZXh0KHRudC54ICsgMTEsIHRudC55IC0gMzAsICczIScsXG4gICAgICAgICAgICAgICAge2ZvbnQ6ICcyMHB4IENvdXJpZXInLCBmaWxsOiAnI2ZmZid9KTtcblxuXHQgXHRcdHZhciBsMiwgbDM7XG5cblx0IFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdCBcdFx0XHRsMS5raWxsKCk7XG5cdCBcdFx0XHRsMiA9IGdhbWUuYWRkLnRleHQodG50LnggKyAxMSwgdG50LnkgLSAzMCwgJzIhJyxcbiAgICAgICAgICAgICAgICB7Zm9udDogJzIwcHggQ291cmllcicsIGZpbGw6ICcjZmZmJ30pO1xuXHRcdFx0fSwgMTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0IFx0XHRcdGwyLmtpbGwoKTtcblx0IFx0XHRcdGwzID0gZ2FtZS5hZGQudGV4dCh0bnQueCArIDExLCB0bnQueSAtIDMwLCAnMSEnLFxuICAgICAgICAgICAgICAgIHtmb250OiAnMjBweCBDb3VyaWVyJywgZmlsbDogJyNmZmYnfSk7XG5cdFx0XHR9LCAyMDAwKTtcblxuXHRcdCBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHQgXHRcdGdhbWUuY2FtZXJhLnNoYWtlKDAuMDQsIDIwMDAsIHRydWUpO1xuXHRcdCBcdFx0bDMua2lsbCgpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHQgXHRcdFx0dG50LmtpbGwoKTtcblx0XHRcdFx0fSwgMTAwMCk7XG5cblx0XHQgXHRcdHN3aXRjaEZhbGxlcnMuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgXHRcdFx0aXRlbS5ib2R5LmltbW92YWJsZSA9IGZhbHNlO1xuXHRcdFx0XHR9LCB0aGlzKTtcblxuXHRcdFx0fSwgMzAwMCk7XG5cdFx0IH1cblx0fVxuXG59XG4iXX0=
