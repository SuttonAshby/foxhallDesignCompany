import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class DropButton extends React.Component {
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
        return (
            <div>
                <Button
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
                        <MenuItem onClick={this.handleClose}>Ducks of America</MenuItem>
                        <MenuItem onClick={this.handleClose}>Historic Chesapeake Bay Wooden Boats</MenuItem>
                        <MenuItem onClick={this.handleClose}>Chesapeake Country</MenuItem>
                    </Menu>
            </div>
        )
    }
}

export default DropButton;