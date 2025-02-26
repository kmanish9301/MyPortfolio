import { Stack, useTheme, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
    const theme = useTheme();
    return (
        <Box
            component="footer"
            sx={{
                width: "100vw",
                marginTop: "auto",
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                py: { xs: 2, md: 4 },
                textAlign: "center",
                borderTop: `1px solid ${theme.palette.divider}`,
                minHeight: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: "100%", maxWidth: "1200px" }}
            >
                <Typography sx={{ fontWeight: "400", fontSize: "0.8rem" }}>
                    © 2025 All rights reserved.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Typography
                        component={Link}
                        to={'https://github.com/kmanish9301'}
                        target="_blank"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: "400",
                            letterSpacing: "0.2rem",
                            fontSize: "0.8rem",
                            "&:hover": { color: "text.primary" }
                        }}
                    >
                        Github
                    </Typography>
                    <Typography
                        component={Link}
                        to={"https://www.linkedin.com/in/mkharbade09/"}
                        target="_blank"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: "400",
                            letterSpacing: "0.2rem",
                            fontSize: "0.8rem",
                            "&:hover": { color: "text.primary" }
                        }}
                    >
                        LinkedIn
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default Footer;