import {GameState} from '../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = {
	platforms: [
		{ x:0, y: 300, type: 'platform' },
		{ x:197, y: 300, type: 'platform2' },
		{ x:506, y: 300, type: 'platform' },
		{ x:646, y: 300, type: 'platform' },
		{ x:646, y: 112, type: 'tower1' }
	],
	redSlimes: [
		{ x: 670,y: 10, type: 'monster2' }
	],
	fallers: [
		{ x: 340, y: 282, type: 'faller' }
	],
	slowFallers: [],
	trampolines: [ { x: 600, y: 270, type: 'trampoline' } ],
	lava: [
		{ x:141, y: 332, type: 'lava' },
		{ x:254, y: 332, type: 'lava2' },
		{ x:700, y: 332, type: 'lava2' }
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
