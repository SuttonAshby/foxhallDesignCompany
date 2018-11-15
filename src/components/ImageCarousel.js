import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import dataCarousel from '../dataCarousel.json';


class ImageCarousel extends React.Component {
    state = {
        data: dataCarousel,
        current: 0

    }

    NextPhoto = () => {
        if(this.state.current === this.state.data.length-1){
                this.setState({current: 0});
                console.log(this.state.current);
                console.log("if") 
        } else {
                this.setState({current: this.state.current + 1});
                console.log(this.state.current);
                console.log("else")            
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
            <div>
                <img width="100%" src={this.state.data[this.state.current].image} />
            </div>
        )
    }
}

export default ImageCarousel;