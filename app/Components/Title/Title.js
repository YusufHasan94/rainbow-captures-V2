import React from 'react';

const Title = ({title, description}) => {
    return (
        <div className='my-10'>
            <h1 className='text-5xl'>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Title;