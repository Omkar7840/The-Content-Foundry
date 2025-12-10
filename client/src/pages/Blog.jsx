import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Blog = () => {

  const {id} = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');


  const fetchBlogData = async () => {
    const data = blog_data.find(item => item._id === id)
    setData(data) 
  }
  const fetchComments = async () => {
    setComments(comments_data)
  }
  const addComment = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    fetchBlogData()
    fetchComments()
  },[])

  return data ? (
  <div className="relative">

    <img src={assets.gradientBackground} alt="" className="absolute -top-48 left-0 w-full -z-10 opacity-40 pointer-events-none"/>

    <Navbar />
    <div className="text-center mt-24 px-6">
      
      <p className="text-blue-600 font-medium py-3 tracking-wide">
        Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
      </p>

      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
        {data.title}
      </h1>

     <h2 className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        {data.subTitle}
      </h2>

      <p className="inline-block mt-6 py-1.5 px-5 border border-blue-500/30 bg-blue-50 text-blue-700 rounded-full text-sm font-medium shadow-sm">
        Omkar Babar
      </p>
    </div>

    <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
    <img src={data.image} alt="" className= 'rounded-3xl mb-5' />

    <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html:data.description}}></div>
     
     <div className='mt-14 mb-10 max-w-3xl mx-auto'>
           <p className='font-semibold mb-4'>Comments ({comments.length})</p>
           <div className='flex flex-col gap-4'>
            {comments.map((item,index) => (
              <div key={index} className='relative bg-gray-100 border border-gray-400 max-w-xl p-4 rounded text-gray-600'>
                <div>
                  <img src={assets.user_icon} alt="" className='w-6' />
                  <p className='font-medium'>{item.name}</p>
                </div>
                <p className='text-sm max-w-md ml-8'>{item.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs' >{Moment(item.createdAt).fromNow()}</div>
              </div>
            ))}

           </div>
     </div>
    </div>

    <div className='max-w-3xl mx-auto'>
      <p className='font-semibold mb-4'>Add your comment</p>
      <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
      <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='Name' name="Name" id="" required className='w-full p-2 border border-gray-300 rounded outline-none' />
      <textarea onChange={(e)=> setContent(e.target.value)} value={content} placeholder='Comment...' className='w-full p-2 border borser-gray-300 rounded outline-none h-48' ></textarea>
     <button type="submit" className="bg-blue-600 text-white rounded-full p-2 px-8 hover:scale-105 transition-transform">Submit</button>   
   </form>
    </div>

    <div className='my-24 max-w-3xl mx-auto'> 
      <p className='font-semibold my-4'>Share this article on Social Media</p>
      <div className='flex'>
        <img src={assets.facebook_icon} width={50} alt="" />
        <img src={assets.twitter_icon} width={50} alt="" />
        <img src={assets.googleplus_icon} width={50} alt="" />
      </div>
    </div>

    <Footer />
  </div>
) : <Loader />
}

export default Blog