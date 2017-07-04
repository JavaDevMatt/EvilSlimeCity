import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level15.js" );
export class Level15 extends LevelPrototype {
    constructor() {
        super();
        let protoLevel = _.cloneDeep( this.prototypeLevel );
        this.levelObj = _.merge( protoLevel, lvl );
    }

    addStartingText(){
       let levelLabel = game.add.text(20, 40, 'Final level! Good luck!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    handleRidersLogic(){
        this.rider1 = gState.envObjects.riders.children[0];
        if(this.rider1.x > 200){
            this.rider1.body.velocity.x = -100;
        }

     }

     addEndingText(){
        window.game.add.text(
                gState.player.x - 200, 100, 'Wohoo!',
                {font: '40px Courier', fill: '#fff'});
                window.game.add.text(gState.player.x - 200, 136, 'Slurm for everyone!',
                {font: '22px Courier', fill: '#fff'}
        );
    }

    getHardModeJumpLimit(){
        return 7; 
    }

}