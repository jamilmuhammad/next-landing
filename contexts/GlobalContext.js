import { createContext, useState } from "react"

export const GlobalContext = createContext({
    darkMode: false,
    setDarkMode: () => null
});

export const GlobalContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const value = {darkMode, setDarkMode};

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}