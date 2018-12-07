import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel';

const ProductDisplay = (props) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Carousel 
                    imageOne={props.imageOne}
                    imageTwo={props.imageTwo}
                    imageThree={props.imageThree} />
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