import { Box, Container, List, ListItem, Typography, useTheme } from "@mui/material";
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

                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "2rem" }}>
                    I am a Full Stack Developer passionate about building scalable web applications and continuously learning new technologies. I possess strong skills in integrating front-end and back-end solutions to create efficient, secure, and user-friendly experiences. With a focus on collaboration and optimization, I am committed to enhancing system performance and user engagement in my projects.
                </Typography>

                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "3rem" }}>
                    My Education
                </Typography>

                <Box sx={{ marginTop: "2rem" }}>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "0.5rem" }}>
                        Bachelor of Engineering in Electrical, Electronics, and Power Engineering | 2018 - 2023
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "0.5rem" }}>
                        Rashtrasant Tukadoji Maharaj Nagpur University | Priyadarshini College of Engineering, Nagpur, India
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "0.5rem" }}>
                        Graduated with a CGPA of 8.73/10, specializing in Electrical, Electronics, and Power Engineering.
                    </Typography>
                </Box>

                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "3rem" }}>
                    My Work Experience
                </Typography>

                <Box sx={{ marginTop: "2rem" }}>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", marginTop: "0.5rem" }}>
                        Jr. Software Engineer - Frontend Engineering | January 2023 - Present
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.2rem", letterSpacing: "0.1rem", marginTop: "0.5rem" }}>
                        TECHADEMY LEARNING SOLUTIONS (P) LTD | Pune, India
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "0.5rem" }}>
                        Working at Techademy Learning Solutions, a product based leading ed-tech company specializing in workforce upskilling and corporate training.
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", marginTop: "2rem" }}>
                        My role involves:
                    </Typography>

                    <List sx={{ listStyleType: 'disc', paddingLeft: "1.5rem" }}>
                        <ListItem sx={{ display: 'list-item' }}>Developing and optimizing scalable UI components while integrating APIs to enhance system efficiency.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Redesigning user interfaces to improve user experience and increase engagement.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Implementing React performance optimizations, such as code splitting and lazy loading, to reduce load times.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Collaborating with cross-functional teams in an Agile Scrum environment to drive product development.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Enhancing web application performance through techniques like caching and minimizing re-renders.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Ensuring a user-friendly interface with intuitive error handling and accessibility improvements.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}>Identifying and addressing security vulnerabilities while implementing robust security measures.</ListItem>
                    </List>

                </Box>

            </Container>
        </>
    );
};

export default About;
