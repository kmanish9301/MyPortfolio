import { Box, Typography, useTheme } from "@mui/material";
import Marquee from "react-fast-marquee";
import {
    DiCss3, DiHtml5,
    DiJavascript1,
    DiMongodb, DiPostgresql,
} from "react-icons/di";
import {
    FaGitAlt, FaGithub, FaJava,
    FaNodeJs,
    FaReact,
} from "react-icons/fa";
import {
    SiBootstrap, SiExpress, SiJira,
    SiMui,
    SiPostman,
    SiRedux, SiSpringboot,
    SiTailwindcss
} from "react-icons/si";

const skillItems = [
    {
        category: "Frontend & UI",
        items: [
            { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
            { name: "Redux-Saga", icon: <SiRedux />, color: "#764ABC" },
            { name: "JavaScript", icon: <DiJavascript1 />, color: "#F7DF1E" },
            { name: "HTML", icon: <DiHtml5 />, color: "#E34F26" },
            { name: "CSS", icon: <DiCss3 />, color: "#1572B6" },
            { name: "Material UI", icon: <SiMui />, color: "#007FFF" },
            { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
            { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
        ],
        direction: "right",
    },
    {
        category: "Backend & Database",
        items: [
            { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
            { name: "Express.js", icon: <SiExpress />, color: "#888888" },
            { name: "Java", icon: <FaJava />, color: "#007396" },
            { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
            { name: "MongoDB", icon: <DiMongodb />, color: "#47A248" },
            { name: "PostgreSQL", icon: <DiPostgresql />, color: "#336791" },
        ],
        direction: "left",
    },
    {
        category: "Tools & Version Control",
        items: [
            { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
            { name: "GitHub", icon: <FaGithub />, color: "#888888" },
            { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
            { name: "Jira", icon: <SiJira />, color: "#0052CC" },
            // { name: "VS Code", icon: <SiVscode />, color: "#007ACC" },
        ],
        direction: "right",
    },
];

const Skills = () => {
    const theme = useTheme();

    return (
        <div
            style={{
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                padding: "1.4rem",
                // textAlign: "center",
            }}
        >
            {skillItems.map((skill, index) => (
                <div key={index} style={{ marginBottom: "1.5rem" }}>
                    <Typography style={{
                        color: theme.palette.primary.main, fontSize: "1.5rem", fontFamily: "inherit"
                    }}>
                        {skill.category}
                    </Typography>
                    <Marquee
                        gradient={false}
                        speed={100}
                        pauseOnHover={true}
                        direction={skill.direction}
                        style={{ whiteSpace: "nowrap", padding: "1rem" }}
                    >
                        {skill.items.map((item, i) => (
                            <span
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    padding: "0.8rem 1.3rem",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: theme.palette.text.primary,
                                    borderRadius: "0.9rem",
                                    margin: "0 10px",
                                    whiteSpace: "nowrap",
                                    boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                                    "&:hover": {
                                        backgroundColor: theme.palette.background.default,
                                        boxShadow: `0.4rem 0.4rem 0px ${theme.palette.shadow.main}`,
                                    },
                                    height: "100%",
                                }}
                            >
                                <Box sx={{
                                    display: "flex", alignItems: "center", justifyItems: "center", flexDirection: "column", fontFamily: "inherit"
                                }}>
                                    <span style={{ color: item.color, fontSize: "2rem" }}>
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </Box>
                            </span>
                        ))}
                    </Marquee>
                </div>
            ))}
        </div>
    );
};

export default Skills;