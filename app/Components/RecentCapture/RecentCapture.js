import React from 'react';
import Image from 'next/image';
import capture1 from "../../picture/1667753041521.jpg";
import capture2 from "../../picture/1667753041570.jpg";
import capture3 from "../../picture/DSC_4771.jpg";
import capture4 from "../../picture/DSC_1948.jpg";
import capture5 from "../../picture/DSC_8201.jpg";
import capture6 from "../../picture/DSC_3853.jpg";
import Title from '../Title/Title';

const RecentCapture = () => {
    return (
        <div className='my-10 mx-20'>
            <div>
                <Title 
                    title="Recent Captures"
                    description="Celebrating life's fleeting moments, my lens captures the essence of joy, love, and beauty. Each click is a whisper of time preserved, where smiles, emotions, and memories are framed in heartfelt pixels. Through the poetry of images, I invite you to explore the stories that light and shadow unfold in each frame"
                />
            </div>
            <div className='grid grid-cols-4 items-center justify-around gap-1'>
                <div>
                    <Image
                        src={capture2}
                        alt=''
                    />
                </div>
                <div className=''>
                    <Image
                        src={capture1}
                        alt=''
                    />
                    <Image
                        src={capture3}
                        alt=''
                    />
                </div>
                <div>
                    <Image
                        src={capture4}
                        alt=''
                    />
                </div>
                <div>
                    <Image
                        src={capture5}
                        alt=''
                    />
                    <Image
                        src={capture6}
                        alt=''
                    />
                </div>
            </div>
            
        </div>
    );
};

export default RecentCapture;