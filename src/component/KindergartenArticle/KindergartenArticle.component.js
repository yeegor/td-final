import './KindergartenArticle.scss';

import kindergarten from '../../asset/kindergarten.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle from '../HomepageArticle';

export default function KindergartenArticle() {
    return (
        <HomepageArticle type="Kindergarten">
            <Hero image={kindergarten} heading="Riga 234. Kindergarten"/>
            <p className="Article-Text">{loremIpsum}</p>
        </HomepageArticle>
    )
}