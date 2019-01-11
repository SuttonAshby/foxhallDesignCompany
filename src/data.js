import React from 'react';
import { Link } from 'react-router-dom';

//Stores content for product splashes and product pages


const data = [
    {
        key: 0,
        id: "ducks",
        image: "images/ducks/12PlatesDucks.png",
        title: "Ducks of America",
        blurb: `Among nature’s aviators is the humble, 
                but lovely duck. We have honored six North 
                American ducks by capturing their varied 
                majestic profiles, thanks to the renowned 
                waterfowl artist John Obolewicz.`,
        about: ``,
        link:  (props = {}) => <Link to="/ducks" {...props} />
    },
    {
        key: 1,
        id: "boats",
        image: "images/boats/BoxScowSQ.png",
        title: "Chesapeake Bay Wooden Boats",
        blurb: `The Chesapeake used to be dotted with the sails 
                of boats going out each day, now it is far rarer. 
                We have decided to honor six of the historic wooden 
                boats that used to sail the Chesapeake Bay with this 
                illustrated collection, so that they may continue to 
                be a sight to see, a reminder of another time.`,
        about: "",
        link:  (props = {}) => <Link to="/boats" {...props} />
    },
    {
        key: 2,
        id: "chesapeake",
        image: "images/chesapeake/CCmat-SQ-Op.png",
        title: "Chesapeake Country",
        blurb: "Lorum Ipsum",
        about: "",
        link:  (props = {}) => <Link to="/chesapeake" {...props} />  
    },
    {
        key: 3,
        id: "bay",
        image: "images/bay/BayDudeNavySQ.png",
        title: "Bay Family",
        blurb: "Lorum Ipsum",
        about: "",
        link:  (props = {}) => <Link to="/bay" {...props} />  
    }];

    export default data;