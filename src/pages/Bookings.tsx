import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Navigation, Phone, Calendar } from 'lucide-react';

const Bookings = () => {
  const [selectedVenue, setSelectedVenue] = useState<number | null>(null);

  const venues = [
    {
      id: 1,
      name: "FC Marina Adyar",
      address: "123 Marina Beach Road, Adyar, Chennai - 600020",
      rating: 4.8,
      price: "₹1,500/hour",
      image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=400",
      facilities: ["Floodlights", "Parking", "Changing Rooms", "Cafeteria"],
      mapUrl: "https://maps.google.com/?q=Marina+Beach+Chennai",
      phone: "+91 9876543210"
    },
    {
      id: 2,
      name: "FC Marina Velachery",
      address: "456 Velachery Main Road, Chennai - 600042",
      rating: 4.9,
      price: "₹1,800/hour",
      image: "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=400",
      facilities: ["Floodlights", "Parking", "Changing Rooms", "Cafeteria", "First Aid"],
      mapUrl: "https://maps.google.com/?q=Velachery+Chennai",
      phone: "+91 9876543211"
    },
    {
      id: 3,
      name: "FC Marina OMR",
      address: "789 Old Mahabalipuram Road, Chennai - 600096",
      rating: 4.7,
      price: "₹2,000/hour",
      image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400",
      facilities: ["Floodlights", "Parking", "Changing Rooms", "Cafeteria", "AC Lounge"],
      mapUrl: "https://maps.google.com/?q=OMR+Chennai",
      phone: "+91 9876543212"
    },
    {
      id: 4,
      name: "FC Marina Tambaram",
      address: "321 GST Road, Tambaram, Chennai - 600045",
      rating: 4.6,
      price: "₹1,200/hour",
      image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400",
      facilities: ["Floodlights", "Parking", "Changing Rooms"],
      mapUrl: "https://maps.google.com/?q=Tambaram+Chennai",
      phone: "+91 9876543213"
    },
    {
      id: 5,
      name: "FC Marina Porur",
      address: "654 Porur Main Road, Chennai - 600116",
      rating: 4.8,
      price: "₹1,600/hour",
      image: "https://images.pexels.com/photos/1657349/pexels-photo-1657349.jpeg?auto=compress&cs=tinysrgb&w=400",
      facilities: ["Floodlights", "Parking", "Changing Rooms", "Cafeteria"],
      mapUrl: "https://maps.google.com/?q=Porur+Chennai",
      phone: "+91 9876543214"
    },
    {
      id: 6,
      name: "FC Marina Nungambakkam",
      address: "987 Nungambakkam High Road, Chennai - 600034",
      rating: 4.9,
      price: "₹2,200/hour",
      image: "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=400",
      facilities: ["Floodlights", "Parking", "Changing Rooms", "Cafeteria", "VIP Lounge"],
      mapUrl: "https://maps.google.com/?q=Nungambakkam+Chennai",
      phone: "+91 9876543215"
    }
  ];

  const handleGetDirections = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* 3D Background */}
      <div className="background-3d">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
            Book Your <span className="gradient-text">Perfect Turf</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-shadow px-4">
            Choose from our 11 premium football turfs across Chennai. Download our app for instant booking and better deals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                selectedVenue === venue.id ? 'ring-4 ring-maroon-500' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{venue.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-maroon-900 mb-2">{venue.name}</h3>
                <div className="flex items-start space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{venue.address}</p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {venue.facilities.map((facility, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-maroon-600">{venue.price}</div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Per hour</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedVenue(venue.id)}
                    className="w-full bg-maroon-600 text-white py-3 rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300"
                  >
                    Select Venue
                  </button>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleGetDirections(venue.mapUrl)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Directions</span>
                    </button>
                    
                    <button
                      onClick={() => window.open(`tel:${venue.phone}`)}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-maroon-900 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
            <p className="text-xl mb-8">Download our app for instant bookings, exclusive deals, and seamless experience</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300 justify-center">
                <svg className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm">Download on the</div>
                  <div className="text-sm sm:text-lg font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center space-x-3 hover:bg-green-700 transition-colors duration-300 justify-center">
                <svg className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm">Get it on</div>
                  <div className="text-sm sm:text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Bookings;