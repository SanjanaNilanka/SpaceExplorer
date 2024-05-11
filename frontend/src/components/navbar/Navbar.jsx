import { AppBar, Box, Button, Toolbar, Typography, useTheme, Tooltip, Divider, MenuItem, Drawer, Avatar, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import MenuIcon from '@mui/icons-material/Menu'
import { auth, db } from '../../firebase-config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';

const Navbar = ({ onThemeToggle }) => {
  const logoStyle = {
    width: '50px',
    height: 'auto',
    cursor: 'pointer',
  };
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedinFromLocalStorage = localStorage.getItem('isLoggedin');
    if (isLoggedinFromLocalStorage === true || isLoggedinFromLocalStorage === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const [userDetails, setUserDetails] = useState(null)

  const fetchUserDetails = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "User", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
            console.log(docSnap.data());
          } else {
            console.log("User details not found");
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleLogout = () => { 
    try {
      auth.signOut();
      console.log('logout successfully')
      handleClose();
      localStorage.setItem('isLoggedin', false);
      window.location.pathname = '/';
    } catch (err) {
      console.log(err.message);
    }
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              bgcolor:'background.navbar',
              backdropFilter: 'blur(5px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              p: 4.5,
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            
              <Box sx={{ display:'flex', alignItems: 'center', gap: 1 }}>
                <img
                  src={
                    'images/favicon-192.png'
                  }
                  style={logoStyle}
                  alt="logo of sitemark"
                /><Typography sx={{fontFamily:'Arya', fontSize: '24px', color:'primary.main', fontWeight: 700}}>Space Explorer</Typography>
              </Box>
              
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                <MenuItem
                  onClick={() => navigate('/')}
                  sx={{ py: '6px', px: '12px' }}
                  
                >
                  <Typography variant="body2" color="text.primary" sx={{fontWeight: 500, fontSize: 15}}>
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigate('/mrp')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" sx={{fontWeight: 500, fontSize: 15}}>
                    Projects
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigate('/mrp')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" sx={{fontWeight: 500, fontSize: 15}}>
                    Rovers
                  </Typography>
                </MenuItem>
                <MenuItem
                 onClick={() => navigate('/satellites')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" sx={{fontWeight: 500, fontSize: 15}}>
                    Satellites
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigate('/faq')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary" sx={{fontWeight: 500, fontSize: 15}}>
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 0.5,
                  alignItems: 'center',
                  pr: '1%'
                }}
              >
                <Box sx={{ maxWidth: '32px' }}>
                  <Button
                    variant="text"
                    onClick={onThemeToggle}
                    size="small"
                    aria-label="button to toggle theme"
                    sx={{ minWidth: '32px', height: '32px', p: '4px' }}
                  >
                    {theme.palette.mode === 'dark' ? (
                      <WbSunnyRoundedIcon fontSize="small" />
                    ) : (
                      <ModeNightRoundedIcon fontSize="small" />
                    )}
                  </Button>
                </Box>
              {!userDetails ?
                <div>
                  {isLoggedIn?
                  <Box sx={{ml:2}}>
                    <CircularProgress/>
                  </Box>
                  :
                  <Box sx={{display: 'flex', gap: 1}}>
                    <Button
                      color="primary"
                      variant="text"
                      size="small"
                      component="a"
                      href="/sign-in"
                    >
                      Sign in
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      component="a"
                      href="/sign-up"
                    >
                      Sign up
                    </Button>
                  </Box>
                  }
                </div>
                  
                  :
                  <Box sx={{color:'text.primary', display:'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2}}>
                    &nbsp;&nbsp;&nbsp;{userDetails.firstName} {userDetails.lastName}
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                      <Tooltip title="Account settings">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? 'account-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}/>
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={menuOpen}
                      onClose={handleClose}
                      onClick={handleClose}
                      
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                      <Box sx={{backgroundColor:'background.menu', width:'200px', p: '5px 10px'}}>
                        <MenuItem onClick={handleClose}>
                          <Avatar sx={{width: '30px', height:'30px'}}/> &nbsp;&nbsp;&nbsp;Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                          <ListItemIcon>
                            <Settings fontSize="small" />
                          </ListItemIcon>
                          Settings
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </Box>
                      
                    </Menu>
                  </Box>
                }
              </Box> 
              
              
            
            
             
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.default',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <Box sx={{ maxWidth: '32px' }}>
                      <Button
                        variant="text"
                        onClick={onThemeToggle}
                        size="small"
                        aria-label="button to toggle theme"
                        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
                      >
                        {theme.palette.mode === 'dark' ? (
                          <WbSunnyRoundedIcon fontSize="small" />
                        ) : (
                          <ModeNightRoundedIcon fontSize="small" />
                        )}
                      </Button>
                    </Box>
                  </Box>
                  <MenuItem onClick={() => scrollToSection('features')}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>
                    Projects
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>
                    Rovers
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('pricing')}>
                    Satellites
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  )
}

export default Navbar;