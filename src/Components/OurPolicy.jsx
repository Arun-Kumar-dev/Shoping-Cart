import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 justify-around'>
        <div>
            <img src={assets.ExchangeIcon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We Offer hassle free exchange policy</p>
        </div>
         <div>
            <img src={assets.QualityIcon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy exchange Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
         <div>
            <img src={assets.CustomerIcon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best Customer suport</p>
            <p className='text-gray-400'>We provide 24 hours customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy