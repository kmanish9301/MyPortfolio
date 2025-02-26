import { Box, Typography, useTheme } from "@mui/material";
import Marquee from "react-fast-marquee";

const InfiniteScrollText = () => {
    const theme = useTheme();
    return (
        <Box sx={{ width: "100vw", overflow: "hidden" }}>
            <Marquee
                speed={30}
                gradient={false}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    background: theme.palette.background.paper,
                    textTransform: "uppercase",
                    paddingTop: "0.8rem",
                    paddingBottom: "0.8rem",
                    borderBottom: `2px solid ${theme.palette.shadow?.main || "#ccc"}`
                }}
            >
                <Box sx={{ display: "flex", gap: "2rem" }}>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "400", fontSize: "0.8rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem" }}>
                        Hello, I'm Manish.
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "400", fontSize: "0.8rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem" }}>
                        I am a dedicated Software Engineer with 2.2 years of experience specializing
                        in frontend development. I am skilled in creating responsive,
                        user-friendly web applications.
                    </Typography>
                </Box>
            </Marquee>
        </Box>
    );
};

export default InfiniteScrollText;