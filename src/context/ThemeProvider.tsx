import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [activeTheme, setActiveTheme] = useState<"DARK" | "LIGHT" | null>("LIGHT");

    // useEffect(() => {
    //     document.documentElement.classList.add('tw-dark')
    // }, []);

    const handleSetActiveTheme = (activeTheme: "DARK" | "LIGHT" | null) => {
        if (activeTheme === "LIGHT") {
            document.documentElement.classList.remove('tw-dark')
        } else {
            document.documentElement.classList.add('tw-dark')
        }
        setActiveTheme(activeTheme);
    };

    return (
        <ThemeContext.Provider value={{ activeTheme, setActiveTheme: handleSetActiveTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;