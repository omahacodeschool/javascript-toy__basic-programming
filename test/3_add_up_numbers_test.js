var assert = require('chai').assert;

var add_up_numbers = require('../lib/3_add_up_numbers.js').add_up_numbers;

describe('add_up_numbers', function() {
  it('adds two numbers', function(){
    assert.equal(13, add_up_numbers([3, 10]));
  });

  it('adds three numbers', function(){
    assert.equal(83, add_up_numbers([20, 12, 51]));
  });

  it('handles single number', function(){
    assert.equal(42, add_up_numbers([42]));
  });

  it('lots of numbers', function(){
    assert.equal(793, add_up_numbers([23, 31, 89, 21, 2, 39, 202, 230, 142, 14]));
  });
});