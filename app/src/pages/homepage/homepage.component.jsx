import React from 'react';

import HeroSection from '../../components/hero-section/hero-section.component';
import MissionSection from '../../components/mission-section/mission-section.component';
import FeaturedCollections from '../../components/featured-collections/featured-collections.component';

const HomePage = () => (
   <div className="home-page"
        style={{
            marginTop: '160px'
        }}
   >
       <HeroSection />
        <MissionSection />
        <FeaturedCollections />
   </div>
);

export default HomePage;