import './SchoolArticle.scss';

import school from '../../asset/school.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function SchoolArticle() {
    return (
        <HomepageArticle type={homepageArticleTypes.SIDE_TO_SIDE} name="School">
            <Hero image={school} heading="Riga Ostvald Secondary&nbsp;School"/>
            <p className="Article-Text">{loremIpsum}</p>
        </HomepageArticle>
    )
}