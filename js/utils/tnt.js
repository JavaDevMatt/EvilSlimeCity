import {GameState} from '../gameState'
let g = new GameState().state;
let exploding = false;
export class TntHandler{

	explode(tnt){
		if(g.flags.canTntExplode){
			exploding = true;
			
			game.add.tween(tnt).to( { alpha: 0 }, 700, Phaser.Easing.Linear.None, true, 0, 1000, true);
	 		game.sound.play('tnt')
	 		g.flags.canTntExplode = false;
	 		var l1 = game.add.text(tnt.x + 11, tnt.y - 30, '3!',
                {font: '20px Courier', fill: '#fff'});

	 		var l2, l3;

	 		setTimeout(function(){
	 			l1.kill();
	 			l2 = game.add.text(tnt.x + 11, tnt.y - 30, '2!',
                {font: '20px Courier', fill: '#fff'});
			}, 1000);

			setTimeout(function(){
	 			l2.kill();
	 			l3 = game.add.text(tnt.x + 11, tnt.y - 30, '1!',
                {font: '20px Courier', fill: '#fff'});
	 			
			}, 2000);

		 	setTimeout(function(){
		 		game.camera.shake(0.04, 2000, true);
		 		l3.kill();

				setTimeout(function(){
					exploding = false;
		 			tnt.kill();
				}, 1000);

		 		g.envObjects.switchFallers.forEachAlive(function(item) {
        			item.body.immovable = false;
				}, this);

			}, 3000);
		 }
	}

	isExploding(){
		return exploding; 
	}

}
