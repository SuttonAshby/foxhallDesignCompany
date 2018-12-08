import React from 'react';
import { Link } from 'react-router-dom'

const data = [
    {
        key: 0,
        id: "ducks",
        image: "12PlatesDucks.png",
        title: "Ducks of America",
        blurb: "Lorum Ipsum",
        link:  (props = {}) => <Link to="/ducks" {...props} />
    },
    {
        key: 1,
        id: "boats",
        image: "BoxScowSQ.png",
        title: "Chesapeake Bay Wooden Boats",
        blurb: "Lorum Ipsum",
        link:  (props = {}) => <Link to="/boats" {...props} />
    },
    {
        "key": 2,
        "id": "chesapeake",
        "image": "",
        "title": "Chesapeake Country",
        "blurb": "Lorum Ipsum",
        link:  (props = {}) => <Link to="/chesapeake" {...props} />  
    }];

    export default data;