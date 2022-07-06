import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {

    return (
        <div>
            <ul>
                {/* <li><a><Link to="https://www.google.com"></Link></a></li> */}
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div >
        
    )
}

export default SideNav;