import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const AboutLink = props => <Link to="/about" {...props} />

const AboutBtn = props => {
    return (
        <Button 
            variant="outlined"
            component={AboutLink}
            >
        About
      </Button>
    )
}

export default AboutBtn