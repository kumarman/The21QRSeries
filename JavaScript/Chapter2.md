# Declarations and data types? {#chapter2 .chapter}


	//Declaration
	var myVarWithoutInitialize;
	var myVarWithInitialize = 'SomeValue';

	var myBoolean = true;
	if (myBoolean) {
		let localBlockScoped = 'I am available inside the current if block';
		var iDoNotFollowBlockScope = 'I am also available outside the if block';
		const iCanNotBeReassigned = 'I am final. Also available within the block only';
		//iCanNotBeReassigned = 'I want to change'; // This throws error
	}
	//This would print the value defined inside if block
	console.log(iDoNotFollowBlockScope);
