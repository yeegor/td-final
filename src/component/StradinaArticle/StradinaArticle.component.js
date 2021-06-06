import { useTranslation } from 'react-i18next'
import './StradinaArticle.scss';

import stradina from '../../asset/stradina.jpeg';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function StradinaArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.SIDE_TO_SIDE} name={id}>
            <p className="Article-Text">{t('stradinaText')}</p>
            <Hero image={stradina} heading="Stradiņš University"/>
        </HomepageArticle>
    )
}