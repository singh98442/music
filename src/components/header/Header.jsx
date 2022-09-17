import React from 'react'
import logo from '../../img/MuzicLogo.png'

function Header() {
    
  return (
    <div className="header p-[1rem] flex justify-between">
        <img src={logo} alt="" className='w-[40px] h-[40px] cursor-pointer'/>
        <div className="nav flex">
            <ul className=' flex text-[2rem]'>
                <li className='m-[1rem] cursor-pointer italic'>Home</li>
                <li className='m-[1rem] cursor-pointer italic'>About</li>
                <li className='m-[1rem] cursor-pointer italic'>Preformer</li>
                <li className='m-[1rem] cursor-pointer italic'>Events</li>
            </ul>
        </div>
        <div className="btn flex gap-[1rem] text-[2rem]">
            <button className=' px-4 h-[50px]  rounded border-green-600 border-[2px] border-solid'>Sign In</button>
            <button className='px-4 h-[50px] bg-blue-400 rounded'>LogOut</button>
        </div>
    </div>
  )
}

export default Header
