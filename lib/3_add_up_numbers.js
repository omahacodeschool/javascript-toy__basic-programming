// Modify this function to get its tests passing.
// 
// Remember: Don't change the name of the function. Just modify its body.
// 
// Run `bin/check` from the command line to execute the automated tests.

//module.exports = {
//  add_up_numbers: function(arr){
//var sum = arr.reduce((pv, cv) => pv+cv, 0);
//  return sum;
//  }
//}

module.exports = {
  add_up_numbers: function(arr){
    var sum = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  return sum ;}
};