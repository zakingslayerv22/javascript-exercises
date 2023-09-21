const repeatString = function(string, times) {
    var repeatedString = "";
    if (times < 0) {
        return "ERROR";
    }
    while (times > 0) {
        repeatedString += string;
        times--;
      }
    return repeatedString;
};




// Do not edit below this line
module.exports = repeatString;


