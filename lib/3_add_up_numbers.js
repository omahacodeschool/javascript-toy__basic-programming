// Modify this function to get its tests passing.
// 
// Remember: Don't change the name of the function. Just modify its body.
// 
// Run `bin/check` from the command line to execute the automated tests.

module.exports = {
  add_up_numbers: function(arr){
    var x=0;
    for (var i=0; i<arr.length; i++){
      x+=arr[i];
    }
    return x;
  }
}