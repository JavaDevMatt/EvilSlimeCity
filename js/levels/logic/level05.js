import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level05.js" );
let music1ChangeFlag = true;
let music2ChangeFlag = true;
let spectrumFlag = true;



export class Level5 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	addStartingText(){
    }

    handleSpecialLevelEvents(){
        if(music1ChangeFlag && gState.player.x > 200 ){
        	game.camera.shake(0.01, 1000, true);

        	music1ChangeFlag = false;
        	game.global.music.stop();


        	var levelLabel = game.add.text(100, 110, 'Huh?',
                {font: '50px Courier', fill: '#fff'});
	        setTimeout(function(){
	                levelLabel.kill();
	        }, 3000);
        }


        if(music2ChangeFlag && gState.player.x > 700 ){
        	music2ChangeFlag = false;
        	game.global.music2.play();
        	game.camera.shake(0.01, 1000, true);


        	var levelLabel = game.add.text(600, 110, 'be careful',
                {font: '30px Courier', fill: '#fff'});
	        setTimeout(function(){
	                levelLabel.kill();
	        }, 3000);

	       
        }

        if(spectrumFlag && gState.player.x > 1200){
        	game.sound.play('scary1'); 
        	game.camera.shake(0.03, 4000, true);

        	spectrumFlag = false

        	setTimeout(function(){
	                gState.envObjects.switchFallers.forEachAlive(function(item) {
        			item.body.immovable = false;
				}, this);
	        }, 1000);
        	

			setTimeout(function(){
				game.global.gameLevel--;
				game.state.start('play');
			}, 8000);
        }

     }
}
