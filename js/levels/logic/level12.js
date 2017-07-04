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
        let levelLabel = game.add.text(20, 210, 'The order is sometimes important',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
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

     checkForCoolKillText(){
        if( gState.envObjects.redSlimes.countLiving() == 1 ){
                var infoLabel = game.add.text(310, 278, 'Half way through!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        infoLabel.kill();
                }, 3000);
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

    addEndingText(){
        window.game.add.text(
                gState.player.x - 200, 100, 'Tasty!',
                {font: '40px Courier', fill: '#fff'});
                window.game.add.text(gState.player.x - 200, 146, '...getting hungry yet?',
                {font: '20px Courier', fill: '#fff'}
        );
    }

    getHardModeJumpLimit(){
        return 6; 
    }

 
}
