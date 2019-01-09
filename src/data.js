import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    Link: {
        textDecoration: 'none'
    }
}


const data = [
    {
        key: 0,
        id: "ducks",
        image: "images/ducks/12PlatesDucks.png",
        title: "Ducks of America",
        blurb: "Lorum Ipsum",
        about: "",
        link:  (props = {}) => <Link to="/ducks" style={styles.Link} {...props} />
    },
    {
        key: 1,
        id: "boats",
        image: "images/boats/BoxScowSQ.png",
        title: "Chesapeake Bay Wooden Boats",
        blurb: "Lorum Ipsum",
        about: "",
        link:  (props = {}) => <Link to="/boats" style={styles.Link} {...props} />
    },
    {
        key: 2,
        id: "chesapeake",
        image: "images/chesapeake/CCmat-SQ-Op.png",
        title: "Chesapeake Country",
        blurb: "Lorum Ipsum",
        about: "",
        link:  (props = {}) => <Link to="/chesapeake" style={styles.Link} {...props} />  
    },
    {
        key: 3,
        id: "bay",
        image: "images/bay/BayDudeNavySQ.png",
        title: "Bay Family",
        blurb: "Lorum Ipsum",
        about: "",
        link:  (props = {}) => <Link to="/bay" style={styles.Link} {...props} />  
    }];

    export default data;