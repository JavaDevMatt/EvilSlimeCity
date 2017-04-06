let defaultState = {
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
		canBoostFlag : true,
		canTntExplode : true,
		isPlayerDead : false,
		hasPlayerWon : false,
		rightMobileDown : false,
	}
}
let instance = null;

export class GameState {
    constructor() {
    if( !instance ) {
        instance = this;
        instance.state = defaultState;
    }
    return instance;
    }
}
