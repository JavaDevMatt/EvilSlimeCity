
let jumpLimit = 666;
let on = false;
export class HardModeHandler{

	constructor(isOn) {
        this.on = isOn;
 	}

	setJumpLimit(limit){
		jumpLimit = limit;
	}

	minusOne(){
		if(this.on){
			jumpLimit--;
		}
	}

	getJumpLimit(){
		return jumpLimit;
	}


}
