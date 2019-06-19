import React, { Component } from 'react';

class BookItem extends Component {

  handleUpdateBook = (event, book) => {
    this.props.onUpdateBook(book, event.target.value);
  }

  render() {
    const book = this.props.bookInfo;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div 
              className="book-cover" 
              style={{ backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : '#'})` }}></div>
            <div className="book-shelf-changer">
              <select 
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
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
        </div>
      </li>
    );
  }
}

export default BookItem;
