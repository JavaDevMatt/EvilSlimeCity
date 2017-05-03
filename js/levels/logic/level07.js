import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level07.js" );

let levelFlag1 = true;

export class Level7 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
		this.playerStartingX = 897;
	}

	resetFancyLevelStuff(){
		levelFlag1 = true;
	}


	addStartingText(){
        var loadingLabel = window.game.add.text(80, 278, 'Thats all for now! Thanks for testing!', {font: '20px Courier', fill: '#fff'});
        setTimeout(function(){
                loadingLabel.kill();
        }, 5000);
    }


    handleSpecialLevelEvents(){

    	if(levelFlag1 && gState.player.x > 1000){
    		levelFlag1 = false;
    		gState.envObjects.switchFallers.forEachAlive(function(item) {
        			item.body.immovable = false;
					}, this);

    		game.sound.play('scary1'); 
    		game.camera.shake(0.03, 4000, true);
    	}
    	
    }

}
