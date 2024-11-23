import React,{useContext,createContext, useState, Children,} from "react";

export const ThemeContext = createContext();

export const useTheme= () => useContext(ThemeContext)
export const ThemeProvider = ({children}) =>{
    const [isDarkMode,setIsDarkMode] = useState();
    const toggleTheme = () =>{
        setIsDarkMode(prevMode=> !prevMode);
    }
    return (
        <ThemeContext.Provider
            value={{toggleTheme,isDarkMode}}
        >
            {children}
        </ThemeContext.Provider>
    )
}
