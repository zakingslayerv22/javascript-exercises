const findTheOldest = function(array) {
    let oldestPerson = {};

    array.reduce((previous, current) => {

    if (!current.yearOfDeath) {
        current.yearOfDeath = new Date().getFullYear();
    }

    let currentAge = current.yearOfDeath - current.yearOfBirth;

    if (currentAge > previous) {
        oldestPerson = current;
        return currentAge;
    }
    }, 0);
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
