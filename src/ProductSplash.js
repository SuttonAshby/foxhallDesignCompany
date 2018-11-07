import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ProductSplash = (props) => {
    return (
        <Grid container
            justify="center"
            className="splash"
            key={props.key}
            id={props.id}>
            <Grid item xs={6} >
                <img src={props.image} />
            </Grid>
            <Grid item xs={12}>
                <Typography 
                    variant="title"
                    align="center"
                    className="productLine">{props.title}
                </Typography>
                <Typography
                    variant="body1"
                    align="center">{props.blurb}
                </Typography>    
            </Grid>
        </Grid>           
    )
}

export default ProductSplash;