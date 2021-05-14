import React from 'react';

import Announcement from '../announcement/announcement.component';
import NavigationBar from '../navigation-bar/navigation-bar.component';

const Header = () => (
    <div 
        className="header fixed top-0 w-100 bg-white"
        style={{
            zIndex: 1}}
    >
        <Announcement />
        <NavigationBar />
    </div>
);

export default Header;