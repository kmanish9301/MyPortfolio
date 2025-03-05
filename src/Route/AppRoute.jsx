import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

// Lazy-loaded components
const Home = lazy(() => import("../Components/Home"));
const About = lazy(() => import("../Components/About"));
const Projects = lazy(() => import("../Components/Projects"));

const AppRoute = () => {
    const location = useLocation();
    const hideFooterRoutes = ["/", "/home"];

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                {/* Main Content */}
                <div style={{ flex: 1, marginTop: "4rem", marginBottom: "4rem" }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>

                {/* Conditionally Render Footer */}
                {!hideFooterRoutes.includes(location.pathname) && <Footer />}
            </div>
        </Suspense>
    );
};

export default AppRoute;
