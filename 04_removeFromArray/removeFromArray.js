let theArray = []

const removeFromArray = function(theArray, ...argument) {
   return theArray.filter(val => !argument.includes(val));
}
console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;