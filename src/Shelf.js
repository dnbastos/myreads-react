import React, { Component } from 'react';
import BookItem from './BookItem';

class Shelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => book.shelf === this.props.shelfName)
            .map( book => (
              <BookItem key={book.id} bookInfo={ book } onUpdateBook={this.props.onUpdateBook} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
