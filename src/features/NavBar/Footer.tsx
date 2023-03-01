import * as React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#374785",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Box
                            component="img"
                            sx={{height:'3rem', width:'3rem'}}
                            alt="Site Logo"
                            src="newLogo.png"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        FutureForward
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="white" variant="subtitle1">
                        &copy;{`${new Date().getFullYear()}`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;