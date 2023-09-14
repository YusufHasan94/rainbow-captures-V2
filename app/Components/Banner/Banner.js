import React from 'react';
import banner1 from "../../picture/newDSC_1065.jpg";
import banner2 from "../../picture/1667753041559.jpg";
import Image from 'next/image';


const Banner = () => {
    return (
        <div className='mt-5'>
            <Image src={banner1} alt='' className=''/>
        </div>
    );
};

export default Banner;