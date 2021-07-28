import React from 'react';
import './SearchBox.css';

function SearchBox() {
    return (
    <div className='search'>
        <input type='text' placeholder='Search here...' />
        <i className='fa fa-search'></i>
      </div>
    )
}

export default SearchBox;