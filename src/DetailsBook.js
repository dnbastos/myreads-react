import React from 'react';

function DetailsBook(props) {
  const { book, onBack } = props;
  const noCoveImageUrl = 'http://via.placeholder.com/128x193?text=No%20Cover';
  return (
    <div className='details'>
      <h2 className='details-title'>{book.title}</h2>
      <div
        className="book-cover details-image"
        style={{ backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noCoveImageUrl})` }}>
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
      <div class="details-back">
        <button onClick={onBack}>voltar</button>
      </div>
    </div>
  );
}

export default DetailsBook;
