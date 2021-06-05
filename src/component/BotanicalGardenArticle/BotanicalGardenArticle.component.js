import './BotanicalGardenArticle.scss';

import botanical from '../../asset/botanical-garden.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle from '../HomepageArticle';

export default function BotanicalGardenArticle() {
    return (
        <HomepageArticle type="Botanical">
            <Hero image={botanical} heading="Botanical Garden"/>
            <p className="Article-Text">{loremIpsum}</p>
        </HomepageArticle>
    )
}