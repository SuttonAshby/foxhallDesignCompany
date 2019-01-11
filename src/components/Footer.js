import React from 'react';
import Typography from '@material-ui/core/Typography';

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

// need to adjust footer when under 600px

const Footer = props => {
    return (
    <div style={styles.footer}>
            <Typography
                style={styles.text}>
                    &#169; Foxhall Design Company 2018 | Website by Sutton Ashby | Photography by Nick Bohaska
            </Typography>
    </div>
    )
}

export default Footer;