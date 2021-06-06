import './BridgeArticle.scss';

import bridge from '../../asset/bridge.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function BridgeArticle({ id }) {
    return (
        <HomepageArticle type={homepageArticleTypes.SIDE_TO_SIDE} name={id}>
            <Hero image={bridge} heading="Vanšu Bridge"/>
            <p className="Article-Text">{loremIpsum}</p>
        </HomepageArticle>
    )
}