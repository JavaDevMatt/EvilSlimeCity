class CollisionsHandler{
 
	update(){
		game.physics.arcade.collide(player, platforms);
		game.physics.arcade.collide(player, fallers); 
	}

}