import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level02.js" );

export class Level2 extends LevelPrototype{


	 constructor() {
	 	super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
 	 }

     getHardModeJumpLimit(){
        return 3;
    }

 	 addStartingText(){
                var levelLabel = game.add.text(110, 278, 'Kill 2 red evil slimes!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    addEndingText(){
        game.add.text(gState.player.x - 200, 100, 'Nice!',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(gState.player.x - 200, 136, 'Get ready for more...',
                {font: '20px Courier', fill: '#fff'});
    }




     handleRidersLogic(){
		this.rider1 = gState.envObjects.riders.children[0];
        if(this.rider1.x > 650){
            this.rider1.body.velocity.x = -100;
        }
     }

     checkForCoolKillText(){
        if( gState.envObjects.redSlimes.countLiving() == 1 ){
                var infoLabel = game.add.text(310, 278, 'One more!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        infoLabel.kill();
                }, 3000);
            }
    }

}
