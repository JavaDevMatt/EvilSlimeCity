import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level05.js" );
export class Level5 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	addStartingText(){
                var levelLabel = game.add.text(100, 110, 'Huh?',
                        {font: '50px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }
}
