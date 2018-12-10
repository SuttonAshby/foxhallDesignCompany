//Used to display every product in a product line
//includes image and bullet points

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';


  const styles = {
    icon:{
        height: 250,
        width: 250,
    },
    display:{
        width: "100%",
        height: "100%" 

    },
    modal: {
        position: 'absolute',
        transform: `translate(-50%, -50%)`,
        top:"50%",
        left:"50%",
    }
  };

class ListItem extends React.Component {

    state = {
      open: false,
    };
  
    handleOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {

    const bulleted = this.props.bullets.map(element =>{
        return <li>{element}</li>
    })

    return (
        <div>
            <Grid container xs={12}>
                <Grid item xs={3}
                    onClick={this.handleOpen}>
                    <img style={styles.icon} src={this.props.image} />
                </Grid>
                <Grid item xs={9}>
                <Typography
                        variant="h6"
                        align="left">
                            {this.props.title}
                    </Typography>        
                    <Typography
                        variant="body1"
                        align="left">
                            <ul>{bulleted}</ul>
                    </Typography>
                </Grid>
            </Grid>
        <Modal
            // aria-labelledby="simple-modal-title"
            // aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}>
            <div style={styles.modal}>
                <img style={styles.display} src={this.props.image} />
            </div>
        </Modal>    
        </div>
    )
}};

  
export default ListItem;