import React from 'react';
import logo from './logo.jpg'
import ProductsBtn from './ProductsBtn.js'
import ContactBtn from './ContactBtn.js'
import AboutBtn from './AboutBtn.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from '@material-ui/core';



// import './Navbar.css'

const Navbar = props => {
    return (
        <div >
            <AppBar position='static'>
                <Toolbar>
                    <Grid container
                        justify="space-between"
                    >
                        <Grid item xs={6}>
                            <img src={logo} width="200" />
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
                        </Grid> 
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar;