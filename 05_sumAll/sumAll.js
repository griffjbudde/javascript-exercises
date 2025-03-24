const sumAll = function(bottom, top,) {
    let high = 0;
    let low = 0;
    if (bottom > top) {
        high = bottom;
        low = top;
        }
    else {
        high = top;
        low = bottom;
    }
    if (Number.isInteger(bottom + top) && bottom >= 0 && top  >= 0) {
        let i = low;
        let sum = 0;
        while (i <= high) {
            sum = sum + i;
            i++;
        }
        return sum;
    }
    else {
        return "ERROR"
    }
}
console.log(sumAll(1, 5))
// Do not edit below this line
module.exports = sumAll;
