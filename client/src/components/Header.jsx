import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-20 mb-8'>

            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-blue-50 bg-blue-200 rounded-full text-sm text-primary'>
               <p>New AI feature integrated</p>
               <img src={assets.star_icon} className='w-2.5' alt="" />
            </div>
            
            <h1 className='font-bold text-3xl sm:text-5xl lg:text-6xl mb-6 leading-tight'>Your Own <span className='text-blue-600'> Blogging </span> <br/> Platform </h1>
            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-s text-gray-600'>This is your space to think out loud, to share what matters, and to write without filters. <br/>Whether it's one word or a thousand, your story starts right here.</p>
           <form className='flex items-center max-w-xl max-sm:scale-90 mx-auto bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm '>
               <input type="text"  placeholder="Search for blogs..."  className="w-full bg-transparent pl-1 outline-none text-gray-700"/>
                <button type="submit"className="bg-blue-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-all cursor-pointer"> Search </button>
            </form>




        </div>
        <img src={assets.gradientBackground} className='absolute -top-50 -z-1 opacity-50' alt="" />
    </div>
  )
}

export default Header