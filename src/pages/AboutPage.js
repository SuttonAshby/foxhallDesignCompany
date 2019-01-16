import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

const AboutPage = () => {
    return (
        <Grid container style={styles.page}>
            <Grid item>
                <Typography style={styles.title}
                    variant="h4"
                    align="left">
                    About Us    
                </Typography>
                <Typography
                    variant="h6"
                    align="left">
FOXHALL DESIGN COMPANY creates extraordinary products for individuals, museum stores, nonprofits, and other organizations. 
Anne Cole Johnston, FOXHALL’s founder and president, designed her first products for award-winning stores she created and operated in the 1980’s and 1990’s. 
Following the sale of her stores in 1996, Anne taught business courses at community colleges and universities for 11 years. 
This second retirement didn’t last long: Feeling “an itch” to get back to product design, Anne created FOXHALL DESIGN COMPANY in 2010. 
Anne’s life-long love of the Chesapeake Bay inspired FOXHALL’s first product line: The Chesapeake Bay Collection.
<br /><br />
In May 2015, Anne created Great Gifts Across America to showcase her discoveries of outstanding gifts from across the country.
<br /><br />
<strong>Awards</strong>
<ul>
    <li>Six awards: “Top Store Sales” (The Rouse Company; The Enterprise Development Company).</li>
    <li>Three awards from the Commonwealth of Virginia: The Governor’s Cup Gold Cluster Award for Outstanding Service to the Virginia Wine Industry.</li>
    <li>Buyer’s Choice Award Winner for 2012 (The Museum Store Association).</li>
</ul>                
</Typography>
            </Grid>
        </Grid>
    )
}

export default AboutPage;