import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-100 bg-white flex flex-col gap-2 text-sm'>
        
        <NavLink end={true} to='/admin' className={({isActive}) => `flex items-center gap-3 px-3 py-3 md:px-9 md:min-w-64 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600' : 'hover:bg-[#F2F3FF] border-white border-r-4 text-gray-500'} `}>
            <img src={assets.home_icon} className='min-w-4 w-5' alt="" />
            <p className='hidden md:inline-block font-medium'>
                Dashboard 
            </p>
        </NavLink>

        <NavLink to='/admin/addBlog' className={({isActive}) => `flex items-center gap-3 px-3 py-3 md:px-9 md:min-w-64 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600' : 'hover:bg-[#F2F3FF] border-white border-r-4 text-gray-500'} `}>
            <img src={assets.add_icon} className='min-w-4 w-5' alt="" />
            <p className='hidden md:inline-block font-medium'>
                Add Blogs 
            </p>
        </NavLink>

        <NavLink to='/admin/listBlog' className={({isActive}) => `flex items-center gap-3 px-3 py-3 md:px-9 md:min-w-64 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600' : 'hover:bg-[#F2F3FF] border-white border-r-4 text-gray-500'} `}>
            <img src={assets.list_icon} className='min-w-4 w-5' alt="" />
            <p className='hidden md:inline-block font-medium'>
                Blogs Lists 
            </p>
        </NavLink>

        <NavLink to='/admin/comments' className={({isActive}) => `flex items-center gap-3 px-3 py-3 md:px-9 md:min-w-64 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-600 text-blue-600' : 'hover:bg-[#F2F3FF] border-white border-r-4 text-gray-500'} `}>
            <img src={assets.comment_icon} className='min-w-4 w-5' alt="" />
            <p className='hidden md:inline-block font-medium'>
                Comment 
            </p>
        </NavLink>
    </div>
  )
}

export default Sidebar