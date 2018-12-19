import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    page: {
        minHeight: "calc(100vh - 158px)"
    }
}

const CustomPage = () => {
    return (
        <Grid container style={styles.page}>
            <Grid item>
                <Typography
                    variant="h5"
                    align="left">
                    Custom Products    
                </Typography>
                <Typography
                    variant="body1"
                    align="left">
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CustomPage;