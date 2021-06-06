import { useTranslation } from 'react-i18next';
import './KindergartenArticle.scss';

import kindergarten from '../../asset/kindergarten.jpeg';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function KindergartenArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.FILLED_SIDE_TO_SIDE} name={id}>
            <Hero image={kindergarten} heading="Riga 234. Kindergarten"/>
            <p className="Article-Text">{t('kindergartenText')}</p>
        </HomepageArticle>
    )
}