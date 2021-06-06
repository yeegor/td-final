import './StatueArticle.scss';

import statue from '../../asset/liberty-statue.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';
import HomepageArticle, { homepageArticleTypes } from '../HomepageArticle/HomepageArticle';

export default function StatueArticle({ id }) {
    return (
        <HomepageArticle type={homepageArticleTypes.SIDE_TO_SIDE} name={id}>
            <p className="Article-Text">{loremIpsum}</p>
            <Hero image={statue} heading="Statue of Liberty"/>
        </HomepageArticle>
    )
}