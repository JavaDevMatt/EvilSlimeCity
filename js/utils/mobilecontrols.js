let jumpDown, leftDown, rightDown = false;

export class MobileControlsHandler{

	initButtons(){
		this.buttonJump = game.add.button(0, 0, 'mobile_jump', null, this, 2, 1, 0);
 		this.buttonJump.fixedToCamera = true;
 		this.buttonJump.isDown = false;
 		this.buttonJump.events.onInputDown.add(function () { jumpDown = true; });
 		this.buttonJump.events.onInputUp.add(function () { jumpDown = false; });
	}

	isJumpDown(){
		return jumpDown;
	}

}