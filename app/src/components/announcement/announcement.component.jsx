import React from 'react';
import { Link } from 'react-router-dom';
const Announcement = () => (
    <div className="pa3 f6 white tc ttu"
        style={{backgroundColor: "#b21900"}}
    >
        {"Summer Sale! - "}

        <Link to='/shop' className="white b">
            {"Top summer styles now on sale!"}
        </Link>
    </div>
);

export default Announcement;