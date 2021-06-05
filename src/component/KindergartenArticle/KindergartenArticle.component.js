import './KindergartenArticle.scss';

import kindergarten from '../../asset/kindergarten.jpeg';
import loremIpsum from '../../asset/lorem-ipsum';
import Hero from '../Hero';

export default function KindergartenArticle() {
    return (
        <article className="Article KindergartenArticle">
            <Hero image={kindergarten} heading="Riga 234. Kindergarten"/>
            <p className="Article-Text">{loremIpsum}</p>
        </article>
    )
}