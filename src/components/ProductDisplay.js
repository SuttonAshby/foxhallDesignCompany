import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ImageCarousel from './ImageCarousel';
import StepperCarousel from './StepperCarousel';
import Carousel from './Carousel';

 

const ProductDisplay = (props) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Carousel />
            </Grid>            
            <Grid item xs={12}>
                <Typography>
                        {props.about}
                </Typography>
            </Grid>
      </Grid>
    )  
}

export default ProductDisplay;