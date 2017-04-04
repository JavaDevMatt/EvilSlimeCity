import {GameState} from '../gameState'
let gState = new GameState().state;
export class Level3{


	 constructor() {
	 	this.playerStartingX = 10;
	 	this.playerStartingY = 10;
 	 }

 	 addStartingText(){
                var levelLabel = game.add.text(0, 0, 'Time to blow some shit up!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    addEndingText(){
        game.add.text(200, 100, 'Survived!',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(200, 136, 'You lucky son of a slime!',
                {font: '20px Courier', fill: '#fff'});
    }

 	 createBackground(){
        game.world.setBounds(0, 0, 640, 376);

        game.add.sprite(0, 0, 'game-background');
     }

     addplatforms(){
        gState.envObjects.platforms.create(0, 112, 'tower1');
        gState.envObjects.platforms.create(1, 300, 'platform');
        gState.envObjects.platforms.create(421, 289, 'faller');
     }

    addArrows( arrows){
     }

 	 addredSlimes(){
        gState.envObjects.redSlimes.create(350, 10, 'monster2');
        gState.envObjects.redSlimes.create(560, 10, 'monster2');
     }

 	 addFallers(){
 	 }

 	 addTrampolines( trampolines){
         trampolines.create(160, 10, 'trampoline');
     }

     addSlowFallers(){
     }


 	 addLava(){
        gState.envObjects.lava.create(142, 332, 'lava');
        gState.envObjects.lava.create(198, 332, 'lava');
        gState.envObjects.lava.create(254, 332, 'lava2');
        gState.envObjects.lava.create(506, 332, 'lava2');
 	 }

     addSwitchFallers(){
		 gState.envObjects.switchFallers.create(136, 242, 'faller');
         gState.envObjects.switchFallers.create(330, 112, 'faller');

         gState.envObjects.switchFallers.create(208, 242, 'platform');
         gState.envObjects.switchFallers.create(349, 289, 'faller');
         gState.envObjects.switchFallers.create(493, 289, 'faller');
         gState.envObjects.switchFallers.create(565, 289, 'faller');
         gState.envObjects.switchFallers.create(530, 32, 'tower1');
     }

     addRiders(){
     }

     addTnt(){
        tnt = game.add.sprite(360, 150, 'tnt');
        game.physics.arcade.enable(tnt);
        tnt.body.bounce.y = 0.2;
        tnt.body.gravity.y = 300;
        tnt.body.collideWorldBounds = true;
     }

     handleRidersLogic(){
     }

     checkForCoolKillText(){
    }

}
