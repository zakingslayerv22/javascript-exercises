const palindromes = function (string) {

    const punctuationsToRemove = /[\s.,?!]/g; 
    let removedPunctuations = string.replace(punctuationsToRemove, '');
    let lowerCasedString = removedPunctuations.toLowerCase();
    let reversedString = lowerCasedString.split('').reverse().join('');
    return lowerCasedString === reversedString; 
};

// Do not edit below this line
module.exports = palindromes;
