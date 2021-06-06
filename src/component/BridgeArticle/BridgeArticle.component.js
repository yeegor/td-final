import { useTranslation } from 'react-i18next'

import './BridgeArticle.scss';

import bridge from '../../asset/bridge.jpeg';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function BridgeArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.SIDE_TO_SIDE} name={id}>
            <Hero image={bridge} heading="Vanšu Bridge"/>
            <p className="Article-Text">{t('bridgeText')}</p>
        </HomepageArticle>
    )
}