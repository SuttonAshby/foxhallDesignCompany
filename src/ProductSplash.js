import React from 'react';
import Typography from '@material-ui/core/Typography';

const ProductSplash = (props) => {
    return (
        <div
            className="splash"
            key={props.key}
            id={props.id}>
        <img 
            align="center"
            src={props.image} />
        <Typography 
            variant="title"
            align="center"
            className="productLine">{props.title}</Typography>
        <Typography
            variant="body1"
            align="center">{props.blurb}</Typography>    
        </div>
            
    )
}

export default ProductSplash;