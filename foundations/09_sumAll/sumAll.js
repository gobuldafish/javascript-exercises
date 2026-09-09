const sumAll = function(first, last) {
    //Loop that iterates the first value by one and then adds it to a sum total
    //Loop ends after last value is added to the sum
    let total = 0;
    //Check if first value is not a positive integer, return error if it is not
    if ((!(typeof first === "number") || !Number.isInteger(first) || first < 0) || 
    !(typeof last === "number") || !Number.isInteger(last) || last < 0) {
        return "ERROR";
    }
    if(last > first) {
        for (let i = first; i <= last; i++) {
            total += i;
        }
    } else {
        for (let i = first; i >= last; i--) {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
