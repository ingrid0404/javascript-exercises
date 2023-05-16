const sumAll = function(start, end) {
    if(typeof start !== "number" || typeof end !== "number" )
        return 'ERROR';

    if(start < 0 || end < 0)
        return 'ERROR';

    if(start > end) {
        const newNumbers = interschimb(start, end);
        start = newNumbers.number1;
        end = newNumbers.number2;
    }
    let sum = start;
    
    let i = start+1;
    while(i < end) {
        sum += i;
        i++;
    }
    sum += end;

    return sum;
};

const interschimb = (number1, number2) => {
    let aux = number1;
    number1 = number2;
    number2 = aux;
    return {number1, number2};
}

// Do not edit below this line
module.exports = sumAll;
