import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level06.js" );
export class Level6 extends LevelPrototype {
	constructor() {
		super();


		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	addStartingText(){
                var levelLabel = game.add.text(290, 310, 'lvl6!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }


     handleRidersLogic(){
           this.rider1 = gState.envObjects.riders.children[0];
           if(this.rider1.x > 650){
                this.rider1.body.velocity.x = -100;
           } 

           if(this.rider1.x < 390){
                this.rider1.body.velocity.x = 100;
           } 
        
     }

   
}