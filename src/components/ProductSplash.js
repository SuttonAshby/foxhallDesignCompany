import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Background from '../images/logo.jpg'


// const styles = {
//     divImg: {
//         // backgroundImage: `url(${Background})`,
//         height: "50vh",
//         width: "100vw",
//     }
//   };

const ProductSplash = (props) => {

    const styles = {
        divImg: {
            // backgroundImage: `url(${Background})`,
            backgroundImage:  `url(${props.image})`,
            height: "50vh",
            width: "100vw",
        }
      };



    console.log(props.image)
    const splash = {
        image: {
            backgroundImage: `url(${Background})`,
            // backgroundImage:  `url(${props.image})`
        }
    }
    return (
        <Grid container
            justify="center"
            className="splash"
            key={props.key}
            id={props.id}>
            <Grid item sm={6} >
                <div style={styles.divImg} />
                {/* <img width="100%" src={props.image} /> */}
            </Grid>
            <Grid item sm={12}>
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