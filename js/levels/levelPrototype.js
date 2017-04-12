import {GameState} from '../gameState'
let gState = new GameState().state;
//set local pointers;

let lvl = require( './levelStruct' );
export class LevelPrototype{
    _create( type, props ) {
        gState.envObjects[ type ] = window.game.add.group();
        gState.envObjects[ type ].enableBody = true;
    	for ( var i in props ) {

    		var tmpObj = gState.envObjects[ type ].create( props[ i ].x, props[ i ].y, props[ i ].type );
            tmpObj.levelRef = props[ i ];
            props[ i ].id = Math.ceil( Date.now() * Math.random() );
    	}
    }

	constructor( ) {
        this.prototypeLevel = lvl;
		this.playerStartingX = 90;
		this.playerStartingY = 60;
 	}

 	addStartingText(){
        var loadingLabel = window.game.add.text(130, 278, 'Kill the evil slime!   -->', {font: '20px Courier', fill: '#fff'});
        setTimeout(function(){
                loadingLabel.kill();
        }, 5000);
    }

 	 createBackground(){
        window.game.world.setBounds(
            this.levelObj.world.bounds.x1,
            this.levelObj.world.bounds.y1,
            this.levelObj.world.bounds.x2,
            this.levelObj.world.bounds.y2
        );
        for (var i in this.levelObj.world.sprites ) {
            window.game.add.sprite(
                this.levelObj.world.sprites[ i ].x,
                this.levelObj.world.sprites[ i ].y,
                this.levelObj.world.sprites[ i ].type,
            )
        }
 	 }

 	 addPlatforms(){
		this._create( 'platforms', this.levelObj.platforms );
 	 }

    addArrows(){
         this._create( 'arrows' , this.levelObj.arrows );
    }

 	addRedSlimes(){
        this._create( 'redSlimes' , this.levelObj.redSlimes );
    }

 	addFallers(){
		 this._create( 'fallers' , this.levelObj.fallers );
 	}

 	addSlowFallers(){
		 this._create( 'slowFallers', this.levelObj.slowFallers)
    }

 	addTrampolines(){
 	 	this._create( 'trampolines', this.levelObj.trampolines );
 	}

 	addLava(){
		this._create( 'lava', this.levelObj.lava );
 	}

    addSwitchFallers(){
         this._create( 'switchFallers', this.levelObj.switchFallers );
    }

 	addEndingText(){
        window.game.add.text(
                gState.player.x - 200, 100, 'Great!',
                {font: '40px Courier', fill: '#fff'});
                window.game.add.text(gState.player.x - 200, 136, 'Time for the next one....',
                {font: '20px Courier', fill: '#fff'}
        );
    }

    addTnt(){
	    this._create( 'tnt', this.levelObj.tnt );
        window.game.physics.arcade.enable( gState.envObjects.tnt );
        gState.envObjects.tnt.forEachAlive( function( item ){
            item.body.bounce.y = 0.2;
            item.body.gravity.y = 300;
            item.body.collideWorldBounds = true;
        }, this );
    }

    addRiders(){
		this._create( 'riders', this.levelObj.riders );
    }

    handleRidersLogic(){
    }

    checkForCoolKillText(){
     }


}
