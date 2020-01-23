/* sigmoidNeuron built in JavaScript and some demonstrations of its use*/
/*Declare a class sigmoidNeuron which has the basic components inputs weights and bias, and three methods
 one to change the inputs, one to calculate sigmoid and one to get an output value*/

class SigmoidNeuron {
 	constructor(inputArray, weightArray, bias) {
		this.inputs = inputArray;
		this.weights = weightArray;
		this.bias = bias
	}
	sigmoid(x) {
		return 1/(1 + Math.exp(-x));
	}
	setInputs(newInputArray) {
		this.inputs = newInputArray;
	}

	runSigmoidNeuron(reqZ) {
		var initialOutputVal = 0;
		for(var i = 0; i < this.inputs.length; i++) {
			initialOutputVal = (this.inputs[i] * this.weights[i]) + initialOutputVal;
		}
		var z = initialOutputVal + this.bias;
		var prediction = this.sigmoid(z);
		var output;
		prediction <= .5 ? output = 0 : output = 1;

		if(reqZ === 'z' || reqZ === 'Z') {
			return z; 
		} 
		else if(reqZ === 'sigmoid') {
			return prediction;
		} else {
			return output;
		}	
	}
}
 
var protoNeuron = new SigmoidNeuron([0, 0], [-2, -2], 3);
var output = protoNeuron.runSigmoidNeuron();
var reqZ = protoNeuron.runSigmoidNeuron('z');
var pred = protoNeuron.runSigmoidNeuron('sigmoid')
console.log(output, reqZ, pred);

neuronArray = [];
for(var i = 1; i < 100; i++) {
	neuronArray[i-1] = new SigmoidNeuron([4 * i, 2 * i], [-2 * i, -2 * i], 3 * i);  
}
console.log(neuronArray, neuronArray.length);