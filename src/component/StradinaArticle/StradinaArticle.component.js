import './StradinaArticle.scss';

import stradina from '../../asset/stradina.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle from '../HomepageArticle';

export default function StradinaArticle() {
    return (
        <HomepageArticle type="Stradina">
            <p className="Article-Text">{loremIpsum}</p>
            <Hero image={stradina} heading="Stradiņš University"/>
        </HomepageArticle>
    )
}