import {GameState} from '../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = {
	platforms: [
		{ x:50, y: 300, type: 'platform' },
		{ x:247, y: 300, type: 'platform2' },
		{ x:556, y: 300, type: 'platform' },
		{ x:696, y: 300, type: 'platform' },
		{ x:696, y: 112, type: 'tower1' }
	],
	redSlimes: [
		{ x: 720,y: 10, type: 'monster2' }
	],
	fallers: [
		{ x: 390, y: 282, type: 'faller' }
	],
	slowFallers: [],
	trampolines: [ { x: 650, y: 270, type: 'trampoline' } ],
	lava: [
		{ x:191, y: 332, type: 'lava' },
		{ x:304, y: 332, type: 'lava2' },
		{ x:750, y: 332, type: 'lava2' }
	],
	tnt: [],
	riders: [],
	switchFallers: []
}
export class Level1 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}
}
