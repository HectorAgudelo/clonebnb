import React, { useState, useRef, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import logo from '../Resources/logo.png';
import { FaSearch } from 'react-icons/fa';

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='flex flex-row justify-between py-4 px-16 items-center'>
      <img
        className={`${navOpen ? 'hidden' : 'static'}`}
        src={logo}
        alt='logo'
      />
      <div
        className={`flex flex-row justify-center items-center cursor-pointer ${
          navOpen ? 'hidden' : 'static'
        }`}
        onClick={() => setNavOpen(true)}
      >
        <div className=' border-zinc-200 border-y-2 border-l-2 rounded-l-2xl p-3'>
          <p>Helsinki, Finland</p>
        </div>
        <div className=' border-y-zinc-200 border-2  p-3'>
          <p>Add Guest</p>
        </div>
        <div className=' border-x-zinc-200 border-y-2 border-r-2 rounded-r-2xl p-4'>
          <FaSearch className='text-red-400' />
        </div>
      </div>
      {navOpen ? (
        <div className='flex m-auto w-full justify-center'>
          <OutsideClickHandler
            onOutsideClick={() => {
              setNavOpen(false);
            }}
          >
            <div className='flex justify-center items-center'>
              <div className='flex flex-row justify-center items-center'>
                <div className=' border-zinc-200 border-y-2 border-l-2 rounded-l-2xl py-3 pl-3 pr-40 cursor-pointer'>
                  <p>Helsinki, Finland</p>
                </div>
                <div className=' border-y-zinc-200 border-2 py-3 pl-3 pr-40 cursor-pointer'>
                  <p>Add Guest</p>
                </div>
                <div className=' border-x-zinc-200 border-y-2 border-r-2 rounded-r-2xl py-0 px-20'>
                  <button className='bg-red-400 py-3 px-3 flex justify-center items-center gap-2 rounded-xl'>
                    <FaSearch className='text-white' />
                    <span className='font-bold text-white'>search</span>
                  </button>
                </div>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      ) : null}
    </div>
  );
};
