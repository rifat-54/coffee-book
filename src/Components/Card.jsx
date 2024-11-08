import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";

const Card = ({ coffee,handleRemove }) => {
  const {id, name, image, category, ingredients, rating ,type,origin,popularity} = coffee || {};

  const {pathname}=useLocation();
  

  // console.log(coffee)
  return (
    <div>
        
      <div className="card bg-base-100  shadow-xl">
        <div>
        <Link to={`/coffee/${id}`}>
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
        </Link> 
        </div>
        {pathname==='/dashbord' && <div onClick={()=>handleRemove(id)} className="absolute -top-3 -right-3 bg-warning cursor-pointer p-4 rounded-full text-red-700">
      <HiOutlineTrash />
      </div>}
      </div>
      
     
    </div>
  );
};

export default Card;
