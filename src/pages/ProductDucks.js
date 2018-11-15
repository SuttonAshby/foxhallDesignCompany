import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProductDisplay from '../components/ProductDisplay';

const ProductDucks = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography
                    variant="h5"
                    align="left">
                    Ducks of America    
                </Typography>
                <Typography
                    variant="body1"
                    align="left">
                    Lorum Ipsum
                </Typography>
            </Grid>
            <Grid item>
            <ProductDisplay about="bla bla" />
            </Grid>
        </Grid>
    )
}

export default ProductDucks;