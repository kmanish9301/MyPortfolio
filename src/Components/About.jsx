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
                    Course Completed
                </Typography>

                <Stack sx={{ px: { xs: 2, md: 0 } }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
                        <Typography sx={{
                            color: "text.primary", fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", fontFamily: "inherit"
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
                        color: "text.primary", fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1rem", marginTop: "1rem", fontFamily: "inherit"
                    }}>
                        Certificate of achievement for the Advance Java Full Stack Development course, where I upgraded my programming skills.
                    </Typography>
                </Stack>
            </Container>
        </>
    );
};

export default About;
