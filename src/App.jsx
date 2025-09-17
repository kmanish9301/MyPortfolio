import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ThemeProviderWrapper from "./Context/ThemeContext.jsx";
import AppRoute from "./Route/AppRoute.jsx";

function App() {
  return (
    <ThemeProviderWrapper>
      <RouterProvider router={AppRoute} />
      <CssBaseline />
    </ThemeProviderWrapper>
  );
}

export default App;
