import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <footer>
      <Box px={{ xs: 4, sm: 10 }} py={{ xs: 6, sm: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={3} sm={3}>
              <img
                id="logo"
                src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/logo_3.png"
                alt=""
              />
              <Grid pt={5}>
                <Typography variant="h6" sx={{ color: '#9999A6' }}>
                  Got Question? Call us 24/7
                </Typography>
                <Typography variant="h6">[80] 1017 197</Typography>
                <Typography
                  variant="body1"
                  py={{ xs: 2 }}
                  sx={{ color: '#9999A6', fontSize: '12px' }}
                >
                  <i>17 Princess Road, London, Greater London NW1 8JR, UK</i>
                </Typography>

                <Button
                  sx={{
                    '&:hover': {
                      backgroundColor: 'yellowgreen',
                    },
                  }}
                  variant="contained"
                  size="large"
                  startIcon={<LocationOnIcon />}
                >
                  View on map
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Grid pt={3} mt={5}>
                <Typography variant="h6" sx={{ color: '#9999A6' }}>
                  We Using
                </Typography>
                <Typography variant="h6">Safe Payments</Typography>
                <Grid py={3}>
                  <img
                    style={{ marginRight: '15px' }}
                    src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/skril-1.png"
                    alt=""
                  />
                  <img
                    style={{ marginRight: '15px' }}
                    src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/palypal-1.png"
                    alt=""
                  />
                  <img
                    style={{ marginRight: '15px' }}
                    src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/american_express-1.png"
                    alt=""
                  />
                </Grid>
                <Typography variant="body1" py={{ xs: 1 }}>
                  <b>Secured by:</b>
                </Typography>
                <img
                  style={{ marginRight: '20px' }}
                  src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/norton_av_logo1.png"
                  alt=""
                />
                <img
                  style={{ marginRight: '20px' }}
                  src="https://demo.xpeedstudio.com/marketo/wp-content/uploads/2020/06/mcAfee_logo1.png"
                  alt=""
                />
              </Grid>
            </Grid>

            <Grid
              item
              px={5}
              xs={3}
              sm={3}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Typography variant="h6">Quick Links</Typography>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Support Center
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Term & Conditions
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Shipping
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Privacy Policy
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Help
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Products Return
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                FAQS
              </Link>
            </Grid>
            <Grid
              item
              pr={5}
              xs={3}
              sm={3}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Typography variant="h6">Our Stores</Typography>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                New York
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                London SF
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Cockfosters BP
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Los Angeles
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Chicago
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Las Vegas
              </Link>
              <Link
                variant="body1"
                py={{ xs: 1 }}
                sx={{ color: '#9999A6' }}
                href="#"
                color="inherit"
                underline="hover"
              >
                Albarto
              </Link>
            </Grid>
          </Grid>
        </Container>
        <Box
          textAlign="start"
          sx={{ color: '#9999A6' }}
          variant="body2"
          pt={{ xs: 5, sm: 10 }}
          pb={{ xs: 5, sm: 0 }}
        >
          &reg; {new Date().getFullYear()} XpeedStudio All Rights Reserved
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
