import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level04.js" );
export class Level4 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	addStartingText(){
                var levelLabel = game.add.text(290, 310, 'Time to be smart!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }
}