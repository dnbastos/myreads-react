import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import Header from './Header';
import DetailsBook from './DetailsBook';
import './style/App.css';

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState({ books })
    );
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.removeBook(book);
      this.addBook(book, shelf);
    });
  }

  removeBook = book => {
    this.setState(prevState => (
      { books: prevState.books.filter(e => e.id !== book.id) }
    ));
  }

  addBook = (book, shelf) => {
    book.shelf = shelf;
    this.setState(prevState => (
      { books: prevState.books.concat(book) }
    ));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onUpdateBook={this.updateBook} />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks books={this.state.books} onUpdateBook={this.updateBook} />
        )} />
        <Route path="/details" render={({ history, location }) => (
          <DetailsBook 
            book={location.state} 
            onUpdateBook={this.updateBook} 
            onBack={() => history.goBack()}
            query={location.search}
          />
        )} />
      </div>
    );
  }
}

export default App;
