import React, { useState } from 'react';
import { Percent, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const DiscountSidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const discounts = [
    {
      icon: <Percent className="w-5 h-5" />,
      title: "30% OFF",
      description: "Weekend Bookings",
      code: "WEEKEND30"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Buy 2 Get 1 Free",
      description: "Morning Slots",
      code: "MORNING3"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "25% OFF",
      description: "First Time Users",
      code: "NEWUSER25"
    },
    {
      icon: <Percent className="w-5 h-5" />,
      title: "20% OFF",
      description: "Group Bookings",
      code: "GROUP20"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "15% OFF",
      description: "Monthly Pass",
      code: "MONTHLY15"
    }
  ];

  return (
    <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${
      isMinimized ? 'translate-x-44' : 'translate-x-0'
    } hidden lg:block`}>
      <div className="bg-maroon-900 text-white rounded-l-2xl shadow-2xl relative">
        {/* Minimize/Maximize Button */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-maroon-900 text-white p-2 rounded-l-lg hover:bg-maroon-800 transition-colors duration-300 cursor-pointer"
        >
          {isMinimized ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        <div className="w-48">
          <div className="p-4 border-b border-maroon-700">
            <h3 className="text-lg font-bold text-center">Special Offers</h3>
          </div>
          
          <div className="discount-scroll p-4 space-y-4 max-h-80 overflow-hidden">
            {discounts.concat(discounts).map((discount, index) => (
              <div
                key={index}
                className="bg-maroon-800 rounded-lg p-3 hover:bg-maroon-700 transition-colors duration-300 cursor-pointer football-"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="text-yellow-400">
                    {discount.icon}
                  </div>
                  <span className="font-bold text-yellow-400">{discount.title}</span>
                </div>
                <p className="text-sm text-gray-300 mb-1">{discount.description}</p>
                <p className="text-xs text-gray-400">Code: {discount.code}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSidebar;