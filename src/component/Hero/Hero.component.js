import { useTranslation } from 'react-i18next';

import './Hero.scss';

export default function Hero({
    image,
    heading,
    name
}) {
    const { t } = useTranslation();

    return (
        <section className={`Hero ${(name && `Hero_${name}`) || ''}`}>
            <img className="Hero-Image" src={image} alt={t(heading)} />
            <div className="Hero-Cover" />
            <h2 className="Hero-Heading">{t(heading)}</h2>
        </section>
    )
}