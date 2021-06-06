import { useTranslation } from 'react-i18next'
import './SchoolArticle.scss';

import school from '../../../asset/school.jpeg';
import Hero from '../../Hero';
import HomepageArticle, { homepageArticleTypes } from '../../HomepageArticle/HomepageArticle';

export default function SchoolArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.SIDE_TO_SIDE} name={id}>
            <Hero image={school} heading="Riga Ostvald Secondary&nbsp;School"/>
            <p className="Article-Text">{t('schoolText')}</p>
        </HomepageArticle>
    )
}