import React, { useEffect, useState } from 'react';
import { removeFavorite, storeData } from '../utilities/localStorage';
import Card from '../Components/Card';


const Dashbord = () => {
    const [coffee,setCoffee]=useState([]);
    useEffect(()=>{
        const data=storeData();
        setCoffee(data);
    },[])

    const handleRemove=(id)=>{
        removeFavorite(id);
        const data=storeData();
        setCoffee(data);
    }
    return (
        <div>
            <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6'>
            {
                coffee.map(card=><Card handleRemove={handleRemove} key={card.id} coffee={card}></Card>)
            }
        </div>
        </div>
    );
};

export default Dashbord;