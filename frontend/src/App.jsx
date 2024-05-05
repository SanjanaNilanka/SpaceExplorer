import * as React from 'react';
import {useEffect} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import { CssBaseline } from '@mui/material';
import getCustomTheme from './customTheme';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import MRPHome from './components/mrp/MRPHome';
import Error404 from './components/404/Error404';
import AllMRP from './components/mrp/AllMRP';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


/*const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === 'dark' && {
        main: "#105bd8",
      }),
      ...(mode === 'light' && {
        main: "#105bd8",
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
        navbar: "rgb(0, 0, 0, 0.8)"
      },
    }),
    ...(mode === 'light' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
        navbar: "rgb(255, 255, 255, 0.8)"
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});*/





const App = () => {
  const [themeMode, setThemeMode] = React.useState('light')
  const currentTheme = createTheme(getCustomTheme(themeMode),);

  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem('theme');
    if (themeFromLocalStorage) {
      setThemeMode(themeFromLocalStorage);
    } else {
      setThemeMode('light');
    }
  }, []);
  
  //const theme = useTheme();
  const toogleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark')
      localStorage.setItem('theme', 'dark');
    } else {
      setThemeMode('light')
      localStorage.setItem('theme', 'light');
    }
    
  }
  
  const [is404, setIs404] = React.useState(false);
  //const currentLocation = window.location.pathname;
  useEffect(() => {
    const currentLocation = window.location.pathname;
    if (currentLocation === '/') {
      setIs404(false)
    } else if (currentLocation === '/mrp-home') {
      setIs404(false)
    } else if (currentLocation === '/mrp') {
      setIs404(false)
    } else {
      setIs404(true)
    }

  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <header>
          {is404? <div></div> : <Navbar onThemeToggle={toogleTheme} />}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/mrp-home" element={<MRPHome/>} />
            <Route path="/mrp" element={<AllMRP/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="*" element={<Error404/>} />
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </ThemeProvider>
  );
}

export default App;