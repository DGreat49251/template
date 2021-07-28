import React, { useState } from 'react';
import './Navbar.css';
import Navlink from '../components/navlink/Navlink.js';
import BrandName from '../components/brandname/BrandName';
import SearchBox from '../components/searchbox/SearchBox';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <div>
          <BrandName text="BrandName" />
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
        <SearchBox />
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <Navlink text="Home" route="/" />
          <Navlink text="Services" route="/services" isDropDown={true} />
          <Navlink text="Products" route="/products" />
          <Navlink text="Contact us" route="/contact-us" />
        </ul>
        <i className="fas fa-user-circle user-icon"></i>
      </nav>
    </>
  );
}

export default Navbar;
