import React, { useState, useEffect } from "react";
import { FaImages, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Mahasabha2015 = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEvent]);

  const events = [
    {
      id: 1,
      title: "अखिल भारतीय गहोई वैश्य सभा की शपथ ग्रहण की झलकियाँ",
      date: "2015",
      location: "",
      images: [
        "/Gallery/gahoi-oath-highlight-1.webp",
        "/Gallery/gahoi-oath-highlight-2.webp",
        "/Gallery/gahoi-oath-highlight-3.webp",
        "/Gallery/gahoi-oath-highlight-4.webp",
       
      ],
      description: "अखिल भारतीय गहोई वैश्य सभा की नवीन कार्यकारिणी का शपथ ग्रहण कार्यक्रम"
    }
  ];

  const handleImageClick = (event, index) => {
    setSelectedEvent(event);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    if (selectedEvent && currentImageIndex < selectedEvent.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handlePrevImage = () => {
    if (selectedEvent && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setCurrentImageIndex(0);
  };

  return (
    <div 
      className="min-h-screen py-4 sm:py-4 md:py-6 relative"
      style={{
        backgroundImage: 'url("/decorative-bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#991b1b',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-800/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-20 md:mt-24">
        {/* Header */}
        <div className="text-center py-3 sm:py-3 md:py-4 mb-3 sm:mb-3 md:mb-4">
         
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50 p-6 sm:p-8">
            <div className="inline-block bg-red-800 rounded-full px-8 py-3 shadow-lg">
              <p className="text-xl sm:text-2xl font-medium text-white">महासभा 2015</p>
            </div>
          </div>
        </div>

        {/* Events and Images */}
        <div className="space-y-12">
          {events.map((event) => (
            <div key={event.id} className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border-2 border-red-200/50">
              {/* Event Header */}
              <div className="p-4 sm:p-6 border-b border-red-200">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-red-800 mb-2">{event.title}</h2>
                <div className="flex flex-wrap items-center gap-3 text-gray-600 mb-2">
                  <div className="flex items-center text-xs sm:text-sm">
                    <FaCalendarAlt className="mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">{event.description}</p>
              </div>

              {/* Images Grid */}
              <div className="p-3 sm:p-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {event.images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => handleImageClick(event, index)}
                      className="group relative aspect-square overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${event.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center justify-center text-white">
                            <FaImages className="text-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-red-500 z-[10000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 z-[10000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 z-[10000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="max-w-[90vw] max-h-[90vh] relative z-[9999]">
              <img
                src={selectedEvent.images[currentImageIndex]}
                alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mahasabha2015; 