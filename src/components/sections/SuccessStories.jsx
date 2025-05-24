import React from 'react';
import { useTranslation } from 'react-i18next';

const SuccessStories = () => {
  const { t, i18n } = useTranslation();

  // Language-specific font class
  const languageFontClass = i18n.language === "hi" ? "font-hindi" : "font-english";

  const successStories = [
    {
      id: 1,
      coupleImage: 'story-4.webp',
      translationKey: 'story1',
      date: 'Married on Dec 15, 2023',
      location: 'Gwalior, MP'
    },
    {
      id: 2,
      coupleImage: '/story-5.webp',
      translationKey: 'story2',
      date: 'Married on Nov 20, 2023',
      location: 'Indore, MP'
    },
    {
      id: 3,
      coupleImage: '/story-3.webp',
      translationKey: 'story3',
      date: 'Married on Oct 5, 2023',
      location: 'Bhopal, MP'
    },
    {
      id: 4,
      coupleImage: '/story-2.webp',
      translationKey: 'story4',
      date: 'Married on Sept 12, 2023',
      location: 'Jabalpur, MP'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-red-800 mb-4 ${languageFontClass}`}>
            {t('home.successStories.title')}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${languageFontClass}`}>
            {t('home.successStories.subtitle')}
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successStories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={story.coupleImage}
                  alt={t(`home.successStories.stories.${story.translationKey}.coupleNames`)}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className={`text-sm ${languageFontClass}`}>{story.date}</div>
                  <div className={`font-medium ${languageFontClass}`}>{story.location}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-lg font-bold text-gray-900 mb-2 ${languageFontClass}`}>
                  {t(`home.successStories.stories.${story.translationKey}.coupleNames`)}
                </h3>
                <p className={`text-gray-600 text-sm ${languageFontClass}`}>
                  {t(`home.successStories.stories.${story.translationKey}.story`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
