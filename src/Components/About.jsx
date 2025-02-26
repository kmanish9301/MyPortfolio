import { Container, Typography, useTheme } from "@mui/material";
import InfiniteScrollText from "./InfiniteScrollText";

const About = () => {
    const theme = useTheme();
    return (
        <>
            <InfiniteScrollText />
            <Container
                maxWidth="lg"
                sx={{
                    px: { xs: 2, md: 0 },
                    color: theme.palette.text.primary,
                    overflow: "hidden",
                }}
            >
                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "3rem" }}>
                    About Me
                </Typography>

                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: { xs: "1.5rem", md: "2.5rem" }, letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "1rem" }}>
                    I'm Jr. Software Engineer - Frontend  Engineering,
                    <br /> Techademy Lerning Solutions PVT. LTD.
                </Typography>

                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "3rem" }}>
                    I am a Full Stack Developer passionate about building scalable web applications and continuously learning new technologies. I possess strong skills in integrating front-end and back-end solutions to create efficient, secure, and user-friendly experiences. With a focus on collaboration and optimization, I am committed to enhancing system performance and user engagement in my projects.
                </Typography>

            </Container>
        </>
    );
};

export default About;
