import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-900 text-gray-300">
      
      <div className="flex flex-col md:flex-row justify-between gap-12 py-14 border-b border-gray-700">
        
        <div className="max-w-lg">
          <img  src={assets.logo}  alt="logo"  className="w-36 sm:w-48 brightness-200"/>
          <p className="mt-6 text-gray-400 leading-relaxed">
            Discover insightful blogs, tech updates, and exclusive stories delivered to you with clarity and creativity. Stay informed and inspired.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full md:w-[50%]">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4 text-white">
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white hover:pl-1 transition-all duration-200 inline-block"                   >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <p className="py-5 text-center text-gray-500 text-sm md:text-base tracking-wide">
       Copyright © 2025 QuickBlog — All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
