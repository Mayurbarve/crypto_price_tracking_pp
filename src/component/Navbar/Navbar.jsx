import React from 'react'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <div className='navbar flex items-center justify-between px-[10%] py-5 text-[#ddd] border-b-2 border-b-[#3c3c3c] border-solid'>
        <img src={logo} alt="" className='w-[max(12vw, 120px)]'/>
        <ul className='flex gap-10'>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right flex items-center gap-[max(1vw,12px)]'>
            <select className='text-white py-1 px-2 rounded-full border-b-2 border-solid border-b-[#ffffff] bg-transparent'>
                <option value="usd" className='bg-gray-600 text-white'>USD</option>
                <option value="eur" className='bg-gray-600 text-white'>EUR</option>
                <option value="inr" className='bg-gray-600 text-white'>INR</option>
            </select>
            <button className='text-black py-1 px-4 text-sm rounded-full border-b-2 border-solid border-b-[#ffffff] bg-white'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar