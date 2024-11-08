import React from 'react';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            <div className='h-16 '>
            <Toaster></Toaster>
            <Navber></Navber>
            </div>
            <div className='min-h-[calc(100vh-290px)] container px-10 my-12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;