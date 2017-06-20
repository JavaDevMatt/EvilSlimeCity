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
        let time = game.global.time; 
        let minutes = Math.round(time / 60); 
        let seconds = time % 60;
        if(game.global.isHardMode){
             window.game.add.text(80, 30, 'Your time (hard mode): ' + minutes + ' minutes, ' + seconds + ' seconds', {font: '20px Courier', fill: '#fff'});
        } else {
             window.game.add.text(80, 30, 'Your time (easy mode): ' + minutes + ' minutes, ' + seconds + ' seconds', {font: '20px Courier', fill: '#fff'});
        }
    }

    addOptionalEndingScreen(){
    window.game.add.text(280, 126, 'Name: ', {font: '20px Courier', fill: '#fff'});


        game.add.plugin(PhaserInput.Plugin);
        let input = game.add.inputField(340, 120, { 
            font: '18px Arial',
            fill: '#212121',
            fontWeight: 'bold',
            width: 250,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
        });

        setTimeout(function(){
                console.log("Input: " + input.value);
        }, 5000);
 

        let restartButton = game.add.button(100, 120, 'mute-button', this.doStuff, this, 0, 0, 1);
    }

    doStuff(){
        game.global.gameLevel = 0;
        game.state.start('menu');
    }

}
