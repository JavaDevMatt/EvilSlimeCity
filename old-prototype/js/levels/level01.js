class Level1{

	 constructor() {
	 	this.playerStartingX = 10;
	 	this.playerStartingY = 10; 
 	 }

    addStartingText(game){
                var loadingLabel = game.add.text(80, 278, 'Kill the evil slime!', 
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        loadingLabel.kill();
                }, 8000); 
    }

    addEndingText(game, player){
        game.add.text(player.x - 200, 100, 'Great!', 
                {font: '40px Courier', fill: '#fff'});
                game.add.text(player.x - 200, 136, 'Time for the next one....', 
                {font: '20px Courier', fill: '#fff'});
    }

 	 createBackground(game){
 	 	game.world.setBounds(0, 0, 885, 376);

 	 	game.add.sprite(0, 0, 'background2');
	 	game.add.sprite(640, 0, 'background2');
 	 }

     addRedSlimes(redSlimes){
        redSlimes.create(670, 10, 'monster2');
     }

 	 addTrampolines(trampolines){
 	 	trampolines.create(600, 270, 'trampoline');
 	 }

 	 addtPlatforms(platforms){
 	 	platforms.create(0, 300, 'platform');
                platforms.create(197, 300, 'platform2');
                platforms.create(506, 300, 'platform');
                platforms.create(646, 300, 'platform');
                platforms.create(646, 112, 'tower1');
 	 }

 	 addKillers(killers){
 	 	killers.create(141, 332, 'lava');
        killers.create(254, 332, 'lava2');
        killers.create(700, 332, 'lava2');
 	 }

 	 addArrows(arrows){
 	 	// arrows.create(10, 270, 'arrow');
 	 } 

 	 addFallers(fallers){
 	 	fallers.create(340, 282, 'faller');
 	 }

         addSlowFallers(slowFallers){
                // slowFallers.create(120, 162, 'faller');
         } 

         addRiders(riders){
                // riders.create(290, 50, 'faller');
         }

    handleRidersLogic(){
         
         }
}