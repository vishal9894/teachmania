import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

const ReviewCard = ({ 
  name = "Sarah Johnson",
  role = "Software Developer",
  avatar = "https://i.pravatar.cc/150?img=1",
  rating = 5,
  date = "2 days ago",
  review = "This course completely transformed my understanding of application development. The instructor explains ",
  courseName = "Custom Application Development"
}) => {
  
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      
      {/* Header with Avatar and Name */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={avatar} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        
        {/* Options Menu */}
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <BsThreeDotsVertical />
        </button>
      </div>

      {/* Rating and Course Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {renderStars(rating)}
          </div>
          <span className="text-sm font-medium text-gray-700">{rating}.0</span>
        </div>
        <span className="text-xs text-gray-400">{date}</span>
      </div>

      {/* Course Tag */}
      <div className="mb-3">
        <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full">
          {courseName}
        </span>
      </div>

      {/* Review Content */}
      <p className="text-gray-600 leading-relaxed mb-4">
        "{review}"
      </p>

      {/* Helpful Section */}
      <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors">
          <span>👍</span>
          <span>Helpful (12)</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors">
          <span>💬</span>
          <span>Reply</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;