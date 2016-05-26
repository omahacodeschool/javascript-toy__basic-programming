var assert = require('chai').assert;

var is_greater_than_five = require('../lib/1_is_greater_than_five.js').is_greater_than_five;

describe('is_greater_than_five', function() {
  it("checks that ten is greater than five", function() {
    assert.isTrue(is_greater_than_five(10));
  });

  it("checks that 30 is greater than five", function() {
    assert.isTrue(is_greater_than_five(30));
  });

  it("checks that 1 is smaller than five", function() {
    assert.isFalse(is_greater_than_five(1));
  });

  it("checks that 5 is not greater than five", function() {
    assert.isFalse(is_greater_than_five(5));
  });
});