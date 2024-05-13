const repeatString = function(string, int) {
    if (int < 0) return "ERROR";
    let result = "";
    for (let i = 0; i < int; i++) {
        result = result + string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
