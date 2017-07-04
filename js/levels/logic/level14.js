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

}

