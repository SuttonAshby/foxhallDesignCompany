import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

/* for use on home page to display each product line
accepts props for image, title, and blurb */ 
const ProductSplash = (props) => {

    const styles = {
        divImg: {
            backgroundImage:  `url(${props.image})`,
            height: "50vh",
            width: "100vw",
            maxWidth: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
        },
        page:{
            paddingLeft: "10vw",
            paddingRight: "10vw",
            textDecoration: 'none'            
        }
      };

    return (
        <Grid container
            style={styles.page}
            justify="center"
            className="splash"
            key={props.key}
            id={props.id}
            component={props.link}>
            <Grid item sm={12} >
                <div style={styles.divImg} />
            </Grid>
            <Grid item sm={12}>
                <Typography 
                    variant="h4"
                    align="center"
                    gutterBottom
                    className="productLine">{props.title}
                </Typography>
                <Typography
                    variant="h6"
                    align="center">{props.blurb}
                </Typography>    
            </Grid>
        </Grid>           
    )
}

export default ProductSplash;