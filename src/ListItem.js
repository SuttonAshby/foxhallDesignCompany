//Used to display every product in a product line
//includes image and bullet points

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ListItem = (props) => {
    <Grid container>
        <Grid item xs={3}>
        <img src="" />
        </Grid>
        <Grid item xs={9}>
        <Typography>
                Bullet Points
        </Typography>
        </Grid>
    </Grid>
}

export default ListItem