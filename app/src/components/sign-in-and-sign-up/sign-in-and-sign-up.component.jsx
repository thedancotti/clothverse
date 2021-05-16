import React from 'react';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';

import SignUpForm from '../sign-up-form/sign-up-form.component';
import SignInForm from '../sign-in-form/sign-in-form.component';

import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signInWithGoogle,
    firestoreDb
} from '../../firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Redirect } from 'react-router';

class SignInAndSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUpHidden: true,
            isSignInHidden: false,
            textStyleOnSignIn: "fw6",
            textStyleOnSignUp: "",
            userCredentials: {}
        }
    }

    setSignInStatus = () => {
        this.setState({
            isSignInHidden: false,
            textStyleOnSignIn: "fw6",
            textStyleOnSignUp: "",
            isSignUpHidden: true
        })
    };

    setSignUpStatus = () => {
        this.setState({
            isSignInHidden: true,
            textStyleOnSignIn: "",
            textStyleOnSignUp: "fw6",
            isSignUpHidden: false
        })
    };

    handleChange = (event) => {
        this.setState({
            userCredentials: {
                ...this.state.userCredentials,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSignUp = () => {
        const { email, password, confirmPassword } = this.state.userCredentials;
        if (password !== confirmPassword) {
            alert(`Unable to sign up. Passwords don't match!`);
        } else {
            createUserWithEmailAndPassword(email, password)
                .then(result => {
                    const { uid, email } = result.user;
                    const user = {
                        uid,
                        displayName: this.state.userCredentials.firstName,
                        email
                    };
        
                    firestoreDb.collection("users").doc(email).set(user);
                    this.props.setCurrentUser(user)
                })
                .catch(error => alert(error.message))
        }
    };

    handleSignIn = () => {
        const { email, password } = this.state.userCredentials;

        signInWithEmailAndPassword(email, password)
        .then(result => {
            const userRef = firestoreDb.collection("users").doc(email);
            userRef.get().then(user => {
                if (user.exists) {
                    this.props.setCurrentUser(user.data());
                } else {
                    alert('This user does not exist in the database. Please create an account first before logging in.');
                }
            });
        })
        .catch(error => alert(error.message))
    }

    handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const { uid, email, displayName } = result.user;
            const user = {
                uid,
                email,
                displayName
            };
            firestoreDb.collection("users").doc(email).set(user);
            this.props.setCurrentUser(user);
        })
        .catch(error => alert(error.message));
    }

    render() {
        if(this.props.currentUser) return <Redirect to='/' />
        
        return (
            <div className="card ma3">
                <SignUpForm 
                    isSignUpHidden={this.state.isSignUpHidden}
                    setSignUpStatus={this.setSignUpStatus}
                    textStyleOnSignUp={this.textStyleOnSignUp}
                    handleChange={this.handleChange}
                    handleSignUp={this.handleSignUp}
                />
                <SignInForm 
                    isSignInHidden={this.state.isSignInHidden}
                    setSignInStatus={this.setSignInStatus}
                    textStyleOnSignIn={this.textStyleOnSignIn}
                    handleChange={this.handleChange}
                    handleSignIn={this.handleSignIn}
                    handleSignInWithGoogle={this.handleSignInWithGoogle}
                />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)) 
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndSignUp);