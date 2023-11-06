/* eslint-disable react-refresh/only-export-components */
import {NavLink} from 'react-router-dom'
import Logo from './Logo'
import { memo, useState } from 'react'
import {HiMenu} from 'react-icons/hi'
const PageNav = () => {
  const [top, setTop]=useState('top-[-400px]')
  return (
    <header className=' font-[600] z-[20000] h-[10vh] px-4 sm:px-10 md:px-12  flex justify-between items-center landscape:py-8'>
    
    
       <Logo   link={'/'} src={"/logo.png"} >
      <span className='text-xl sm:text-2xl landscape:text-xl   text-white'>World Travel</span>
      </Logo>  
      
    
    <ul className="z-[20000] nav hidden  sm:flex gap-4 items-center text-white  text-xl ">
        <NavLink className='hover:text-green-400 hover:text-shadow-md' to='/app/cities' > map</NavLink>
        <NavLink className='hover:text-green-400 hover:text-shadow-md' to="/products"> product</NavLink>
        <NavLink className='hover:text-green-400 hover:text-shadow-md' to="/pricing"> pricing</NavLink>
        <NavLink className='hover:text-green-400 hover:text-shadow-md' to="/login">login </NavLink>
    </ul>

    <ul className={`nav z-[20000]   bg-gray-800 bg-opacity-90   absolute ${top}  left-0 right-0 pt-20 border-b-2 border-gray-600 pb-12 w-full sm:hidden flex flex-col  gap-6  items-center text-white  text-xl `}>
        <NavLink className='hover:text-green-400 hover:text-shadow-md' to='/app/cities' > map</NavLink>
        <NavLink className='hover:text-green-400 hover:text-shadow-md' to="/products"> product</NavLink>
        <NavLink className='hover:text-green-400 hover:text-shadow-md' to="/pricing"> pricing</NavLink>
        <NavLink className='hover:text-green-400 hover:text-shadow-md' to="/login">login </NavLink>
    </ul>



     <HiMenu
     className='sm:hidden mt-[5px]  transition-all duration-300 tra z-[200000]  text-white hover:text-green-400 cursor-pointer'
     onClick={()=>{
      if(top!='top-0'){
        setTop('top-0')
      }else{
        setTop('top-[-400px]')
      }
    }}
     size='2rem' 
    
     />

    </header>
  )
}

export default memo(PageNav)