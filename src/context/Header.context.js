import { createContext, useState } from 'react';

export const HeaderContext = createContext({});

export default function HeaderContextProvider({ children }) {
    const [activeHeaderItemName, setActiveHeaderItemName] = useState(null);

    const getContextValue = () => ({
        activeHeaderItemName, 
        setActiveHeaderItemName
    })

    return (
        <HeaderContext.Provider value={getContextValue()}>
            { children }
        </HeaderContext.Provider>
    )
}