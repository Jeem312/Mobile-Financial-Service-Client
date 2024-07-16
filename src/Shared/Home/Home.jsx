import React, { useContext } from 'react';
import Navbar from '../../WithOutLogIn/Navbar';
import AboutUs from '../../WithOutLogIn/AboutUs';
import Banner from '../../WithOutLogIn/Banner';
import Features from '../../WithOutLogIn/Features';
import Dashboard from './Dashboard';
import { AuthContext } from '../../AuthProvide/AuthProvide';
import FFooter from '../Footer';

const Home = () => {
    const {user} = useContext(AuthContext);
    const userEmail = user?.email;
    console.log(user)
        return (
       
       <div>
         {/* // Without Login */}
       {
        userEmail?<div>
        <Dashboard></Dashboard>
    </div> :  <div>
           <Navbar></Navbar>
            <Banner></Banner>
             {/* <Features></Features> */}
             <AboutUs></AboutUs> 
           <FFooter></FFooter>
         </div>
       }
        
       </div>
    );
};

export default Home;