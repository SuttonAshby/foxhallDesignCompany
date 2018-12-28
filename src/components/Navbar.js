import React from 'react';
import Logo from '../images/logo.jpg'
import ProductsBtn from './buttons/ProductsBtn.js'
import ContactBtn from './buttons/ContactBtn.js'
import AboutBtn from './buttons/AboutBtn.js'
import CustomBtn from './buttons/CustomBtn.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Banner from  '../images/banner.jpg';
import CollapseBtn from './buttons/CollapseBtn.js'


const HomeLink = props => <Link to="/" {...props} />

const styles = {
    AppBar: {
        marginBottom: 10,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage:  `url(${Banner})`,

    }
}

const Navbar = props => {
    return (
            <AppBar position='static' 
                style={styles.AppBar}>
                <Toolbar>
                    <Grid container
                        justify="space-between"
                    >
                        <Grid item xs={3}
                            component={HomeLink}>
                            <img src={Logo} width="150" />
                        </Grid>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid xs={6} container item 
                            justify="space-around"
                            alignItems="center">
                            <Grid item>
                                <ProductsBtn/>
                            </Grid>
                            <Grid item>
                                <ContactBtn/>
                            </Grid>
                            <Grid item>
                                <AboutBtn/>
                            </Grid>
                            <Grid item>
                                <CustomBtn/>
                            </Grid>
                        </Grid> 
                    </Grid>
                </Toolbar>
            </AppBar>
    )
}
export default Navbar;