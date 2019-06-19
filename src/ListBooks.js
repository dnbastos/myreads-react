import React, { Component } from 'react';
import Shelf from './Shelf';
import OpenSearch from './OpenSearch';

function ListBooks (books, onUpdateBook) {
  return (
    <div>
      <div className="list-books-content">
        <Shelf 
          title='Currently Reading' 
          shelfName='currentlyReading' 
          books={books}
          onUpdateBook={onUpdateBook}  
        />
        <Shelf 
          title='Want to Read' 
          shelfName='wantToRead' 
          books={books}
          onUpdateBook={onUpdateBook}
        />
        <Shelf 
          title='Read' 
          shelfName='read' 
          books={books}
          onUpdateBook={onUpdateBook}
        />
      </div>
      <OpenSearch />
    </div>

  );
}

export default ListBooks;
