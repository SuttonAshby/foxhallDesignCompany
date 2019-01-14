import React from 'react';
import ProductPage from '../components/ProductPage';
import dataCarousel from '../dataCarousel.json';
import data from '../productData.json';
import splash from '../data.js'


const ProductBoats = () => {
    return (
        <ProductPage 
        imageOne={dataCarousel.boats[0].image}
        imageTwo={dataCarousel.boats[1].image}
        imageThree={dataCarousel.boats[2].image}
        title="Historic Chesapeake Bay Wooden Boats"
        about={splash[1].blurb}
        data={data.boats}
        />
    )
}

export default ProductBoats;