import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level05.js" );
let music1ChangeFlag = true;
let music2ChangeFlag = true;
let spectrumFlag = true;
let endingFlag = true;



export class Level5 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
	}

	resetFancyLevelStuff(){
		music1ChangeFlag = true;
 		music2ChangeFlag = true;
 		spectrumFlag = true;
        endingFlag = true;

	}

	addStartingText(){
    }

    handleSpecialLevelEvents(){
        if(music1ChangeFlag && gState.player.x > 200 ){
        	game.camera.shake(0.01, 1000, true);

        	music1ChangeFlag = false;


        	var levelLabel = game.add.text(100, 110, 'Huh?',
                {font: '50px Courier', fill: '#fff'});
	        setTimeout(function(){
	                levelLabel.kill();
	        }, 3000);
        }


        if(music2ChangeFlag && gState.player.x > 700 ){
        	music2ChangeFlag = false;
        	game.camera.shake(0.01, 1000, true);


        	var levelLabel = game.add.text(600, 110, 'be careful...',
                {font: '30px Courier', fill: '#fff'});
	        setTimeout(function(){
	                levelLabel.kill();
	        }, 3000);

	       
        }

        if(spectrumFlag && gState.player.x > 1200){
        	spectrumFlag = false

        	var levelLabel = game.add.text(900, 110, 'RUN BACK!',
                {font: '60px Courier', fill: '#fff'});


        	setTimeout(function(){
	                var levelLabel = game.add.text(850, 210, 'JUMP!',
               		 {font: '40px Courier', fill: '#fff'});
	        	}, 800);
        	

        	game.sound.play('scary1'); 
        	

			setTimeout(function(){
				game.camera.shake(0.03, 4000, true);


        		setTimeout(function(){
	                gState.envObjects.switchFallers.forEachAlive(function(item) {
        			item.body.immovable = false;
					}, this);
	        	}, 1000);

			}, 1000);
        }

        if(!spectrumFlag && gState.player.x < 150){
        	if(endingFlag){
        		endingFlag = false;
        		var levelLabel = game.add.text(20, 110, 'We said be careful!',
                {font: '30px Courier', fill: '#fff'});
	        	gState.flags.hasPlayerWon = true;
	        	
	        	game.global.gameLevel++;
		        
	        	setTimeout(function(){
		                game.state.start('play');
		        	}, 3000);
        	}
        	
        }

     }
}
