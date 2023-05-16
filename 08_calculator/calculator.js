const add = function(number1, number2) {
  if(typeof number1 !== 'number' || typeof number2 !== 'number')
    return 0;
    if(number1 === NaN || number2 === NaN) 
      return 0;
      let toReturn = number1+number2;
	return toReturn;
};

const subtract = function(number1,number2) {
	return (number1-number2);
};

const sum = function(array) {
  return array.reduce((total,current)=>total+current,0);
};

const multiply = function(array) {
  if(array.length === 0) return 0; 
  return array.reduce((total,current)=>total*current,1);
};

const power = function(number1,number2) {
	return (Math.pow(number1,number2));
};

const factorial = function(number) {
  if(number === 0) return 1;
  let fac = 1;
  let i = 2;
  while(i < number) {
    fac *= i;
    i++;
  }
  fac *= number;

  return fac;
	
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
