class CollisionsHandler{
 
	update(){
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(player, fallers); 
		game.physics.arcade.collide(player, trampolines);
		game.physics.arcade.collide(player, slowFallers);
	 	game.physics.arcade.collide(trampolines, platforms);
	 	game.physics.arcade.collide(trampolines, trampolines);
	 	game.physics.arcade.collide(slowFallers, platforms);
	 	game.physics.arcade.collide(redSlimes, fallers);
	 	game.physics.arcade.collide(redSlimes, trampolines);
	 	game.physics.arcade.collide(player, redSlimes);
	 	game.physics.arcade.collide(platforms, redSlimes);
	 	game.physics.arcade.collide(redSlimes, slowFallers);
	 	game.physics.arcade.collide(slowFallers, trampolines);
	}

}