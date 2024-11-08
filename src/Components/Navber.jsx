import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div className="navbar fixed flex z-50 right-0 bg-white/30 backdrop:blur-3xl top-0 justify-between bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 gap-6 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><NavLink className={({isActive})=>`${isActive?'text-warning':'hover:text-warning'}`} to={'/'}>Home</NavLink></li>
              <li><NavLink className={({isActive})=>`${isActive?'text-warning':'hover:text-warning'}`} to={'/coffee'}>Coffee</NavLink></li>
              <li><NavLink className={({isActive})=>`${isActive?'text-warning':'hover:text-warning'}`} to={'/dashbord'}>Dashbord</NavLink></li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">Cook_Book</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><NavLink className={({isActive})=>isActive?'text-warning':'hover:text-warning'} to={'/'}>Home</NavLink></li>
              <li><NavLink className={({isActive})=>`${isActive?'text-warning':'hover:text-warning'}`} to={'/coffee'}>Coffee</NavLink></li>
              <li><NavLink className={({isActive})=>`${isActive?'text-warning':'hover:text-warning'}`} to={'/dashbord'}>Dashbord</NavLink></li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navber;
