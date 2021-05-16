import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

const SignUpForm = ({
    isSignUpHidden,
    setSignUpStatus,
    textStyleOnSignUp,
    handleChange,
    handleSignUp
}) => {
    return (
        <div 
            className="card-item bb b--light-gray"
            onClick={setSignUpStatus}
        >
            <p className="b tc">
                Create account. 
                <span 
                    className={"fw1 f6 " + textStyleOnSignUp}
                >{" New to clothverse?"}
                </span>
            </p>
            
        {/* Sign Up Form  */}
            {
                isSignUpHidden ? null : (
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
                            placeholder="Create a password" 
                            className="pv2 ph2 mb3"
                            onChange={handleChange}
                        />
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            placeholder="Confirm password" 
                            className="pv2 ph2 mb3"
                            onChange={handleChange}
                        />

                        <CustomButton onClick={handleSignUp}>
                            Sign Up
                        </CustomButton>
                    </div>
                )
            }
        </div>
    )
}

export default SignUpForm;