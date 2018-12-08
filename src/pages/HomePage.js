import React from 'react';
import ProductSplash from '../components/ProductSplash.js';
import data from '../data.js';


const HomePage = (props) => {
    
    const productLines = data.map((lines) => {
        return <ProductSplash 
            key={lines.key}
            id={lines.id}
            image={lines.image}
            title={lines.title}
            blurb={lines.blurb}
            />

    })

    return (
        <div>
            {productLines}
        </div>
    )
}

export default HomePage;