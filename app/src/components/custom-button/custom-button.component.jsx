import React from 'react';

const CustomButton = ({ children, customStyle, ...otherProps }) => {
    return (
        <div 
            className={
                "tc ph3 pv2 bg-black white pointer"
                +` ${customStyle}`}
            {...otherProps}
        >
            {children}
        </div>
    )
};

export default CustomButton;