import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          <span className='font-bold text-blue-500'>Foodie</span> Lover
        </h1>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>
      {/* Cart button */}
      <button className=' text-white hidden bg-blue-500 md:flex items-center py-2 rounded-full border-transparent'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          <span className='font-bold text-blue-600'>Foodie</span> Lovers
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex text-blue-700'><TbTruckDelivery size={22} className='mr-3 text-gray-900' /> Orders</li>
                <li className='text-xl py-4 flex text-blue-700'><MdFavorite size={22} className='mr-3 text-gray-900' /> Favorites</li>
                <li className='text-xl py-4 flex text-blue-700'><FaWallet size={22} className='mr-3 text-gray-900' /> Wallet</li>
                <li className='text-xl py-4 flex text-blue-700'><AiFillTag size={22} className='mr-3 text-gray-900' /> Promotions</li>
                <li className='text-xl py-4 flex text-blue-700'><BsFillSaveFill size={22} className='mr-3 text-gray-900' /> Best Ones</li>
                <li className='text-xl py-4 flex text-blue-700'><FaUserFriends size={22} className='mr-3 text-gray-900' /> Invite Friends</li>
                <li className='text-xl py-4 flex text-blue-700'><MdHelp size={22} className='mr-3 text-gray-900' /> Help</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
