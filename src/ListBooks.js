import React, { Component } from 'react';
import Shelf from './Shelf';
import OpenSearch from './OpenSearch';

class ListBooks extends Component {

  render() {
    return (
      <div>
        <div className="list-books-content">
          <Shelf 
            title='Currently Reading' 
            shelfName='currentlyReading' 
            books={this.props.books}
            onUpdateBook={this.props.onUpdateBook}  
          />
          <Shelf 
            title='Want to Read' 
            shelfName='wantToRead' 
            books={this.props.books}
            onUpdateBook={this.props.onUpdateBook}
          />
          <Shelf 
            title='Read' 
            shelfName='read' 
            books={this.props.books}
            onUpdateBook={this.props.onUpdateBook}
          />
        </div>
        <OpenSearch />
      </div>

    );
  }
}

export default ListBooks;
