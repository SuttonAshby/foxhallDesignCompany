import React from 'react';
import logo from './logo.jpg'
import AppBar from '@material-ui/core/AppBar';


// import './Navbar.css'

const Navbar = props => {
    return (
        <div >
            <AppBar position='static'>
            <img src={logo} width="210" />
            </AppBar>
        </div> 
    )
}
export default Navbar;