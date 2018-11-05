import React from 'react';

const ProductSplash = (props) => {
    return (
        <div
            className="splash"
            key={props.key}
            id={props.id}>
        <img src={props.image} />
        <h1 className="productLine">{props.title}</h1>
        <p>{props.blurb}</p>    
        </div>
            
    )
}

export default ProductSplash;