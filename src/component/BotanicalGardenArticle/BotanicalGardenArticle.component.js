import './BotanicalGardenArticle.scss';

import botanical from '../../asset/botanical-garden.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function BotanicalGardenArticle({ id }) {
    return (
        <HomepageArticle type={homepageArticleTypes.FILLED} name={id}>
            <Hero image={botanical} heading="Botanical Garden"/>
            <p className="Article-Text">{loremIpsum}</p>
        </HomepageArticle>
    )
}