//Used to display every product in a product line
//includes image and bullet points

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import spacing from '@material-ui/core/styles/spacing';



  const styles = {
    icon:{
        height: 250,
        width: 250,
        minWidth:250
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
        padding: spacing.unit * 2
    },
    page:{
        paddingLeft: "10vw",
        paddingRight: "10vw"
    },
    paper:{
        marginLeft: "10vw",
        marginRight: "10vw",
        marginBottom: 10
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
            <Paper  style={styles.paper}>
            <Grid container xs={12}
                // style={styles.page}
             justify="center"
             >
                <Grid item sm={6} 
                // md={3}
                    style={styles.icon}
                    // justify="center"
                    onClick={this.handleOpen}>
                    <img style={styles.icon} src={this.props.image} />
                </Grid>
                <Grid item sm={6}
                //  md={9}
                 >
                    <Typography
                        justify="center"
                        variant="h6"
                        align="left">
                            {this.props.title}
                    </Typography>        
                    <Typography
                        // justify="center"
                        variant="body1"
                        align="left">
                            <ul>{bulleted}</ul>
                    </Typography>
                </Grid>
            </Grid>
            </Paper>
        <Modal
            // aria-labelledby="simple-modal-title"
            // aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}>
            <Paper style={styles.modal}>
                <img style={styles.display} src={this.props.image} />
            </Paper>
        </Modal>    
        </div>
    )
}};

  
export default ListItem;