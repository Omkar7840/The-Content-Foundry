import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-1">
      <div className="overflow-hidden">
        <img src={image} alt={title} className="aspect-video w-full object-cover hover:scale-105 transition duration-500" />
      </div>

      <div className="p-5">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
          {category}
        </span>

        <h5 className="mt-3 mb-2 text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h5>

        <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}>
          
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
