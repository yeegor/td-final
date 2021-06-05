import './Hero.scss';

export default function Hero({
    image,
    heading,
    name
}) {
    return (
        <section className={`Hero ${(name && `Hero_${name}`) || ''}`}>
            <img className="Hero-Image" src={image} alt={heading} />
            <h2 className="Hero-Heading">{heading}</h2>
        </section>
    )
}