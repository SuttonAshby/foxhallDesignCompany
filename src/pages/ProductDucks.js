import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProductDisplay from '../components/ProductDisplay';
import ListItem from '../components/ListItem';
import dataCarousel from '../dataCarousel.json';

const ProductDucks = () => {
    return (
        <div>
        <ProductDisplay 
            imageOne={dataCarousel[0].image}
            imageTwo={dataCarousel[1].image}
            imageThree={dataCarousel[2].image}
            about="bla bla blas"
            />
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
        </Grid>
        <ListItem 
            image={dataCarousel[0].image}/>
        </div>

    )
}

export default ProductDucks;