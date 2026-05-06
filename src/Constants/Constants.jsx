import ECommerce from "../assets/e-commerce.png";
import MML from "../assets/MakeMyLabs.png";
import Portfolio from "../assets/Portfolio.png";
import Techademy from "../assets/TechademyCampus.png";
import VelocitySector from "../assets/VelocitySector.png";
import AIInterview from "../assets/AIInterviewSimulator.png";
import { getExperience } from "../Utils/timeUtils";

export const navLinkData = [
  { id: 1001, title: "HOME", link: "home" },
  { id: 1002, title: "ABOUT ME", link: "about" },
  { id: 1003, title: "PROJECTS", link: "projects" },
];

export const projectData = [
  {
    name: "Make My Labs (MML)",
    description: [
      {
        id: 1,
        text: "Developed a cloud-based workspace management UI that provides seamless access to AWS, Azure, and GCP labs, enabling real-time VM operations and status tracking.",
      },
      {
        id: 2,
        text: "Implemented custom UI components based on client requirements, improving usability and efficiency.",
      },
      {
        id: 3,
        text: "Optimized authentication workflows by integrating workspace and AAD login URLs for SSO authentication.",
      },
      {
        id: 4,
        text: "Developed a skip-login feature, allowing on-demand access via ODL URLs for an improved user experience.",
      },
      {
        id: 5,
        text: "Designed and deployed a request management system, streamlining lab access and enhancing workflow efficiency.",
      },
    ],
    image: MML,
    tech: [
      "React.js",
      "Redux",
      "Redux-Saga",
      "JavaScript",
      "AntDesign",
      "Git",
      "GitHub",
      "Jira",
    ],
  },
  {
    name: "Techademy Campus (B2A)",
    description: [
      {
        id: 1,
        text: "Developed and integrated the User Management UI, implementing APIs for seamless onboarding and role-based access control(RBAC) to manage user permissions",
      },
      {
        id: 2,
        text: "Customized project themes based on client requirements, enhancing accessibility and visual consistency.",
      },
      {
        id: 3,
        text: "Designed role-based dashboards with graphical reports and analytics, improving data visualization and user engagement.",
      },
      {
        id: 4,
        text: "Optimized performance and scalability, resolving dashboard responsiveness issues for a smoother user experience.",
      },
    ],
    image: Techademy,
    tech: [
      "React.js",
      "Redux",
      "Redux-Saga",
      "JavaScript",
      "Material UI",
      "Git",
      "Github",
      "Jira",
    ],
  },
  {
    name: "Velocity Sector",
    description: [
      {
        id: 1,
        text: "A dynamic vehicle management platform built using the MERN stack.",
      },
      {
        id: 2,
        text: "Integrated JWT authentication with role-based access control (RBAC) for secure user management",
      },
      {
        id: 3,
        text: "Implemented real-time email notifications using Nodemailer for user onboarding and inquiries",
      },
      {
        id: 4,
        text: "Optimized data fetching with Axios and managed global state using Redux",
      },
    ],
    image: VelocitySector,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Redux-Saga",
      "JWT",
      "RESTful APIs",
      "Axios",
      "Nodemailer",
      "Postman",
      "JavaScript",
      "Material UI",
      "Git",
      "Github",
      "Render (Deployment)",
    ],
    demo: "https://mern-project-frontend-l3zc.onrender.com/",
    github: "https://github.com/kmanish9301/MERN_PROJECT",
  },
  {
    name: "AI Interview Simulator",
    description: [
      {
        id: 1,
        text: "Architected and deployed an AI-powered MERN platform for technical interview simulation with real-time evaluation and AI-driven feedback generation.",
      },
      {
        id: 2,
        text: "Integrated Groq Llama 3.1 API to dynamically generate technical interview questions and automated answer analysis, reducing manual evaluation effort by ~80%.",
      },
      {
        id: 3,
        text: "Implemented secure JWT Authentication and protected routing mechanisms for secure session management and API access.",
      },
      {
        id: 4,
        text: "Containerized frontend and backend applications using Docker multi-stage builds and deployed on AWS EC2 with Nginx reverse proxy configuration.",
      },
      {
        id: 5,
        text: "Engineered automated CI/CD pipelines using GitHub Actions and self-hosted EC2 runners, reducing deployment time by ~70%.",
      },
    ],
    image: AIInterview,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Docker",
      "AWS EC2",
      "Nginx",
      "GitHub Actions",
      "Groq API",
      "JWT",
    ],
    demo: "http://35.175.203.5",
    github: "https://github.com/kmanish9301/ai-interview-simulator",
  },
  {
    name: "Personal Portfolio",
    description: [
      {
        id: 1,
        text: `🚀 Frontend Developer with ${getExperience("2023-01-19")} years of professional experience, skilled in building scalable, interactive, and user-friendly web applications.`,
      },
      {
        id: 2,
        text: "🎯 Strong expertise in React.js, JavaScript (ES6+), Redux, and UI frameworks, with hands-on experience in backend integration and deployment.",
      },
    ],
    image: Portfolio,
    tech: [
      "React.js",
      "JavaScript(ES6+)",
      "Material UI",
      "Git",
      "Github",
      "VS Code IDE",
      "Render (Deployment)",
    ],
    demo: "https://mk-portfolio-6dh2.onrender.com/",
    github: "https://github.com/kmanish9301/MyPortfolio",
  },
  {
    name: "E-Commerce Platform",
    description: [
      {
        id: 1,
        text: "Developed a scalable full-stack e-commerce application, implementing RESTful APIs for product management, user registration, and secure JWT-based authentication.",
      },
      {
        id: 2,
        text: "Customized a multi-theme UI system supporting 5 dynamic modes (Light, Dark, OLED, etc.) using native CSS variables and React Context, enhancing accessibility and visual customization.",
      },
      {
        id: 3,
        text: "Designed a responsive dashboard layout with a collapsible sidebar and interactive header, improving navigation and user engagement across devices",
      },
      {
        id: 4,
        text: "Optimized data modeling and relational queries using PostgreSQL and Sequelize ORM to efficiently manage user profiles, products, and shopping interactions.",
      },
      {
        id: 5,
        text: (
          <span>
            🚀 Test drive the platform! Log in with Username:{" "}
            <code
              style={{
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                padding: "2px 6px",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
            >
              manishkharbade@gmail.com
            </code>{" "}
            and Password:{" "}
            <code
              style={{
                backgroundColor: "rgba(128, 128, 128, 0.2)",
                padding: "2px 6px",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
            >
              manish
            </code>{" "}
            to explore the live demo.
          </span>
        ),
      },
    ],
    image: ECommerce,
    tech: [
      "React.js",
      "JavaScript(ES6+)",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize (ORM)",
      "Tailwind CSS",
      "JSON Web Tokens (JWT)",
      "React Context API",
      "Material UI",
      "Git",
      "Github",
      "VS Code IDE",
      "Render (Deployment)",
    ],
    demo: "https://e-commerse-client.onrender.com/login",
    github: "https://github.com/kmanish9301/E-Commerse",
  },
];
