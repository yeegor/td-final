import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from '../LanguageSwitcher';
import { HeaderContext } from '../../context/Header.context';

import getIsMobile from '../../util/isMobile';
import './Header.scss';

function getHeaderItemsIndexes(articleNames, activeHeaderItemName) {
    let currentIndex = articleNames
        .findIndex((name) => name === activeHeaderItemName)

    if (currentIndex === -1) {
        currentIndex = 0;
    }

    const nextIndex = currentIndex === articleNames.length - 1 
        ? currentIndex 
        : currentIndex + 1;

    const prevIndex = currentIndex === 0 
        ? 0
        : currentIndex - 1;

    return [prevIndex, currentIndex, nextIndex];
}

export default function Header({ articleIds }) {
    const { activeHeaderItemName } = useContext(HeaderContext);
    const { t } = useTranslation();

    const isMobile = getIsMobile();

    return (
        <header className="Header">
            {/* Desktop header */}
            {!isMobile && Object.entries(articleIds).map(([name, id]) => (
                <a key={id} className={`Header-Item ${(activeHeaderItemName === id && 'Header-Item_isActive') || ''}`} href={`#${id}`}>{t(name)}</a>
            ))}

            {/* Mobile header */}
            {isMobile && (() => {
                const articles = Object.entries(articleIds);
                const articleNames = articles.map(([one]) => one);

                const indexes = getHeaderItemsIndexes(articleNames, activeHeaderItemName);

                const [prev, current, next] = indexes.map((one) => articles[one][1]);

                return (
                    <>
                        <a className="Header-Item Header-Item_isActive" href={`#${prev}`}>&larr;</a>
                        <a className="Header-Item Header-Item_isActive" href={`#${current}`}>{activeHeaderItemName}</a>
                        <a className="Header-Item Header-Item_isActive" href={`#${next}`}>&rarr;</a>
                    </>
                )
            })()}

            {/* Language Switcher */}
            <div className="Header-Item Header-Item_lang">
                <LanguageSwitcher />
            </div>
        </header>
    );
}