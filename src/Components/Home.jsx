import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Container
            maxWidth="lg"
            sx={{
                marginTop: "3rem",
                px: { xs: 2, md: 0 },
                color: theme.palette.text.primary,
            }}
        >
            <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                {/* Name Box */}
                <Box
                    sx={{
                        display: "inline-block",
                        border: `2px solid ${theme.palette.text.primary}`,
                        padding: "0.5rem 1rem",
                        boxShadow: `0.2rem 0.5rem 0px ${theme.palette.shadow.main}`,
                        borderRadius: "50px",
                        backgroundColor: theme.palette.background.paper,
                        marginBottom: "1rem",
                    }}
                >
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}>
                        Manish Kharbade
                    </Typography>
                </Box>

                {/* Heading */}
                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "2rem", md: "4.8rem" },
                        marginTop: "1rem",
                        color: theme.palette.text.primary,
                        textAlign: "center",
                    }}
                >
                    Crafting Modern Frontend Experiences
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        color: theme.palette.text.secondary,
                        marginTop: "1rem",
                        maxWidth: "600px",
                        paddingX: { xs: "0.5rem" },
                        lineHeight: { xs: "2rem" },
                        wordSpacing: "0.3rem",
                        letterSpacing: "0.1rem",
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    🚀 Junior Software Engineer | Frontend Developer <br />
                    👨‍💻 2 Years Experience | Indian Institute of Hardware & Technology <br />
                    🎯 Passionate about building scalable & interactive web applications
                </Typography>

                {/* Buttons */}
                <Stack direction="row" spacing={2} sx={{ marginTop: "2rem", gap: "2rem" }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.greenButtonBackground.main,
                            color: theme.palette.text.primary,
                            padding: "0.75rem 2rem",
                            fontWeight: "bold",
                            textTransform: "none",
                            boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                            "&:hover": {
                                backgroundColor: theme.palette.greenButtonBackground.hover,
                                boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                            },
                            width: { xs: "8rem", md: "12rem" },
                            borderRadius: "0rem",
                        }}
                        onClick={() => navigate("/about")}
                    >
                        Explore
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: theme.palette.text.primary,
                            color: theme.palette.text.primary,
                            padding: "0.75rem 2rem",
                            fontWeight: "bold",
                            textTransform: "none",
                            boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                            "&:hover": {
                                backgroundColor: theme.palette.background.default,
                                boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                            },
                            width: { xs: "8rem", md: "12rem" },
                            borderRadius: "0rem",
                        }}
                    >
                        Resume
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Home;
