import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ImageCarousel from './ImageCarousel';

const ProductDisplay = (props) => {
      <Grid container>
        <Grid item xs="12">
            <ImageCarousel />
        </Grid>
            
        <Grid item xs="12">
        <Typography>
                {props.about}
            </Typography>
        </Grid>
      </Grid>  
}

export default ProductDisplay