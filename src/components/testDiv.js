import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Background from '../images/logo.jpg'

const styles = {
    divImg: {
        backgroundImage: `url(${Background})`,
        height: "50vh",
        width: "100vw",
        // background: "pink"
    }
  };

class TestDiv extends React.Component {
    render() {
        return (
            <div>
            <div style={styles.divImg}>Blabladfj</div>
            {/* <img src={Background} width="150" /> */}
            </div>
          
        )

    }
   
}

// TestDiv.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
//   };

export default TestDiv;