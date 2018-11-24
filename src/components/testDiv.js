import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    divImg: {
        "background-image": URL("./BoxScowSQ.png"),
        height: "300px",
        width: "300px",
        background: "pink"
    }
  });

const testDiv = (props) => {
    return (
        <div className="divImg"></div>          
    )
}

testDiv.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true })(testDiv);