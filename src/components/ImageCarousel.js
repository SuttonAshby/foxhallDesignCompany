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
        current: 0,
        imageOneBool: true,
        imageTwoBool: false,
        imageOne: dataCarousel[0].image,
        imageTwo: dataCarousel[1].image,
        directionOne: "left",
        directionTwo: "left"

    }

    NextPhoto = () => {
        // if(this.state.current === this.state.data.length-1){
        //         this.setState({current: 0});
        // } else {
        //         this.setState({current: this.state.current + 1});          
        // }
        if(this.state.imageOneBool){
            this.setState({directionOne: "right"})
            this.setState({imageOneBool: false})
            
            this.setState({directionTwo: "left"})
            this.setState({imageTwoBool: true})
        } else {
            this.setState({directionOne: "left"})
            this.setState({imageOneBool: true})

            this.setState({directionTwo: "right"}) 
            this.setState({imageTwoBool: false})
           
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
                <Grid item xs="6">
                    {/* <Slide direction="left" in={this.state.imageOneBool} timeout={1500}>
                        <img width="100%" src={this.state.data[this.state.current].image} />
                    </Slide> */}
                    <Slide direction={this.state.directionOne} in={this.state.imageOneBool} timeout={1500}>
                        <img width="100%" src={this.state.imageOne} />
                    </Slide>

                </Grid>
                <Grid item xs="6">
                    <Slide direction={this.state.directionTwo} in={this.state.imageTwoBool} timeout={1500}>
                        <img width="100%" src={this.state.imageTwo} />
                    </Slide>
                </Grid>
            </Grid>
        )
    }
}

export default ImageCarousel;