import './SchoolArticle.scss';

import school from '../../asset/school.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle from '../HomepageArticle';

export default function SchoolArticle() {
    return (
        <HomepageArticle type="School">
            <Hero image={school} heading="Riga Ostvald Secondary School"/>
            <p className="Article-Text">{loremIpsum}</p>
        </HomepageArticle>
    )
}