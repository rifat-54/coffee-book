import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeCard = () => {
    const navigate=useNavigate();
    const {category}=useParams()
    const data=useLoaderData();
    const [coffee,setCoffee]=useState([]);
    // console.log(coffee)

    useEffect(()=>{
        if(category){
            const silictedCoffee=[...data].filter(cof=>cof.category===category);
        setCoffee(silictedCoffee);
        }else{
            
        setCoffee(data.slice(0,6));
        }
        
    },[data,category])

    // console.log(data)
    return (
        <>
        <div className='grid my-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6'>
            {
                coffee.map(card=><Card key={card.id} coffee={card}></Card>)
            }
        </div>
        <button className='btn btn-warning' onClick={()=>navigate('/coffee')}>View All</button>
        </>
    );
};

export default CoffeCard;