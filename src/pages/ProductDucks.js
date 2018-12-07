import React from 'react';
import dataCarousel from '../dataCarousel.json';
import ProductPage from '../components/ProductPage';
import data from '../data.json';

const ProductDucks = () => {
    return (
        <ProductPage 
            imageOne={dataCarousel.ducks[0].image}
            imageTwo={dataCarousel.ducks[1].image}
            imageThree={dataCarousel.ducks[2].image}
            title="Ducks of America"
            about="bla bla blas"
            data={data}boatsducks
            />
    )
}

export default ProductDucks;