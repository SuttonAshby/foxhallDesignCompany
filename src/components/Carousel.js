import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MediaCard from '../components/MediaCardTest';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Carousel extends React.Component { 

    state = {
        activeStep: 0
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
                    {dataCarousel.map((step, index) => (
                        <div key={step.key}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} 
                                src={step.image}
                                alt={step.key} 
                                />
                            ) : null}
                        </div>
                    ))}
                    </AutoPlaySwipeableViews>
                </Grid>
            </Grid>
        )
    }  
}