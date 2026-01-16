import React, { useState } from 'react'
import { ThemeContext } from './ThemecontextApi'

const ThemeProviderApi = ({ children }) => {
    const [Theme, setTheme] = useState(false)
    return (
        <ThemeContext.Provider value={{ Theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProviderApi