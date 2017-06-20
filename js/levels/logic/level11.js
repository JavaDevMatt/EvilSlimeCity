import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level11.js" );
export class Level11 extends LevelPrototype {
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
        if(game.global.isHardMode){
             window.game.add.text(80, 178, 'Your time (hard mode): ' + minutes + ' minutes, ' + seconds + ' seconds', {font: '20px Courier', fill: '#fff'});
        } else {
             window.game.add.text(80, 178, 'Your time (easy mode): ' + minutes + ' minutes, ' + seconds + ' seconds', {font: '20px Courier', fill: '#fff'});
        }


        game.add.plugin(PhaserInput.Plugin);
        let input = game.add.inputField(10, 90);

        setTimeout(function(){
                console.log("Input: " + input.value);
        }, 5000);
    }

}
