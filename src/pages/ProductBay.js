import React from 'react';
import ProductPage from '../components/ProductPage';
import dataCarousel from '../dataCarousel.json';
import data from '../productData.json';


const ProductBay = () => {
    return (
        <ProductPage 
        imageOne={dataCarousel.bay[0].image}
        imageTwo={dataCarousel.bay[1].image}
        imageThree={dataCarousel.bay[2].image}
        title="Bay Family"
        about="bla bla blas"
        data={data.bay}
        />
    )
}

export default ProductBay;