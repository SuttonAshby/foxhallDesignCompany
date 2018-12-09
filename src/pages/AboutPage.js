import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const AboutPage = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography
                    variant="h5"
                    align="left">
                    About Us    
                </Typography>
                <Typography
                    variant="body1"
                    align="left">
FOXHALL DESIGN COMPANY creates extraordinary products for individuals, museum stores, nonprofits, and other organizations. Anne Cole Johnston, FOXHALL’s founder and president, designed her first products for award-winning stores she created and operated in the 1980’s and 1990’s. Following the sale of her stores in 1996, Anne taught business courses at community colleges and universities for 11 years. This second retirement didn’t last long: Feeling “an itch” to get back to product design, Anne created FOXHALL DESIGN COMPANY in 2010. Anne’s life-long love of the Chesapeake Bay inspired FOXHALL’s first product line: The Chesapeake Bay Collection.

In May 2015, Anne created Great Gifts Across America to showcase her discoveries of outstanding gifts from across the country.

Awards
• Six awards: “Top Store Sales” (The Rouse Company; The Enterprise Development Company).
• Three awards from the Commonwealth of Virginia: The Governor’s Cup Gold Cluster Award for     Outstanding Service to the Virginia Wine Industry.
• Buyer’s Choice Award Winner for 2012 (The Museum Store Association).

FOXHALL DESIGN COMPANY is honored to be the product designer and sole distributor of Ducks of America by renowned waterfowl artist John Obolewicz. The series features the Mallard, Canvasback, Bufflehead, Wood Duck, Common Pintail, and Golden Eye.                
</Typography>
            </Grid>
        </Grid>
    )
}

export default AboutPage;