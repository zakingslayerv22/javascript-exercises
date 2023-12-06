const getTheTitles = function(array) {
    let bookTitles = array.map(book => `${book.title}`);
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
