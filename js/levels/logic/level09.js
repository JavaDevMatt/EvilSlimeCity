import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level09.js" );
export class Level9 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	addStartingText(){
        var loadingLabel = window.game.add.text(80, 278, 'Thats all for now! Thanks for testing!', {font: '20px Courier', fill: '#fff'});
        setTimeout(function(){
                loadingLabel.kill();
        }, 5000);

        let time = game.global.time; 
        let minutes = Math.round(time / 60); 
        let seconds = time % 60;
        window.game.add.text(80, 178, 'Your time: ' + minutes + ' minutes, ' + seconds + ' seconds', {font: '20px Courier', fill: '#fff'});
    }

}
