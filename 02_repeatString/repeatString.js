const repeatString = function(string, num) {
    let moi = "";
    for (let i = 1; i <= num; i++) {
        moi += string;
    }
    if (num < 0) {
        return "ERROR";
    }
    return moi;
};

// Do not edit below this line
module.exports = repeatString;
