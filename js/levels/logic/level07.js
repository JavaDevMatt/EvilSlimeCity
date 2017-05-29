import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level07.js" );

let levelSwitchFallerFlag = true;
let levelMidTextFlag = true;


export class Level7 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
		this.playerStartingX = 10;
	}

    getHardModeJumpLimit(){
        return 9;
    }

	resetFancyLevelStuff(){
		levelSwitchFallerFlag = true;
		levelMidTextFlag = true;
	}


	addStartingText(){
        var loadingLabel = window.game.add.text(150, 298, 'Timing is everything', {font: '20px Courier', fill: '#fff'});
        setTimeout(function(){
                loadingLabel.kill();
        }, 5000);
    }


    handleSpecialLevelEvents(){

    	if(levelSwitchFallerFlag && gState.player.x > 1000){
    		levelSwitchFallerFlag = false;
    		gState.envObjects.switchFallers.forEachAlive(function(item) {
        			item.body.immovable = false;
					}, this);

    		game.sound.play('scary1'); 
    		game.camera.shake(0.03, 4000, true);
    	}

    	if(levelMidTextFlag && gState.player.x > 800){
    		levelMidTextFlag = false;

    		 var loadingLabel = window.game.add.text(800, 20, 'Watch out!', {font: '60px Courier', fill: '#fff'});
       		 setTimeout(function(){
                loadingLabel.kill();
       			 }, 3000);
    	}
    	
    }

    addEndingText(){
        game.add.text(gState.player.x - 400, 100, 'Another one down!',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(gState.player.x - 400, 136, 'What a cruel slimy world...',
                {font: '20px Courier', fill: '#fff'});
    }

}
