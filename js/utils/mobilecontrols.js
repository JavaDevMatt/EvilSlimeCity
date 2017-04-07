import {GameState} from '../gameState'
let g = new GameState().state;

export class MobileControlsHandler{

	initButtons(){
		this.buttonLeft = game.add.button(0, 80, 'mobile', null, this, 2, 1, 0);
 		this.buttonLeft.fixedToCamera = true;
 		this.buttonLeft.isDown = false;
 		this.buttonLeft.events.onInputDown.add(function () { g.mControlsFlags.leftDown = true; });
 		this.buttonLeft.events.onInputUp.add(function () { g.mControlsFlags.leftDown = false; });

 		this.buttonRight = game.add.button(160, 80, 'mobile', null, this, 2, 1, 0);
		this.buttonRight.fixedToCamera = true;
		this.buttonRight.isDown = false;
		this.buttonRight.events.onInputDown.add(function () { g.mControlsFlags.rightDown = true; });
		this.buttonRight.events.onInputUp.add(function () { g.mControlsFlags.rightDown = false; });

		this.buttonJump = game.add.button(465, 80, 'mobile', null, this, 2, 1, 0);
 		this.buttonJump.fixedToCamera = true;
 		this.buttonJump.isDown = false;
 		this.buttonJump.events.onInputDown.add(function () { g.mControlsFlags.jumpDown = true; });
 		this.buttonJump.events.onInputUp.add(function () { g.mControlsFlags.jumpDown = false; });
	}

}