import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level14.js" );
export class Level14 extends LevelPrototype {
    constructor() {
        super();
        let protoLevel = _.cloneDeep( this.prototypeLevel );
        this.levelObj = _.merge( protoLevel, lvl );
    }

    addStartingText(){
       
    }

    handleRidersLogic(){
        this.rider1 = gState.envObjects.riders.children[0];
        if(this.rider1.x > 200){
            this.rider1.body.velocity.x = -100;
        }

     }

}
