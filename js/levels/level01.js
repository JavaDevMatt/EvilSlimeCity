class Level1{

	 constructor() {
	 	this.playerStartingX = 10;
	 	this.playerStartingY = 10; 
 	 }

 	 createBackground(game){
 	 	game.world.setBounds(0, 0, 885, 376);

 	 	game.add.sprite(0, 0, 'game-background');
	 	game.add.sprite(640, 0, 'game-background');
 	 }

 	 addPlatforms(platforms){
 	 	platforms.create(0, 300, 'platform');
                platforms.create(197, 300, 'platform2');
                platforms.create(506, 300, 'platform');
                platforms.create(646, 300, 'platform');
                platforms.create(646, 112, 'tower1');
 	 }


}