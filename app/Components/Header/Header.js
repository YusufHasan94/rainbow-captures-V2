import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='fixed w-full bg-yellow-100 bg-opacity-50 top-0'>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;