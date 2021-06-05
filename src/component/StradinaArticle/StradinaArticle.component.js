import './StradinaArticle.scss';

import stradina from '../../asset/stradina.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function StradinaArticle() {
    return (
        <HomepageArticle name="Stradina" type={homepageArticleTypes.SIDE_TO_SIDE}>
            <p className="Article-Text">{loremIpsum}</p>
            <Hero image={stradina} heading="Stradiņš University"/>
        </HomepageArticle>
    )
}