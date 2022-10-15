const removeFromArray = function(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arguments.length - 1; j > 0; j--) {
            if (arr[i] === arguments[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}


// Do not edit below this line
module.exports = removeFromArray;