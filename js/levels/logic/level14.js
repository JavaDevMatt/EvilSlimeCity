import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let spectrumFlag = true;


let lvl = require( "./../structures/level14.js" );
export class Level14 extends LevelPrototype {
    constructor() {
        super();
        let protoLevel = _.cloneDeep( this.prototypeLevel );
        this.levelObj = _.merge( protoLevel, lvl );
        spectrumFlag = true;
    }

    addStartingText(){
   		let levelLabel = game.add.text(20, 158, 'Run...',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    handleSpecialLevelEvents(){
		if(spectrumFlag && gState.player.x > 150){
			spectrumFlag = false;
        	game.sound.play('scary1'); 
        	game.camera.shake(0.03, 4000, true);

    		gState.envObjects.switchFallers.forEachAlive(function(item) {
    			item.body.immovable = false;
				}, this);

			let levelLabel = game.add.text(100, 110, 'RUN!',
                {font: '60px Courier', fill: '#fff'});
        }
    }


    addEndingText(){
        game.add.text(gState.player.x - 400, 100, 'Phew...',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(gState.player.x - 400, 136, 'that was close',
                {font: '20px Courier', fill: '#fff'});
    }


    handleRidersLogic(){
        this.rider1 = gState.envObjects.riders.children[0];
        if(this.rider1.x < 1550){
            this.rider1.body.velocity.x = 100;
        }

     }

     getHardModeJumpLimit(){
        return 8; 
    }


}

