import React from 'react';
import logo from './logo.jpg'
import DropButton from './DropButton.js'
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
                    <Grid item>
                        <img src={logo} width="210" />
                    </Grid>
                    <Grid item>
                        <DropButton/>
                    </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar;