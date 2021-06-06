import { useTranslation } from 'react-i18next'

import './BridgeArticle.scss';

import bridge from '../../../asset/bridge.jpeg';
import Hero from '../../Hero';
import HomepageArticle, { homepageArticleTypes } from '../../HomepageArticle/HomepageArticle';

export default function BridgeArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.SIDE_TO_SIDE} name={id}>
            <Hero image={bridge} heading="Vanšu Bridge"/>
            <div className="Article-Text">
                <p>{t('bridgeText1')}</p>
                <p>{t('bridgeText2')}</p>
                <p>{t('bridgeText3')}</p>
                <p>{t('bridgeText4')}</p>
            </div>
        </HomepageArticle>
    )
}