import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookItem extends Component {

  handleUpdateBook = (event, book) => {
    this.props.onUpdateBook(book, event.target.value);
  }

  render() {
    const book = this.props.bookInfo;
    const noCoveImageUrl = 'http://via.placeholder.com/128x193?text=No%20Cover';
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noCoveImageUrl})` }}>
            </div>
            <div className="book-shelf-changer">
              <select
                aria-label={'Shelf'}
                onChange={event => this.handleUpdateBook(event, book)}
                defaultValue={book.shelf}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className='book-main-info'>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
          </div>
          <div className="book-view-details">
            <Link to={{pathname: '/details', state: book}}>View Details</Link>
          </div>
        </div>
      </li>
    );
  }
}

export default BookItem;
