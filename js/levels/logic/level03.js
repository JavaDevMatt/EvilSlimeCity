import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let g = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level03.js" );

export class Level3 extends LevelPrototype{
	 constructor() {
		super();
 		let protoLevel = _.cloneDeep( this.prototypeLevel );
 		this.levelObj = _.merge( protoLevel, lvl );
 	 }

 	 addStartingText(){
                var levelLabel = game.add.text(0, 0, 'Time to blow some shit up!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    addEndingText(){
        game.add.text(200, 100, 'Survived!',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(200, 136, 'You lucky son of a slime!',
                {font: '20px Courier', fill: '#fff'});
    }


     handleRidersLogic(){
     }

     checkForCoolKillText(){
    }

}
