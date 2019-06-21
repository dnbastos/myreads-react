import React from 'react';

function ShelfChanger(props) {

  const { book, onUpdateBook } = props;

  const handleUpdateBook = (event, book) => {
    onUpdateBook(book, event.target.value);
  }

  return (
    <div className="book-shelf-changer">
      <select
        aria-label={'Shelf'}
        onChange={event => handleUpdateBook(event, book)}
        defaultValue={book.shelf}
      >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default ShelfChanger;
