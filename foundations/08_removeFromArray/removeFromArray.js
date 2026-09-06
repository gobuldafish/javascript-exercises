const removeFromArray = function(arr, ...args) {
    // Go through array
    // Filter out the items that don't match the arguments from the array
    
    return arr.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
