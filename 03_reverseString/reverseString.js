const reverseString = function(string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        arr.unshift(string.charAt(i));
    }
    let final = arr.join("");
    return final;
};

// Do not edit below this line
module.exports = reverseString;
