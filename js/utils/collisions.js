import {GameState} from '../gameState'
let g = new GameState().state;

export class CollisionsHandler{

	update(){
		game.physics.arcade.collide(g.player, g.envObjects.platforms);
		game.physics.arcade.collide(g.player, g.envObjects.riders);
		game.physics.arcade.collide(g.player, g.envObjects.fallers);
		game.physics.arcade.collide(g.player, g.envObjects.trampolines);
		game.physics.arcade.collide(g.player, g.envObjects.slowFallersfallers);
		game.physics.arcade.collide(g.player, g.envObjects.switchFallers);
	 	game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.platforms);
	 	game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.trampolines);
	 	game.physics.arcade.collide(g.envObjects.slowFallersfallers, g.envObjects.platforms);
	 	game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.platforms);
	 	game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.switchFallers);
	 	game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.fallers);
	 	game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.trampolines);
	 	game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.switchFallers);
	 	game.physics.arcade.collide(g.player, g.enemies.redSlimes);
	 	game.physics.arcade.collide(g.envObjects.platforms, g.enemies.redSlimes);
	 	game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.slowFallersfallers);
	 	game.physics.arcade.collide(g.envObjects.slowFallersfallers, g.envObjects.trampolines);
	 	game.physics.arcade.collide(g.enemies.redSlimes, g.envObjects.riders);
	 	game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.switchFallers);
	 	game.physics.arcade.collide(g.envObjects.switchFallers, g.envObjects.switchFallers);
	}

}
