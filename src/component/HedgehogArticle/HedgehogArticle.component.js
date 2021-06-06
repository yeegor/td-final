import './HedgehogArticle.scss';

import hedgehog from '../../asset/hedgehog.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function HedgehogArticle({ id }) {
    return (
        <HomepageArticle type={homepageArticleTypes.FILLED} name={id}>
            <p className="Article-Text">{loremIpsum}</p>
            <Hero image={hedgehog} heading="Hedgehod in the Fog"/>
        </HomepageArticle>
    )
}