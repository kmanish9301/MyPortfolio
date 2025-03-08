import MML from "../assets/MakeMyLabs.png";
import Techademy from "../assets/TechademyCampus.png";
import VelocitySector from "../assets/VelocitySector.png";

export const navLinkData = [
    { id: 1001, title: "HOME", link: "home" },
    { id: 1002, title: "ABOUT ME", link: "about" },
    { id: 1003, title: "PROJECTS", link: "projects" },
];

export const projectData = [
    {
        name: "Make My Labs (MML)",
        description: [
            { id: 1, text: "Developed a cloud-based workspace management UI that provides seamless access to AWS, Azure, and GCP labs, enabling real-time VM operations and status tracking." },
            { id: 2, text: "Implemented custom UI components based on client requirements, improving usability and efficiency." },
            { id: 3, text: "Optimized authentication workflows by integrating workspace and AAD login URLs for SSO authentication." },
            { id: 4, text: "Developed a skip-login feature, allowing on-demand access via ODL URLs for an improved user experience." },
            { id: 5, text: "Designed and deployed a request management system, streamlining lab access and enhancing workflow efficiency." }
        ],
        image: MML,
        tech: ["React.js", "Redux", "Redux-Saga", "JavaScript", "AntDesign", "Git", "GitHub", "Jira"]
    },
    {
        name: "Techademy Campus (B2A)",
        description: [
            { id: 1, text: "Developed and integrated the User Management UI, implementing APIs for seamless onboarding and role-based access control(RBAC) to manage user permissions" },
            { id: 2, text: "Customized project themes based on client requirements, enhancing accessibility and visual consistency." },
            { id: 3, text: "Designed role-based dashboards with graphical reports and analytics, improving data visualization and user engagement." },
            { id: 4, text: "Optimized performance and scalability, resolving dashboard responsiveness issues for a smoother user experience." },
        ],
        image: Techademy,
        tech: ["React.js", "Redux", "Redux-Saga", "JavaScript", "Material UI", "Git", "Github", "Jira"]
    },
    {
        name: "Velocity Sector",
        description: [
            { id: 1, text: "A dynamic vehicle management platform built using the MERN stack." },
            { id: 2, text: "Integrated JWT authentication with role-based access control (RBAC) for secure user management" },
            { id: 3, text: "Implemented real-time email notifications using Nodemailer for user onboarding and inquiries" },
            { id: 4, text: "Optimized data fetching with Axios and managed global state using Redux" },
        ],
        image: VelocitySector,
        tech: [
            "React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Redux-Saga", "JWT", "RESTful APIs", "Axios", "Nodemailer",
            "Postman", "JavaScript", "Material UI", "Git", "Github", "Render (Deployment)"
        ],
        demo: "https://mern-project-frontend-l3zc.onrender.com/",
        github: "https://github.com/kmanish9301/MERN_PROJECT"
    },
]