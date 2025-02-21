import { Container, useTheme } from "@mui/material";

const Footer = () => {
    const theme = useTheme();
    return (
        <Container
            maxWidth="xl"
            sx={{
                marginTop: "auto",
                px: { xs: 2, md: 0 },
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                py: { xs: 2, md: 4 },
                textAlign: "center",
                borderTop: `1px solid ${theme.palette.divider}`,
            }}
        >
            Footer
        </Container>
    );
};

export default Footer;
