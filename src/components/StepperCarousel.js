import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import dataCarousel from '../dataCarousel.json';
import { Grid, createMuiTheme } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing.unit * 4,
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
    },
  });

class StepperCarousel extends React.Component {

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
            <Grid container >
                <Grid item>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >
                    {dataCarousel.map((step, index) => (
                        <div key={step.key}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} 
                                src={step.image}
                                alt={step.key} />     
                            ) : null}
                        </div>
                    ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        className={classes.mobileStepper}
                        />
                </Grid>
            </Grid>
        )
    }
}

StepperCarousel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(StepperCarousel);