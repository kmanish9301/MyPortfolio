import { Box, Container, List, ListItem, Typography, useTheme } from "@mui/material";

const WorkExperience = () => {
    const theme = useTheme();
    return (
        <Container
            maxWidth="lg"
            sx={{
                px: { xs: 1, md: 0 },
                color: theme.palette.text.primary,
                overflow: "hidden",
            }}
        >
            <Typography sx={{
                color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "3rem", fontFamily: "inherit"
            }}>
                My Work Experience
            </Typography>

            <Box sx={{ marginTop: "2rem" }}>
                <Typography sx={{
                    color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", marginTop: "0.5rem", fontFamily: "inherit"
                }}>
                    Software Engineer - Frontend Engineering | January 2023 - Present
                </Typography>
                <Typography sx={{
                    color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.2rem", letterSpacing: "0.1rem", marginTop: "0.5rem", fontFamily: "inherit"
                }}>
                    TECHADEMY LEARNING SOLUTIONS (P) LTD | Pune, India
                </Typography>
                <Typography sx={{
                    color: theme.palette.text.primary, fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "0.5rem", fontFamily: "inherit"
                }}>
                    Working at Techademy Learning Solutions, a product based leading ed-tech company specializing in workforce upskilling and corporate training.
                </Typography>
                <Typography sx={{
                    color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.5rem", letterSpacing: "0.1rem", marginTop: "2rem", fontFamily: "inherit"
                }}>
                    My role involves:
                </Typography>

                <List sx={{
                    listStyleType: 'disc', paddingLeft: "1.5rem", fontWeight: "600", fontSize: "1rem", letterSpacing: "0.1rem", fontFamily: "inherit"
                }}>
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
    )
}

export default WorkExperience