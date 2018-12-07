import React from 'react';
import dataCarousel from '../dataCarousel.json';
import ProductPage from '../components/ProductPage';
import data from '../data.json';

const ProductDucks = () => {
    return (
        <ProductPage 
            imageOne={dataCarousel[0].image}
            imageTwo={dataCarousel[1].image}
            imageThree={dataCarousel[2].image}
            title="Ducks of America"
            about="bla bla blas"
            data={data}
            />
    )
}

export default ProductDucks;