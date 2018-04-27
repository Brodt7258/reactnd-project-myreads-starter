import React from 'react';

import Book from './Book';

const Shelf = ({ title, books }) => {
  console.log(books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books && books.map((book) => <Book key={book.title} book={book} />)}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;