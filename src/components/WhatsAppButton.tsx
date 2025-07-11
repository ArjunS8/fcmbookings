import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210';
    const message = 'Hello! I would like to know more about FC Marina turf bookings.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="whatsapp-float">
      {/* Expanded Message Box */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 mb-2 animate-fade-in">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800">Need help?</h3>
            <button
              onClick={toggleExpanded}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Contact us on WhatsApp for instant support with your turf bookings!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300"
          >
            Start Chat
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={toggleExpanded}
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer relative group"
        title="Need help? Contact us"
      >
        <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        
        {/* Hover Text */}
        {!isExpanded && (
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Need help? Contact us
          </div>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;