import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import dataCarousel from '../dataCarousel.json';
import { Grid } from '@material-ui/core';


class ImageCarousel extends React.Component {
    state = {
        data: dataCarousel,
        current: 0

    }

    NextPhoto = () => {
        if(this.state.current === this.state.data.length-1){
                this.setState({current: 0});
        } else {
                this.setState({current: this.state.current + 1});          
        }       
    }

    componentDidMount(){
        this.intervalID = setInterval(this.NextPhoto.bind(this), 5000);
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    


    render(){
        return (
            <Grid container>
                <Grid item>
                    <Slide direction="left" in={true}>
                        <img width="100%" src={this.state.data[this.state.current].image} />
                    </Slide>
                </Grid>
            </Grid>
        )
    }
}

export default ImageCarousel;