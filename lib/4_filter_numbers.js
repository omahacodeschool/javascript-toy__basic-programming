// Modify this function to get its tests passing.
// 
// Remember: Don't change the name of the function. Just modify its body.
// 
// Run `bin/check` from the command line to execute the automated tests.

module.exports = {
  filter_numbers: function(arr){
    var newarr = arr.filter(function(x){ return x < 10; });
    return(newarr);
  }
};