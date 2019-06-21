import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input'
import * as BooksAPI from './BooksAPI';
import BookItem from './BookItem';
import './style/searchPage.css';

class SearchBooks extends Component {

  state = {
    query: '',
    searchedBooks: []
  }

  updateSearch = query => {
    this.setState({ query });
    if (query) {
      BooksAPI.search(query).then(books => {
        if (!books.error) {
          this.setState({ searchedBooks: books });
        } else {
          this.setState({ searchedBooks: [] });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    };
  }

  getShelf = book => {
    const booksWithShelf = this.props.books;
    const bookWithShelf = booksWithShelf.filter(e => e.id === book.id)[0];
    return bookWithShelf ? bookWithShelf.shelf : 'none';
  }

  render() {
    const { searchedBooks, query } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" tabIndex="-1">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => (this.updateSearch(event.target.value))}
              minLength={2}
              debounceTimeout={400}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map(book => {
              book.shelf = this.getShelf(book);
              return <BookItem book={book} key={book.id} onUpdateBook={this.props.onUpdateBook} />
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
