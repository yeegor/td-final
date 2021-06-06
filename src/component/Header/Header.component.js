import { useContext } from 'react';
import { HeaderContext } from '../../context/Header.context';
import './Header.scss';

export default function Header({ articleIds }) {
    const { activeHeaderItemName } = useContext(HeaderContext);

    return (
        <header className="Header">
            {Object.entries(articleIds).map(([name, id]) => (
                <a className={`Header-Item ${(activeHeaderItemName === id && 'Header-Item_isActive') || ''}`} href={`#${id}`}>{name}</a>
            ))}
        </header>
    );
}