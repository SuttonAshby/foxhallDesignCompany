import React from 'react';
import { Link } from 'react-router-dom';

//Stores content for product splashes and product pages


const data = [
    {
        key: 0,
        id: "ducks",
        image: "images/ducks/12PlatesDucksWD.png",
        title: "Ducks of America",
        blurb: `Foxhall Design Company is honored to be the 
                product designer and sole distributor of Ducks 
                of America by noted waterfowl artist John 
                Obolewicz. The series features the Mallard, 
                Canvasback, Bufflehead, Wood Duck, Common 
                Pintail, and Golden Eye. John's paintings are in private 
                collections throughout the United States. 
                He has received numerous awards from major 
                wildlife organizations, including the 
                "Virginia State Duck Award" from Ducks 
                Unlimited in 2009. John's deep knowledge of 
                his subjects creates a much-praised "breath 
                of life" in his paintings.`,
        about: ``,
        link:  (props = {}) => <Link to="/ducks" {...props} />
    },
    {
        key: 1,
        id: "boats",
        image: "images/boats/BoxScowSQ.png",
        title: "Chesapeake Bay Wooden Boats",
        blurb: `The Chesapeake Bay was once dotted with the 
                white sails of boats built by "watermen" who 
                made their living working on the Bay. This 
                bygone era and the historic role of these men 
                and their boats inspired the creation of the 
                Historic Chesapeake Bay Wooden Boats collection 
                of six boats that sailed the Chesapeake: Elsie M. 
                Reichert (schooner); Margrette Hall (log canoe); 
                Francis (sloop); Elsie (sailing scow); Gypsy 
                (bugeye); A. Phillips (skipjack).`,
        about: "",
        link:  (props = {}) => <Link to="/boats" {...props} />
    },
    {
        key: 2,
        id: "chesapeake",
        image: "images/chesapeake/CCmat-SQ-Op.png",
        title: "Chesapeake Country",
        blurb: `"Chesapeake Country" is a popular slogan that 
                captures the strong pride of people who live 
                on the shores of the Chesapeake Bay. The rich 
                nautical heritage of the area is reflected in 
                the crossed-oars logo of Foxhall's Chesapeake 
                Country collection.`,
        about: "",
        link:  (props = {}) => <Link to="/chesapeake" {...props} />  
    },
    {
        key: 3,
        id: "bay",
        image: "images/bay/BayDudeNavySQ.png",
        title: "Bay Family",
        blurb: `The Chesapeake Bay attracts the young, the old, 
                and every age in-between.  More than a few 
                Chesapeake families have lived here for 300 or 
                more years. Others have just arrived. Whether 
                you're an old-timer or a newcomer, or a 
                vacationer to Chesapeake  Country, you're 
                Chesapeake family.  Six ages and stages are 
                featured in this collection: Bay Mom; Bay Dad; 
                Bay Kid; Bay Babe; and Bay Dude.`,
        about: "",
        link:  (props = {}) => <Link to="/bay" {...props} />  
    }];

    export default data;