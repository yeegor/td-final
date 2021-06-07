import { useContext, useEffect, useRef } from 'react';
import { HeaderContext } from '../../context/Header.context';
import './HomepageArticle.scss';

export const homepageArticleTypes = {
    FILLED: 'FILLED',
    FILLED_SIDE_TO_SIDE: 'FILLED_SIDE_TO_SIDE',
    SIDE_TO_SIDE: 'SIDE_TO_SIDE',
    IMAGE_TOP: 'IMAGE_TOP'
};

export default function HomepageArticle({ 
    children,
    name,
    type = homepageArticleTypes.IMAGE_TOP
}) {
    const observable = useRef(null);

    const { setActiveHeaderItemName } = useContext(HeaderContext);

    const { current: observer } = useRef(new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setActiveHeaderItemName(name)
            }
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        }
    ));

    useEffect(() => {
        const observableNode = observable.current;
        
        if (observableNode) {
            observer.observe(observableNode);
        }

        return () => observableNode && observer.unobserve(observableNode);
    })

    if (!Object.values(homepageArticleTypes).includes(type)) {
        throw new Error(`Type ${type} is not recognized!`);
    }

    return (
        <article ref={observable} id={name} className={`HomepageArticle HomepageArticle_type_${type} HomepageArticle_${name}`}>
            {children}
        </article>
    )
}