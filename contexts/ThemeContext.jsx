"use client"
import React, { useState, createContext, useEffect } from "react"



export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

    const [ theme, settheme ] = useState("light");
  
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleSwitchTheme = () => {
        settheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{ theme, handleSwitchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider