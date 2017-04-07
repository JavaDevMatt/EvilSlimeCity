import {GameState} from '../gameState'
import {LevelPrototype} from './levelPrototype'
let g = new GameState().state;
let _ = require( "lodash" );

let lvl = {
	world: {
		bounds: { x1: 0, y1:0, x2: 640, y2: 376 },
		sprites: [
		   { x: 0, y: 0, type: 'game-background'}
		]
	},
	platforms: [
		{x: 0, y: 112, type: 'tower1' },
		{x: 1, y: 300, type: 'platform' },
		{x: 421, y: 289, type: 'faller' }
	],
	redSlimes: [
        {x: 350, y: 10, type: 'monster2' },
        {x: 560, y: 10, type: 'monster2' }
	],
	fallers: [
	],
	slowFallers: [],
	trampolines: [  ],
	lava: [
		{x: 142, y: 332, type: 'lava' },
		{x: 198, y: 332, type: 'lava' },
		{x: 254, y: 332, type: 'lava2' },
		{x: 506, y: 332, type: 'lava2' }
	],
	tnt: [],
	switchFallers: [
		{x: 136, y: 242, type: 'faller' },
		{x: 330, y: 112, type: 'faller' },
		{x: 208, y: 242, type: 'platform' },
		{x: 349, y: 289, type: 'faller' },
		{x: 493, y: 289, type: 'faller' },
		{x: 565, y: 289, type: 'faller' },
		{x: 530, y: 32, type: 'tower1' }
	],
	riders: []
}

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

 	 addTrampolines( trampolines){
         trampolines.create(160, 10, 'trampoline');
     }

     addTnt(){
        g.envObjects.tnt = game.add.sprite(360, 150, 'tnt');
        game.physics.arcade.enable( g.envObjects.tnt );
        g.envObjects.tnt.body.bounce.y = 0.2;
        g.envObjects.tnt.body.gravity.y = 300;
        g.envObjects.tnt.body.collideWorldBounds = true;
     }

     handleRidersLogic(){
     }

     checkForCoolKillText(){
    }

}
