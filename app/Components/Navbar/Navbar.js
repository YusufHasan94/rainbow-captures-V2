import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import Image from 'next/image';
import logo from "../../picture/logo-dark.png";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-10 p-5 text-gray-900'>
            <div>
                <Image
                    src={logo}
                    alt=''
                    className='w-28'
                />
            </div>
            <div>
                <ul className='flex gap-5 items-center'>
                    <li>Home</li>
                    <li>Category</li>
                    <li>Gallery</li>
                    <li>Contact US</li>
                    <li>About US</li>
                </ul>
            </div>
            <div>
                <FaCircleUser className='text-3xl'></FaCircleUser>
            </div>
        </div>
    );
};

export default Navbar;