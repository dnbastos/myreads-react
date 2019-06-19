import React, { Component } from 'react';
import BookItem from './BookItem';

function Shelf (title, shelfName, books, onUpdateBook) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.filter(book => book.shelf === shelfName)
          .map( book => (
            <BookItem key={book.id} bookInfo={ book } onUpdateBook={onUpdateBook} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
