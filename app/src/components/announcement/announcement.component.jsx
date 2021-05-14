import React from 'react';

import './announcement.styles.scss';

const Announcement = () => (
    <div className="announcement">
        {"Summer Sale!" + " - "}

        <span className="call-to-action">
            {"Top summer styles now on sale!"}
        </span>
    </div>
);

export default Announcement;