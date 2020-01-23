describe("SigmoidNeuron class is accessible and created with the defined properties", function() {
    var protoNeuron = new SigmoidNeuron([1, 1],[-2,-2], 3);
        
    it("has inputs", function() {
        expect(protoNeuron.inputs).toEqual([1,1]);
    });
    it("has weights", function() {
        expect(protoNeuron.weights).toEqual([-2,-2]);
    });
    it("has a bias", function() {
        expect(protoNeuron.bias).toEqual(3);
    });
});

describe("SigmoidNeuron setInputs method to function as expected", function() {
    var protoNeuron = new SigmoidNeuron([1, 1],[-2,-2], 3);
        
    it("can change input values with the method setInputs", function() {
        protoNeuron.setInputs([1, 1]);
        expect(protoNeuron.inputs).toEqual([1, 1]);

        protoNeuron.setInputs([7, 7]);
        expect(protoNeuron.inputs).toEqual([7, 7]);

        protoNeuron.setInputs([4, 4])
        expect(protoNeuron.inputs).toEqual([4, 4]);
    });
});

describe("Run sigmoidNeuron method functions as expected", function() {
    it("passing 'sigmoid' to runSigmoidNeuron returns a value where; 1 > value > 0 ", function() {
      var protoNeuron = new SigmoidNeuron([0, 0], [-2, -2], 3);
      var z = protoNeuron.runSigmoidNeuron('sigmoid');
      expect(z).toBeGreaterThan(0);
      expect(z).toBeLessThan(1)
    });
    it("Outputs a 0 or 1 when run without arguments", function() {
      var protoNeuron = new SigmoidNeuron([1, 1], [-2, -2], 3);
     
      var output1 = protoNeuron.runSigmoidNeuron();
      expect(output1).toBe(0);

      protoNeuron.setInputs([0, 0]);
      
      var output2 = protoNeuron.runSigmoidNeuron();
      expect(output2).toBe(1);
    });
});

describe(" take all the weights and biases in a network of SigmoidNeurons, and multiply them by a positive constant, c > 0. Show that the behaviour of the network doesn't change.", function() {
    it("passing 'sigmoid' to runSigmoidNeuron returns a value where; 1 > value > 0 ", function() {
        var neuronArray = [];
        var expectedBehavior;
        neuronArray = [];
        for(var i = 1; i < 100; i++) {
            neuronArray[i-1] = new SigmoidNeuron([.33 * i, .754 * i], [-.099 * i, .86 * i], 2 * i);  
        }
        var expectedBehavior = neuronArray[0].runSigmoidNeuron();
        neuronArray.forEach(function(neuron, i) {
          var output = neuron.runSigmoidNeuron();
          var prediction = neuron.runSigmoidNeuron('sigmoid');
          var z = neuron.runSigmoidNeuron('z');
          expect(output).toEqual(expectedBehavior)  
          console.log('Neuron: ' + i, 'Expected Behavior: ' + expectedBehavior, 'Actual Behavior: ' + output, 'Prediction: ' + prediction, 'Z: ' + z);
        })
    });
});