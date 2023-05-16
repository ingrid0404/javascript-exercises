const fibonacci = function(number) {
    number = parseInt(number);
    if(number < 0) return 'OOPS';
    if(number < 3)
        return 1;
    else return fibonacci(number-2)+fibonacci(number-1);
};

// Do not edit below this line
module.exports = fibonacci;
