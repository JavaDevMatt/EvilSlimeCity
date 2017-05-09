import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let levelLightsFlag = true;
let undergroundSprite, undergroundSprite2;

let lvl = require( "./../structures/level08.js" );
export class Level8 extends LevelPrototype {
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
        undergroundSprite = game.add.sprite(0,376,'underground-background');
        undergroundSprite.visible = false;
        undergroundSprite2 = game.add.sprite(640,376,'underground-background');
        undergroundSprite2.visible = false;
    }

    resetFancyLevelStuff(){
		levelLightsFlag = true;
	}

    handleSpecialLevelEvents(){
    	if(levelLightsFlag && gState.player.y > 550){
    		levelLightsFlag = false;
    		let txt1 = window.game.add.text(50, 400, 'Wait a sec...', {font: '40px Courier', fill: '#fff'});
    		let txt2 = window.game.add.text(70, 480, 'let me put the lights on', {font: '18px Courier', fill: '#fff'});
       		 setTimeout(function(){
                txt1.kill();
                txt2.kill();
       		}, 5000);
       		 setTimeout(function(){
       		 undergroundSprite.visible = true;
       		 undergroundSprite2.visible = true;
               game.sound.play('switch');
       		}, 1000);


    	}
    }

}
