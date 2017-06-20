import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level10.js" );
export class Level10 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	addStartingText(){
        let startingTxt = window.game.add.text(80, 278, 'The floor is lava!', {font: '20px Courier', fill: '#fff'});

   
        setTimeout(function(){
                startingTxt.kill();
        }, 5000);

    
    }

    checkForCoolKillText(){
        if( gState.envObjects.redSlimes.countLiving() == 1 ){
                var infoLabel = game.add.text(gState.player.x - 200, 278, 'Almost done!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        infoLabel.kill();
                }, 3000);
            }
    }

    addEndingText(){
        game.add.text(gState.player.x - 300, 100, 'Another one',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(gState.player.x - 200, 136, 'bites the lava!',
                {font: '20px Courier', fill: '#fff'});
    }

}
