const palindromes = function (string) {

    // filter out punctuations
    //https://dev.to/foxinfotech/how-to-remove-punctuation-from-text-using-javascript-59pe#:~:text=Create%20a%20function%20called%20removePunctuation,Return%20the%20cleaned%2Dup%20text.
    const punctuationsToRemove = /[\s.,?!]/g; 

    let removedPunctuations = string.replace(punctuationsToRemove, '');
    let lowerCasedString = removedPunctuations.toLowerCase();
    let reversedString = lowerCasedString.split('').reverse().join('');
    return lowerCasedString === reversedString; 
};

console.log(palindromes('A car, a man, a maraca?.'));