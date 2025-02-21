import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import lightTheme from "../Themes/LightTheme";
import darkTheme from "../Themes/DarkTheme";

// Create Theme Context
export const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
    // State for theme mode
    const [mode, setMode] = useState("dark");

    // Toggle Theme Function
    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    // Memoized Theme Selection
    const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProviderWrapper;
