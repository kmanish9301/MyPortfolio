import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { alpha, AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinkData } from "../Constants/Constants";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { mode, toggleTheme } = useContext(ThemeContext);
    const theme = useTheme();
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            {/* App Bar */}
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: alpha(theme.palette.background.default, 0.2),
                    backdropFilter: "blur(2rem)",
                    WebkitBackdropFilter: "blur(2rem)",
                    color: theme.palette.text.primary,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderBottom: `2px solid ${theme.palette.shadow.main}`,
                    px: { xs: 0, md: 15 },
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Left Section (Logo + Mobile Menu) */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {/* Mobile Menu Button */}
                        <IconButton
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                display: { xs: "flex", md: "none" },
                                color: theme.palette.text.primary,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Brand Name */}
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                textDecoration: "none",
                                fontWeight: "1000",
                                fontStyle: "italic",
                                color: theme.palette.text.primary,
                                fontSize: { xs: "1.3rem", md: "1.5rem" },
                                position: { xs: "absolute", md: "relative" },
                                left: { xs: "50%", md: "0" },
                                transform: { xs: "translateX(-50%)", md: "none" },
                                "&:hover": { textDecoration: "underline" },
                                textUnderlineOffset: "0.3rem",
                                letterSpacing: "0.2rem",
                                lineHeight: "1rem",
                            }}
                        >
                            Manish.
                        </Typography>

                        {/* Vertical Separator (Desktop Only) */}
                        <Box
                            sx={{
                                width: "1px",
                                height: "24px",
                                backgroundColor: theme.palette.divider,
                                display: { xs: "none", md: "block" },
                            }}
                        ></Box>

                        {/* Nav Links */}
                        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                            {navLinkData.map((item) => {
                                const isActive = location.pathname === `/${item.link}`;
                                return (
                                    <Typography
                                        key={item.id}
                                        component={Link}
                                        to={`/${item.link}`}
                                        sx={{
                                            textDecoration: isActive ? "underline" : "none",
                                            textUnderlineOffset: "0.3rem",
                                            color: theme.palette.text.primary,
                                            fontSize: "0.75rem",
                                            fontWeight: "600",
                                            "&:hover": { textDecoration: "underline" },
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                );
                            })}
                        </Box>
                    </Box>

                    {/* Right Section (Theme Toggle) */}
                    <IconButton
                        onClick={toggleTheme}
                        sx={{
                            border: "1px solid",
                            borderColor: theme.palette.divider,
                            borderRadius: "8px",
                            padding: "5px",
                        }}
                    >
                        {mode === "light" ? (
                            <Brightness4Icon sx={{ color: theme.palette.text.primary }} />
                        ) : (
                            <Brightness7Icon sx={{ color: theme.palette.text.primary }} />
                        )}
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 300, backgroundColor: theme.palette.background.default, height: "100vh" }}>
                    {navLinkData.map((item) => {
                        const isActive = location.pathname === `/${item.link}`;
                        return (
                            <ListItem button key={item.id} component={Link} to={`/${item.link}`} onClick={handleDrawerToggle}>
                                <ListItemText
                                    primary={item.title}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        textAlign: "center",
                                        textDecoration: isActive ? "underline" : "none",
                                        textUnderlineOffset: "0.3rem",
                                        "&:hover": { textDecoration: "underline" },
                                        fontSize: "0.8rem !important",
                                    }}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
