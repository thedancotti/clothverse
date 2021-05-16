import React from 'react';

import SignInAndSignUp from '../../components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './signinpage.styles.css';

const SignInPage = () => {
    return (
        <div 
            className="signin-page"
            style={{marginTop: "140px"}}
        >
            <SignInAndSignUp />
        </div>
    )
};

export default SignInPage;