import {GameState} from '../gameState'
let g = new GameState().state;

export class CollisionsHandler{

	update(){
		game.physics.arcade.collide(g.player, g.envObjects.platforms);
		game.physics.arcade.collide(g.player, g.envObjects.riders);
		game.physics.arcade.collide(g.player, g.envObjects.fallers);
		game.physics.arcade.collide(g.player, g.envObjects.trampolines);
		game.physics.arcade.collide(g.player, g.envObjects.slowFallers);
		game.physics.arcade.collide(g.player, g.envObjects.switchFallers);
	 	game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.platforms);
	 	game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.trampolines);
	 	game.physics.arcade.collide(g.envObjects.slowFallers, g.envObjects.platforms);
	 	game.physics.arcade.collide(g.envObjects.tnt, g.envObjects.platforms);
	 	game.physics.arcade.collide(g.envObjects.tnt, g.envObjects.switchFallers);
	 	game.physics.arcade.collide(g.envObjects.redSlimes, g.envObjects.fallers);
	 	game.physics.arcade.collide(g.envObjects.redSlimes, g.envObjects.redSlimes);
	 	game.physics.arcade.collide(g.envObjects.redSlimes, g.envObjects.trampolines);
	 	game.physics.arcade.collide(g.envObjects.redSlimes, g.envObjects.switchFallers);
	 	game.physics.arcade.collide(g.player, g.envObjects.redSlimes);
	 	game.physics.arcade.collide(g.envObjects.platforms, g.envObjects.redSlimes);
	 	game.physics.arcade.collide(g.envObjects.redSlimes, g.envObjects.slowFallers);
	 	game.physics.arcade.collide(g.envObjects.slowFallers, g.envObjects.trampolines);
	 	game.physics.arcade.collide(g.envObjects.redSlimes, g.envObjects.riders);
	 	game.physics.arcade.collide(g.envObjects.trampolines, g.envObjects.switchFallers);
	 	game.physics.arcade.collide(g.envObjects.switchFallers, g.envObjects.switchFallers);
	}

}
