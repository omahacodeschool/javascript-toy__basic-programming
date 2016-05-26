var assert = require('chai').assert;

var uppercases_all_letters = require('../lib/2_uppercases_all_letters.js').uppercases_all_letters;

describe('uppercases_all_letters', function() {
  it('uppercases "hello"', function(){
    assert.equal("HELLO", uppercases_all_letters("hello"));
  });

  it('uppercases "HELLO"', function(){
    assert.equal("HELLO", uppercases_all_letters("HELLO"));
  });

  it('uppercases "scooby_doo"', function(){
    assert.equal("SCOOBY DOO", uppercases_all_letters("scooby doo"));
  });
});