import React from 'react';
import Image from 'next/image';
import work1 from "../../picture/DSC_3853.jpg";
import work2 from "../../picture/1667753041525.jpg";
import work3 from "../../picture/DSC_1236.jpg";
import Title from '../Title/Title';

const RecentWork = () => {
    return (
        <div className='my-10 mx-20'>
            <div className=''>
                <Title
                    title="Discover Our Works"
                    description="Step into a world of visual storytelling through our latest collection of stunning photography event captures. Immerse yourself in the magic of the moment as we freeze time, preserving the emotions, beauty, and candid moments from recent events. Our lens is your window to the unforgettable, so come explore the artistry and narratives that unfold in each frame."
                    className=""
                ></Title>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <Image
                    src={work1}
                    alt=''
                    className='h-44 w-fit'
                /><Image
                    src={work2}
                    alt=''
                    className='h-72 w-fit'
                /><Image
                    src={work3}
                    alt=''
                    className='h-96 w-fit'
                />
            </div>
        </div>
    );
};

export default RecentWork;