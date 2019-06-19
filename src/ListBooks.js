import React from 'react';
import Shelf from './Shelf';
import OpenSearch from './OpenSearch';

function ListBooks (props) {
  return (
    <div>
      <div className="list-books-content">
        <Shelf 
          title='Currently Reading' 
          shelfName='currentlyReading' 
          books={props.books}
          onUpdateBook={props.onUpdateBook}  
        />
        <Shelf 
          title='Want to Read' 
          shelfName='wantToRead' 
          books={props.books}
          onUpdateBook={props.onUpdateBook}
        />
        <Shelf 
          title='Read' 
          shelfName='read' 
          books={props.books}
          onUpdateBook={props.onUpdateBook}
        />
      </div>
      <OpenSearch />
    </div>

  );
}

export default ListBooks;
