import Tittle from '../Components/Tittle.jsx'
import {assets} from '../assets/assets.js'
import NewsletterBox from '../Components/NewsletterBox.jsx'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Tittle text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-6'>
        <img className='w-full md:max-w-[450px]' src={assets.AboutImg} alt="" />
        <div className='flex flex-col justify-center text-gray-600 gap-5 md:w-2/4'> 
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus dolorum ea quos dolores recusandae quod. Deserunt eligendi accusantium itaque amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sit accusamus id nesciunt voluptatem ratione vero, adipisci itaque ducimus odio?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, blanditiis.</p>
          <b className='text-gray-600'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae, assumenda possimus reprehenderit quis amet! Cupiditate adipisci nulla possimus fugit?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Tittle text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sit doloribus expedita architecto facilis!</p>
        </div>
         <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sit doloribus expedita architecto facilis!</p>
        </div>
         <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto sit doloribus expedita architecto facilis!</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
     
  )
}

export default About