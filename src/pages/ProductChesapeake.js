import React from 'react';
import ProductPage from '../components/ProductPage';
import dataCarousel from '../dataCarousel.json';
import data from '../productData.json';
import splash from '../data.js'


const ProductChesapeake = () => {
    return (
        <ProductPage 
            imageOne={dataCarousel.chesapeake[0].image}
            imageTwo={dataCarousel.chesapeake[1].image}
            imageThree={dataCarousel.chesapeake[2].image}
            title="Chesapeake Country"
            about={splash[2].blurb}
            data={data.chesapeake}
            />
    )
}

export default ProductChesapeake;