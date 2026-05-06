import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";

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
      <Typography
        sx={{
          color: theme.palette.text.primary,
          fontWeight: "600",
          fontSize: "1.5rem",
          letterSpacing: "0.1rem",
          wordSpacing: "0.25rem",
          marginTop: "3rem",
          fontFamily: "inherit",
        }}
      >
        My Work Experience
      </Typography>

      <Box sx={{ marginTop: "2rem" }}>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "600",
            fontSize: "1.5rem",
            letterSpacing: "0.1rem",
            marginTop: "0.5rem",
            fontFamily: "inherit",
          }}
        >
          Software Engineer - Frontend Engineering | January 2023 - Present
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "600",
            fontSize: "1.2rem",
            letterSpacing: "0.1rem",
            marginTop: "0.5rem",
            fontFamily: "inherit",
          }}
        >
          TECHADEMY LEARNING SOLUTIONS (P) LTD | Pune, India
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "600",
            fontSize: "1rem",
            letterSpacing: "0.1rem",
            marginTop: "0.5rem",
            fontFamily: "inherit",
          }}
        >
          Working at Techademy Learning Solutions, a product based leading
          ed-tech company specializing in workforce upskilling and corporate
          training.
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "600",
            fontSize: "1.5rem",
            letterSpacing: "0.1rem",
            marginTop: "2rem",
            fontFamily: "inherit",
          }}
        >
          My role involves:
        </Typography>

        <List
          sx={{
            listStyleType: "disc",
            paddingLeft: "1.5rem",
            fontWeight: "600",
            fontSize: "1rem",
            letterSpacing: "0.1rem",
            fontFamily: "inherit",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Architected reusable UI components using React.js and Material UI,
            reducing frontend latency by ~20% and improving platform efficiency.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Integrated scalable RESTful APIs, enabling real-time data exchange
            and improving application responsiveness for thousands of users.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Applied advanced React performance optimizations including lazy
            loading, memoization, and code splitting, achieving ~25% faster page
            load times.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Led Agile sprint planning and feature delivery for 8+ major
            releases, consistently meeting project timelines and deployment
            goals.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Debugged and resolved complex UI/UX issues, improving application
            stability and enhancing overall user experience.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Collaborated cross-functionally with product, backend, and QA teams
            to streamline feature delivery and ensure smooth release cycles.
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default WorkExperience;
