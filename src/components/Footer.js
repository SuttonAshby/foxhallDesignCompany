import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
    footer: {
        marginTop: 20,
        textAlign: "center",
        height: 30,
        background: "#606060",
    },
    footerSmall: {
        marginTop: 20,
        textAlign: "center",
        height: 60,
        background: "#606060",
    },
    text: {
        color: "white",
        lineHeight: "2"
    }
}

// need to adjust footer when under 600px

class Footer extends Component {
    state = {
        lessThan: false
    }
    
    updateFooter(){
        if(window.innerWidth < 650) {
            this.setState({lessThan: true});
        } else {
            this.setState({lessThan: false});
        }
    }

    componentDidMount(){
        this.updateFooter()
        window.addEventListener("resize", this.updateFooter.bind(this))
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateFooter.bind(this))    
    }

    render(){
        return (
            this.state.lessThan ? <div style={styles.footerSmall}>
            <Typography
                style={styles.text}>
                    &#169; Foxhall Design Company 2018 <br /> Website by Sutton Ashby | Photography by George Bohaska
            </Typography></div> : <div style={styles.footer}>
            <Typography
                style={styles.text}>
                    &#169; Foxhall Design Company 2018 Website by Sutton Ashby | Photography by George Bohaska
            </Typography></div>
        )
    }
    
}

/*
const Footer = props => {
    return (
    <div style={styles.footer}>
            <Typography
                style={styles.text}>
                    &#169; Foxhall Design Company 2018 | Website by Sutton Ashby | Photography by George Bohaska
            </Typography>
    </div>
    )
}
*/

export default Footer;