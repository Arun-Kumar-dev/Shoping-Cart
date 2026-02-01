
import {Link, NavLink} from 'react-router-dom'
import {assets} from '../assets/assets.js'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx';

const Navbar = () => {
  const [visible,setVisible]=useState(false);
  const {setShowSearch,getCartCount} = useContext(ShopContext)
 
  return (
    <div className="flex items-center justify-between py-5 font-medium ">
       <Link to={'/'}>
       <h1 className='text-2xl text-blue-500 font-bold'>ShOP-<span className='text-blue-600'>CarT</span></h1>
       </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
        </ul>

        <div className='flex items-center gap-5'>
          <img onClick={()=>setShowSearch(true)} src={assets.SearchIcon} className='w-6 cursor-pointer' alt="" />
          <div className='group relative'>
            <Link to={'/Login'}><img src={assets.ProfileIcon} className='w-6 cursor-pointer' alt="" /></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-[90]'>
              <div className='flex flex-col bg-slate-100 text-gray-500 gap-2 w-36 py-3 px-5 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
           <Link to='/cart' className='relative'>
            <img src={assets.CartIcon} alt="" className='w-6 min-w-5'/>
            <p className='absolute right-[-8px] bottom-[14px] w-4 text-center leading-4 bg-red-700 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img src={assets.MenuIcon} onClick={()=>setVisible(true)} alt="" className='w-8 sm:hidden cursor-pointer'/>
        </div>
         {/* sidebar small screen */}
         
        <div className={`z-[90] fixed absolute top-0 right-0 bottom-0 duration-400 shadow-sm overflow-hidden bg-white transition-all ${visible ? 'w-[50%]': 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)}  className='flex items-center p-3 cursor-pointer'>
               <img src={assets.DropDown} alt="" className='rotate-90 w-8 ' />
            <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 hover:bg-gray-200 ' to='/'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 hover:bg-gray-200' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 hover:bg-gray-200' to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 hover:bg-gray-200' to='/contact'>CONTACT</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar