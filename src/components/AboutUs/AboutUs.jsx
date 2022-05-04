import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
     <main>
        {/* Hero unit */}
        
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            // display: 'flex',
            // flexContainer: 'row'

          }}
>
          <Paper sx={{ m: 3 }} elevation={24}>
      <Grid container spacing={8}>
        <Grid item xs={6}></Grid>
        <img
            alt=""
            style={{ maxWidth: '100%' }}
          />
        </Grid>
        <Grid item xs={6}></Grid>

          <Container  sx={{ display: 'flex', maxWidth: '100%', justifyContent: 'space-between' }}>
              
          <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
             
            >
              Creative and renovate fashion trends
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI
            </Typography>
            </Typography>
                <CardMedia
                    component="img"
                    height='470'
                    width='470'
                    image="https://demo.xpeedstudio.com/marketov2/home4/wp-content/uploads/sites/4/2018/05/about_us_img_11.png"
                    alt="JAWS"
                />
            <Stack
              sx={{ pt: 8 }}
              // direction="row"
              spacing={6}
              justifyContent="center"
            >
            </Stack>
            </Container>
            </Paper>
          </Box>

          <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            // display: 'flex',
            // flexContainer: 'row'

          }}
>
          <Paper sx={{ m: 3 }} elevation={24}>
      <Grid container spacing={8}>
        <Grid item xs={6}></Grid>
        <img
            alt=""
            style={{ maxWidth: '100%' }}
          />
        </Grid>
        <Grid item xs={6}></Grid>

          <Container  sx={{ display: 'flex', maxWidth: '100%', justifyContent: 'space-between' }}>
                <CardMedia
                    component="img"
                    height='470'
                    width='470'
                    image="https://demo.xpeedstudio.com/marketov2/home4/wp-content/uploads/sites/4/2018/05/about_us_img_21.png"
                    alt="JAWS"
                />
              
          <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
             
            >
              We are marketpress
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.

                VISION
                Credibly innovate granular internal
                Grantedly underconstructions reloaded
                Interactively procrastinate high-payoff
                Completely synergize resource taxing relationships
            </Typography>
            </Typography>
            <Stack
              sx={{ pt: 8 }}
              // direction="row"
              spacing={6}
              justifyContent="center"
            >
            </Stack>
            </Container>
            </Paper>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://avatars.mds.yandex.net/get-zen_doc/5262999/pub_618bcc2b2543ca3458b691a6_618bcc5b2d5fe804ba2c7860/scale_1200"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>

        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}

        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}