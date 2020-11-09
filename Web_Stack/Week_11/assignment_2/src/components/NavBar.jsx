import React from 'react';
import { Link } from '@reach/router';

const NavBar = (props) => {
    return (
    <div>
        <Link to = "/dashboard">Dashboard</Link>
        <Link to = "/login">Login</Link>
    </div>
);
}



export default NavBar;