import React from 'react';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='mt-10 bg-gray-50 grid grid-cols-3 justify-items-center py-10'>
            <div>
                <div className='mb-2'>
                    <h1 className='text-2xl'>Address</h1>
                    <p className='ml-5'>Rajshahi-6207, Bangladesh</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Contact</h1>
                    <p className='flex items-center gap-2 ml-5 mb-2'><FaRegEnvelope className='text-xl' /> rainbowcaptures@gmail.com</p>
                    <p className='flex items-center gap-2 ml-5'><FaPhone className='text-xl' /> 017********</p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-2xl'>Quick Links</h1>
                    <ul className='ml-5'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Privacy & Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.303095338446!2d88.60540667431418!3d24.37075736468002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef869365a513%3A0x490a564a67eeaef4!2sRainbow%20Captures!5e0!3m2!1sen!2sbd!4v1694665982829!5m2!1sen!2sbd" width="w-full" height="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Footer;