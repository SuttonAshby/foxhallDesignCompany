//Used to display every product in a product line
//includes image and bullet points

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    image:{
        height: 250,
        weight: 250,
    }
}


const ListItem = (props) => {

    return (
    <Grid container>
        <Grid item xs={6}>
            <img style={styles.image} src={props.image} />
        </Grid>
        <Grid item xs={6}>
            <Typography>
                    Bullet Points
            </Typography>
        </Grid>
    </Grid>
    )
};

export default ListItem