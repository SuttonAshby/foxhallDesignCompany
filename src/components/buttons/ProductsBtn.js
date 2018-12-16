import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'

const LinkProductDucks = props => <Link to="/ducks" {...props} />
const LinkProductBoats = props => <Link to="/boats" {...props} />
const LinkProductChesapeake = props => <Link to="/chesapeake" {...props} />
const LinkProductBay = props => <Link to="/bay" {...props} />

class ProductsBtn extends React.Component {
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
                Products
                </Button>
                    <Menu
                        id='drop-button'
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
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

export default ProductsBtn;