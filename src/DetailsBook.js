import React from 'react';
import ShelfChanger from './ShelfChanger';
import NotFoundBook from './NotFoundBook';

function DetailsBook(props) {

  const { book, onBack, onUpdateBook } = props;
  const noCoveImageUrl = 'http://via.placeholder.com/128x193?text=No%20Cover';

  if (!book) {
    return <NotFoundBook />;
  }

  return (
    <div className='details'>
      <h2 className='details-title'>{book.title}</h2>
      <div className='book-top details-image'>
        <div
          className='book-cover'
          style={{ backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noCoveImageUrl})` }}>
        </div>
        <ShelfChanger book={book} onUpdateBook={onUpdateBook} />
      </div>
      <div className='details-text'>
        <b>Authors</b>
        <p>{book.authors.join(', ')}</p>
        <b>Publisher</b>
        <p>{book.publisher}</p>
        <b>Published Date</b>
        <p>{book.publishedDate}</p>
        <b>Language</b>
        <p>{book.language}</p>
        <b>Description</b>
        <p>{book.description}</p>
      </div>
      <div className='details-back'>
        <button className='btn' onClick={onBack}>voltar</button>
      </div>
    </div>
  );
}

export default DetailsBook;
