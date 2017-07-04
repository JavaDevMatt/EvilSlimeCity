import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level13.js" );
export class Level13 extends LevelPrototype {
    constructor() {
        super();
        let protoLevel = _.cloneDeep( this.prototypeLevel );
        this.levelObj = _.merge( protoLevel, lvl );
    }

    addStartingText(){
        let levelLabel = game.add.text(20, 210, 'Patience is the companion of wisdom...',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    handleRidersLogic(){
        this.rider1 = gState.envObjects.riders.children[0];
        if(this.rider1.x < 1000){
            this.rider1.body.velocity.x = 100;
        }

     }


     addEndingText(){
        window.game.add.text(
                gState.player.x - 200, 100, 'What a wise slime!',
                {font: '40px Courier', fill: '#fff'});
                window.game.add.text(gState.player.x - 200, 136, 'So wise! So slimy!',
                {font: '22px Courier', fill: '#fff'}
        );
    }

    getHardModeJumpLimit(){
        return 4; 
    }

}
