import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ContactForm from '../ContactForm.js';
import Paper from '@material-ui/core/Paper';
import spacing from '@material-ui/core/styles/spacing';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  // const styles = theme => ({
  //   paper: {
  //     position: 'absolute',
  //     width: theme.spacing.unit * 50,
  //     backgroundColor: theme.palette.background.paper,
  //     boxShadow: theme.shadows[5],
  //     padding: theme.spacing.unit * 4,
  //   },
  //   button:{
  //     backgroundColor: 'rgba(255, 255, 255, .4)'
  //   },
  //   modal: {
  //     position: 'absolute',
  //     transform: `translate(-50%, -50%)`,
  //     top:"50%",
  //     left:"50%",
  //     height: 500,
  //     width: 500
  //   }   

  // });

  const styles = {
    button: {
      backgroundColor: 'rgba(255, 255, 255, .4)'
    },
    modal: {
      position: 'absolute',
      transform: `translate(-50%, -50%)`,
      top:"50%",
      left:"50%",
      width: "50%",
      padding: spacing.unit * 4
    }   

  };




class ContactBtn extends React.Component {
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
      const { classes } = this.props;
  
      return (
        <div>
          <Button
            style={styles.button}
            variant="outlined"
            onClick={this.handleOpen}>Contact</Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <Paper 
              style={styles.modal}
              >
              <Typography variant="h6" id="modal-title">
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align="left">
                Our minimum order is 150USD.
              </Typography>
              <ContactForm />
            </Paper>
          </Modal>
        </div>
      );
    }
  }
  // ContactBtn.propTypes = {
  //   classes: PropTypes.object.isRequired,
  // };
  
  // // We need an intermediary variable for handling the recursive nesting.
  // const ContactBtnWrapped = withStyles(styles)(ContactBtn);
  
  // export default ContactBtnWrapped;

  export default ContactBtn;