import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='list-books-title'>
      <h1><Link to='/'>My Reads</Link></h1>
    </header>
  );
}

export default Header;
