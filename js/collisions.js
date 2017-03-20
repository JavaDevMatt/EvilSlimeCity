class CollisionsHandler{
 
	update(){
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(player, fallers); 
		game.physics.arcade.collide(player, trampolines);
	 	game.physics.arcade.collide(trampolines, platforms);
	 	game.physics.arcade.collide(trampolines, trampolines);
	}

}