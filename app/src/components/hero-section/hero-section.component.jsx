import React from 'react';

import './hero-section.styles.css';

const HeroSection = () => (
    <div 
        className="hero-section relative flex flex-column justify-center items-center"
        style={{
            backgroundImage: `url(https://i.ibb.co/GWCnmjR/yellow-track-suit-small.jpg)`}}
    >
        <h1 className="absolute title f2">Step into Summer</h1>
        <a className="f3 link dim dib white bg-black ph4 pv3" href="#0">Shop Womens</a>

    </div>
);

export default HeroSection;