const palindromes = function (word) {
    word = word.replace(/[^\w\s\']|_/g, "")
    .replace(/\s/g, "");
    const _word = getReverse(word);
    const toReturn = (word.toLowerCase() === _word.toLowerCase());
    return toReturn;

};

const getReverse = (stringToReverse) => {
    let splited = stringToReverse.split('');
    splited = splited.reverse();
    splited = splited.join('');
    return splited;
}

// Do not edit below this line
module.exports = palindromes;
