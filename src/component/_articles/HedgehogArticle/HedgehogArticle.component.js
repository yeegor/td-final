import { useTranslation } from 'react-i18next'

import './HedgehogArticle.scss';

import hedgehog from '../../../asset/hedgehog.jpeg';
import Hero from '../../Hero';
import HomepageArticle, { homepageArticleTypes } from '../../HomepageArticle/HomepageArticle';

export default function HedgehogArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.FILLED} name={id}>
            <Hero image={hedgehog} heading="Hedgehog in the Fog"/>
            <div className="Article-Text">
                <p>{t('hedgehogText1')}</p>
                <p>{t('hedgehogText2')}</p>
                <p>{t('hedgehogText3')}</p>
                <p>{t('hedgehogText4')}</p>
            </div>
        </HomepageArticle>
    )
}