import React from 'react';
import TextField from '@material-ui/core/TextField';

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



        return (
            <form  noValidate autoComplete="off">
                <TextField
                    id="standard-with-placeholder"
                    label="Email"
                    placeholder="Email"
                    // className={classes.textField}
                    margin="normal"
                    />
            </form>
        )
    }

}

export default ContactForm;