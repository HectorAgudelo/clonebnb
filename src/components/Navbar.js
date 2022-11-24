import React, { useState, useRef, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import logo from '../Resources/logo.png';
import { FaSearch } from 'react-icons/fa';

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [numberPeople, setNumberPeople] = useState(false);

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
        <div className='flex m-auto w-full justify-center relative'>
          <OutsideClickHandler
            onOutsideClick={() => {
              setNavOpen(false);
              setNumberPeople(false);
              setOpenCity(false)
            }}
          >
            <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center'>
                <div
                  className=' border-zinc-200 border-y-2 border-l-2 rounded-l-2xl py-3 pl-3 pr-40 cursor-pointer'
                  onClick={() => {
                    setOpenCity(true);
                    setNumberPeople(false);
                  }}
                >
                  <p>Helsinki, Finland</p>
                </div>
                <div
                  className=' border-y-zinc-200 border-2 py-3 pl-3 pr-40 cursor-pointer'
                  onClick={() => {
                    setNumberPeople(true);
                    setOpenCity(false);
                  }}
                >
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
      {openCity && (
        <div className='absolute top-20 right-2/3'>
          <ul className='mr-10'>
            <li className=''>cities will go here</li>
            <li>cities will go here</li>
            <li>cities will go here</li>
          </ul>
        </div>
      )}

      {numberPeople && (
        <div className='absolute top-20 right-1/3'>
          <ul className='mr-28'>
            <li className=''>amount of people will go here</li>
            <li>amount of people will go here</li>
            <li>amount of people will go here</li>
          </ul>
        </div>
      )}
    </div>
  );
};
