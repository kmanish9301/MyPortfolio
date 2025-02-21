import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

// Lazy-loaded components
const Home = lazy(() => import("../Components/Home"));
const About = lazy(() => import("../Components/About"));
const Skills = lazy(() => import("../Components/Skills"));
const Experience = lazy(() => import("../Components/Experience"));
const Projects = lazy(() => import("../Components/Projects"));
const Contact = lazy(() => import("../Components/Contact"));

const AppRoute = () => {
    const location = useLocation();
    const hideFooterRoutes = ["/", "/home"];

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "90vh" }}>
                {/* Main Content */}
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>

                {/* Conditionally Render Footer */}
                {!hideFooterRoutes.includes(location.pathname) && <Footer />}
            </div>
        </Suspense>
    );
};

export default AppRoute;
