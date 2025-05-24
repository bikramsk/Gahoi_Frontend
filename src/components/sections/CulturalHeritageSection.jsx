import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaLandmark, FaHistory, FaUsers, FaAward, FaQuoteRight, FaHandHoldingHeart, FaBookReader } from 'react-icons/fa';

const CulturalHeritageSection = () => {
  const { language } = useLanguage();

  const heritageItems = [
    {
      icon: <FaLandmark className="w-8 h-8 text-orange-600" />,
      title: {
        en: "Rich Traditions",
        hi: "समृद्ध परंपराएं"
      },
      description: {
        en: "Ancient customs and rituals that define our cultural identity",
        hi: "प्राचीन रीति-रिवाज जो हमारी सांस्कृतिक पहचान को परिभाषित करते हैं"
      }
    },
    {
      icon: <FaHistory className="w-8 h-8 text-orange-600" />,
      title: {
        en: "Historical Legacy",
        hi: "ऐतिहासिक विरासत"
      },
      description: {
        en: "Our community's journey through centuries of achievements",
        hi: "सदियों की उपलब्धियों के माध्यम से हमारे समाज की यात्रा"
      }
    },
    {
      icon: <FaUsers className="w-8 h-8 text-orange-600" />,
      title: {
        en: "Cultural Values",
        hi: "सांस्कृतिक मूल्य"
      },
      description: {
        en: "Core principles that guide our community",
        hi: "मूल सिद्धांत जो हमारे समाज का मार्गदर्शन करते हैं"
      }
    },
    {
      icon: <FaAward className="w-8 h-8 text-orange-600" />,
      title: {
        en: "Notable Achievements",
        hi: "उल्लेखनीय उपलब्धियां"
      },
      description: {
        en: "Celebrating our community's accomplishments",
        hi: "हमारे समाज की उपलब्धियों का उत्सव"
      }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-red-800 mb-4 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' ? 'हमारी सांस्कृतिक विरासत' : 'Our Cultural Heritage'}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto mb-8 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' 
              ? 'गहोई समाज की समृद्ध परंपराएं और सांस्कृतिक विरासत'
              : 'Rich traditions and cultural heritage of the Gahoi Community'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {heritageItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  {item.icon}
                </div>
              </div>
              <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {item.title[language]}
              </h3>
              <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Cultural Story */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Main Story */}
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-6">
                <FaQuoteRight className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className={`text-2xl md:text-3xl font-bold text-red-800 mb-6 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {language === 'hi' ? 'गहोई समाज का गौरवशाली इतिहास' : 'Proud History of Gahoi Community'}
              </h3>
              <p className={`text-gray-600 text-lg mb-8 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                {language === 'hi'
                  ? 'गहोई समाज की समृद्ध विरासत और परंपराएं सदियों से भारतीय संस्कृति का एक महत्वपूर्ण हिस्सा रही हैं। व्यापार, शिक्षा और समाज सेवा में हमारे समाज का योगदान सराहनीय रहा है।'
                  : 'The rich heritage and traditions of the Gahoi community have been an integral part of Indian culture for centuries. Our community has made significant contributions in business, education, and social service.'
                }
              </p>
            </div>

            {/* Cultural Highlights */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FaHandHoldingHeart className="w-6 h-6 text-orange-600 mr-3" />
                  <h4 className={`text-xl font-semibold text-gray-900 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                    {language === 'hi' ? 'सामाजिक मूल्य' : 'Community Values'}
                  </h4>
                </div>
                <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {language === 'hi'
                    ? 'परस्पर सहयोग, सामाजिक एकता और नैतिक मूल्यों पर आधारित हमारी समृद्ध परंपराएं'
                    : 'Our rich traditions based on mutual cooperation, social unity, and moral values'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FaBookReader className="w-6 h-6 text-orange-600 mr-3" />
                  <h4 className={`text-xl font-semibold text-gray-900 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                    {language === 'hi' ? 'शैक्षिक विरासत' : 'Educational Legacy'}
                  </h4>
                </div>
                <p className={`text-gray-600 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {language === 'hi'
                    ? 'शिक्षा और ज्ञान के प्रति समर्पण, जो पीढ़ियों से हमारी पहचान रहा है'
                    : 'Dedication to education and knowledge that has been our identity for generations'
                  }
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-orange-200 rounded-full"></div>
                <div className="h-1 w-24 bg-red-800 rounded-full"></div>
                <div className="h-1 w-12 bg-orange-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalHeritageSection; 