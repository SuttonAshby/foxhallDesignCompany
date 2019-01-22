import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CustomExample from '../images/customExample.jpg';

const styles = {
    page: {
        minHeight: "calc(100vh - 158px)",
        paddingLeft: "15vw",
        paddingRight: "15vw"
    },
    title: {
        paddingBottom: 15,
        fontWeight: "bold"
    }
}

const CustomPage = () => {
    return (
        <Grid container  style={styles.page} 
            alignContent="flex-start">
            <Grid item >
                <Typography
                    style={styles.title}
                    variant="h4"
                    align="left">
                    Custom Products    
                </Typography>
                <Typography
                    variant="h6"
                    align="left">
                    FOXHALL DESIGN COMPANY creates high-quality custom products that reflect and promote an organization’s history, excellence, and values. 
                    Many “custom” products are look-alike products of poor quality. These inferior products create an unfavorable impression of an organization and lost opportunities. 
                    Fund-raising campaigns, high-quality donor appreciation gifts and corporate gifts are a Foxhall specialty. We welcome all inquiries.
                </Typography>
            </Grid>
            <Grid item>
                <img src={CustomExample} width="300" />
                <Typography
                    variant="body1"
                    align="right">
                    American Chestnut Land Trust
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CustomPage;