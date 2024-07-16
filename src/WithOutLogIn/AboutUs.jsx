import React from 'react';
import { GiAbstract061 } from 'react-icons/gi';

const AboutUs = () => {


    return (
       <div className=''>
        <h1 className='flex justify-center items-center font-bold text-4xl text-amber-300'>About Us</h1>
         <div className='flex flex-col md:flex-row my-24 gap-16'>
            <div className='flex-1'>
                <img src='https://i.ibb.co/VYN4WZx/2927316.jpg' alt="About Us" />
            </div>
            <div className='flex-1'>
               <div className='flex justify-center items-center text-amber-400'>
               <GiAbstract061 className='h-16 w-16'/>
               </div>
                
                <p className='text-start my-6'>Welcome to FinMob, a secure and user-friendly mobile financial service platform designed to simplify your financial transactions. Whether you need to send money, cash out, or check your balance, our platform offers seamless and efficient solutions. With robust security measures, including PIN hashing and JWT authentication, we ensure your transactions are safe and secure. Join us and experience hassle-free financial management at your fingertips. Our dedicated team is committed to providing you with the best service possible.

</p>
                
            </div>
        </div>
       </div>
    );
};

export default AboutUs;
