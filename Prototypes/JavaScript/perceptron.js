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
		var output = initialOutputVal + this.bias;
		console.log(output)
	}
}

var testPerceptron = new Perceptron([0, 0], [-2, -2], 3);
testPerceptron.runPerceptron();
testPerceptron.setInputs([0, 1]);
testPerceptron.runPerceptron();
testPerceptron.setInputs([1, 0]);
testPerceptron.runPerceptron();
testPerceptron.setInputs([1, 1]);
testPerceptron.runPerceptron();

