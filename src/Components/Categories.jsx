import React from "react";
import { Link, NavLink } from "react-router-dom";

const Categories = ({ category }) => {
  // console.log(category)
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {
            category.map(cat=><NavLink to={`/category/${cat.category}`} role="tab" className={({isActive})=>`tab ${isActive ?'tab-active':''}`}>{cat.category}</NavLink>)
        }
        
      </div>
    </div>
  );
};

export default Categories;
