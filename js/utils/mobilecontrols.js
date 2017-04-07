let jumpDown, leftDown, rightDown = false;

export class MobileControlsHandler{

	initButtons(){
		this.buttonLeft = game.add.button(0, 80, 'mobile', null, this, 2, 1, 0);
 		this.buttonLeft.fixedToCamera = true;
 		this.buttonLeft.isDown = false;
 		this.buttonLeft.events.onInputDown.add(function () { leftDown = true; });
 		this.buttonLeft.events.onInputUp.add(function () { leftDown = false; });

 		this.buttonRight = game.add.button(160, 80, 'mobile', null, this, 2, 1, 0);
		this.buttonRight.fixedToCamera = true;
		this.buttonRight.isDown = false;
		this.buttonRight.events.onInputDown.add(function () { rightDown = true; });
		this.buttonRight.events.onInputUp.add(function () { rightDown = false; });

		this.buttonJump = game.add.button(465, 80, 'mobile', null, this, 2, 1, 0);
 		this.buttonJump.fixedToCamera = true;
 		this.buttonJump.isDown = false;
 		this.buttonJump.events.onInputDown.add(function () { jumpDown = true; });
 		this.buttonJump.events.onInputUp.add(function () { jumpDown = false; });
	}

	isJumpDown(){
		return jumpDown;
	}

	isLeftDown(){
		return leftDown;
	}

	isRightDown(){
		return rightDown;
	}

}