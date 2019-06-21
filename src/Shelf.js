import React from 'react';
import BookItem from './BookItem';

function Shelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.filter(book => book.shelf === props.shelfName)
            .map(book => (
              <BookItem key={book.id} book={book} onUpdateBook={props.onUpdateBook} />
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
