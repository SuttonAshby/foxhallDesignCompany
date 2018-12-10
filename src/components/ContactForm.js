import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class ContactForm extends React.Component {
    state = {
        email: "",
        multiline: "",
    }

    handleCHange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render(){

        console.log(this.state.email + this.state.multiline)

        return (
            <form  noValidate autoComplete="off">
                <Grid container>
                    <Grid item xs="12">
                        <TextField
                            id="standard-with-placeholder"
                            label="Email"
                            placeholder="Email"
                            fullWidth
                            // className={classes.textField}
                            margin="normal"
                            />
                    </Grid>
                    <Grid item xs="12">
                        <TextField
                            id="standard-multiline-static"
                            label="Message"
                            multiline
                            rows="6"
                            fullWidth
                            placeholder="Message"
                            // className={classes.textField}
                            margin="normal"
                            />  
                    </Grid>
                    <Grid item xs="12" flexDirection="row-reverse">
                        <Button variant="contained">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

}

export default ContactForm;