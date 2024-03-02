import { useEffect, useState } from 'react';
import { languages } from '../constants/languages';
import '../styles/TranslateModule.css'

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (args: {pageLanguage: string}, element: string) => void;
      }
    }
  }
}

const TranslateModule = () => {

  const [selectedLanguage, setSelectedLanguage] = useState ('en')

  const changeLanguage = (language: string) => {
    const selectField = document.querySelector('.goog-te-combo')as HTMLSelectElement;
    if (selectField) {
      selectField.value = language;
      selectField.dispatchEvent(new Event('change'));
    }
  };

  const loadGoogleTranslateScript = () => {
    if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
      const googleTranslateScript = document.createElement('script');
      googleTranslateScript.type = 'text/javascript';
      googleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(googleTranslateScript);
    }
  };

  useEffect(() => {
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement({
        pageLanguage: selectedLanguage
      }, 'google_translate_element2');
    };
  
    loadGoogleTranslateScript();
  }, []); 

  useEffect(() => {
    if (selectedLanguage !== 'en') {
      changeLanguage(selectedLanguage);
    }
  }, [selectedLanguage]);

  const handlechangeSelect = (language: string) => {
    setSelectedLanguage(language)
  }

  return (
    <div className="transator">
      <div className='siteTranslate'>
        <label className="translation-label">Language:</label>
        <select onChange={(event)=>handlechangeSelect(event.target.value)} className="custom-select">
          {languages.map(language => <option key={language.title} value={language.value}>{language.title}</option>)}
        </select>
        <div id="google_translate_element2"></div>
      </div>
    </div>
)};

export default TranslateModule;
