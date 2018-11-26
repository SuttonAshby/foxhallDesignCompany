import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TestDiv from '../components/TestDiv';


const ProductChesapeake = () => {
    return (
        <Grid container>
            <Grid item>
            <TestDiv />
                <Typography
                    variant="h5"
                    align="left">
                    Chesapeake Country    
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

export default ProductChesapeake;