import React from 'react';
import Navbar from '../../WithOutLogIn/Navbar';
import AboutUs from '../../WithOutLogIn/AboutUs';

const Home = () => {
    return (
        // Without Login
        <div>
            <Navbar></Navbar>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;