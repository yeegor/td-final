import { useTranslation } from 'react-i18next';

import './LanguageSwitcher.scss';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const availableLanguages = ['en', 'lv'];

    const currentLanguage = i18n.language;
    const restLangugages = availableLanguages.filter((one) => currentLanguage !== one);

    return (
        <ul className="LanguageSwitcher">
            {[currentLanguage, ...restLangugages].map((lang) => (
                <div 
                  key={lang} 
                  className="LanguageSwitcher-Item" 
                  onClick={() => i18n.changeLanguage(lang)}
                >
                    {lang}
                </div>
            ))}
        </ul>
    );
}