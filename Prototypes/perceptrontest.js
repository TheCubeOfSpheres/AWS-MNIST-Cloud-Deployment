

describe("Perceptron class is accessible and created with the defined properties", function() {
    var testPerceptron = new Perceptron([0, 0], [-2, -2], 3);
  	it("has inputs", function() {
        expect(testPerceptron.inputs).toEqual([0,0]);
  	});
    it("has weights", function() {
        expect(testPerceptron.weights).toEqual([-2,-2]);
    });
    it("has a bias", function() {
        expect(testPerceptron.bias).toEqual(3);
    });
});

describe("Perceptron methods function as expected", function() {
		var testPerceptron = new Perceptron([0, 0], [-2, -2], 3);
		
    it("can change input values with the method setInputs", function() {
 			testPerceptron.setInputs([1, 1]);
    	expect(testPerceptron.inputs).toEqual([1, 1]);

      testPerceptron.setInputs([7, 7]);
      expect(testPerceptron.inputs).toEqual([7, 7]);

      testPerceptron.setInputs([4, 4])
      expect(testPerceptron.inputs).toEqual([4, 4]);
		});
    
    it("Outputs a 1 when when output > 0", function() {
      var testPerceptron = new Perceptron([0, 0], [-2, -2], 3);
      var output = testPerceptron.runPerceptron();
      expect(output).toEqual(1);
    });
    it("Outputs a 0 when output <= 0", function() {
      var testPerceptron = new Perceptron([1, 1], [-2, -2], 3);
      var output = testPerceptron.runPerceptron();
      expect(output).toEqual(0);
    });
});