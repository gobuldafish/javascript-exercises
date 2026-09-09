const leapYears = function(year) {
    //Return true if year is divisible by 400
    //Return false if year is divisible by 100
    //Return true if year is divisible by 4
    //Check if year is divisible by 400
    //If year is divisible by 400, return true
    //If year is not divisible by 400, check if it is divisible by 100
    //If year is divisible by 100, return false
    //If year is not divisible by 100, check if it is divisible by 4
    //If year is divisible by 4, return true
    if(year % 400 === 0) {
        return true;
    } else if (!(year % 100 === 0) && year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
