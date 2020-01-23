/* Perceptron built in JavaScript and some demonstrations of its use*/
//Declare a class perceptron which has the basic components inputs weights and bias, and two methods one to change the inputs and one to get an output value
class Perceptron { 
	constructor(inputArray, weightArray, bias) {
		this.inputs = inputArray;
		this.weights = weightArray;
		this.bias = bias
	}

	setInputs(newInputArray) {
		this.inputs = newInputArray;
	}

	runPerceptron() {
		var initialOutputVal = 0;
		for(var i = 0; i < this.inputs.length; i++) {
			initialOutputVal = (this.inputs[i] * this.weights[i]) + initialOutputVal;
		}
		var z = initialOutputVal + this.bias;
		var output;
		z <= 0 ? output = 0 : output = 1 
		return output;
	}
}


