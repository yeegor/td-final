import { useTranslation } from 'react-i18next'

import './BotanicalGardenArticle.scss';

import botanical from '../../asset/botanical-garden.jpeg';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function BotanicalGardenArticle({ id }) {
    const { t } = useTranslation();

    return (
        <HomepageArticle type={homepageArticleTypes.FILLED} name={id}>
            <Hero image={botanical} heading="Botanical Garden"/>
            <p className="Article-Text">{t('botanicalText')}</p>
        </HomepageArticle>
    )
}