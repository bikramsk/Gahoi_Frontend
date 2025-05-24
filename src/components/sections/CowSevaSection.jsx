import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaHandHoldingHeart, FaLeaf, FaHome, FaMedkit } from 'react-icons/fa';

const CowSevaSection = () => {
  const { language } = useLanguage();

  const sevaActivities = [
    {
      icon: <FaHandHoldingHeart className="w-8 h-8 text-orange-600" />,
      title: {
        en: "Daily Care & Feeding",
        hi: "दैनिक देखभाल और भोजन"
      },
      description: {
        en: "Providing nutritious food and care to cows",
        hi: "गायों को पौष्टिक आहार और देखभाल प्रदान करना"
      }
    },
    {
      icon: <FaHome className="w-8 h-8 text-orange-600" />,
      title: {
        en: "Shelter Management",
        hi: "गौशाला प्रबंधन"
      },
      description: {
        en: "Maintaining clean and comfortable shelters",
        hi: "स्वच्छ और आरामदायक आश्रय का रखरखाव"
      }
    },
    {
      icon: <FaMedkit className="w-8 h-8 text-orange-600" />,
      title: {
        en: "Medical Care",
        hi: "चिकित्सा सेवा"
      },
      description: {
        en: "Regular health checkups and treatment",
        hi: "नियमित स्वास्थ्य जांच और उपचार"
      }
    },
    {
      icon: <FaLeaf className="w-8 h-8 text-orange-600" />,
      title: {
        en: "Natural Products",
        hi: "प्राकृतिक उत्पाद"
      },
      description: {
        en: "Making products from cow by-products",
        hi: "गाय के उप-उत्पादों से सामग्री बनाना"
      }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' ? 'गौ सेवा' : 'Cow Protection & Care'}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto mb-8 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' 
              ? 'गौ माता की सेवा और संरक्षण के लिए हमारी पहल'
              : 'Our initiatives for cow protection and welfare'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sevaActivities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  {activity.icon}
                </div>
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {activity.title[language]}
              </h3>
              <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {activity.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Donation Call to Action */}
        <div className="bg-orange-100 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              {language === 'hi' ? 'गौ सेवा में सहयोग करें' : 'Support Our Cow Protection Efforts'}
            </h3>
            <p className={`text-gray-700 mb-6 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
              {language === 'hi'
                ? 'आपका छोटा सा योगदान गौ माता की सेवा में बड़ा सहयोग बन सकता है'
                : 'Your small contribution can make a big difference in cow protection'
              }
            </p>
            <button 
              className={`inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl ${language === 'hi' ? 'font-hindi' : 'font-english'}`}
              onClick={() => window.location.href = '/contact-us'}
            >
              <FaHandHoldingHeart className="w-5 h-5 mr-2" />
              <span>
                {language === 'hi' ? 'दान करें' : 'Donate Now'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CowSevaSection; 