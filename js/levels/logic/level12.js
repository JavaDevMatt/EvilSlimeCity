import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level12.js" );
let levelFlag1 = true;

export class Level12 extends LevelPrototype {
    constructor() {
        super();
        let protoLevel = _.cloneDeep( this.prototypeLevel );
        this.levelObj = _.merge( protoLevel, lvl );
        levelFlag1 = true;
    }

    addStartingText(){
     
    }

    handleRidersLogic(){
        this.rider1 = gState.envObjects.riders.children[0];
        if(this.rider1.x > 180){
            this.rider1.body.velocity.x = -100;
        }

        this.rider2 = gState.envObjects.riders.children[1];
        if(this.rider2.x > 500){
            this.rider2.body.velocity.x = -100;
        }
     }

    handleSpecialLevelEvents(){
        if(levelFlag1 && gState.player.x > 880){ 
            levelFlag1 = false;
            game.sound.play('scary1'); 
            game.camera.shake(0.03, 3000, true);
            gState.envObjects.switchFallers.forEachAlive(function(item) {
                    item.body.immovable = false;
                 }, this);
        }
    }

 
}
