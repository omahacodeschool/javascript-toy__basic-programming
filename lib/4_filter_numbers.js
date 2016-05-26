// Modify this function to get its tests passing.
// 
// Remember: Don't change the name of the function. Just modify its body.
// 
// Run `bin/check` from the command line to execute the automated tests.

module.exports = {
  filter_numbers: function(arr){
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 10) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
}