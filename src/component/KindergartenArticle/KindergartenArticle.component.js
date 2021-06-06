import './KindergartenArticle.scss';

import kindergarten from '../../asset/kindergarten.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function KindergartenArticle({ id }) {
    return (
        <HomepageArticle type={homepageArticleTypes.FILLED} name={id}>
            <Hero image={kindergarten} heading="Riga 234. Kindergarten"/>
            <p className="Article-Text">{loremIpsum}</p>
        </HomepageArticle>
    )
}