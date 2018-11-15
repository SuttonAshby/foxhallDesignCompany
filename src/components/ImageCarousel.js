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
        timer: 0,
        current: dataCarousel[2].image

    }

    render(){
        return (
            <div>
                <img width="100%" src={this.state.current} />
            </div>
        )
    }
}

export default ImageCarousel;