import React from 'react';
import dataCarousel from '../dataCarousel.json';
import ProductPage from '../components/ProductPage';
import data from '../productData.json';
// import data from '../productDataTest.json';
import splash from '../data.js'

const ProductDucks = () => {
    return (
        <ProductPage 
            imageOne={dataCarousel.ducks[0].image}
            imageTwo={dataCarousel.ducks[1].image}
            imageThree={dataCarousel.ducks[2].image}
            title="Ducks of America"
            about={splash[0].blurb}
            data={data.ducks}
            />
    )
}

export default ProductDucks;