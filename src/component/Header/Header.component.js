export default function Header({ articleIds }) {
    

    return (
        <header>
            {Object.entries(articleIds).map(([name, id]) => (
                <a href={`#${id}`}>{name}</a>
            ))}
        </header>
    );
}