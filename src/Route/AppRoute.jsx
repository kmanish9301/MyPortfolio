import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Lazy-loaded components
const Home = lazy(() => import("../Components/Home"));
const About = lazy(() => import("../Components/About"));
const Projects = lazy(() => import("../Components/Projects"));

const AppLayout = () => {
    const hideFooterRoutes = ["/", "/home"];
    const currentPath = window.location.pathname;

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            {/* Main Content */}
            <div style={{ flex: 1, marginTop: "4rem" }}>
                <Outlet />
            </div>
            {/* Conditionally Render Footer */}
            {!hideFooterRoutes.includes(currentPath) && <Footer />}
        </div>
    );
};

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <AppLayout />
            </Suspense>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "home", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
        ],
    },
]);

export default AppRoute;