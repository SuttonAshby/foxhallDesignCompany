import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ContactForm from '../ContactForm.js';
import Paper from '@material-ui/core/Paper';
import spacing from '@material-ui/core/styles/spacing';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';


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
      email: "",
      message: "",
    };
  
    handleOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

    handleChange = name => event => {
      this.setState({
          [name]: event.target.value,
      });
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
              <Grid container>
              <Grid item xs="6">
                <Typography variant="h5" id="modal-title">
                  <strong>Contact Us</strong>
                </Typography>
              </Grid>
              <Grid item xs="6" align="end"><Button onClick={this.handleClose}><strong>X</strong></Button></Grid>
              <Grid item xs="12">
                <Typography
                  variant="h6"
                  align="left">
                  For wholesale pricing and other inquiries, <br />please call (410-253-8462) or email us. 
                </Typography>
              </Grid>


              </Grid>

              {/* <ContactForm /> */}
                <form  
                  noValidate 
                  autoComplete="off"
                  method="POST"
                  // action="https://formspree.io/foxhalldesigncompany@gmail.com"
                  >
                  <Grid container>
                      <Grid item xs={12}>
                          <TextField
                              id="message"
                              name="message"
                              label="Message"
                              multiline
                              rows="6"
                              fullWidth
                              placeholder="Message"
                              defaultValue={this.state.message}
                              onChange={this.handleChange("multiline")}
                              // className={classes.textField}
                              margin="normal"
                              />  
                      </Grid>
                      <Grid item xs={12}>
                          <TextField
                              id="email"
                              name="email"
                              label="Your Email"
                              placeholder="Your Email"
                              defaultValue={this.state.email}
                              onChange={this.handleChange("email")}
                              fullWidth
                              // className={classes.textField}
                              margin="normal"
                              />
                      </Grid>
                      <Grid container item 
                        xs="12" spacing={16} justify="flex-end" align="center">
                        <Grid item>
                          <Button onClick={this.handleClose} variant="contained">
                              Cancel
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button type="submit" variant="contained">
                              Submit
                          </Button>
                        </Grid>
                      </Grid>
                  </Grid>
              </form>
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