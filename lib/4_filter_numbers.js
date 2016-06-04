// Modify this function to get its tests passing.
// 
// Remember: Don't change the name of the function. Just modify its body.
// 
// Run `bin/check` from the command line to execute the automated tests.

//module.exports = {
//  filter_numbers: function(arr){
//    function isBigEnough(value) {
//      return value >= 10;
//}
//    var arr.filter(isBigEnough);
//  }
//}


module.exports = {
  filter_numbers: function(arr){
    function isBigEnough(value) {
      return value >= 10;
}
    var result = arr.filter(isBigEnough);
      return result;
  }
};