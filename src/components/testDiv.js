import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Background from '../images/logo.jpg'

const styles = theme => ({
    divImg: {
        backgroundImage: `url(${Background})`,
        height: "300px",
        width: "300px",
        background: "pink"
    }
  });

const TestDiv = (props) => {
    return (
        <div >Blabladfj</div>          
    )
}

TestDiv.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true })(TestDiv);