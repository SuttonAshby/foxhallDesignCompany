import React from 'react';
import { Link } from 'react-router-dom'

const data = [
    {
        key: 0,
        id: "ducks",
        image: "images/ducks/12PlatesDucks.png",
        title: "Ducks of America",
        blurb: "Lorum Ipsum",
        link:  (props = {}) => <Link to="/ducks" {...props} />
    },
    {
        key: 1,
        id: "boats",
        image: "images/boats/BoxScowSQ.png",
        title: "Chesapeake Bay Wooden Boats",
        blurb: "Lorum Ipsum",
        link:  (props = {}) => <Link to="/boats" {...props} />
    },
    {
        key: 2,
        id: "chesapeake",
        image: "images/chesapeake/CCmat-SQ-Op.png",
        title: "Chesapeake Country",
        blurb: "Lorum Ipsum",
        link:  (props = {}) => <Link to="/chesapeake" {...props} />  
    },
    {
        key: 3,
        id: "bay",
        image: "images/bay/BayDudeNavySQ.png",
        title: "Bay Family",
        blurb: "Lorum Ipsum",
        link:  (props = {}) => <Link to="/bay" {...props} />  
    }];

    export default data;