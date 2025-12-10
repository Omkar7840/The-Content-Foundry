import React from 'react'
import { assets } from '../../assets/assets';

const BlogTableItem = ({blog,fetchBlog,index}) => {
    const {title,createdAt} = blog;
    const BlogDate = new Date(createdAt)

  return (
    <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-2'>{title}</td>
        <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
        <td className='px-2 py-4 max-sm:hidden'>
            <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}>{blog.isPublished ?'Published':'Unpublished'}</p>
        </td>
        <td className="px-4 py-4">
  <div className="flex items-center gap-3">
    <button
      type="button"
      className="px-4 py-1 rounded-full border text-sm"
    >
      {blog.isPublished ? 'Unpublish' : 'Publish'}
    </button>

    <button
      type="button"
    >
      <img
        src={assets.cross_icon}
        alt="Delete"
        className="w-10 h-10"
      />
    </button>
  </div>
</td>


    </tr>
  )
}

export default BlogTableItem