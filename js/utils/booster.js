import {GameState} from '../gameState'
let g = new GameState().state;
export class ArrowBooster{

	boost(slime, arrow){
		if( g.flags.canBoostFlag){
			var boostTween = game.add.tween(slime).to( { alpha: 0 }, 50, Phaser.Easing.Linear.None, true, 0, 1000, true);

			game.sound.play('ding')
	 		g.flags.canBoostFlag = false;
	 		arrow.kill();

	 		var l1 = game.add.text(slime.x - 8, slime.y - 30, '3!',
                {font: '20px Courier', fill: '#fff'});

	 		var l2, l3;

	 		setTimeout(function(){
	 			l1.kill();
	 			l2 = game.add.text(slime.x - 8, slime.y - 30, '2!',
                {font: '20px Courier', fill: '#fff'});
			}, 1000);

			setTimeout(function(){
	 			l2.kill();
	 			l3 = game.add.text(slime.x - 8, slime.y - 30, '1!',
                {font: '20px Courier', fill: '#fff'});
			}, 2000);

		 	setTimeout(function(){
		 		boostTween.stop();
	    		game.add.tween(slime).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true);

		 		l3.kill();
		 		g.emitters.juiceEmitters.spawnBoostEmitters(slime);

		 		g.flags.canBoostFlag = true;
		 		slime.body.velocity.y = -500;
			}, 3000);
		 }
	}

}
