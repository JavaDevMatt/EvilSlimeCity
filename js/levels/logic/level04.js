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

    getHardModeJumpLimit(){
        return 0;
    }

	addStartingText(){
                var levelLabel = game.add.text(290, 310, 'Time to be smart!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    addEndingText(){
        game.add.text(360, 100, 'Woah!',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(360, 136, 'Kinda smart... or just lucky?',
                {font: '20px Courier', fill: '#fff'});
    }

}