import React, { useState, useRef, useEffect } from 'react';
import logo from '../Resources/logo.png';
import { FaSearch } from 'react-icons/fa';

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const outsideClick = useRef(null)
  
console.log(outsideClick.current)
  useEffect(()=>{
    document.addEventListener("click",handleClickOutside, true)
  })

  const handleClickOutside=()=>{
    if(!outsideClick){
      setNavOpen(true)
    } else {
      setNavOpen(false)
    }
  }

  return (
    <div className='flex flex-row justify-between py-4 px-16 items-center'>
      <img className={`${navOpen?'hidden': 'static'}`} src={logo} alt='logo' />
      <div className={`flex flex-row justify-center items-center cursor-pointer ${navOpen?'hidden': 'static'}`} onClick={()=>setNavOpen(true)} >
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
     {navOpen ? <div ref={outsideClick}>
        Hello
      </div>
      : null}
    </div>
  );
};
