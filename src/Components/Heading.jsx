import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div className='my-12'>
            <h2 className='text-6xl mb-5'>{title}</h2>
            <p className='font-thin'>{subtitle}</p>
        </div>
    );
};

export default Heading;