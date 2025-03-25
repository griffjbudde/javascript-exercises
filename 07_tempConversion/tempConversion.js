const convertToCelsius = function(far) {
  cels = (far - 32) * (5 / 9);
  roundCels = Math.round(cels * 10) / 10;
  return roundCels;
};


const convertToFahrenheit = function(cels) {
  far = (cels * (9 / 5) + 32);
  roundFar = Math.round(far * 10) / 10;
  return roundFar;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
