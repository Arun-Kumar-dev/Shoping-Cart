import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 gap-14 mt-30 text-sm p-15'>
            <div>
                <h1 className='text-2xl text-blue-500 font-bold mb-5'>ShOP-<span className='text-blue-600'>CarT</span></h1>
                <p className='text-gray-400 w-full md:w-2/3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quos dolores tempora reiciendis possimus aspernatur.</p>
            </div>

            <div>
              <p className='font-medium text-xl mb-5 text-gray-200'>COMPANY</p>
              <ul className='text-gray-400 flex flex-col gap-1 cursor-pointer'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li>Delivery</li>
                <li></li>
              </ul>
            </div>

            <div>
              <p className='font-medium mb-5 text-xl text-gray-200'>GET IN TOUCH</p>
              <ul className='text-gray-400 flex flex-col gap-1'>
                <li>+91 934564-89940</li>
                <li>technifo@dmail.com</li>
              </ul>
            </div>
        </div>

        <div>
          <hr className='text-gray-600' />
          <p className='text-center text-xs py-5 text-gray-200 mb-9'>Copyright 2025 technifo.com - All Right Reserve</p>
        </div>
    </div>
  )
}

export default Footer