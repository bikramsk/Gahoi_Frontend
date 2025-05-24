import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaNewspaper, FaShareAlt, FaUsers, FaHandshake } from 'react-icons/fa';

const NewsSubmissionSection = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <FaNewspaper className="w-8 h-8 text-red-600" />,
      title: {
        en: "Share Your News",
        hi: "अपनी खबर साझा करें"
      },
      description: {
        en: "Share important community news, events, and achievements",
        hi: "महत्वपूर्ण सामुदायिक समाचार, कार्यक्रम और उपलब्धियां साझा करें"
      }
    },
    {
      icon: <FaShareAlt className="w-8 h-8 text-red-600" />,
      title: {
        en: "Spread Awareness",
        hi: "जागरूकता फैलाएं"
      },
      description: {
        en: "Help spread awareness about community initiatives and programs",
        hi: "सामुदायिक पहल और कार्यक्रमों के बारे में जागरूकता फैलाने में मदद करें"
      }
    },
    {
      icon: <FaUsers className="w-8 h-8 text-red-600" />,
      title: {
        en: "Connect Communities",
        hi: "समुदायों को जोड़ें"
      },
      description: {
        en: "Bridge gaps between different community groups and regions",
        hi: "विभिन्न सामुदायिक समूहों और क्षेत्रों के बीच की दूरी को कम करें"
      }
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-red-600" />,
      title: {
        en: "Build Partnerships",
        hi: "साझेदारी बनाएं"
      },
      description: {
        en: "Create meaningful connections and collaborations within the community",
        hi: "समुदाय के भीतर सार्थक संबंध और सहयोग बनाएं"
      }
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-red-800 mb-4 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' ? 'समाचार साझा करें' : 'Share Your News'}
          </h2>
          <p className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' 
              ? 'अपनी खबरों और उपलब्धियों को समुदाय के साथ साझा करें और एक मजबूत नेटवर्क बनाएं'
              : 'Share your news and achievements with the community and build a stronger network'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/News-add.webp" 
                alt={language === 'hi' ? 'गहोई समाज इंडिया न्यूज़' : 'Gahoi Samaj India News'}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full opacity-20 z-0"></div>
          </div>

          {/* Right side - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-50 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-lg font-bold text-gray-900 mb-2 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {feature.title[language]}
                </h3>
                <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {feature.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="mailto:gahloishakti@gmail.com "
            className={`inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
          >
            <span>
              {language === 'hi' ? 'अपनी खबर भेजें' : 'Submit Your News'}
            </span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSubmissionSection; 