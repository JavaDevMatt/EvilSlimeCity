import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level10.js" );
export class Level10 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	addStartingText(){
        let startingTxt = window.game.add.text(80, 278, 'The floor is lava!', {font: '20px Courier', fill: '#fff'});

   
        setTimeout(function(){
                startingTxt.kill();
        }, 5000);

    
    }

}
