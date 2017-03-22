class RainEmitter{

	constructor() {
    	this.emitter = game.add.emitter(game.world.centerX, 0, 400);
    	this.initEmitter();
  	}
 
	initEmitter(){
        this.emitter.width = game.world.width;
        this.emitter.angle = -3;
        this.emitter.makeParticles('rain');

		this.emitter.minParticleScale = 0.1;
		this.emitter.maxParticleScale = 0.5;

		this.emitter.setYSpeed(300, 500);
		this.emitter.setXSpeed(-5, 5);

		this.emitter.minRotation = 0;
		this.emitter.maxRotation = 0;
	}

	start(){
		this.emitter.start(false, 800, 5, 0);
	}

}

class JuiceEmitters{

	spawnJumpEmitters(){
		this.emitter = game.add.emitter(0, 0, 100);
   		this.emitter.makeParticles('particle');
		this.emitter.gravity = 200;

		this.emitter.x = player.x;
    	this.emitter.y = player.y + 5;
		this.emitter.start(true, 2000, null, 20);
	}

  	spawnPlayerKillEmitters(){
  		this.emitter2 = game.add.emitter(0, 0, 100);
   		this.emitter2.makeParticles('particle2');
		this.emitter2.gravity = 50;
		this.emitter2.setScale(1.0, 0, 1.0, 0, 2000);

  		this.emitter2.x = player.x + 15;
    	this.emitter2.y = player.y + 25;
		this.emitter2.start(true, 600, null, 600);
  	}
}