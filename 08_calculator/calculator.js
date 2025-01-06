const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
	let sub = 0;
  arr.forEach((num)=>{
    sub += num;
  });
  return sub;
};

const multiply = function(arr) {
  let sub = 1;
  arr.forEach((num)=>{
    sub *= num;
  });
  return sub;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
  let sub = 1;
	if (num === 0) {
    return sub;
  } else {
    for (let i = num; i > 0; i--) {
      sub *= i;
    }
    return sub;
  }
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
