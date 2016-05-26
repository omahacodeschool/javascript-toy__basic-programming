var assert = require('chai').assert;

var filter_numbers = require('../lib/4_filter_numbers.js').filter_numbers;

describe('filter_numbers', function() {
  it('removes 92 from [3, 92]', function(){
    assert.sameMembers([3], filter_numbers([3, 92]));
  });

  it('removes 10 and greater from [30, 5, 9, 10, 11]', function(){
    assert.sameMembers([5, 9], filter_numbers([30, 5, 9, 10, 11]));
  });

  it('removes big numbers including decimals from [50, 49.5, 30.00, 5, 6, 0, 10]', function(){
    assert.sameMembers([5, 6, 0], filter_numbers([50, 49.5, 30.00, 5, 6, 0, 10]));
  });

  it('removes no numbers from [3, 6, 7, 0, 2]', function(){
    assert.sameMembers([3, 6, 7, 0, 2], filter_numbers([3, 6, 7, 0, 2]));
  });
});