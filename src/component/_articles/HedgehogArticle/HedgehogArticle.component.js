import { useTranslation } from 'react-i18next'

import './HedgehogArticle.scss';

import hedgehog from '../../../asset/hedgehog.jpeg';
import Hero from '../../Hero';
import HomepageArticle, { homepageArticleTypes } from '../../HomepageArticle/HomepageArticle';

export default function HedgehogArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.FILLED} name={id}>
            <Hero image={hedgehog} heading="Hedgehod in the Fog"/>
            <p className="Article-Text">{t('hedgehogText')}</p>
        </HomepageArticle>
    )
}