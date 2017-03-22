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

// class JuiceEmitters(){
// 	initEmitters(){
// 		emitter1 = game.add.emitter(0, 0, 100);
//    		emitter1.makeParticles('particle');
// 		emitter1.gravity = 200;

// 		emitter2 = game.add.emitter(0, 0, 100);
//    		emitter2.makeParticles('particle2');
// 		emitter2.gravity = 50;
// 		emitter2.setScale(1.0, 0, 1.0, 0, 2000);
// 	}

// 	spawnJumpEmitters(x, y){
// 			emitter1.x = x;
//     		emitter1.y = y + 5;
// 			emitter1.start(true, 2000, null, 20);
// 	}
// }