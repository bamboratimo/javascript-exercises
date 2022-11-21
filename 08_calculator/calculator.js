const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  arr.forEach(num => {
    sum *= num;
  });
  return sum;
};

const power = function(num1, num2) {
  let numPowered = num1;
	for (let i = 1; i < num2; i++) {
    numPowered *= num1;
  }
  return numPowered;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
