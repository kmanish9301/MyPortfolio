import { Box, Button, Card, CardContent, CardMedia, Chip, List, ListItem, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const ProjectCard = ({ project }) => {
    const theme = useTheme();
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleDescriptionClick = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <Card
            sx={{
                maxWidth: 350,
                borderRadius: 0,
                boxShadow: `0.7rem 0.7rem 0px ${theme.palette.shadow.main}`,
                border: `0.5rem solid ${theme.palette.shadow.main}`,
                "&:hover": {
                    boxShadow: "none",
                    border: `0.5rem solid ${theme.palette.text.primary}`,
                },
                p: 2
            }}>
            {project.image && (
                <CardMedia
                    component="img"
                    height="150"
                    image={project.image}
                    alt={project.name}
                    sx={{ borderRadius: 2 }}
                />
            )}

            <CardContent sx={{ padding: "0", paddingBottom: "0 !important" }}>
                <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "1.2rem", letterSpacing: "0.1rem", wordSpacing: "0.25rem", marginTop: "1rem" }}>
                    {project?.name}
                </Typography>

                <Stack sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "0.5rem"
                }}>
                    <Typography sx={{ color: theme.palette.text.primary, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1rem", marginTop: "1rem" }}>
                        Tech Used :
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.3rem", overflow: "hidden", whiteSpace: "none", flexWrap: "wrap" }}>
                        {project.tech.map((tech, index) => (
                            <Chip label={tech} key={index} sx={{ fontSize: "0.75rem", height: "24px" }} />
                        ))}
                    </Box>
                </Stack>
                <Box
                    sx={{
                        color: theme.palette.text.primary,
                        fontWeight: "300",
                        fontSize: "0.9rem",
                        letterSpacing: "0.05rem",
                        marginTop: "1rem",
                        textAlign: "center",
                        maxWidth: "500px",
                    }}
                >
                    <List>
                        {Array.isArray(project.description) &&
                            project.description
                                .filter((_, index) => showFullDescription || index === 0)
                                .map((item, index) => (
                                    <ListItem
                                        key={item.id}
                                        sx={{
                                            display: "list-item",
                                            paddingBottom: "0.5rem !important",
                                            padding: "0rem",
                                            listStyle: "disc",
                                            marginLeft: "0.5rem !important",
                                        }}
                                    >
                                        {item.text}
                                        {!showFullDescription && index === 0 && project.description.length > 1 && (
                                            <Button
                                                size="small"
                                                onClick={handleDescriptionClick}
                                                sx={{
                                                    textTransform: "none",
                                                    color: theme.palette.greenButtonBackground.main,
                                                    fontSize: "0.85rem",
                                                    fontWeight: "bold",
                                                    padding: 0,
                                                }}
                                            >
                                                ... View More
                                            </Button>
                                        )}
                                    </ListItem>
                                ))}
                    </List>

                    {showFullDescription && (
                        <Box sx={{ textAlign: "left", marginTop: "0.5rem" }}>
                            <Button size="small" onClick={handleDescriptionClick}
                                sx={{
                                    textTransform: "none",
                                    color: theme.palette.greenButtonBackground.main,
                                    fontSize: "0.85rem",
                                }}
                            >
                                View Less
                            </Button>
                        </Box>
                    )}
                </Box>
            </CardContent>

            {
                (project.demo || project.github) && (
                    <Stack direction="row" spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        {project.github && (
                            <Button
                                variant="contained"
                                href={project.github}
                                target="_blank"
                                sx={{
                                    borderRadius: "0 !important",
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.greenButtonBackground.main,
                                    boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                                    "&:hover": {
                                        backgroundColor: theme.palette.greenButtonBackground.hover,
                                        boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                                    },
                                }}
                            >
                                GitHub
                            </Button>
                        )}
                        {project.demo && (
                            <Button
                                variant="contained"
                                color="inherit"
                                href={project.demo}
                                target="_blank"
                                sx={{
                                    borderRadius: "0 !important",
                                    color: theme.palette.text.primary,
                                    backgroundColor: theme.palette.background.default,
                                    boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                                    "&:hover": {
                                        backgroundColor: theme.palette.background.hover,
                                        boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                                    },
                                }}
                            >
                                Demo
                            </Button>
                        )}
                    </Stack>
                )
            }
        </Card>
    );
};

export default ProjectCard;