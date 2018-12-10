import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class ContactForm extends React.Component {
    state = {
        email: "",
        message: "",
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render(){

        return (
            <form  
                noValidate 
                autoComplete="off"
                method="POST"
                // action="https://formspree.io/foxhalldesigncompany@gmail.com"
                >
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            placeholder="Email"
                            defaultValue={this.state.email}
                            onChange={this.handleChange("email")}
                            fullWidth
                            // className={classes.textField}
                            margin="normal"
                            />
                    </Grid>
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
                    <Grid container item xs="12" justify="flex-end">
                            <Button type="submit" variant="contained">
                                Submit
                            </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

}

export default ContactForm;