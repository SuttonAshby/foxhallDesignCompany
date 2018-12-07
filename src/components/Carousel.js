import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import dataCarousel from '../dataCarousel.json';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    height: "50vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  slide1: {
    backgroundImage:  `url(${dataCarousel[0].image})`,
  },
  slide2: {
    backgroundImage:  `url(${dataCarousel[1].image})`,
  },
  slide3: {
    backgroundImage:  `url(${dataCarousel[2].image})`,
  },
};

const Carousel = (props) => {

    const styles = {
        slide: {
          height: "50vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        },
        slide1: {
          backgroundImage:  `url(${dataCarousel[0].image})`,
        },
        slide2: {
          backgroundImage:  `url(${dataCarousel[1].image})`,
        },
        slide3: {
          backgroundImage:  `url(${dataCarousel[2].image})`,
        },
      };

    return (
        <AutoPlaySwipeableViews
        interval={7000}>
          <div style={Object.assign({}, styles.slide, styles.slide1)} />
          <div style={Object.assign({}, styles.slide, styles.slide2)} />
          <div style={Object.assign({}, styles.slide, styles.slide3)} />
        </AutoPlaySwipeableViews>
    )
}
    




export default Carousel;