const reverseString = function(string) {
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;

};

// return string.split("").reverse().join(""); is a shorter way to do it

// Do not edit below this line
module.exports = reverseString;
