class Level1{

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
 	 	platforms.create(0, 300, 'platform');
        platforms.create(197, 300, 'platform2');
        platforms.create(506, 300, 'platform');
        platforms.create(646, 300, 'platform');
        platforms.create(646, 112, 'tower1');
 	 }

     addArrows(arrows){
     }

 	 addRedSlimes(){
        redSlimes.create(670, 10, 'monster2');
     }

 	 addFallers(){
 	 	fallers.create(340, 282, 'faller');
 	 }

 	 addSlowFallers(){
     } 

 	 addTrampolines(){
 	 	trampolines.create(600, 270, 'trampoline');
 	 }

 	 addLava(){
 	 	lava.create(141, 332, 'lava');
        lava.create(254, 332, 'lava2');
        lava.create(700, 332, 'lava2');
 	 }

     addSwitchFallers(){
     }

 	 addEndingText(){
        game.add.text(player.x - 200, 100, 'Great!', 
                {font: '40px Courier', fill: '#fff'});
                game.add.text(player.x - 200, 136, 'Time for the next one....', 
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