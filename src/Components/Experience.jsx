import { useTheme } from "@emotion/react";
import { Box, Container, Typography, Stepper, Step, StepLabel, StepContent } from "@mui/material";
import { School, Engineering } from "@mui/icons-material";

const CustomStepIcon = ({ icon }) => {
    const icons = {
        1: <Engineering sx={{ fontSize: 30, color: "secondary.main" }} />,
        2: <School sx={{ fontSize: 30, color: "primary.main" }} />,
    };

    return icons[icon] || icons[1];
};

const educationSteps = [
    {
        label: "Bachelor of Engineering in Electrical, Electronics, and Power Engineering",
        subLabel: "2018 - 2022",
        description: "Graduated with a CGPA of 8.73/10, specializing in Electrical, Electronics, and Power Engineering.",
        institution: "Rashtrasant Tukadoji Maharaj Nagpur University | Priyadarshini College of Engineering, Nagpur, India"
    },
    {
        label: "Higher Secondary Certificate (HSC)",
        subLabel: "2016 - 2018",
        description: "Specializing in Computer Science",
        institution: "Janta Mahavidyalay Chandrapur, Maharashtra, India"
    }
];

const Experience = () => {
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
                }}
            >
                My Education
            </Typography>

            <Box sx={{ marginTop: "2rem" }}>
                <Stepper orientation="vertical">
                    {educationSteps.map((step, index) => (
                        <Step key={index} active>
                            <StepLabel StepIconComponent={() => <CustomStepIcon icon={index + 1} />}>
                                <Typography sx={{ fontWeight: "600", fontSize: "1.2rem" }}>
                                    {step.label}
                                </Typography>
                                <Typography variant="body2" sx={{ fontStyle: "italic", color: theme.palette.text.secondary }}>
                                    {step.subLabel}
                                </Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                                    {step.institution}
                                </Typography>
                                <Typography variant="body2" sx={{ marginTop: "0.5rem", color: theme.palette.text.secondary }}>
                                    {step.description}
                                </Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </Container>
    );
};

export default Experience;