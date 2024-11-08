import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';

const Coffee = () => {
    const data=useLoaderData();

    const [coffee,setCoffee]=useState(data);
    const handleSort=(sort)=>{
        if(sort==='rating')
        {
            const sorted=[...data].sort((a,b)=>b.rating-a.rating);
            setCoffee(sorted);

        }else if(sort==='popularity')
        {
            const sorted=[...data].sort((a,b)=>b.popularity-a.popularity);
            setCoffee(sorted);
        }
    }
    return (
        <>
        <div className='flex justify-between items-center mb-10'>
            <div>
                <h2 className='text-2xl'>coffee cagegory</h2>
            </div>
            <div className='space-x-4'>
                <button onClick={()=>handleSort('rating')} className='btn btn-warning'>Sory By Rating</button>
                <button onClick={()=>handleSort('popularity')} className='btn btn-warning'>Sort By Popularity</button>
            </div>
        </div>
        <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6'>
            {
                coffee.map(card=><Card key={card.id} coffee={card}></Card>)
            }
        </div>
        </>
    );
};

export default Coffee;