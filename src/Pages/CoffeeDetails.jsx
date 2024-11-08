import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToLocalStorege, storeData } from '../utilities/localStorage';

const CoffeeDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const [coffee,setCoffee]=useState({});
    const[isActive,setIsActive]=useState(false);
    useEffect(()=>{
        const coffeeId=data.find(coffee=>coffee.id==id)
        setCoffee(coffeeId);
        const coffeData=storeData();
        const exit=coffeData.find(item=>item.id==coffeeId.id);
        if(exit){
            setIsActive(true);
        }
        
    },[data,id])

    const handleFavorite=({coffee})=>{
        // console.log(coffee)
        addToLocalStorege(coffee);
        setIsActive(true)
    }

    // console.log(data,id);
    const { name, image, category, ingredients, rating ,type,origin,popularity,making_process} = coffee || {};

    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
          className="w-[300px] h-[200px] rounded-xl"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{name}</h2>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popolar: {popularity}</p>
          
        </div>
        <div className='border my-5 border-b-1'></div>
        <div className='mb-10'>
            <p>{making_process}</p>
        </div>
        <button disabled={isActive} onClick={()=>handleFavorite({coffee})} className='btn btn-warning w-44 mx-auto mb-8'>Add to Favourite</button>
      </div>
        </div>
    );
};

export default CoffeeDetails;