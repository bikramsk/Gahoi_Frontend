import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      // Check localStorage, browser language, then default to English
      return localStorage.getItem('language') || 
             (navigator.language.startsWith('hi') ? 'hi' : 'en');
    } catch (e) {
      console.error("Error accessing localStorage:", e);
      return 'en'; 
    }
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    
   
    if (language === 'hi') {
      document.body.classList.add('hindi-lang');
      document.body.classList.remove('english-lang');
    } else {
      document.body.classList.add('english-lang');
      document.body.classList.remove('hindi-lang');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;



// import React, { createContext, useState, useContext, useEffect } from 'react';


// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState(() => {
   
//     const savedLanguage = localStorage.getItem('language');
//     return savedLanguage || 'en';
//   });


//   useEffect(() => {
//     localStorage.setItem('language', language);    
//     document.documentElement.lang = language;
//   }, [language]);

//   // Toggle between languages
//   const toggleLanguage = () => {
//     setLanguage(prevLang => prevLang === 'en' ? 'hi' : 'en');
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // Custom hook to use the language context
// export const useLanguage = () => useContext(LanguageContext);

// export default LanguageContext; 