import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Banner = () => {
    return (
        <Carousel >
        <div>
            <img src='https://i.ibb.co/fGz21dK/4118469.jpg'className='rounded-lg '  />
          
        </div>
        <div>
            <img src='https://i.ibb.co/HD95jMk/SL-110820-37810-11.jpg'className='rounded-lg' />
           
        </div>
       
        <div>
            <img src='https://i.ibb.co/wNhJNQv/representation-user-experience-interface-design-smartphone.jpg'className='rounded-lg'height='600px' />
          
        </div>
       
    </Carousel>
    );
};

export default Banner;