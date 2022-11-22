import React, { useState } from 'react';
import logo from '../Resources/logo.png';
import { BsSearch } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

export const NavBar = () => {
//   const [navOpen, setNavOpen] = useState(false);
  return (
    <div className='flex flex-row justify-between py-4 px-16 items-center'>
      <img className='' src={logo} alt='logo' />
      <div className='flex flex-row justify-center items-center cursor-pointer' >
        <div className=' border-zinc-200 border-y-2 border-l-2 rounded-l-xl p-3'>
          <p>Helsinki, Finland</p>
        </div>
        <div className=' border-y-zinc-200 border-2  p-3'>
          <p>Add Guest</p>
        </div>
        <div className=' border-x-zinc-200 border-y-2 border-r-2 rounded-r-xl p-4'>
          <FaSearch className='text-red-400' />
        </div>
      </div>
    </div>
  );
};
