import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Resume from "../assets/Manish-Kharbade-Resume.pdf";

const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = Resume;
        link.download = "Manish_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const textTypeAnimationList = [
        "Frontend Engineering | Frontend Development",
        "Full Stack Developer | Expertise in Node.js",
        "Redux | MongoDB | JavaScript | GIT | GitHub",
        "Material UI | SCSS | Agile Methodology | UI Development",
        "Restful Web API Development...!"
    ];

    return (
        <Container
            maxWidth="lg"
            sx={{
                marginTop: { xs: "6rem", md: "1.5rem" },
                px: { xs: 2, md: 0 },
                color: theme.palette.text.primary,
            }}
        >
            <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
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
                    <Typography sx={{
                        color: theme.palette.text.primary, fontWeight: "bold", fontFamily: "inherit"
                    }}>
                        Manish Kharbade
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "2rem", md: "4.8rem" },
                        marginTop: "1rem",
                        color: theme.palette.text.primary,
                        textAlign: "center",
                        fontFamily: "inherit"
                    }}
                >
                    Crafting Modern Frontend Experiences
                </Typography>

                <Typography sx={{
                    color: theme.palette.text.primary, marginTop: "1rem", maxWidth: "600px", paddingX: { xs: "0.5rem" }, lineHeight: { xs: "2rem" }, wordSpacing: "0.3rem", letterSpacing: "0.1rem", textAlign: "left", fontFamily: "inherit"
                }}>
                    🚀 <Typewriter
                        words={textTypeAnimationList}
                        loop={0} // 0 means infinite loop
                        typeSpeed={40}
                        deleteSpeed={40}
                        delaySpeed={1000}
                        cursor
                    /> <br />
                    👨‍💻 2.5 Years Experience | Indian Institute of Hardware & Technology <br />
                    🎯 Passionate about building scalable & interactive web applications
                </Typography>

                <Stack direction="row" spacing={2} sx={{
                    marginTop: "2rem", gap: "1rem", fontSize: "2rem", cursor: "pointer"
                }}>
                    <Box
                        component="a"
                        href="https://www.linkedin.com/in/mkharbade09/"
                        target="_blank"
                        sx={{
                            color: theme.palette.text.secondary,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <SiLinkedin />
                    </Box>
                    <Box
                        component="a"
                        href="https://github.com/kmanish9301"
                        target="_blank"
                        sx={{
                            color: theme.palette.text.secondary,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <SiGithub />
                    </Box>
                </Stack>

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
                            fontFamily: "inherit"
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
                                backgroundColor: theme.palette.background.hover,
                                boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                            },
                            width: { xs: "8rem", md: "12rem" },
                            borderRadius: "0rem",
                            fontFamily: "inherit"
                        }}
                        onClick={handleResumeDownload}
                    >
                        Resume
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Home;
