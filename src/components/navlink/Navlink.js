import React from 'react';
import { Link } from 'react-router-dom';
import './Navlink.css';
import Dropdown from '../dropdown/Dropdown.js';

function Navlink(props) {
    const [click, setClick] = React.useState(false);
    const [dropdown, setDropdown] = React.useState(false);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        setDropdown(!dropdown);
    };

    const onMouseLeave = () => {
        setDropdown(!dropdown);
    };
    if (props.isDropDown) {
        return (
            <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Link
                    to={props.route}
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                    {props.text} <i className='fas fa-caret-down' />
                </Link>
                {dropdown && <Dropdown />}
            </li>
        )
    } else {
        if(props.className) {
            return (
                <li className='nav-item'>
                    <Link to={props.route} className={'nav-links '+props.className} onClick={closeMobileMenu}>
                        {props.text}
                    </Link>
                </li>
            )
        } else {
            return (
                <li className='nav-item'>
                    <Link to={props.route} className='nav-links' onClick={closeMobileMenu}>
                        {props.text}
                    </Link>
                </li>
            )
        }
    }
}

export default Navlink;