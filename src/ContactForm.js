import React, { Component } from 'react';
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
            <form 
        )
    }

}