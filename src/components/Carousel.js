import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = (props) => {

    const styles = {
        slide: {
          height: "50vh",
          width: "100vw",
          maxWidth: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        },
        slide1: {
          backgroundImage:  `url(${props.imageOne})`,
        },
        slide2: {
          backgroundImage:  `url(${props.imageTwo})`,
        },
        slide3: {
          backgroundImage:  `url(${props.imageThree})`,
        },
      };

    return (
        <AutoPlaySwipeableViews
        disabled={true}
        interval={7000}>
          <div style={Object.assign({}, styles.slide, styles.slide1)} />
          <div style={Object.assign({}, styles.slide, styles.slide2)} />
          <div style={Object.assign({}, styles.slide, styles.slide3)} />
        </AutoPlaySwipeableViews>
    )
}
    




export default Carousel;