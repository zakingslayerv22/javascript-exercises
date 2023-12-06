const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


function getTheTitles (array) {
	let bookTitles = array.map(book => `${book.title}`);
    return bookTitles;
};

console.log(getTheTitles(books));
