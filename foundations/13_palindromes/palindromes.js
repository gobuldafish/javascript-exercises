const palindromes = function (string) {
    return string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split("").reverse().join("") === 
    string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
