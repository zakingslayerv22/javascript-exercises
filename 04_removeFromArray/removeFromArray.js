const removeFromArray = function(array, ...itemsToRemove) {
    //create a new array
    const newArray = [];

    //use foreach to go through the array

    array.forEach((item) => {
        //push every element into the new array
        //Except it is included in the function arguments
        //We thus create a new array with every item, expect the ones we exempted in the previous step

        if (!itemsToRemove.includes(item)){
            newArray.push(item);
        }

    });

    //return the new array
    return newArray;
};



// Do not edit below this line
module.exports = removeFromArray;
