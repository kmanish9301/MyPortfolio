import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
        },
        secondary: {
            main: "#ffb74d",
        },
        background: {
            default: "#111216",
            paper: "#111316",
            hover: "#2b2b2b"
        },
        text: {
            primary: "#ffffff",
            secondary: "#cccccc",
        },
        greenButtonBackground: {
            main: "#23a094",
            hover: "#1b867e",
        },
        shadow: {
            main: "#404040",
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

export default darkTheme;
