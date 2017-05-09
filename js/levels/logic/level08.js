import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let levelLightsFlag = true;
let undergroundSprite, undergroundSprite2, undergroundSlime;

let lvl = require( "./../structures/level08.js" );
export class Level8 extends LevelPrototype {
	constructor() {
		super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );


	}

	addStartingText(){
        var loadingLabel = window.game.add.text(150, 298, 'Don\'t be afraid of the dark', {font: '20px Courier', fill: '#fff'});
        setTimeout(function(){
                loadingLabel.kill();
        }, 5000);
        undergroundSprite = game.add.sprite(0,376,'underground-background');
        undergroundSprite.visible = false;
        undergroundSprite2 = game.add.sprite(640,376,'underground-background');
        undergroundSprite2.visible = false;

        undergroundSlime = game.add.sprite(300,280,'big-green');
        undergroundSlime.visible = false;
    }

    resetFancyLevelStuff(){
		levelLightsFlag = true;
	}

    handleSpecialLevelEvents(){
    	if(levelLightsFlag && gState.player.y > 550){
    		levelLightsFlag = false;
    		let txt1 = window.game.add.text(80, 400, 'Wait a sec...', {font: '40px Courier', fill: '#fff'});
    		let txt2 = window.game.add.text(100, 480, 'let me put the lights on', {font: '18px Courier', fill: '#fff'});
       		 
       		 setTimeout(function(){
       		 txt1.kill();
             txt2.kill();

       		 undergroundSprite.visible = true;
       		 undergroundSprite2.visible = true;
       		 undergroundSlime.visible = true;
               game.sound.play('switch');

               setTimeout(function(){
                	let txt3 = window.game.add.text(70, 480, 'Hello there little slime....', {font: '18px Courier', fill: '#fff'});
       				setTimeout(function(){
       					txt3.kill();
       				}, 3000);
       			}, 1000);
       		}, 3000);

 
    	}
    }

}
