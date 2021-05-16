import React from 'react';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCollections, selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import SignUpForm from '../sign-up-form/sign-up-form.component';
import SignInForm from '../sign-in-form/sign-in-form.component';

import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signInWithGoogle,
    convertArrayToFirestoreCollection 
} from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

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
                .then(user => this.props.setCurrentUser(user))
                .catch(error => alert(error.message))
        }
    };

    handleSignIn = () => {
        const { email, password } = this.state.userCredentials;

        signInWithEmailAndPassword(email, password)
        .then(user => this.props.setCurrentUser(user))
        .catch(error => alert(error.message))
    }

    handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(user => this.props.setCurrentUser(user))
        .catch(error => alert(error.message));
    }

    render() {
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
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndSignUp);