let defaultState = {
	player: {},
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
		redSlimes: []
	},
	flags: {
		canBoostFlag : true,
		canTntExplode : true,
		isPlayerDead : false,
		hasPlayerWon : false
	},
	cursors: {},
	gamePad: {}, 
}
let instance = null;

export class GameState {
    constructor() {
    if( !instance ) {
        instance = this;
        instance.state = defaultState;
		window.state = instance.state;
    }
    return instance;
    }
}
