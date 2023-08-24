import React from 'react';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='container mx-auto flex justify-between py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-10 border rounded-lg border-gray-300 items-center relative font-sans'>
        <div className='flex-shrink-0'>
          <img className='w-40 md:w-60' src='https://www.cyberyami.com/images/logo.svg' alt='/' />
        </div>

        <div className='flex gap-4 md:gap-8 items-center text-base md:text-lg'>
          <BsCart3 size={24} />
          <span className='hidden md:inline-block'>Sign Up</span>
          <button className='py-2 px-4 md:py-2 md:px-6 bg-green-300 rounded-md'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
