import React from 'react';
import { Footer } from "flowbite-react";
const FFooter = () => {
    return (
        <Footer container className='p-20 border   bg-amber-50 border-amber-400 mt-24 rounded-t-full fle '>
        <div className="w-full text-center">
          <div className="w-full my-8 justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              className='font-bold text-amber-400'
              
             href="https://flowbite.com"
              name="FinMob"
            />
            <Footer.LinkGroup className='gap-6 text-amber-400'>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider className='my-4 ' />
          <Footer.Copyright className='text-amber-400 mx-2' href="#" by="FinMob™" year={2024} />
        </div>
      </Footer>
        
    );
};

export default FFooter;