const fibonacci = function(num) {
   //if num is equal to 1 or 2, return 1
   let total = 0;

   if(Number(num) === 0) {
    return 0;
   } else if(Number(num) === 1 || Number(num) === 2) {
    return 1;
   } else if(Number(num < 0)) {
    return 'OOPS';
   }
   let firstPrev = 0;
   let secondPrev = 1;

   for(let i = 0; i < num; i++) {
    total = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = total;
   }
   return total;
};

// Do not edit below this line
module.exports = fibonacci;
