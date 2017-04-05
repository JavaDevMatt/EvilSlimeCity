import {GameState} from '../gameState'
let g = new GameState().state;
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

     addPlatforms(){
        g.envObjects.platforms.create(0, 112, 'tower1');
        g.envObjects.platforms.create(1, 300, 'platform');
        g.envObjects.platforms.create(421, 289, 'faller');
     }

    addArrows( arrows){
     }

 	 addRedSlimes(){
        g.enemies.redSlimes.create(350, 10, 'monster2');
        g.enemies.redSlimes.create(560, 10, 'monster2');
     }

 	 addFallers(){
 	 }

 	 addTrampolines( trampolines){
         trampolines.create(160, 10, 'trampoline');
     }

     addSlowFallers(){
     }


 	 addLava(){
        g.envObjects.lava.create(142, 332, 'lava');
        g.envObjects.lava.create(198, 332, 'lava');
        g.envObjects.lava.create(254, 332, 'lava2');
        g.envObjects.lava.create(506, 332, 'lava2');
 	 }

     addSwitchFallers(){
		 g.envObjects.switchFallers.create(136, 242, 'faller');
         g.envObjects.switchFallers.create(330, 112, 'faller');

         g.envObjects.switchFallers.create(208, 242, 'platform');
         g.envObjects.switchFallers.create(349, 289, 'faller');
         g.envObjects.switchFallers.create(493, 289, 'faller');
         g.envObjects.switchFallers.create(565, 289, 'faller');
         g.envObjects.switchFallers.create(530, 32, 'tower1');
     }

     addRiders(){
     }

     addTnt(){
        g.envObjects.tnt = game.add.sprite(360, 150, 'tnt');
        game.physics.arcade.enable( g.envObjects.tnt );
        g.envObjects.tnt.body.bounce.y = 0.2;
        g.envObjects.tnt.body.gravity.y = 300;
        g.envObjects.tnt.body.collideWorldBounds = true;
     }

     handleRidersLogic(){
     }

     checkForCoolKillText(){
    }

}
