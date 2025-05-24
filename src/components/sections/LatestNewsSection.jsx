import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';

const LatestNewsSection = ({ newsData = [] }) => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-red-800 mb-6 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' ? 'आगामी कार्यक्रम और समाचार' : 'Upcoming Events & Latest News'}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-800 to-red-300 rounded-full mx-auto mb-6"></div>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' 
              ? 'समाज के आगामी कार्यक्रमों और नवीनतम गतिविधियों से जुड़े रहें'
              : 'Stay connected with upcoming community events and latest activities'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsData.slice(0, 3).map((news, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden ">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image || '/news-placeholder.jpg'} 
                  alt={news.title[language]} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <div className="p-2 bg-red-50 rounded-full mr-3">
                    <FaCalendar className="w-4 h-4 text-red-600" />
                  </div>
                  <span>{news.date}</span>
                </div>
                <h3 className={`text-xl font-semibold text-gray-900 mb-4 line-clamp-2 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {news.title[language]}
                </h3>
                <p className={`text-gray-600 mb-6 line-clamp-3 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {news.excerpt[language]}
                </p>
                <Link 
                  to="/LatestNews"
                  className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors group"
                >
                  <span className={`${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                    {language === 'hi' ? 'और पढ़ें' : 'Read More'}
                  </span>
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All News Link */}
        <div className="text-center">
          <Link
            to="/LatestNews"
            className={`inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors ${
              language === 'hi' ? 'font-hindi' : 'font-english'
            }`}
          >
            {language === 'hi' ? 'सभी समाचार देखें' : 'View All News'}
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection; 