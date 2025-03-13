import { Container, Stack, Typography, useTheme } from "@mui/material";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
    const theme = useTheme();
    const date = new Date();
    const dynamicYear = date.getFullYear();
    return (
        <Container
            maxWidth="lg"
            sx={{
                px: { xs: 5, md: 0 },
                color: theme.palette.text.primary,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingBottom: "1rem"
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: "100%", maxWidth: "1200px" }}
            >
                <Typography sx={{ fontWeight: "400", fontSize: "0.9rem" }}>
                    © {dynamicYear} All rights reserved.
                </Typography>
                <Stack direction="row" spacing={2} sx={{
                    gap: "1rem", fontSize: "1rem", cursor: "pointer"
                }}>
                    <Link
                        to="https://www.linkedin.com/in/mkharbade09/"
                        target="_blank"
                        style={{
                            color: theme.palette.text.secondary,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none",
                            fontSize: "1.2rem"
                        }}
                    >
                        <SiLinkedin />
                    </Link>
                    <Link
                        to="https://github.com/kmanish9301"
                        target="_blank"
                        style={{
                            color: theme.palette.text.secondary,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none",
                            fontSize: "1.2rem"
                        }}
                    >
                        <SiGithub />
                    </Link>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Footer;