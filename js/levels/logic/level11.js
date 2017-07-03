import {GameState} from '../../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = require( "./../structures/level11.js" );
export class Level11 extends LevelPrototype {
    constructor() {
        super();
        let protoLevel = _.cloneDeep( this.prototypeLevel );
        this.levelObj = _.merge( protoLevel, lvl );
    }

    addStartingText(){
        let levelLabel = game.add.text(20, 110, 'The red evil slimes are sometimes useful...',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    addEndingText(){
        window.game.add.text(
                gState.player.x - 200, 100, 'Well done...',
                {font: '40px Courier', fill: '#fff'});
                window.game.add.text(gState.player.x - 200, 136, '...or always lucky?',
                {font: '20px Courier', fill: '#fff'}
        );
    }

    getHardModeJumpLimit(){
        return 4;
    }

}
