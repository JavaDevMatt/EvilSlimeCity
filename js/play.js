var playState = {

	chooseLevel: function(){
		if(game.global.gameLevel == 1){
			return new Level1(); 
		}
	},

	create: function() {	
		level = this.chooseLevel();

		level.createBackground(game);
	},

	update: function() {  

	},

};