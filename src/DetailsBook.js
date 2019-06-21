import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';
import * as BooksAPI from './BooksAPI';

class DetailsBook extends Component {
  state = {
    book: {}
  }

  componentDidMount() {
    if (!this.props.book) {
      const bookId = this.props.query.match(/(?:bookId=)([^&]+)/)[1];
      BooksAPI.get(bookId).then(book =>
        this.setState({ book })
      );
    } else {
      this.setState({ book: this.props.book })
    }
  }

  render() {
    const { onBack, onUpdateBook } = this.props;
    const book = this.state.book;
    const noCoveImageUrl = 'http://via.placeholder.com/128x193?text=No%20Cover';
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
          <p>{book.authors && book.authors.join(', ')}</p>
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
}

export default DetailsBook;
