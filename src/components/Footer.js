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

const Footer = props => {
    return (
    <div style={styles.footer}>
            <Typography
                style={styles.text}>
                    &#169; 2018  Sutton Ashby
                </Typography>
    </div>
    )
}

export default Footer;