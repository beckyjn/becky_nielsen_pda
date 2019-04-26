var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
   calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  it('should be able to add numbers', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  })

  it('should be able to subtract numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('should be able to multiply numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15)
  })

  it('should be able to divide numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

// integration tests

  it('should be able to concatenate multiple number clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(3);
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 13)
  })

  it('should be able to chain multiple operations together', function(){
    calculator.previousOperator = '+'
    calculator.operatorClick('-')
    const actual = calculator.previousOperator
    assert.strictEqual(actual, '-')
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 15;
    calculator.clearClick();
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 0)
  })
});
