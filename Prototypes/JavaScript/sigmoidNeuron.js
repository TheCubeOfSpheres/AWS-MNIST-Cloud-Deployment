/* sigmoidNeuron built in JavaScript and some demonstrations of its use*/
/*Declare a class sigmoidNeuron which has the basic components inputs weights and bias, and three methods
 one to change the inputs, one to calculate sigmoid and one to get an output value*/

 class SigmoidNeuron {
 	constructor(inputArray, weightArray, bias) {
		this.inputs = inputArray;
		this.weights = weightArray;
		this.bias = bias
	}
	calculateSigmoid(x) {
		return 1/(1 + Math.exp(-x));
	}

	setInputs(newInputArray) {
		this.inputs = newInputArray;
	}

	runSigmoidNeuron() {

	}
 }

 var protoNeuron = new SigmoidNeuron([1, 1], [-2, -2], 3);
 var z = protoNeuron.calculateSigmoid(1);
 console.log(z);