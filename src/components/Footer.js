import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const styles = {
    footer: {
        marginTop: 20,
        textAlign: "center",
        height: 30,
        background: "#606060",
    },
    text: {
        color: "white",
        lineHeight: "2"
    }
}

const Footer = props => {
    return (
    <Paper style={styles.footer}>
            <Typography
                style={styles.text}>
                    &#169; 2018  Sutton Ashby
                </Typography>
    </Paper>
    )
}

export default Footer;