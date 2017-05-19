
let jumpLimit = 666;
export class HardModeHandler{

	setJumpLimit(limit){
		jumpLimit = limit;
	}

	minusOne(){
		jumpLimit--;
	}

	getJumpLimit(){
		return jumpLimit;
	}


}
