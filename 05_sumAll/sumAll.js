const sumAll = function(firstNum, lastNum) {
        let sum = 0;
        let i;

        if ((typeof firstNum !== 'number') || (typeof lastNum !== 'number')) {
            return "ERROR";
        }
        else if ((firstNum < 0) || (lastNum < 0) ) {
            return "ERROR";
        }

        else if (firstNum < lastNum){
            for (i = firstNum; i <= lastNum; i++) {
                sum += i;
            }
        }else {
            for (i = lastNum; i <= firstNum; i++) {
                sum += i;
            }
        }

        return sum;
};

// Do not edit below this line
module.exports = sumAll;
