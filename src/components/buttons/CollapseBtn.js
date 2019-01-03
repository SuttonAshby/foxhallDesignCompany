import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import AboutBtn from './AboutBtn.js';
import { Typography } from '@material-ui/core';


const LinkProductDucks = props => <Link to="/ducks" {...props} />
const LinkProductBoats = props => <Link to="/boats" {...props} />
const LinkProductChesapeake = props => <Link to="/chesapeake" {...props} />
const LinkProductBay = props => <Link to="/bay" {...props} />
const AboutLink = props => <Link to="/about" {...props} />
const CustomLink = props => <Link to="/custom" {...props} />

class CollaspeBtn extends React.Component {
    state = {
        anchorEl: null,
    };


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
      };

    render(){
        const {anchorEl} = this.state;
        const styles = {
            button:{
                backgroundColor: 'rgba(255, 255, 255, .4)'
            }   
        }
        return (
            <div>
                <Button
                    style={styles.button}
                    variant="outlined"
                    aria-owns={anchorEl ? 'drop-button' : undefined}
                    aria-haspopup='true'
                    onClick={this.handleClick}
                >
                <MenuIcon />
                </Button>
                    <Menu
                        id='drop-button'
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem
                            onClick={this.handleClose}
                            component={AboutLink}>About</MenuItem>
                        <MenuItem
                            onClick={this.handleClose}
                            component={CustomLink}>Custom Products</MenuItem>
                        <MenuItem
                            disabled
                        >PRODUCTS</MenuItem>
                        <MenuItem
                            onClick={this.handleClose}
                            component={LinkProductDucks}>Ducks of America</MenuItem>
                        <MenuItem 
                            onClick={this.handleClose}
                            component={LinkProductBoats}>Historic Chesapeake Bay Wooden Boats</MenuItem>
                        <MenuItem 
                            onClick={this.handleClose}
                            component={LinkProductChesapeake}>Chesapeake Country</MenuItem>
                        <MenuItem 
                            onClick={this.handleClose}
                            component={LinkProductBay}>Bay Family</MenuItem>
                    </Menu>
            </div>
        )
    }
}

export default CollaspeBtn;