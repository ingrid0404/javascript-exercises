const convertToCelsius = function(fah) {
  let toReturn;

  toReturn = fah - 32;
  toReturn = (toReturn*5)/9;
  toReturn = Math.round(toReturn*10)/10;

  return toReturn;
};

const convertToFahrenheit = function(cel) {
  let toReturn;

  toReturn = (cel*9)/5;
  toReturn += 32;
  toReturn = Math.round(toReturn*10)/10;
  
  return toReturn;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
