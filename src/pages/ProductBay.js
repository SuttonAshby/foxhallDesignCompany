import React from 'react';
import ProductPage from '../components/ProductPage';
import dataCarousel from '../dataCarousel.json';
import data from '../productData.json';


const ProductBay = () => {
    return (
        <ProductPage 
        imageOne={dataCarousel.boats[0].image}
        imageTwo={dataCarousel.boats[1].image}
        imageThree={dataCarousel.boats[2].image}
        title="Bay Family"
        about="bla bla blas"
        data={data.boats}
        />
    )
}

export default ProductBay;