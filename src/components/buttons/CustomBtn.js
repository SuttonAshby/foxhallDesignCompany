import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const CustomLink = props => <Link to="/custom" {...props} />

const CustomBtn = props => {
    return (
        <Button 
            variant="outlined"
            component={CustomLink}
            >
        Custom Products
      </Button>
    )
}

export default CustomBtn;