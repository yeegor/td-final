import './HomepageArticle.scss';

export const homepageArticleTypes = {
    FILLED: 'FILLED',
    SIDE_TO_SIDE: 'SIDE_TO_SIDE',
    IMAGE_TOP: 'IMAGE_TOP'
};

export default function HomepageArticle({ 
    children,
    name,
    type = homepageArticleTypes.IMAGE_TOP
}) {
    if (!Object.values(homepageArticleTypes).includes(type)) {
        throw new Error(`Type ${type} is not recognized!`);
    }

    return (
        <article id={name} className={`HomepageArticle HomepageArticle_type_${type} HomepageArticle_${name}`}>
            {children}
        </article>
    )
}