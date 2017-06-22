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
         let levelLabel = game.add.text(90, 110, 'Be Quick or Be Dead!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    handleRidersLogic(){
        this.rider1 = gState.envObjects.riders.children[0];
        if(this.rider1.x < 50){
            this.rider1.body.velocity.x = 0;
        }
     }

     getHardModeJumpLimit(){
        return 7;
    }

    addEndingText(){
        window.game.add.text(
                gState.player.x - 270, 70, 'You are quick!',
                {font: '40px Courier', fill: '#fff'});
                window.game.add.text(gState.player.x - 270, 106, '...for a fancy slime.',
                {font: '20px Courier', fill: '#fff'}
        );
    }

}
