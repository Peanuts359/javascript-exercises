const sumAll = function(int1, int2) {
    if (!Number.isInteger(int1) || !Number.isInteger(int2) || 
        int1 < 0 || int2 < 0) return "ERROR";
    const lesser = (int1 <= int2) ? int1 : int2;
    const greater = (int1 > int2) ? int1 : int2;

    let sum = 0;
    for (let i = lesser; i <= greater; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
