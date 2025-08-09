import React, { useState } from 'react'
import Tittle from '../Components/Tittle'
import CartTotal from '../Components/CartTotal'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const PlaceOrder = () => {
  const [method,setMethod] = useState('');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-24 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Tittle text1={'DELIVERY'} text2={' INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border rounded border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder='FirstName'/>
          <input className='border rounded border-gray-400 py-1.5 px-3.5 w-full' type="text" placeholder='LastName' />
        </div>
        <input className='border border-gray-400 outline-green-800 py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>
        <input className='border border-gray-400  py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>
        <div className='flex gap-3'>
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text"placeholder='City'/>
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text"placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="number" placeholder='ZipCode'/>
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text"placeholder='Country'/>
        </div>
        <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone'/>
      </div>
      {/* Right SIDE */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Tittle text1={'PAYMENT'} text2={' METHOD'}/>
          <div onClick={()=>setMethod('cod')} className=' flex items-center border p-2 px-3 curser-pointer'>
            <p className={`border outline-none min-w-3.5 h-3.5 rounded-full ${method == 'cod' ? 'bg-green-400' : ''}`}></p>
            <p className='text-gray-500 font-medium text-sm mx-4'>CASH ON DELIVERY</p>
          </div>
        </div>
        <div className='w-full mt-8 text-end'>
          <button onClick={()=>navigate('/Orders')} className='bg-black text-white text-sm px-16 py-3'>PLACE ORDER</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder