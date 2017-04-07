import {GameState} from '../gameState'
let gState = new GameState().state;
//set local pointers;

let lvl = require( './levelStruct' );
export class LevelPrototype{

    _create( type, props ) {
    	for ( var i in props ) {
    		type.create( props[ i ].x, props[ i ].y, props[ i ].type );
    	}
    }

	constructor( ) {
        this.prototypeLevel = lvl;
		this.playerStartingX = 10;
		this.playerStartingY = 10;
 	}

 	addStartingText(){
        var loadingLabel = game.add.text(80, 278, 'Kill the evil slime!   -->', {font: '20px Courier', fill: '#fff'});
        setTimeout(function(){
                loadingLabel.kill();
        }, 5000);
    }

 	 createBackground(){
        game.world.setBounds(
            this.levelObj.world.bounds.x1,
            this.levelObj.world.bounds.y1,
            this.levelObj.world.bounds.x2,
            this.levelObj.world.bounds.y2
        );
        for (var i in this.levelObj.world.sprites ) {
            game.add.sprite(
                this.levelObj.world.sprites[ i ].x,
                this.levelObj.world.sprites[ i ].y,
                this.levelObj.world.sprites[ i ].type,
            )
        }
 	 }

 	 addPlatforms(){
		this._create( gState.envObjects.platforms, this.levelObj.platforms );
 	 }

    addArrows(){
         this._create( gState.envObjects.arrows , this.levelObj.arrows );
    }

 	addRedSlimes(){
        this._create( gState.enemies.redSlimes, this.levelObj.redSlimes );
    }

 	addFallers(){
		 this._create( gState.envObjects.fallers, this.levelObj.fallers );
 	}

 	addSlowFallers(){
		 this._create( gState.envObjects.slowFallers, this.levelObj.slowFallers)
    }

 	addTrampolines(){
 	 	this._create( gState.envObjects.trampolines, this.levelObj.trampolines );
 	}

 	addLava(){
		this._create( gState.envObjects.lava, this.levelObj.lava );
 	}

    addSwitchFallers(){
         this._create( gState.envObjects.switchFallers, this.levelObj.switchFallers );
    }

 	addEndingText(){
        game.add.text(
                gState.player.x - 200, 100, 'Great!',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(gState.player.x - 200, 136, 'Time for the next one....',
                {font: '20px Courier', fill: '#fff'}
        );
    }

    addTnt(){
	    this._create( gState.envObjects.tnt, this.levelObj.tnt );
    }

    addRiders(){
		this._create( gState.envObjects.riders, this.levelObj.riders );
    }

    handleRidersLogic(){
    }

    checkForCoolKillText(){
     }


}
