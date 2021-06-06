import { useTranslation } from 'react-i18next'
import './StradinaArticle.scss';

import stradina from '../../../asset/stradina.jpeg';
import Hero from '../../Hero';
import HomepageArticle, { homepageArticleTypes } from '../../HomepageArticle/HomepageArticle';

export default function StradinaArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.SIDE_TO_SIDE} name={id}>
            <div className="Article-Text">
                <p>{t('stradinaText1')}</p>
                <p>{t('stradinaText2')}</p>
                <p>{t('stradinaText3')}</p>
                <p>{t('stradinaText4')}</p>
            </div>
            <Hero image={stradina} heading="Stradiņš University"/>
        </HomepageArticle>
    )
}