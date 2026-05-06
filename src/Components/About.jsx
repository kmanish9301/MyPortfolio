import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { FaPaperclip } from "react-icons/fa";
import Experience from "./Experience";
import InfiniteScrollText from "./InfiniteScrollText";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

const About = () => {
    const theme = useTheme();
    const certificateUrl = "https://www.edubridgeindia.com/certificate-detail?enrollment_number=EBEON0722621919";
    return (
        <>
            <InfiniteScrollText />
            <Container
                maxWidth="lg"
                sx={{
                    px: { xs: 5, md: 0 },
                    color: theme.palette.text.primary,
                    overflow: "hidden",
                    marginBottom: "4rem"
                }}
            >
                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "3rem", fontFamily: "inherit" }}>
                    About Me
                </Typography>

                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: { xs: "1.5rem", md: "2.5rem" }, letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "1rem", fontFamily: "inherit" }}>
                    I'm Software Engineer - Frontend  Engineering,
                    <br /> Techademy Learning Solutions PVT. LTD.
                </Typography>

                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "2rem", textAlign: "justify", textJustify: "inter-word", wordBreak: "break-word", hyphens: "auto", fontFamily: "inherit" }}>
                    I am a Full Stack Developer passionate about building scalable web applications and continuously learning new technologies. I possess strong skills in integrating front-end and back-end solutions to create efficient, secure, and user-friendly experiences. With a focus on collaboration and optimization, I am committed to enhancing system performance and user engagement in my projects.
                </Typography>

                <Experience />

                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "3rem", fontFamily: "inherit" }}>
                    My Skills
                </Typography>

                <Skills />

                <WorkExperience />

                <Typography sx={{
                    color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "3rem", fontFamily: "inherit"
                }}>
                    Certifications
                </Typography>

                <Stack sx={{ px: { xs: 2, md: 0 }, gap: "1.5rem", marginTop: "1rem" }}>
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <Typography sx={{
                                color: "text.primary", fontWeight: "600", fontSize: "1.1rem", letterSpacing: "0.1rem", fontFamily: "inherit"
                            }}>
                                React Essential Training — LinkedIn Learning
                            </Typography>
                            <Box
                                component="a"
                                href="https://www.linkedin.com/learning/certificates/488dea8e9630fcf8b0065765a337c8926969213214833b4786c4e91b5ecc48f4"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: theme.palette.primary.main, textDecoration: "none", verticalAlign: "middle",
                                }}
                            >
                                <FaPaperclip style={{ fontSize: "1rem", cursor: "pointer", marginBottom: "-2px" }} />
                            </Box>
                        </Box>
                        <Typography sx={{ color: "text.secondary", fontWeight: "500", fontSize: "0.9rem", letterSpacing: "0.1rem", marginTop: "0.25rem", fontFamily: "inherit" }}>
                            Valid from Mar '26
                        </Typography>
                    </Box>

                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <Typography sx={{
                                color: "text.primary", fontWeight: "600", fontSize: "1.1rem", letterSpacing: "0.1rem", fontFamily: "inherit"
                            }}>
                                Node.js Essential Training — LinkedIn Learning
                            </Typography>
                            <Box
                                component="a"
                                href="https://www.linkedin.com/learning/certificates/c9743b67886af8e264b9b0609519d35f816e925d4abda2712d6a66c292803a0a?trk=share_certificate"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: theme.palette.primary.main, textDecoration: "none", verticalAlign: "middle",
                                }}
                            >
                                <FaPaperclip style={{ fontSize: "1rem", cursor: "pointer", marginBottom: "-2px" }} />
                            </Box>
                        </Box>
                        <Typography sx={{ color: "text.secondary", fontWeight: "500", fontSize: "0.9rem", letterSpacing: "0.1rem", marginTop: "0.25rem", fontFamily: "inherit" }}>
                            Valid from Apr '26
                        </Typography>
                    </Box>

                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <Typography sx={{
                                color: "text.primary", fontWeight: "600", fontSize: "1.1rem", letterSpacing: "0.1rem", fontFamily: "inherit"
                            }}>
                                React: Testing and Debugging — LinkedIn Learning
                            </Typography>
                            <Box
                                component="a"
                                href="https://www.linkedin.com/learning/certificates/6de0f13fd5e36cd81dcc6b992c84cd8d5d1b90dfad3d50f1a65b7211ee5a429d?trk=share_certificate"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: theme.palette.primary.main, textDecoration: "none", verticalAlign: "middle",
                                }}
                            >
                                <FaPaperclip style={{ fontSize: "1rem", cursor: "pointer", marginBottom: "-2px" }} />
                            </Box>
                        </Box>
                        <Typography sx={{ color: "text.secondary", fontWeight: "500", fontSize: "0.9rem", letterSpacing: "0.1rem", marginTop: "0.25rem", fontFamily: "inherit" }}>
                            Valid from Mar '26
                        </Typography>
                    </Box>

                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <Typography sx={{
                                color: "text.primary", fontWeight: "600", fontSize: "1.1rem", letterSpacing: "0.1rem", fontFamily: "inherit"
                            }}>
                                Advance Java Full Stack Development from Edubridge India Pvt. Ltd.
                            </Typography>
                            <Box
                                component="a"
                                href={certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: theme.palette.primary.main,
                                    textDecoration: "none",
                                    verticalAlign: "middle",
                                }}
                            >
                                <FaPaperclip style={{ fontSize: "1rem", cursor: "pointer", marginBottom: "-2px" }} />
                            </Box>
                        </Box>
                        <Typography sx={{
                            color: "text.primary", fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1rem", marginTop: "0.5rem", fontFamily: "inherit"
                        }}>
                            Certificate of achievement for the Advance Java Full Stack Development course, where I upgraded my programming skills.
                        </Typography>
                    </Box>
                </Stack>

                <Typography sx={{
                    color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "3rem", fontFamily: "inherit"
                }}>
                    Education
                </Typography>

                <Stack sx={{ px: { xs: 2, md: 0 }, marginTop: "1rem" }}>
                    <Typography sx={{
                        color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.2rem", letterSpacing: "0.1rem", fontFamily: "inherit"
                    }}>
                        Bachelor of Engineering in Electrical Electronics and Power Engineering
                    </Typography>
                    <Typography sx={{
                        color: theme.palette.text.primary, fontWeight: "500", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "0.25rem", fontFamily: "inherit"
                    }}>
                        Priyadarshini College of Engineering, Nagpur, India
                    </Typography>
                    <Typography sx={{
                        color: theme.palette.text.primary, fontWeight: "500", fontSize: "0.9rem", letterSpacing: "0.1rem", marginTop: "0.25rem", fontFamily: "inherit"
                    }}>
                        07/2018 – 07/2022 | CGPA: 8.73/10
                    </Typography>
                </Stack>
            </Container>
        </>
    );
};

export default About;
