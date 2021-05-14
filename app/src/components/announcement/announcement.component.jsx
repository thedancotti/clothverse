import React from 'react';

import './announcement.styles.scss';

const Announcement = () => (
    <div className="announcement">
        {"Spring Sale!" + " - "}

        <span className="call-to-action">
            {"Top spring styles now on sale!"}
        </span>
    </div>
);

export default Announcement;