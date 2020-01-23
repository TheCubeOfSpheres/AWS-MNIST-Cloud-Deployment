//Create Sigmoid function  to compress values between 0 and 1
function sigmoid(x) {
	return 1/(1+Math.exp(-x));
}

function rng() {
	var random = Math.random() * (3 - -3) + -3;
	return random;
}

function SquaredError(target, prediction ) {
	var SqError =  (target - prediction)**2;
	return SqError;
}

var r1 = [1, 4, 0];
var r2 = [1.5, 3.5, 0];
var r3 = [.5, 4, 0];
var r4 = [1, 3.5, 0];


var b1 = [1, 2, 1]
var b2 = [.5, 3, 1];
var b3 = [.5, 2.5, 1];
var b4 = [1, 3, 1];


var flowerData = [r1, r2, r3, r4, b1, b2, b3, b4];
var unknown = [.5, 3.5, '?']

/*
1. Weight input values
2. Add them together with a bias
3. Squash with sigmoid to yeild a prediction

4. Compare prediction to known target value (0 or 1) with Squared Error function  --> (prediction - target)^2
5. Get the derivative

*/
var flowerNet = {
	w1: 'uninitialized',
	w2: 'uninitialized',
	b: 'uninitialized',
	data: flowerData,
	learningRate: .2,
	train: function(data) {
			var w1 = rng(); 
			console.log('initW1:'+w1);
			var w2 = rng();
			console.log('initW2:'+w2);
			var b = rng();
			console.log('initB:'+b);

			for(var i = 0; i < 50000; i ++) {
				var randomIndex = Math.floor(Math.random() * flowerNet.data.length);
				var point = data[randomIndex];
				var target = point[2]; // 0 for red 1 for blue

				//feed forward
				var z = w1*point[0] + w2*point[1] + b
				var prediction = sigmoid(z);

				//Compare Prediction to target using squaredError function
				var sqError = (prediction - target)**2;

				//Get the derivated of the SqError with respect to the prediction
				var dSqError_dpred = 2*(prediction - target);

				//Get the derivative of sigmoid with respect to z -->  the derivative of sigmoid is sigmoid(x) * 1-sigmoid(x)
				var dpred_dz = sigmoid(z)*(1-sigmoid(z));

				//Get the derivtives of z with respect to w1 w2 and b 
				var dz_dw1 = point[0];
				var dz_dw2 = point[1];
				var dz_db = 1;

				//Get the derivitives of the Squared Error function with respect to w1 w2 and b

				var dSqError_dw1 = dSqError_dpred * dpred_dz * dz_dw1;
				var dSqError_dw2 = dSqError_dpred * dpred_dz * dz_dw2;
				var dSqError_db = dSqError_dpred * dpred_dz * dz_db;

				w1 -= flowerNet.learningRate * dSqError_dw1; 
				w2 -= flowerNet.learningRate * dSqError_dw2;
				b -= flowerNet.learningRate * dSqError_db ;
			}
		flowerNet.w1 = w1;
		flowerNet.w2 = w2
		flowerNet.b = b
	},
	run: function(width, length) {
		var Z = flowerNet.w1*width + flowerNet.w2*length + flowerNet.b;
		console.log('sigmoid:'+ sigmoid(Z));
		if(sigmoid(Z) < .5) {
			console.log('Red');
		} else {
			console.log('Blue');
		}
	}
}
console.log(flowerNet);
flowerNet.train(flowerNet.data);
console.log(flowerNet);
debugger;
flowerNet.run(1, 4);
flowerNet.run(1, 2);


function testSigNet(m1, m2, w1, w2, b, target) {
		var wbias = (m1*w1) + (m2*w2) + b;
		prediction = sigmoid(wbias);
		console.log('Weight1:'+ w1, 'Weight2:' + w2, 'Bias:' + b);
		console.log('target:'+ target,'predciton:'+prediction, 'SqauredError:'+(prediction-target)**2, 'InstantaneousDelta:'+(2*(prediction-target)) );
}


function trainSigNet() {};