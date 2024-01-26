import React from 'react';

export interface Theme {
    activeTheme: "DARK" | "LIGHT" | null;
}

interface ThemeContextType {
    activeTheme: "DARK" | "LIGHT" | null;
    setActiveTheme: (theme: "DARK" | "LIGHT" | null) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
    activeTheme: null,
    setActiveTheme: () => { },
});