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