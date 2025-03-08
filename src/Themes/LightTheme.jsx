import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#ff9800",
        },
        background: {
            default: "#ffffff",
            paper: "#f5f5f5",
            hover: "#c5c5c5",
        },
        text: {
            primary: "#000000",
            secondary: "#555555",
        },
        greenButtonBackground: {
            main: "#23a094",
            hover: "#1b867e",
        },
        shadow: {
            main: "#000000",
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: "Oxanium, sans-serif",
                    transition: "all 0.3s ease-in-out",
                },
                "*": {
                    transition: "all 0.3s ease-in-out",
                    fontFamily: "Oxanium, sans-serif",
                },
            },
        },
    },
});

export default lightTheme;
