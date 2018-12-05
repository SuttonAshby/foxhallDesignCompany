import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MediaCard from '../components/MediaCardTest';
import dataCarousel from '../dataCarousel.json';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
    root: {
    //   maxWidth: 400,
      flexGrow: 1,
      maxWidth: '100vw'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      height: 50,
      paddingLeft: theme.spacing.unit * 4,
      backgroundColor: theme.palette.background.default,
    },
    img: {
    //   height: 1000,
      display: 'block',
      maxWidth: "100%",
      overflow: 'hidden',
      width: '100%',
    },
    divImg: {
        // backgroundImage:  `url(${props.image})`,
        height: "50vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
    }
  });

class Carousel extends React.Component {

    state = {
        activeStep: 0,
        styles: {
            divImg: {
                backgroundImage:  `url(${dataCarousel[0].image})`,
                height: "50vh",
                width: "100vw",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
            }
          }
    }

    handleNext = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep + 1,
        }));
      };
    
      handleBack = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep - 1,
        }));
      };
    
      handleStepChange = activeStep => {
        this.setState({ activeStep });
      };
    
      render() {
        const { classes, theme } = this.props;
        const {activeStep} = this.state;
        const maxSteps = dataCarousel.length

        return (
            <Grid container className={classes.root}>
                <Grid item>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                        interval={7000}
                    >
                    {dataCarousel.map((index) => (
                        console.log(dataCarousel[index])
                    ))}
                    {/* {dataCarousel.map((step, index) => (
                        <div key={step.key}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} 
                                src={step.image}
                                alt={step.key} 
                                />
                            ) : null}
                        </div>
                    ))} */}

                    </AutoPlaySwipeableViews>
                </Grid>
            </Grid>
        )
    }  
}

export default withStyles(styles, { withTheme: true })(Carousel);