import React from 'react';

import './directory.styles.css';

const urls = [
"https://i.ibb.co/cvpntL1/hats.png",
"https://i.ibb.co/px2tCc3/jackets.png",
"https://i.ibb.co/0jqHpnp/sneakers.png",
"https://i.ibb.co/GCCdy8t/womens.png",
"https://i.ibb.co/0CwcyJb/hassan-ouajbir-Mkmcxww-Cep-Y-unsplash.jpg",
];

const Directory = () => (
    <div className="directory flex flex-column">
        <div className="directory-item">
            <div 
                className="background-image"
                style={{backgroundImage: `url(${urls[0]})`}}
            ></div>
            <div className="content">
                <h1>Hats</h1>
            </div>
        </div>

        <div className="directory-item">
            <div 
                className="background-image"
                style={{backgroundImage: `url(${urls[1]})`}}
            ></div>
            <div className="content">
                <h1>Jackets</h1>
            </div>
        </div>

        <div className="directory-item">
            <div 
                className="background-image"
                style={{backgroundImage: `url(${urls[2]})`}}
            ></div>
            <div className="content">
                <h1>Sneakers</h1>
            </div>
        </div>

        <div className="directory-item">
            <div 
                className="background-image"
                style={{backgroundImage: `url(${urls[3]})`}}
            ></div>
            <div className="content">
                <h1>Womens</h1>
            </div>
        </div>

        <div className="directory-item">
            <div 
                className="background-image"
                style={{backgroundImage: `url(${urls[4]})`}}
            ></div>
            <div className="content">
                <h1>Mens</h1>
            </div>
        </div>

    </div>
);

export default Directory;