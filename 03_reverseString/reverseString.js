const reverseString = function(stringToReverse) {
    let result ='';
    if(stringToReverse === '') return result;
    let splitted = stringToReverse.split('');
    splitted = splitted.reverse();
    result = splitted.join('');
    return result;

};

// Do not edit below this line
module.exports = reverseString;
