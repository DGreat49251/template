import React, { useState } from 'react';
import './BrandName.css';

function BrandName(props) {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className='navbar-logo' onClick={closeMobileMenu}>
            <h1>{props.text}</h1>
            <i className='fab fa-firstdraft brand-icon' />
        </div>
    )
}

export default BrandName;