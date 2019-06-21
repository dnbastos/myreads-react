import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShelfChanger from './ShelfChanger';

class BookItem extends Component {

  render() {
    const { book, query, onUpdateBook } = this.props;
    const noCoveImageUrl = 'http://via.placeholder.com/128x193?text=No%20Cover';
    return (
      <li>
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{ backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noCoveImageUrl})` }}>
            </div>
            <ShelfChanger book={book} onUpdateBook={onUpdateBook} />
          </div>
          <div className='book-main-info'>
            <div className='book-title'>{book.title}</div>
            <div className='book-authors'>{book.authors ? book.authors.join(', ') : ''}</div>
          </div>
          <div className='book-view-details'>
            <Link className='btn' to={{ pathname: '/details', state: book }}>View Details</Link>
          </div>
        </div>
      </li>
    );
  }
}

export default BookItem;
