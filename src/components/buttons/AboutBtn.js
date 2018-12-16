import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const AboutLink = props => <Link to="/about" {...props} />

const styles = {
    button:{
        backgroundColor: 'rgba(255, 255, 255, .4)'
    }    
}


const AboutBtn = props => {
    return (
        <Button
            style={styles.button}
            variant="outlined"
            component={AboutLink}
            >
        About
      </Button>
    )
}

export default AboutBtn