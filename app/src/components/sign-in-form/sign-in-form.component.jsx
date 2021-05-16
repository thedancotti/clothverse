import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

const SignInForm = ({
    isSignInHidden,
    setSignInStatus,
    textStyleOnSignIn,
    handleChange,
    handleSignIn,
    handleSignInWithGoogle
}) => {
    return (
        <div 
            className="card-item"
            onClick={setSignInStatus}
        >
            <p className="b tc">
                Sign In. 
                <span 
                    className={"fw1 f6 " + textStyleOnSignIn}
                >{" Aldready a customer?"}
                </span>
            </p>

        {/* Sign In Form */}
            {
                !isSignInHidden ? (
                    <div className="flex flex-column pa3">
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            className="pv2 ph2 mb3"
                            onChange={handleChange} 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            className="pv2 ph2 mb3"
                            onChange={handleChange}
                        />
                        <div className="mb3">
                            <CustomButton onClick={handleSignIn}>
                                Sign In
                            </CustomButton>
                        </div>
                        
                        <div className="google-btn" onClick={handleSignInWithGoogle}>
                            <div className="google-icon-wrapper">
                                <img 
                                    className="google-icon" 
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    alt="google-icon"
                                />
                            </div>
                            <div className="flex justify-center items-center w-90">
                                <p className="btn-text"><b>Sign In with Google</b></p>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
};

export default SignInForm;