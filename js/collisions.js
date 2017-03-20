class CollisionsHandler{
 
	update(){
		game.physics.arcade.collide(player, platforms);
	}

}