import './HomepageArticle.scss';

export default function HomepageArticle({ 
    children,
    type
}) {
    return (
        <article className={`HomepageArticle HomepageArticle_${type}`}>
            {children}
        </article>
    )
}