import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ProductBoats = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography
                    variant="h5"
                    align="left">
                    Historic Chesapeake Bay Wooden Boats    
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

export default ProductBoats;