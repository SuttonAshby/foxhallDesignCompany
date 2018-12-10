import React from 'react';
import ProductPage from '../components/ProductPage';
import dataCarousel from '../dataCarousel.json';
import data from '../productData.json';


const ProductChesapeake = () => {
    return (
        <ProductPage 
            imageOne={dataCarousel.chesapeake[0].image}
            imageTwo={dataCarousel.chesapeake[1].image}
            imageThree={dataCarousel.chesapeake[2].image}
            title="Chesapeake Country"
            about="bla bla blas"
            data={data.chesapeake}
            />
    )
}

export default ProductChesapeake;