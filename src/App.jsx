import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import ThemeProviderWrapper from './Context/ThemeContext.jsx';
import AppRoute from './Route/AppRoute.jsx';

function App() {
  return (
    <ThemeProviderWrapper>
      <Router>
        <Navbar />
        <AppRoute />
      </Router>

      <CssBaseline />
    </ThemeProviderWrapper>
  )
}

export default App  
