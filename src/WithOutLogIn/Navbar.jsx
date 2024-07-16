import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvide/AuthProvide';

const Navbar = () => {
  const {user,logout} =useContext(AuthContext);
 const userEmail = user?.email;

    const links = <>
    <li className="font-bold text-amber-400 "> <NavLink to="/">Home</NavLink></li>
    <li className="font-bold text-amber-400"> <NavLink to="/userregister">Registers</NavLink> </li>
  
        <li className="font-bold text-amber-400">
          <NavLink to="/login">Login</NavLink>
        </li>
     
   
   </>
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
        <div className="flex-1">
        <div className="avatar">
        <div className="navbar bg-base-100">
  <a className="btn btn-ghost font-bold text-amber-400 text-xl">FinMob</a>
</div></div>
        </div>
        <div className="flex-none">
        <ul className="menu menu-vertical lg:menu-horizontal  rounded-box">
 {
    links
 }
</ul>
        </div>
      </div>
        </div>
    );
};

export default Navbar;