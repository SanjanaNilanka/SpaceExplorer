import { Box, Button, Typography, alpha, Link, Stack, TextField } from '@mui/material'
import React, {useEffect, useState} from 'react'
 
import { auth, db } from '../../firebase-config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function HeroWithCover() {
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
  return (
    <Box>
      <Box
        id="image"
        sx={(theme) => ({
        mt: { xs: 4, sm: 4 },
        alignSelf: 'center',
        height: '100vh',
        backgroundImage:
            theme.palette.mode === 'light'
            ? 'url("/images/cover1.jpg")'
            : 'url("/images/cover1.jpg")',
        backgroundSize: 'cover',
        
        })}
      >
        <Box
          sx={(theme) => ({
            width: '100%',
            height: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
               ? `linear-gradient(${alpha('#fff', 1)}, ${alpha('#fff', 0.5)}, ${alpha('#fff', 1)})`
                : `linear-gradient(${alpha('#090e10', 1)}, ${alpha('#090e10', 0.5)}, ${alpha('#090e10', 1)})`,
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: '20px', sm: '6%',}
          })}
        >
           
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                            marginBottom: '20px',
                        }}
                    >
                        Explore the&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                            fontSize: 'clamp(3rem, 10vw, 4rem)',
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            Universe
                        </Typography>
                    </Typography>
                    <Typography
                        textAlign="center"
                        
                          sx={{
                              alignSelf: 'center',
                              width: { sm: '100%', md: '90%' },
                              fontWeight: (theme) =>
                                theme.palette.mode === 'light' ? '500' : '',
                          }}
                    >
                        Explore the Space invites you on an exhilarating journey through the cosmos with daily updates from NASA's public APIs.
                        Delve into a treasure trove of information, images, and data that showcase the wonders of space exploration,
                        from breathtaking celestial visuals to the latest discoveries and missions.
                        Whether you're intrigued by distant galaxies, fascinated by planetary exploration,
                        or curious about space science and technology,
                        our platform offers a rich array of content to satisfy your cosmic curiosity.
                        Stay informed, inspired, and connected with the universe, all in one place.
                        
                    </Typography>
                    <Typography
                      textAlign="center"
                      color="text.primary"
                      sx={{ alignSelf: 'center', width: { sm: '100%', md: '90%' }, mb: -2, mt:2 }}
                    >
                      If you want to receive our new updates, Click "Start now" button.
                    </Typography>
                    <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignSelf="center"
                    spacing={1}
                    useFlexGap
                    sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                    >
                    <TextField
                      id="outlined-basic"
                      hiddenLabel
                      size="small"
                      variant="outlined"
                      aria-label="Enter your email address"
                      placeholder="Your email address"
                      inputProps={{
                        autocomplete: 'off',
                        ariaLabel: 'Enter your email address',
                        
                      }}
                      value={userDetails? userDetails.email : ''}
                    />
                    <Button variant="contained" color="primary">
                        Start now
                    </Button>
                    </Stack>
                    <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                    By clicking &quot;Start now&quot; you agree to our&nbsp;
                    <Link href="#" color="primary">
                        Terms & Conditions
                    </Link>
                    .
                    </Typography>
                </Stack>
               
        </Box>
      </Box>
    </Box>
  )
}
