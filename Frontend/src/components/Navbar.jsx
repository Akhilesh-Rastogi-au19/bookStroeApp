import React, { useEffect } from 'react';
import {useState} from 'react';
import Login from '../components/Login.jsx'


function Navbar() { 

    const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem('theme') :"light")
    const element=document.documentElement;  
    useEffect(() =>{
      if(theme === 'dark'){
        element.classList.add('dark');
        localStorage.setItem('theme','dark')
        document.body.classList.add('dark')
      }else{
        element.classList.remove('dark')
        localStorage.setItem('theme','light')
        document.body.classList.remove('dark')
      }

    },[theme])

    const navItems = (
        <>
     <li>
          <a href='/'>Home</a>
     </li>
     <li>
          <a href='/course'>Course</a>
    </li>
     <li>
          <a>Contact</a>
     </li>
     <li>
          <a>About</a>
    </li>  
        </>
    )
  return (
      <>
      <div className=  'max-w-screen-2xl  container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50'>
    <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     <li>
          <a>Home</a>
          </li>
     <li>
          <a>Course</a>
          </li>
     <li>
          <a>Contact</a>
          </li>
     <li>
          <a>About</a>
          </li>  
      </ul>
    </div>
    <a className=" text-2xl font-bold cursor-pointer">bookStore</a>
  </div>

  <div className='navbar-end space-x-3'>
  <div className="navbar-center hidden lg:flex">


    <ul className="menu menu-horizontal px-1">{navItems}</ul>
    </div>
  </div>

   {/* search bar */}

   <div className='hidden md:block  space-x-3  '>
  <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className="grow outline-none" placeholder="Search" />
  {/* <kbd className="kbd kbd-sm">⌘</kbd>
  <kbd className="kbd kbd-sm">K</kbd> */}
</label>

</div>
<label className="swap swap-rotate ml-5">
  <input
    type="checkbox"
    checked={theme === "dark"}
    onChange={() =>
      setTheme(theme === "dark" ? "light" : "dark")
    }
  />

  {/* ☀️ Sun icon (Light mode) */}
  <svg
    className="swap-off h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path d="M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z"/>
  </svg>

  {/* 🌙 Moon icon (Dark mode) */}
  <svg
    className="swap-on h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path d="M21.64 13a9 9 0 11-9.64-11"/>
  </svg>
</label>

 {/* login btn */}

    {/* <a className="bg-black text-white  px-4 py-2  ml-10 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
    
       onClick={()=> document.getElementById('my_modal_3').showModel()}
       >
      Login
      </a> */}
      <Login />
  </div>
  </div>
  
    </>
  )
}

export default Navbar;