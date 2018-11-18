import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const AboutPage = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography
                    variant="h5"
                    align="left">
                    About Us    
                </Typography>
                <Typography
                    variant="body1"
                    align="left">
                    Lorum Ipsum
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AboutPage;