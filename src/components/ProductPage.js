import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel';
import ListItem from './ListItem';

//Used to generate product pages.

const styles = {
    page:{
        paddingLeft: "10vw",
        paddingRight: "10vw",       
    }
}


const ProductPage = (props) => {

    const listItems = props.data.map((item) => {
        return <ListItem 
            key={item.key}
            id={item.id}
            image={item.image}
            title={item.title}
            bullets={item.bullets}
            />

    })

    return (
        <div>
            <Carousel 
                imageOne={props.imageOne}
                imageTwo={props.imageTwo}
                imageThree={props.imageThree} /> 
            <Grid container style={styles.page}>           
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom>
                        {props.title}   
                    </Typography>
                    <Typography
                        variant="h6"
                        align="justify"
                        gutterBottom>
                        {props.about}
                    </Typography>
                     <Typography
                        variant="h5"
                        align="center"
                        gutterBottom>
                        <strong>For more Information Please Contact Us</strong>  
                    </Typography>
                </Grid>            
            </Grid>
            {listItems}
        </div>

    )  
};

export default ProductPage;