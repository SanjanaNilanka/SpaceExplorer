import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
export default function Hero() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
      }}
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
          color="text.secondary"
          sx={{ alignSelf: 'center', width: { sm: '100%', md: '90%' } }}
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
          color="text.secondary"
          sx={{ alignSelf: 'center', width: { sm: '100%', md: '90%' } }}
        >
          Do you want to receive updates, inspiration, marketing promotions and updates
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
    
  );
}
