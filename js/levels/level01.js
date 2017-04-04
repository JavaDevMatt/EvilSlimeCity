import {GameState} from '../gameState'
let gState = new GameState().state;
//set local pointers;

export class Level1{


	 constructor() {
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
 	 	game.world.setBounds(0, 0, 885, 376);

 	 	game.add.sprite(0, 0, 'game-background');
	 	game.add.sprite(640, 0, 'game-background');
 	 }

 	 addPlatforms(){
 	 	gState.envObjects.platforms.create(0, 300, 'platform');
        gState.envObjects.platforms.create(197, 300, 'platform2');
        gState.envObjects.platforms.create(506, 300, 'platform');
        gState.envObjects.platforms.create(646, 300, 'platform');
        gState.envObjects.platforms.create(646, 112, 'tower1');
 	 }

     addArrows(arrows){
     }

 	 addRedSlimes(){
        gState.enemies.redSlimes.create(670, 10, 'monster2');
     }

 	 addFallers(){
 	 	gState.envObjects.fallers.create(340, 282, 'faller');
 	 }

 	 addSlowFallers(){
     }

 	 addTrampolines(){
 	 	gState.envObjects.trampolines.create(600, 270, 'trampoline');
 	 }

 	 addLava(){
 	 	gState.envObjects.lava.create(141, 332, 'lava');
        gState.envObjects.lava.create(254, 332, 'lava2');
        gState.envObjects.lava.create(700, 332, 'lava2');
 	 }

     addSwitchFallers(){
     }

 	 addEndingText(){
        game.add.text(gState.player.x - 200, 100, 'Great!',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(gState.player.x - 200, 136, 'Time for the next one....',
                {font: '20px Courier', fill: '#fff'});
    }

    addTnt(){
    }

    addRiders(){
    }

    handleRidersLogic(){
    }

    checkForCoolKillText(){
     }


}
