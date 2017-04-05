import {GameState} from '../gameState'
let gState = new GameState().state;
export class Level2{


	 constructor() {
	 	this.playerStartingX = 10;
	 	this.playerStartingY = 10;
 	 }

 	 addStartingText(){
                var levelLabel = game.add.text(110, 278, 'Kill 2 red evil slimes!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    addEndingText(){
        game.add.text(gState.player.x - 200, 100, 'Nice!',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(gState.player.x - 200, 136, 'Get ready for more...',
                {font: '20px Courier', fill: '#fff'});
    }

 	 createBackground(){
        game.world.setBounds(0, 0, 1705, 376);

        game.add.sprite(0, 0, 'game-background');
        game.add.sprite(640, 0, 'game-background');
        game.add.sprite(1280, 0, 'game-background');
     }

     addPlatforms(){
        gState.envObjects.platforms.create(754, 172, 'tower1');
        gState.envObjects.platforms.create(887, 300, 'platform');
        gState.envObjects.platforms.create(1028, 300, 'platform');
        gState.envObjects.platforms.create(1169, 300, 'platform');
        gState.envObjects.platforms.create(1169, 272, 'tower1');
        gState.envObjects.platforms.create(1310, 300, 'platform');
        gState.envObjects.platforms.create(1451, 300, 'platform');
        gState.envObjects.platforms.create(1410, 112, 'tower1');
     }

    addArrows( arrows ){
        arrows.create(1230, 240, 'arrow');
     }

 	 addRedSlimes(){
        gState.enemies.redSlimes.create(1470, 10, 'monster2');
        gState.enemies.redSlimes.create(390, 70, 'monster2');
     }

 	 addFallers(){
 	 }

 	 addTrampolines( trampolines){
        trampolines.create(50, 270, 'trampoline');
        trampolines.create(900, 270, 'trampoline');
     }

     addSlowFallers(){
                gState.envObjects.slowFallers.create(20, 282, 'faller');
     }


 	 addLava(){
        gState.envObjects.lava.create(0, 332, 'lava2');
        gState.envObjects.lava.create(252, 332, 'lava2');
        gState.envObjects.lava.create(502, 332, 'lava2');
        gState.envObjects.lava.create(754, 332, 'lava2');
        gState.envObjects.lava.create(1510, 352, 'lava2');
 	 }

     addRiders(){
        this.rider1 = gState.envObjects.riders.create(490, 200, 'faller');
     }

     addSwitchFallers(){
	 }

     addTnt(){
     }

     handleRidersLogic(){
        if(this.rider1.x > 650){
            this.rider1.body.velocity.x = -100;
        }
     }

     checkForCoolKillText(){
        if( gState.enemies.redSlimes.countLiving() == 1 ){
                var infoLabel = game.add.text(310, 278, 'One more!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        infoLabel.kill();
                }, 3000);
            }
    }

}
