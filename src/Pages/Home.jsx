import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';

const Home = () => {
    const category=useLoaderData();
    // console.log(category)
    return (
        <div>
            <h2>home page</h2>
            <Banner></Banner>
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>
            
           <Categories category={category}></Categories>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;