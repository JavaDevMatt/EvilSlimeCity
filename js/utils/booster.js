class ArrowBooster{

	boost(arrow){
		if(canBoostFlag){
			var boostTween = game.add.tween(player).to( { alpha: 0 }, 50, Phaser.Easing.Linear.None, true, 0, 1000, true);
	 	
			game.sound.play('ding')
	 		canBoostFlag = false;
	 		arrow.kill();

	 		var l1 = game.add.text(player.x - 8, player.y - 30, '3!', 
                {font: '20px Courier', fill: '#fff'});

	 		var l2, l3;

	 		setTimeout(function(){
	 			l1.kill();
	 			l2 = game.add.text(player.x - 8, player.y - 30, '2!', 
                {font: '20px Courier', fill: '#fff'});
			}, 1000);

			setTimeout(function(){
	 			l2.kill();
	 			l3 = game.add.text(player.x - 8, player.y - 30, '1!', 
                {font: '20px Courier', fill: '#fff'});
			}, 2000);

		 	setTimeout(function(){
		 		boostTween.stop();
	    		game.add.tween(player).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true);

		 		l3.kill();
		 		juiceEmitters.spawnPlayerBoostEmitters();

		 		canBoostFlag = true;
		 		player.body.velocity.y = -500;
			}, 3000);
		 }	
	}
	
}