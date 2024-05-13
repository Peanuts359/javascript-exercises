const palindromes = function (str) {
    const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
    
    const cleanedString = str.toLowerCase()
                             .split('')
                             .filter((x) => alphabet.includes(x))
                             .join('');
    
    const reversedString = cleanedString.split('').reverse().join('');
    return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
