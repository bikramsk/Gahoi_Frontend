import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SuccessStories = () => {
  const { language } = useLanguage();
  const successStories = [
    {
      id: 1,
      coupleImage: 'story-4.webp',
      groomName: 'Rahul Gahoi',
      brideName: 'Priya Gupta',
      date: 'Married on Dec 15, 2023',
      story: 'Found each other through Gahoi Samaj community. Our families shared similar values and traditions, making it a perfect match.',
      location: 'Gwalior, MP'
    },
    {
      id: 2,
      coupleImage: '/story-5.webp',
      groomName: 'Aditya Neekhra',
      brideName: 'Sneha Gahoi',
      date: 'Married on Nov 20, 2023',
      story: 'Our journey began at a Gahoi Samaj community event. We are grateful to the community for bringing us together.',
      location: 'Indore, MP'
    },
    {
      id: 3,
      coupleImage: '/story-3.webp',
      groomName: 'Vikram Gahoi',
      brideName: 'Nisha Gupta',
      date: 'Married on Oct 5, 2023',
      story: 'Thanks to Gahoi Samaj for introducing us. Our shared community values and modern outlook made us perfect for each other.',
      location: 'Bhopal, MP'
    },
    {
      id: 4,
      coupleImage: '/story-2.webp',
      groomName: 'Ankit Gupta',
      brideName: 'Riya Gahoi',
      date: 'Married on Sept 12, 2023',
      story: 'Met through Gahoi Samaj community gatherings. Every moment since has been filled with joy and understanding.',
      location: 'Jabalpur, MP'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-red-800 mb-4 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' ? 'सफलता की कहानियां' : 'Success Stories'}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
            {language === 'hi' 
              ? 'गहोई समाज के माध्यम से मिले सफल जीवन साथी'
              : 'Successful matches through Gahoi Samaj'
            }
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
                  alt={`${story.groomName} & ${story.brideName}`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm">{story.date}</div>
                  <div className="font-medium">{story.location}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-lg font-bold text-gray-900 mb-2 ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {story.groomName} & {story.brideName}
                </h3>
                <p className={`text-gray-600 text-sm ${language === 'hi' ? 'font-hindi' : 'font-english'}`}>
                  {story.story.replace(/Gahoi Samaj/g, 'Gahoi Samaj')}
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
