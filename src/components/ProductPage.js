import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel';
import ListItem from './ListItem';


const ProductPage = (props) => {

    const listItems = props.data.map((item) => {
        return <ListItem 
            key={item.key}
            id={item.id}
            image={item.image}
            title={item.title}
            blurb={item.blurb}
            />

    })

    return (
        <div>
            <Carousel 
                imageOne={props.imageOne}
                imageTwo={props.imageTwo}
                imageThree={props.imageThree} /> 
            <Grid container>           
                <Grid item item xs={12}>
                    <Typography
                        variant="h5"
                        align="left">
                        {props.title}   
                    </Typography>
                    <Typography
                        variant="body1"
                        align="left">
                        {props.about}
                    </Typography>
                </Grid>
            </Grid>
            {listItems}
        </div>

    )  
};

export default ProductPage;