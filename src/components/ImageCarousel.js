import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import dataCarousel from '../dataCarousel.json';


class ImageCarousel extends React.Component {
    state = {
        data: dataCarousel

    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default ImageCarousel;