import { useTranslation } from 'react-i18next'
import './StatueArticle.scss';

import statue from '../../../asset/liberty-statue.jpeg';
import Hero from '../../Hero';
import HomepageArticle, { homepageArticleTypes } from '../../HomepageArticle/HomepageArticle';

export default function StatueArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.SIDE_TO_SIDE} name={id}>
            <div className="Article-Text">
                <p>{t('statueText1')}</p>
                <p>{t('statueText2')}</p>
                <p>{t('statueText3')}</p>
                <p>{t('statueText4')}</p>
            </div>
            
            <Hero image={statue} heading="Statue of Liberty"/>
        </HomepageArticle>
    )
}