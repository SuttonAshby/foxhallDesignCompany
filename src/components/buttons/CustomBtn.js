import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const CustomLink = props => <Link to="/custom" {...props} />

const styles = {
    button:{
        backgroundColor: 'rgba(255, 255, 255, .4)'
    }    
}

const CustomBtn = props => {
    return (
        <Button 
            style={styles.button}
            variant="outlined"
            component={CustomLink}
            >
        Custom Products
      </Button>
    )
}

export default CustomBtn;