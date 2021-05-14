import React from 'react';

import './mission-section.styles.css';

const MissionSection = () => (
    <div className="mission-section bg-yellow">
        <img
            src="https://i.ibb.co/2sPpMfc/clothes-laying.jpg" alt="clothes laying on the floor" />
        <div className="flex flex-column ">
            <h1 className="f2 ma0 tc">Thank you </h1>
            <h1 className="f2 ma0 tc">for wearing us</h1>
            <p className="f5 tc pv2 ph4">As a [to-replace] company, our vision is to build a vibrant, global brand that [to-replace-mission-statement].</p>
        </div>
        
    </div>
);

export default MissionSection;