import { Container, Grid2, useTheme, Typography } from "@mui/material";
import { projectData } from "../Constants/Constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const theme = useTheme();
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
            <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "2.5rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "1rem" }}>
                Recent Projects
            </Typography>
            <Typography sx={{ color: theme.palette.text.primary, fontWeight: "500", fontSize: "1rem", letterSpacing: "0.1rem", marginTop: "1rem", marginBottom: "1rem" }}>
                Check out some of the projects I recently worked on.
            </Typography>
            <Grid2 container spacing={3} sx={{ gap: "3rem" }}>
                {projectData.map((project, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <ProjectCard project={project} />
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    )
}

export default Projects