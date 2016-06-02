// Modify this function to get its tests passing.
// 
// Remember: Don't change the name of the function. Just modify its body.
// 
// Run `bin/check` from the command line to execute the automated tests.

module.exports = {
    filter_numbers: function(arr){
        
var i = 0;

for (i = arr.length - 1; i >= 0; i--){
    if (arr[i]>=10){
        arr.splice(i,1);
    }
}
    return arr;
    }
};
            